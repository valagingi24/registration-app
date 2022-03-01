import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private httpClient: HttpClient) { }

  registerUser(data) {
    const url = "https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d"
    return this.httpClient.get(url, data);
    
  }

  getProfile() {
    const url = "https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2"
    return this.httpClient.get(url);
    
  }

  getAuthStatus() {
    return Boolean(sessionStorage.getItem('isLoggedIn')) 
  }
}
