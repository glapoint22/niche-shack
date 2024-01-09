import { Component, ViewContainerRef, afterNextRender, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { VideoService } from './services/video/video.service';
import { MetaTagService } from './services/meta-tag/meta-tag.service';
import { PageData } from './models/page-data';

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
  private router = inject(Router);
  private metaTagService = inject(MetaTagService);

  constructor() {
    afterNextRender(() => {
      this.videoService.initializeYouTube();
    });
  }

  ngOnInit() {
    this.videoService.setContainerRef(this.containerRef);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current activated route
        let currentRoute = this.router.routerState.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        // Set the meta tags for this page
        this.metaTagService.setTags(currentRoute.snapshot.data as PageData);
      }
    });
  }
}