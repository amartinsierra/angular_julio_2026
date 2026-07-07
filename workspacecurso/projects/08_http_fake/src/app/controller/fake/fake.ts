import { Component, OnInit } from '@angular/core';
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
  posts:Post[];
  comments:Comentario[];
  postSelected:number;

  constructor(private fakeService:FakeService){

  }
  ngOnInit(): void {
    this.fakeService.obtenerPosts()
      .subscribe(data=>this.posts=data);
  }

  seleccionPost():void{
    this.fakeService.obtenerComentariosPost(this.postSelected)
      .subscribe(data=>this.comments=data);
  }


}
