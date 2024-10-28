import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMatriculasPlanosComponent } from './dashboard-matriculas-planos.component';

describe('DashboardMatriculasPlanosComponent', () => {
  let component: DashboardMatriculasPlanosComponent;
  let fixture: ComponentFixture<DashboardMatriculasPlanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMatriculasPlanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMatriculasPlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
