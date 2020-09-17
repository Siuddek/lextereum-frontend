import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SellAgreement} from '../models/SellAgreement';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private lextereumUrl = environment.lextereumUrl;
  private parseEndpoint = '/documents/read';
  private validateEndpoint = '/documents/validate';
  private saveEndpoint = '/documents/save';

  constructor(private httpClient: HttpClient) {
  }

  public getParsedDocument(document: File): Observable<SellAgreement> {
    const formData = new FormData();
    formData.append('documentImage', document);
    return this.httpClient.put<SellAgreement>(`${this.lextereumUrl}${this.parseEndpoint}`, formData);
  }

  public validateAgreement(agreement: SellAgreement): Observable<string> {
    return this.httpClient.post(`${this.lextereumUrl}${this.validateEndpoint}`, agreement, {responseType: 'text'});
  }

  public saveAgreement(agreement: SellAgreement): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.lextereumUrl}${this.saveEndpoint}`, agreement);
  }

}
