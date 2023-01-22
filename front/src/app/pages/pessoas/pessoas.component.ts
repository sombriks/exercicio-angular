import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from "../../shared/models";
import {ApiService} from "../../shared/api.service";

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent {

  pessoas: Pessoa[] = [];

  constructor(
    private router: Router,
    private api: ApiService
  ) {
  }

  async ngOnInit() {
    await this.busca("")
  }

  async busca(q: string) {
    this.pessoas = await this.api.getPessoas(q)
  }
}
