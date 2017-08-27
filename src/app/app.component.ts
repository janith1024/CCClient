import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./com.jsa/entity/Student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Challenge of coding';
  studentsList:Student[];
  student:Student;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get<Student[]>('http://localhost:8080/student/all').subscribe(data => {
      this.studentsList= data;
    },
      err => {
        console.log("Error occured: "+err);
      });
  }

  onSelect(selected:Student){
    this.student = selected;
  }

  update(student){
    this.http.post('http://localhost:8080/student/update', student).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured: "+err);
      });
  }
}
