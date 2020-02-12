import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAwardModalComponent } from './edit-award-modal.component';

describe('EditAwardModalComponent', () => {
  let component: EditAwardModalComponent;
  let fixture: ComponentFixture<EditAwardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAwardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAwardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
