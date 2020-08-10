import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarksheetService {

  private baseUrl = 'api/marksheet';

  constructor() {
    this.createDefaultMarkSheet();
  }

  getMarksheet(){
    //return an observable from promise
    return from(this.getListAPI(this.baseUrl)
      .then((data) => {
        return data;
      })
    )
  }

  addRecord(record){
    return from(this.addRecordAPI(record, `${this.baseUrl}/add`)
      .then((data) => {
        return data;
      })
    )
  }

  addRecordAPI(record, url) {
    return new Promise((resolve, reject) => {
      if(url === 'api/marksheet/add'){
        setTimeout(() => {
          let data = JSON.parse(window.localStorage["marksheet"]);
          data.splice(0, 0, record);
          window.localStorage["marksheet"] = JSON.stringify(data)
          resolve('Add Success'),
          1000
        })
      } else{
        setTimeout(() => {
          reject('Add failed'),
          1000
        })        
      }
    });
  }

  getListAPI(url) {
    const data = JSON.parse(window.localStorage["marksheet"]);
    return new Promise((resolve, reject) => {
      if(url === 'api/marksheet'){
        setTimeout(() => {
          resolve(data),
          1000
        })
      } else{
        setTimeout(() => {
          reject('Load error'),
          1000
        })        
      }
    });
  }

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

}
