import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { VideoService } from '../../../services/video/video.service';

@Component({
  selector: 'ns-testimonials',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  protected videoService = inject(VideoService);
  
}