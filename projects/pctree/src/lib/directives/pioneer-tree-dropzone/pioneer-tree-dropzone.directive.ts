import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { IPioneerTreeExpandedNode } from '../../models/pioneer-tree-expanded-node.model';
import { PioneerTree } from '../../models/pioneer-tree.model';

/**
 * Define a dom element as droppable
 */
@Directive({
  selector: '[pioneer-tree-dropzone],[pt-dropzone]'
})
export class PioneerTreeDropzoneDirective {
  @Input() node: IPioneerTreeExpandedNode;
  @Input() dropType: string;

  @Output() nodeDropped: EventEmitter<IPioneerTreeExpandedNode> = new EventEmitter<IPioneerTreeExpandedNode>();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private pioneerTree: PioneerTree
  ) { }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    if (this.pioneerTree.isNodeDroppable(this.node)) {
      event.preventDefault();
      this.renderer.addClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over');
      return;
    }
    this.renderer.addClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over-deny');
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.clearClasses();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    if (this.pioneerTree.isNodeDroppable(this.node)) {
      event.preventDefault();
      this.clearClasses();
      this.pioneerTree.dropNode(this.node, this.dropType, this.node.pioneerTreeNode.sortIndex);
      this.nodeDropped.emit(this.node);
    }
  }

  private clearClasses(): void {
    this.renderer.removeClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over');
    this.renderer.removeClass(this.elementRef.nativeElement, 'pt-dropzone-drag-over-deny');
  }
}
