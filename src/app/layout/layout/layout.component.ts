import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainContainerComponent } from "../main-container/main-container.component";

@Component({
  selector: 'app-layout',
  imports: [ SidenavComponent, NavbarComponent, MainContainerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sideNavVisible = true

  constructor(
    private route: Router
  ) { 
    this.route.events.subscribe((val) => {
      this.sideNavVisible = this.route.url !== '/login'
    })
  }
  ngOnInit(): void {

  }
}
