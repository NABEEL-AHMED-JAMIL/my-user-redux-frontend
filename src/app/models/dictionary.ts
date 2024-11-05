import { IKV } from './base';

export class Dictionary {

    private items: { [key: string]: IKV[] } = {}; // Stores arrays of IKV values by key

    constructor() {}

    public has(key: string): boolean {
        return key in this.items;
    }

    public set(key: string, value: IKV[]): void {
        this.items[key] = value;
    }

    public get(key: string): IKV[] | undefined {
        return this.items[key];
    }

    public getItems(): { [key: string]: IKV[] } {
        return this.items;
    }
}
