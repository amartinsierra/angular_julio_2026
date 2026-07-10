import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
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

  obtenerTitulosPost():Observable<string[]>{
        return this.obtenerPosts()
            .pipe(map(a=>a.map(n=>n.title)));
  }

  obtenerPostsUsuario(userId:number):Observable<Post[]>{
    return this.obtenerPosts()
            .pipe(map(a=>a.filter(n=>n.userId==userId)));
  }
}
