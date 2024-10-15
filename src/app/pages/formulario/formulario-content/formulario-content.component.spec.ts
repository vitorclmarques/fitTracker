import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioContentComponent } from './formulario-content.component';

describe('FormularioContentComponent', () => {
  let component: FormularioContentComponent;
  let fixture: ComponentFixture<FormularioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
