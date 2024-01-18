import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'ns-pianoforall',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pianoforall.component.html',
  styleUrls: [
    './styles/pianoforall.component.scss',
    './styles/pianoforall.component.video-section.scss',
    './styles/pianoforall.component.product-section.scss',
    './styles/pianoforall.component.works-section.scss'
  ]
})
export class PianoforallComponent {

}
