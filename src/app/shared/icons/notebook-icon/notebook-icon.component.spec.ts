import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookIconComponent } from './notebook-icon.component';

describe('NotebookIconComponent', () => {
  let component: NotebookIconComponent;
  let fixture: ComponentFixture<NotebookIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
