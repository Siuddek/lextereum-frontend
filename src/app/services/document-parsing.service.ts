import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentParsingService {

  private lextereumUrl = environment.lextereumUrl;
  private parseEndPoint = '/documents/read';

  constructor(private httpClient: HttpClient) { }

  public getParsedDocument(document: File): Observable<Response> {
    const formData = new FormData();
    formData.append('documentImage', document);
    return this.httpClient.put<Response>(`${this.lextereumUrl}${this.parseEndPoint}`, formData);
  }
}
