import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: MenuItem[] = [
    {label: 'Pessoas', icon: 'pi pi-fw pi-user', routerLink: ["pessoas"]},
    {label: 'Setores', icon: 'pi pi-fw pi-building', routerLink: ["setores"]},
  ];

  activeItem: MenuItem;

  constructor(private router: Router) {
    this.activeItem = this.items[0];
  }

  async setActive(item: any) {
    this.activeItem = item;
    await this.router.navigate(item.routerLink);
  }
}
