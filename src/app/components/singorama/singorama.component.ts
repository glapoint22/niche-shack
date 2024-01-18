import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VideoService } from '../../services/video/video.service';
import { CommonModule } from '@angular/common';
import { ProductType } from './enums/product-type';

@Component({
  selector: 'ns-singorama',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './singorama.component.html',
  styleUrls: [
    './styles/singorama.component.scss',
    './styles/singorama.component.video-section.scss',
    './styles/singorama.component.product-section.scss',
    './styles/singorama.component.inside-section.scss',
    './styles/singorama.component.learn-section.scss',
    './styles/singorama.component.inner-circle-section.scss',
    './styles/singorama.component.bonus-section.scss',
    './styles/singorama.component.end-section.scss'
  ]
})
export class SingoramaComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected heading!: string;
  protected videoService = inject(VideoService);
  protected type!: string | null;
  protected ProductType = ProductType;
  protected hoplink!: string;

  protected ngOnInit(): void {
    this.type = this.route.snapshot.queryParamMap.get('type');
    this.hoplink = this.route.snapshot.data['hoplink'];

    switch (this.type) {
      case ProductType.IncreaseVocalRange:
        this.heading = 'INCREASE YOUR VOCAL RANGE';
        break;

      case ProductType.ImproveSingingSkills:
        this.heading = 'IMPROVE YOUR SINGING SKILLS';
        break;

      case ProductType.WarmUpVocals:
        this.heading = 'WARM UP FOR VOCAL MASTERY';
        break;

      default:
        this.heading = 'LEARN TO SING LIKE A PRO';
        break;
    }
  }
}