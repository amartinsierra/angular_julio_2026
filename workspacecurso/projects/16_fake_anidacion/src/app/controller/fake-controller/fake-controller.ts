import { Component, signal } from '@angular/core';
import { Comentario } from '../../model/Comment';
import { Post } from '../../model/Post';
import { FakeService } from '../../service/fake-service';
import { ComboChild } from '../../components/combo-child/combo-child';
import { TableChild } from '../../components/table-child/table-child';

@Component({
  selector: 'app-fake-controller',
  imports: [ComboChild,TableChild],
  templateUrl: './fake-controller.html',
  styleUrl: './fake-controller.css',
})
export class FakeController {
  posts=signal<Post[]>([]);
  comentarios=signal<Comentario[]>([]);
  constructor(private fakeService:FakeService){

  }
  ngOnInit(): void {
    this.fakeService.obtenerPosts()
    .subscribe({
      next:r=>this.posts.set(r),
      error:err=>alert(err)
    });
  }
  comentariosPost(postId:number):void{
    this.fakeService.obtenerComentariosPost(postId)
    .subscribe({
      next: r=>this.comentarios.set(r),
      error: err=>alert()
      });
  }

}
