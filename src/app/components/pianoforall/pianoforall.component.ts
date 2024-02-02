import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NgOptimizedImage } from '@angular/common';
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
})
export class PianoforallComponent {
  protected hoplink!: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected videoService = inject(VideoService);

  protected ngOnInit(): void {
    this.hoplink = this.route.snapshot.data['hoplink'];
  }
}
