import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marksheet-list-marks',
  templateUrl: './list-marks.component.html',
  styleUrls: ['./list-marks.component.scss']
})
export class ListMarksComponent implements OnInit {

  students = [];
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
    this.students.splice(index,1);
    this.deleteMarks(this.students);
  }

  saveRecord(){
    this.students.splice(
      this.editIdx,
      1,
      {
        name : this.name,
        marks : this.marks
      }
    );
	  this.updateMarks(this.students);
    this.editIdx = null;
  }

  editRecord(idx){
    this.editIdx = idx;
    this.name = this.students[idx].name;
    this.marks = this.students[idx].marks;
  }

  ngOnInit(){
    this.students = this.getMarkSheet();
  }

}
