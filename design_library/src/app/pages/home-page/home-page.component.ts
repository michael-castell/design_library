import { Component } from '@angular/core';
import { SidebarNavigationComponent } from '../../../components/sidebar-navigation/sidebar-navigation.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonToggleComponent } from '../../../components/button-toggle/button-toggle.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarNavigationComponent, ButtonComponent, InputComponent, ButtonToggleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  links: string[] = ["https://www.google.com/", "https://www.bing.com/", "https://www.amazon.com/"];
  titles: string[] = ["Google.com", "Bing.com", "Amazon.com"];
  public selected: string = "";
  public displayButton: string = "";

  handleSelected($event: any) {
    switch ($event) {
      case "p0":
        this.selected = "First button selected.";
        break;
      case "p1":
        this.selected = "Second button selected.";
        break;
      case "p2":
        this.selected = "Third button selected.";
        break;
      default:  
        this.selected = "";
        break;
    }
  }

  buttonClicked($event: any) {
    this.displayButton = $event.target.innerText + " was clicked.";
  }
}
