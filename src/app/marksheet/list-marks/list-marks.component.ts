import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'marksheet-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.scss']
})
export class ListMarksComponent implements OnInit, OnDestroy {

  constructor(private store: Store<any>) { }

  sub = null;
  markList = [];
  passingMarks: number = 65;
  editIdx: number = null;
  name: string = null;
  marks: number = null;

  getMarkSheet() {
    if(window.localStorage){
      return JSON.parse(window.localStorage["marksheet"]);
    }
    console.log("Your Browser doesn't supports local storage !!");
    return [];
  }

  deleteMarks(value) {
    window.localStorage.setItem("marksheet", JSON.stringify(value));
  }

  updateMarks(value) {
    window.localStorage.setItem("marksheet", JSON.stringify(value));
  }

  deleteRecord(index){
    this.markList.splice(index,1);
    this.deleteMarks(this.markList);
  }

  saveRecord(){
    this.markList.splice(
      this.editIdx,
      1,
      {
        name : this.name,
        marks : this.marks
      }
    );
	  this.updateMarks(this.markList);
    this.editIdx = null;
  }

  editRecord(idx){
    this.editIdx = idx;
    this.name = this.markList[idx].name;
    this.marks = this.markList[idx].marks;
  }

  ngOnInit(){
    this.sub = this.store.select('marksheet').subscribe(marks => {
      console.log(marks.markList);
      if(marks.markList){
        this.markList = marks.markList;
      }
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
