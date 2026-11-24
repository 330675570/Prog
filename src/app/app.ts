import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './services/httpService';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prog');
  constructor(private httpService: HttpService) { }

 
  ngOnInit() {
    this.getFromServer();
  }

  getFromServer() {

    this.httpService.getFromServer().subscribe((data) => {
      console.log(data);
      console.log('bbb');
    });
    console.log('aaa');
    

  }
}
