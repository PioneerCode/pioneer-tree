import { Component, ViewChild } from '@angular/core';
import { IPioneerTreeConfiguration, IPioneerTreeComponent } from '@pioneer-code/pioneer-tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataView = 'raw';
  name = 'Pioneer Tree';
  events = [] as string[];
  configuration = {
    childPropertyName: 'children',
    sortPropertyName: 'sort',
    collapseAllOnLoad: true
  } as IPioneerTreeConfiguration;
  nodes = [
    {
      'name': 'root-0',
      'sort': 0,
      'children': [
        {
          'name': 'child-0',
          'sort': 0,
          'children': [
            {
              'name': 'child-children-0',
              'sort': 0
            },
            {
              'name': 'child-children-1',
              'sort': 1
            }
          ]
        },
        {
          'name': 'child-1',
          'sort': 1
        },
        {
          'name': 'child-2',
          'sort': 2
        }
      ]
    },
    {
      'name': 'root-1',
      'sort': 1
    },
    {
      'name': 'root-2',
      'sort': 2
    },
    {
      'name': 'root-3',
      'sort': 3
    }
  ] as any;

  /**
   * Grab reference to pioneer tree component
   */
  @ViewChild('pt') ptComponent: IPioneerTreeComponent;

  onNodeDropped($event: any): void {
    this.events.unshift(new Date().toLocaleString() + ' : Node Dropped "' + $event.name + '"');
  }
}
