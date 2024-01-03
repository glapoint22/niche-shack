import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private menuVisible!: boolean;

  protected toggleMenu(menu: HTMLElement): void {
    if (!this.menuVisible) {
      menu.style.transform = 'translate(0, 0)';
      this.menuVisible = true;
    } else {
      menu.style.transform = 'translate(0, -100%)';
      this.menuVisible = false;
    }
  }
}