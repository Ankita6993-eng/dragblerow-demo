import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggbleRowComponent } from './draggble-row.component';

describe('DraggbleRowComponent', () => {
  let component: DraggbleRowComponent;
  let fixture: ComponentFixture<DraggbleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggbleRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggbleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
