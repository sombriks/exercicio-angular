import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {environment} from 'src/environments/environment.example';
import {Pessoa, Setor} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url: string

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl || ''
  }

  async getServiceStatus(): Promise<string> {
    return await firstValueFrom(this.http.get<string>(`${this.url}status`))
  }

  async getPessoas(q: string): Promise<Pessoa[]> {
    return await firstValueFrom(this.http.get<Pessoa[]>(`${this.url}pessoas?q=${q}`))
  }

  async getSetores(q: string): Promise<Setor[]> {
    return await firstValueFrom(this.http.get<Setor[]>(`${this.url}setores?q=${q}`))
  }
}
