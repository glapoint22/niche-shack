import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video/video.service';

@Component({
  selector: 'ns-pianoforall',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './pianoforall.component.html',
  styleUrls: [
    './styles/pianoforall.component.scss',
    './styles/pianoforall.component.video-section.scss',
    './styles/pianoforall.component.product-section.scss',
    './styles/pianoforall.component.works-section.scss',
    './styles/pianoforall.component.ebooks-section.scss',
    './styles/pianoforall.component.sample-video-section.scss',
    './styles/pianoforall.component.perks-section.scss',
    './styles/pianoforall.component.end-section.scss',
    './styles/pianoforall.component.money-back-section.scss'
  ],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        const url = 'assets/pianoforall/' + config.src;
        let width = '';
        
        if (config.width && config.width != 1920) {
          width = '-' + config.width;
        }
        return url + width + '.avif';
      },
    },
  ]
})
export class PianoforallComponent {
  protected hoplink!: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected videoService = inject(VideoService);

  protected ngOnInit(): void {
    this.hoplink = this.route.snapshot.data['hoplink'];
  }
}
