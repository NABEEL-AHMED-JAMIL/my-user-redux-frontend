import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Injectable({ providedIn: 'root' })
export class AlertService {
    
    constructor(private notification: NzNotificationService) { }
    
    public showSuccess(message: any, title: any): any  {
        this.notification.create('success', title, message);
    }
  
    public showError(message: any, title: any): any  {
        this.notification.create('error', title, message);
    }
    
    public showInfo(message: any, title: any): any  {
        this.notification.create('info', title, message);
    }
    
    public showWarning(message: any, title: any): any {
        this.notification.create('warning', title, message);
    }
}