import { Injectable } from '@angular/core';

/**
 * @author Nabeel Ahmed
 */
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public get(key: string): any {
        return JSON.parse(sessionStorage.getItem(key));
    }

    public set(key: string, value: any): boolean {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    public remove(key: string): any {
        sessionStorage.removeItem(key);
    }

    public clear(): any {
        sessionStorage.clear();
    }

    public findLookupByParent(parentId: any) {
        return JSON.parse(sessionStorage.getItem('lookup-cache'))[parentId];
    }

}