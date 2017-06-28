/**
 * Global configuration 
 */
export interface IPioneerTreeConfiguration {
    /**
     * Name of property in node that houses children nodes
     */
    childPropertyName: string;

    /**
     * Name of property in node that holds sort index
     */
    sortPropertyName: string;
}

export class PioneerTreeConfiguration implements IPioneerTreeConfiguration {
    childPropertyName: string = 'children';
    sortPropertyName: string = 'sort';
}