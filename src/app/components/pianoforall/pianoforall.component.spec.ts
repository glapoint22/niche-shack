import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoforallComponent } from './pianoforall.component';

describe('PianoforallComponent', () => {
  let component: PianoforallComponent;
  let fixture: ComponentFixture<PianoforallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoforallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PianoforallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
