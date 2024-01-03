import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoramaComponent } from './singorama.component';

describe('SingoramaComponent', () => {
  let component: SingoramaComponent;
  let fixture: ComponentFixture<SingoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingoramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
