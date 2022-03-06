import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "www.google.com"

  constructor(private http: HttpClient) { }

  reqLogin(Usuario){
    return this.http.post<any>(this.loginURL, Usuario)
  }

}
