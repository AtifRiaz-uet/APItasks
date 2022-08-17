import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inputformComponent } from './inputform.component';

describe('inputformComponent', () => {
  let component: inputformComponent;
  let fixture: ComponentFixture<inputformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ inputformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(inputformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
