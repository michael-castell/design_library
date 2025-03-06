import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';
import { ButtonToggleComponent } from '../components/button-toggle/button-toggle.component';
import { InputComponent } from '../components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonToggleComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design_library';
  public text: string = "Button";
  public textList: string[] = ["Button 1", "Button 2", "Button 3"];

  testSelected(selected: any) {
    console.log(selected);
  }
}
