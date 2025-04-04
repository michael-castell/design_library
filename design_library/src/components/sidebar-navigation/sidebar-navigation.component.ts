import { Component, Input } from '@angular/core';

@Component({
  selector: 'mbc-sidebar-navigation',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.scss'
})
export class SidebarNavigationComponent {
  @Input() color: "primary" | "secondary" = "primary";
  @Input() linkList: string[] = ["link"];
  @Input() titles: string[] = ["title"];
  isSlideLeft = false;

  toggleSlide() {
    this.isSlideLeft = !this.isSlideLeft;
    const fullNav = document.querySelector('.full-nav');
    if (fullNav) {
      fullNav.classList.toggle('slide-right', this.isSlideLeft);
    }
  }
}
