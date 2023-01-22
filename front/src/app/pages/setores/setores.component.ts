import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Setor} from "../../shared/models";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss']
})
export class SetoresComponent {

  setores: Setor[] = []

  constructor(
    private router: Router,
    private api: ApiService
  ) {
  }

  async ngOnInit() {
    await this.busca("")
  }

  async busca(q: string) {
    this.setores = await this.api.getSetores(q);
  }

}
