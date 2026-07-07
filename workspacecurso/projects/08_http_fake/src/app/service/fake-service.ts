import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';
import { Comentario } from '../model/Comment';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  urlBase:string="https://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient){

  }

  obtenerPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlBase+"posts")
  }

  obtenerComentariosPost(postId:number):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.urlBase+"comments",{params:{postId:postId}});
  }
}
