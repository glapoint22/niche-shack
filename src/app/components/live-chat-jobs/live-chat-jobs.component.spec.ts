import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChatJobsComponent } from './live-chat-jobs.component';

describe('LiveChatJobsComponent', () => {
  let component: LiveChatJobsComponent;
  let fixture: ComponentFixture<LiveChatJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveChatJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveChatJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
