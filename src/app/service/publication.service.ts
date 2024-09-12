import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/Model/Event';
import { Publication } from 'src/Model/Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }
  getPublications():Observable<Publication[]>{
    const url='http://localhost:3001/publications';
    console.log('Fetching publications from URL:', url);
        return this.http.get<Publication[]>(url);

}
getPublication(id:string){
  const url=`${'http://localhost:3001/publications/'}${id}`;
  console.log('Fetching publications from URL:', id);
      return this.http.get<Publication>(url);
}
addPublication(pub:Publication){
  const url='http://localhost:3001/publications';

  return this.http.post<Publication>(url,pub)
}
updatePublication(id:string, value:{type:string , title: string,lien:string, date: string,sourcepdf:string }){
   const url=`${'http://localhost:3001/publications/'}${id}`;
return this.http.put<Publication>(url,value)
}

deletePublication(id:string): Observable<void>{
  const url=`${'http://localhost:3001/publications/'}${id}`;
  return this.http.delete<void>(url);
}
}