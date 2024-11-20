import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoModalComponent } from './plano-modal.component';

describe('PlanoModalComponent', () => {
  let component: PlanoModalComponent;
  let fixture: ComponentFixture<PlanoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
