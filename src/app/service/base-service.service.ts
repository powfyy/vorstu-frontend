import { Student } from 'src/app/models/student';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  private studentsUrl = 'http://localhost:8080/api/student/students';
  private adminUrl='http://localhost:8080/api/admin/students'
  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }


  getAllStudents(): Observable<Student[]> {
    const role = this.tokenStorage.getAuthorities();

    const url = role === '"ADMIN"' ? this.adminUrl : this.studentsUrl;
    return this.http.get<Student[]>(url);
  }

  addNewStudent(student: Student): Observable<Student> {
    const role = this.tokenStorage.getAuthorities();
    const url = role === '"ADMIN"' ? this.adminUrl : this.studentsUrl;
    return this.http.post<Student>(url, student);
  }
  deleteStudent(studentId: number|null): Observable<any> {
    const role = this.tokenStorage.getAuthorities();
    const url = role === '"ADMIN"' ? this.adminUrl : this.studentsUrl;
    const Url = `${url}/${studentId}`;
    return this.http.delete(Url);
}
  updateStudent(student: Student): Observable<Student> {
    const role = this.tokenStorage.getAuthorities();
    const url = role === '"ADMIN"' ? this.adminUrl : this.studentsUrl;
    console.log('updateStudent');
    return this.http.put<Student>(url, student);
  }
}
