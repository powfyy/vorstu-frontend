import { Student } from 'src/app/models/student';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  private studentsUrl = 'api/base/students';
  constructor(
    private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  addNewStudent(student: Student): Observable<Student> {
    console.log('addNewStudent');
    return this.http.post<Student>(this.studentsUrl, student).pipe();
  }
  deleteStudent(studentId: number|null): Observable<any> {
    const url = `${this.studentsUrl}/${studentId}`;
    return this.http.delete(url);
}
  updateStudent(student: Student): Observable<Student> {
    console.log('updateStudent');
    // const url = `${this.studentsUrl}/${student.id}`;
    // return this.http.put<Student>(url, student).pipe();
    return this.http.put<Student>(this.studentsUrl, student).pipe();
  }
}
