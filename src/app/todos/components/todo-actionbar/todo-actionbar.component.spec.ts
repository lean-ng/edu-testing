import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionbarComponent } from './todo-actionbar.component';

describe('TodoActionbarComponent', () => {
  let component: TodoActionbarComponent;
  let fixture: ComponentFixture<TodoActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActionbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
