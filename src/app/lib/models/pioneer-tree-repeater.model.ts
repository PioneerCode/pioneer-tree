/**
 * Represents the extend idea of the dynamic nested element
 * Example :
 * <ul>
 *     <li>
 *         <ul><!-- This is a repeater --></ul>
 *     <li>
 * </ul>
 */
export interface IPioneerTreeRepeater {
    collapsed: boolean;
    getId(): string;
}

export class PioneerTreeRepeater implements IPioneerTreeRepeater {
    collapsed = false;

    private uid: string;

    constructor() {
         this.generateUid();
    }

    getId(): string {
        return this.uid
    }

    private generateUid(): void {
        this.uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}