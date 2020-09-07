import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SellAgreement} from '../models/SellAgreement';

@Injectable({
  providedIn: 'root'
})
export class DocumentParsingService {

  private lextereumUrl = environment.lextereumUrl;
  private parseEndPoint = '/documents/read';

  constructor(private httpClient: HttpClient) { }

  public getParsedDocument(document: File): Observable<SellAgreement> {
    const formData = new FormData();
    formData.append('documentImage', document);
    return this.httpClient.put<SellAgreement>(`${this.lextereumUrl}${this.parseEndPoint}`, formData);
  }
}
