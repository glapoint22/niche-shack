import { Component, inject } from '@angular/core';
import { CommonModule, IMAGE_LOADER, ImageLoaderConfig, ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MetaTagService } from './services/meta-tag/meta-tag.service';
import { PageData } from './models/page-data';
import { environment } from '../environments/environment';

@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const imagePath = environment.imageUrl + config.src;

        if (environment.isDev) return imagePath;
        let image = '';

        if (config.width) {
          image = environment.imageUrl + config.src.replace(/(\..+)/, '') + '-' + config.width + '.avif';
        }

        return image;
      },
    },
  ]
})
export class AppComponent {
  private router = inject(Router);
  private metaTagService = inject(MetaTagService);
  private viewportScroller = inject(ViewportScroller);



  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current activated route
        let currentRoute = this.router.routerState.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        // Set the meta tags for this page
        if (currentRoute.snapshot.data && currentRoute.snapshot.data['title']) {
          this.metaTagService.setTags(currentRoute.snapshot.data as PageData);
        }


        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}