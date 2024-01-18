import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../../models/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: '../../../templates/header.template.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends Header {
  protected override ngOnInit(): void {
    super.ngOnInit();

    this.buttonLabel = 'ORDER NOW';

    this.menuItems = [
      {
        name: 'About Pianoforall',
        link: '/singorama'
      },
      {
        name: 'Testimonials',
        link: '/pianoforall/testimonials'
      },
      {
        name: 'FAQ',
        link: '/pianoforall/faq'
      }
    ]
  }
}
