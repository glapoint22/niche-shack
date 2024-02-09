import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedsWoodworkingComponent } from './teds-woodworking.component';

describe('TedsWoodworkingComponent', () => {
  let component: TedsWoodworkingComponent;
  let fixture: ComponentFixture<TedsWoodworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TedsWoodworkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TedsWoodworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
