import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CommonService {

  constructor() { }

  public getFileStatusColor(fileStatus: string): string {
    switch (fileStatus) {
      case 'Pending':
        return 'orange';
      case 'Queue':
        return 'blue';
      case 'Running':
        return 'processing';
      case 'Failed':
        return 'red';
      case 'Completed':
        return 'green';
      default:
        return 'default';
    }
  }

  public getStatusColor(status: string): string {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Delete':
        return 'red';
    }
  }

  public downLoadFile(data: any, filename: string): void {
    let blob = new Blob([data]);
    let url = window.URL.createObjectURL(blob);
    // Create an anchor element and set the download attribute with the filename
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;    
    // Trigger a click on the anchor element to start the download
    document.body.appendChild(a);
    a.click();
    // Clean up the URL and remove the anchor element
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }


}