import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getMarkList, getEditId } from '../state/marksheet.reducer';
import * as MarksheetActions from '../state/marksheet.actions';
import { Marks } from '../marksheet.interface';

@Component({
  selector: 'marksheet-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.scss']
})
export class ListMarksComponent implements OnInit, OnDestroy {

  constructor(private store: Store<State>) { }

  sub = null;
  markList = [];
  passingMarks: number = 65;
  editIdx: number = null;
  name: string = null;
  marks: number = null;

  // getMarkSheet() {
  //   if(window.localStorage){
  //     return JSON.parse(window.localStorage["marksheet"]);
  //   }
  //   console.log("Your Browser doesn't supports local storage !!");
  //   return [];
  // }

  // deleteMarks(value) {
  //   window.localStorage.setItem("marksheet", JSON.stringify(value));
  // }

  // updateMarks(value) {
  //   window.localStorage.setItem("marksheet", JSON.stringify(value));
  // }

  deleteRecord(index){
    this.store.dispatch(MarksheetActions.deleteRecord({ id: index }));
  }

  saveRecord(){
    const marks: Marks = {
        name : this.name,
        marks : this.marks
    };
    this.store.dispatch(MarksheetActions.saveRecord({ id: this.editIdx, marks: marks }));
    this.setEditId(null);
  }

  setEditId(index){
    this.store.dispatch(MarksheetActions.setEditId({ id: index }));
  }

  private resetForm(){
    this.name = null;
	  this.marks = null;
  }

  ngOnInit(){
    this.store.select(getMarkList).subscribe(markList => {
      this.markList = markList;
    });
    this.store.select(getEditId).subscribe(id => {
      this.editIdx = id;
      if(this.editIdx !== null){
          this.name = this.markList[this.editIdx].name;
          this.marks = this.markList[this.editIdx].marks;
      } else{
        this.resetForm();
      }
    });
  }

  ngOnDestroy(){
    //this.sub.unsubscribe();
  }

}
