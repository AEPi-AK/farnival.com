import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  constructor(private http: HttpClient) { }

  private memeUrl = "http://127.0.0.1:5000/meme";

  getImage():  Observable<Blob> {
  	return this.http.get<Blob>(this.memeUrl);
  }

}
