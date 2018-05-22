import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PctreeComponent } from './pctree.component';

describe('PctreeComponent', () => {
  let component: PctreeComponent;
  let fixture: ComponentFixture<PctreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PctreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PctreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
