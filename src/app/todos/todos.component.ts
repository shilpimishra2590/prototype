import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  

  constructor(private httpClient:HttpClient) { }
  todosData;
  IsError:boolean = false;

  ngOnInit() {
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos").toPromise().then((todo) =>{
    console.log(todo);
    this.todosData = todo;
    }).catch((errorcatch)=>{
      this.IsError = true;  
    }).finally(()=>{
      console.log('completed')
    })

  }

}
