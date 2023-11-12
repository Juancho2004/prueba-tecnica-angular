import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosFormComponent } from './libros-form.component';

describe('LibrosFormComponent', () => {
  let component: LibrosFormComponent;
  let fixture: ComponentFixture<LibrosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosFormComponent]
    });
    fixture = TestBed.createComponent(LibrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
