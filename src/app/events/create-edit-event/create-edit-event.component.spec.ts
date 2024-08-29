import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditEventComponent } from './create-edit-event.component';

describe('CreateEditEventComponent', () => {
  let component: CreateEditEventComponent;
  let fixture: ComponentFixture<CreateEditEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditEventComponent]
    });
    fixture = TestBed.createComponent(CreateEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
