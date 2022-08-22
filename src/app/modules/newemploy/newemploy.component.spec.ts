import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployComponent } from './newemploy.component';

describe('NewemployComponent', () => {
  let component: NewemployComponent;
  let fixture: ComponentFixture<NewemployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
