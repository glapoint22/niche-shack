import { Component, Input, inject } from '@angular/core';
import { VideoService } from '../../../services/video/video.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ns-video',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  protected videoService = inject(VideoService);
  @Input() videoId!: string;
  @Input() videoImage!: string;
  @Input() imageAlt!: string;
}
