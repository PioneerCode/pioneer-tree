export interface IPioneerTreeUidService {
  /**
   * Get a UID
   * Non-GUID compliant
   * Currently does not detect collisions
   */
  getUid(): string;
}

export class PioneerTreeUidService implements IPioneerTreeUidService {
  getUid(): string {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  private s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
