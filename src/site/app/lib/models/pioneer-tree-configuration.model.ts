/**
 * Global configuration 
 */
export interface IPioneerTreeConfiguration {
    /**
     * Name of property in node that houses children nodes
     */
    childProperty: string;
}

export class PioneerTreeConfiguration implements IPioneerTreeConfiguration {
    private _childProperty: string;

    get childProperty(): string {
         return this._childProperty || 'children';
    }
}