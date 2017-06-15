import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.html'
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
                    "name": "sub-1"
                  },
                },
                {
                  "folder": {
                    "name": "sub-2"
                  },
                },
                {
                  "folder": {
                    "name": "sub-3"
                  },
                }
              ],
              "name": "child-1"
            },
            "name": "child-1"
          },
          {
            "folder": {
              "name": "child-2"
            },
          },
          {
            "folder": {
              "name": "child-3"
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
              "name": "child-1"
            },
          },
          {
            "folder": {
              "name": "child-2"
            },
          },
          {
            "folder": {
              "name": "child-3"
            },
          }
        ],
        "name": "root-2"
      }
    }
  ]
}