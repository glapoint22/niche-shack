import { Component, ViewContainerRef, afterNextRender, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { VideoService } from './services/video/video.service';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private containerRef = inject(ViewContainerRef);
  private videoService = inject(VideoService);

  constructor() {
    afterNextRender(() => {
      this.videoService.initializeYouTube();
    });
  }

  ngOnInit() {
    this.videoService.setContainerRef(this.containerRef);
  }
}