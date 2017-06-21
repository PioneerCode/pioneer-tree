/**
 * Global configuration 
 */
export interface IPioneerTreeConfiguration {
    /**
     * Name of property in node that houses children nodes
     */
    childPropertyName: string;
}

export class PioneerTreeConfiguration implements IPioneerTreeConfiguration {
     childPropertyName: string = 'children';
}