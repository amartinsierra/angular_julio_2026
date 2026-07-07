import { Component, OnInit, signal } from '@angular/core';
import { Comentario } from '../../model/Comment';
import { Post } from '../../model/Post';
import { FakeService } from '../../service/fake-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fake',
  imports: [FormsModule],
  templateUrl: './fake.html',
  styleUrl: './fake.css',
})
export class Fake implements OnInit{
  posts=signal<Post[]>([]);
  comments=signal<Comentario[]>([]);
  postSelected=signal<number>(0);

  constructor(private fakeService:FakeService){

  }
  ngOnInit(): void {
    this.fakeService.obtenerPosts()
      .subscribe(data=>this.posts.set(data));
  }

  seleccionPost():void{
    this.fakeService.obtenerComentariosPost(this.postSelected())
      .subscribe(data=>this.comments.set(data));
  }


}
