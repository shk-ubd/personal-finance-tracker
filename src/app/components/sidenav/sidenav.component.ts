import { Component, Input, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-sidenav',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
      this.drawerRef.close(e);
  }

  @Input()  visible: boolean = false;
}
