import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getMarkList, getError } from '../state/marksheet.reducer';
import * as MarksheetActions from '../state/marksheet.actions';
import { Marks } from '../marksheet.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'marksheet-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.scss']
})
export class ListMarksComponent implements OnInit, OnDestroy {

  constructor(private store: Store<State>) { }

  sub = null;
  markList$ : Observable<Marks[]>;
  errorMsg$ : Observable<string>;
  passingMarks: number = 65;
  editIdx: number = null;
  name: string = null;
  marks: number = null;

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

    this.store.dispatch(MarksheetActions.loadMarksheetAPI());

    this.markList$ = this.store.select(getMarkList);

    this.errorMsg$ = this.store.select(getError);

    // this.store.select(getEditId).subscribe(id => {
    //   this.editIdx = id;
    //   if(this.editIdx !== null){
    //       this.name = this.markList[this.editIdx].name;
    //       this.marks = this.markList[this.editIdx].marks;
    //   } else{
    //     this.resetForm();
    //   }
    // });
  }

  ngOnDestroy(){
    //this.sub.unsubscribe();
  }

}
