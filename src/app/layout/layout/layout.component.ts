import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sideNavVisible = true
}
