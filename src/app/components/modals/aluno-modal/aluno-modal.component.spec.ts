import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoModalComponent } from './aluno-modal.component';

describe('AlunoModalComponent', () => {
  let component: AlunoModalComponent;
  let fixture: ComponentFixture<AlunoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlunoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
