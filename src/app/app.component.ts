import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
})
export class AppComponent {
  name = 'Angular';
  nodes = [
    {
      "folder": {
        "children": [
          {
            "folder": {
              "children": [
                {
                  "folder": {
                    "name": "root-1-child-1"
                  },
                },
                {
                  "folder": {
                    "name": "root-1-child-2"
                  },
                },
                {
                  "folder": {
                    "name": "root-1-child-3"
                  },
                }
              ],
              "name": "root-6"
            },
            "name": "root-1-child-1"
          },
          {
            "folder": {
              "name": "root-1-child-2"
            },
          },
          {
            "folder": {
              "name": "root-1-child-3"
            },
          }
        ],
        "name": "root-1"
      }
    },
    {
      "folder": {
        "children": [
          {
            "folder": {
              "name": "root-2 child-1"
            },
          },
          {
            "folder": {
              "name": "root-2 child-2"
            },
          },
          {
            "folder": {
              "name": "root-2 child-3"
            },
          }
        ],
        "name": "root-2"
      }
    }
  ]
}
