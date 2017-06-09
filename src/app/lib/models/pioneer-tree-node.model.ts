export interface IPioneerTreeNode {
    collapsed: boolean;
}

export class PioneerTreeNode implements IPioneerTreeNode {
    collapsed = false;

    private uid: string;

    constructor() {
         this.generateUid();
    }

    private generateUid(): void {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}