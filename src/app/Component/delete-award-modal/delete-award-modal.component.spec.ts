import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAwardModalComponent } from './delete-award-modal.component';

describe('DeleteAwardModalComponent', () => {
  let component: DeleteAwardModalComponent;
  let fixture: ComponentFixture<DeleteAwardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAwardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAwardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
