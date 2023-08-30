import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BaseServiceService } from './../../service/base-service.service';
import { Student } from 'src/app/models/student';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { DialogUpdateWrapperComponent } from '../student-editor/dialog-update-wrapper/dialog-update-wrapper.component';


@Component({
  selector: 'app-tablestyling',
  templateUrl: './tablestyling.component.html',
  styleUrls: ['./tablestyling.component.css']
})
export class TablestylingComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['id', 'fio', 'group','phoneNumber', 'actions'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private baseService:BaseServiceService, public dialog: MatDialog) {
    this.dataSource=new MatTableDataSource<Student>();
  }


  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.baseService.getAllStudents().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addNewStudent() {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("adding new student: " + result.fio);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data));
      }
    });
  }

  deleteStudent(student: Student){
      if(student != null) {
        console.log("delete student: " + student.id);
        this.baseService.deleteStudent(student.id).subscribe(()=>
          this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data) );
      }
  }

  editStudent(student: Student){
    const dialogUpdateStudent = this.dialog.open(DialogUpdateWrapperComponent, {
      width: '400px',
      data: student
    });
    dialogUpdateStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("update student: " + result.id);
        this.baseService.updateStudent(result).subscribe(()=>
          this.baseService.getAllStudents().subscribe(data => this.dataSource.data = data) );

      }
    });
  }
}
