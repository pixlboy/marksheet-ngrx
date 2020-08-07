import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marksheet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor() { }

  createDefaultMarkSheet(){
    if(!window.localStorage["marksheet"]){
      window.localStorage["marksheet"] = JSON.stringify([
       {name: 'Adrian', marks: 100},
       {name: 'Afrojack', marks: 20},
       {name: 'Akcent' , marks: 30},
       {name: 'Akon' , marks: 40},
       {name: 'Armin', marks:50},
       {name: 'Avicii', marks:60},
       {name: 'Coldplay', marks:60},
       {name: 'Chicane' , marks: 50},
       {name: 'Kygo' , marks: 50},
       {name: 'Naden' , marks: 50}
     ]);
    }
  }

  ngOnInit(){
    //this.createDefaultMarkSheet();
  }

}
