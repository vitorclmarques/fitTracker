import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAlunosComponent } from './dashboard-alunos.component';

describe('DashboardAlunosComponent', () => {
  let component: DashboardAlunosComponent;
  let fixture: ComponentFixture<DashboardAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
