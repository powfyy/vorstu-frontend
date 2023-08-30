import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 1, name: 'Джон', surname: 'Вашингтон'},
      {id: 2, name: 'Эми', surname: 'Джонсон'},
      {id: 3, name: 'Глори', surname: 'Бекинс'},
      {id: 4, name: 'Хасбик', surname: 'Бигс'},
      {id: 5, name: 'Валерий', surname: 'Нечаев'},
      {id: 6, name: 'Глеб', surname: 'Петренко'},
      {id: 7, name: 'Олег', surname: 'Скобов'},
    ];
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id ? student.id : 0)) + 1 : 11;
  }
}
