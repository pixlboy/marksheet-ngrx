import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getSuccess } from '../state/marksheet.reducer';
import * as MarksheetActions from '../state/marksheet.actions';
import { Marks } from '../marksheet.interface';

@Component({
  selector: 'marksheet-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.scss']
})
export class AddMarksComponent implements OnInit {

  constructor(private store: Store<State>) { }

  name: string = null;
  marks: number = null;
  markList = [];
  		
  addStudent(){
    const marks: Marks = {
      name : this.name,
      marks : this.marks
    };
    this.store.dispatch(MarksheetActions.addRecordAPI({ marks }));
    this.resetForm();
  }

  resetForm(){
    this.name = null;
	  this.marks = null;
  }

  ngOnInit(){

    this.store.select(getSuccess).subscribe((data) => {
      if(data === 'Add Success'){
        this.store.dispatch(MarksheetActions.loadMarksheetAPI());
      }
    });

  }

};

// app.filter('average', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 0;
// 		for (var i = 0; i < length; i++) {
// 			out = Number(input[i].marks) + out;
// 		}
// 		out = out/length;
// 		return out;
// 	}
// });

// app.filter('highest', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 0;
// 		for (var i = 0; i < length; i++) {
// 			if(out < input[i].marks){
// 				out = input[i].marks;
// 			}
// 		}
// 		return out;
// 	}
// });

// app.filter('lowest', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 100;
// 		for (var i = 0; i < length; i++) {
// 			if(out > input[i].marks){
// 				out = input[i].marks;
// 			}
// 		}
//       return out;
//     }
//   });
