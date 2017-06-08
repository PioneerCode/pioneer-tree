export interface IPioneerTreeNode {
    collapsed: boolean;
}

export class PioneerTreeNode implements IPioneerTreeNode {
    collapsed = false;

    private uid: string;
    private node = {} as any;

    constructor(node: any) {
        this.node = node;
        this.generateUid();
        this.setChildern;
    }

    private setChildern(): void {

    }

    private generateUid(): void {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}