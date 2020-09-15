import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserAccount} from '../models/UserAccount';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private lextereumUrl = environment.lextereumUrl;
  private createUserEndpoint = '/user/create';
  private headers = {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private httpClient: HttpClient) { }

  public createUser(newUser: UserAccount): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.lextereumUrl}${this.createUserEndpoint}`, newUser, this.headers);
  }

}
