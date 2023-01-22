import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.example';

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
}
