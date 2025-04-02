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
    ActionType
} from '../../models';
import {
    AlertService,
} from '../../helpers';

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

    public indeterminate: boolean = false;
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
    public filterEventEmitter: EventEmitter<any> = new EventEmitter();

    constructor(private alertService: AlertService) {
    }

    ngOnInit(): void {
    }

    public onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
        this.listOfCurrentPageData = listOfCurrentPageData;
    }

    public actionEvent(action: ActionType, payload: any): void {
        let actionPayload = {
            action: action,
            data: payload
        };
        this.actionEventEmitter.emit(actionPayload);
    }

    public onDateChangeEvent(): void {
        this.filterEventEmitter.emit({
            startDate: this.startDate,
            endDate: this.endDate
        });
    }

    public buttonEvent(action: ActionType): void {
        this.buttonEventEmitter.emit(
            {
                action: action
            }
        );
    }
}