import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeModalComponent } from './edit-type-modal.component';

describe('EditTypeModalComponent', () => {
  let component: EditTypeModalComponent;
  let fixture: ComponentFixture<EditTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
