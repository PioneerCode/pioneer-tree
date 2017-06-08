export interface IPioneerTreeNode {
    collapsed: boolean;
}

export class PioneerTreeNode implements IPioneerTreeNode {
    collapsed = false;
    private node = {} as any;


}