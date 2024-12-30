import { Component, Input, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [DrawerModule, ButtonModule, AvatarModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;  
  @Input()  visible: boolean = false;
  

  constructor(private router: Router) {
    
  }
  ngOnInit(): void {
  }

  closeCallback(e: any): void {
      this.drawerRef.close(e);
  }


  signOut(){
    this.router.navigate(['/login']);
  }
}
