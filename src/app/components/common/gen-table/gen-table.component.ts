import {
    Component,
    OnInit,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {
    IStaticTable,
    ActionType,
    ApiCode
} from '../../../_shared';
import {
    AlertService,
    CommomService
} from 'src/app/_helpers';

/**
 * @author Nabeel Ahmed
 */
@Component({
    selector: 'app-gen-table',
    templateUrl: './gen-table.component.html',
    styleUrls: ['./gen-table.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GenTableComponent implements OnInit {

    public searchDetails: any;
    public listOfCurrentPageData: readonly any[] = [];

    public checked: boolean = false;
    public indeterminate: boolean = false;
    @Input()
    public setOfCheckedId = new Set<any>();
    // date filter checked
    @Input()
    public isDateFilter: boolean = false;
    @Input()
    public startDate: any;
    @Input()
    public endDate: any;
    @Input()
    public staticTable: IStaticTable;
    @Output()
    public actionEventEmitter: EventEmitter<any> = new EventEmitter();
    @Output()
    public buttonEventEmitter: EventEmitter<any> = new EventEmitter();
    @Output()
    public extraEventEmitter: EventEmitter<any> = new EventEmitter();
    @Output()
    public filterEventEmitter: EventEmitter<any> = new EventEmitter();
    @Output()
    public enableActionEventEmitter: EventEmitter<any> = new EventEmitter();

    constructor(public commomService: CommomService,
        private alertService: AlertService) {
    }

    ngOnInit(): void {
    }

    public onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }

    public onAllChecked(checked: boolean): void {
        this.listOfCurrentPageData.forEach(({ uuid }) => this.updateCheckedSet(uuid, checked));
        this.refreshCheckedStatus();
    }

    public onItemChecked(uuid: any, checked: boolean): void {
        this.updateCheckedSet(uuid, checked);
        this.refreshCheckedStatus();
    }

    public refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        if (listOfEnabledData.length > 0) {
            this.checked = listOfEnabledData.every(({ uuid }) => this.setOfCheckedId.has(uuid));
            this.indeterminate = listOfEnabledData.some(({ uuid }) => this.setOfCheckedId.has(uuid)) && !this.checked;
        }
    }

    public updateCheckedSet(uuid: any, checked: boolean): void {
        if (checked) {
            this.setOfCheckedId.add(uuid);
        } else {
            this.setOfCheckedId.delete(uuid);
        }
    }

    public actionEvent(action: ActionType, payload: any): void {
        let actionPayload = {
            action: action,
            data: payload
        };
        this.actionEventEmitter.emit(actionPayload);
        this.setOfCheckedId.clear();
        this.refreshCheckedStatus();
    }

    public onDateChangeEvent(): void {
        this.filterEventEmitter.emit({
            startDate: this.startDate,
            endDate: this.endDate
        });
        this.setOfCheckedId.clear();
        this.refreshCheckedStatus();
    }

    public buttonEvent(action: ActionType): void {
        this.buttonEventEmitter.emit(
            {
                action: action,
                checked: [...this.setOfCheckedId]
            }
        );
        this.setOfCheckedId.clear();
        this.refreshCheckedStatus();
    }

    public extraEvent(action: ActionType): void {
        if (this.setOfCheckedId.size <= 0) {
            this.alertService.showError('Please Select Field.', ApiCode.ERROR);
            return;
        }
        this.extraEventEmitter.emit(
            {
                action: action,
                checked: [...this.setOfCheckedId]
            }
        );
    }

    public onEnableActionChange(payload: any): any {
        payload.linked = payload.linked ? false : true;
        this.enableActionEventEmitter.emit(payload);
    }

}