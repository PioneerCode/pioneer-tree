import { IPioneerTreeExpandedNode } from '../models/pioneer-tree-expanded-node.model';

export interface IPioneerTreeStringifyService {
  getExpandedTree(nodes: IPioneerTreeExpandedNode[]): any;
  getRawTree(nodes: IPioneerTreeExpandedNode[]): any;
}

export class PioneerTreeStringifyService implements IPioneerTreeStringifyService {
  getExpandedTree(nodes: IPioneerTreeExpandedNode[]): any {
    const build = JSON.stringify(nodes, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (key === 'currentNode') {
          return '@ptRef:currentNode';
        }
        if (key === 'treeRootNodes') {
          return '@ptRef:treeRootNodes';
        }
        if (key === 'parentNode') {
          return '@ptRef:parentNode';
        }
        if (key === 'previousNode') {
          return '@ptRef:previousNode';
        }
        if (key === 'currentDragNode') {
          return '@ptRef:currentDragNode';
        }
      }
      return value;
    }, 2);

    return build;
  }

  getRawTree(nodes: IPioneerTreeExpandedNode[]): any {
    let obj = JSON.parse(JSON.stringify(JSON.parse(this.getExpandedTree(nodes))));
    const cache = [] as any;
    return JSON.stringify(obj, (key, value) => {
      if (value === null) {
        return;
      }
      delete value['pioneerTreeNode'];
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    }, 2);
  }
}
