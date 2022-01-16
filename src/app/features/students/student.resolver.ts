import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Student } from './student';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<Student | null> {

  constructor(
    private router: Router,
    private studentsService: StudentsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Student | null> {
    const id = route.paramMap.get('id')!;

    if (isNaN(+id)) {
      this.navigateToStudentsUrl();
      return of(null);
    }

    return this.studentsService.findById(+id!).pipe(
      catchError(() => {
        this.navigateToStudentsUrl();
        return of(null);
      })
    );
  }

  private navigateToStudentsUrl() {
    this.router.navigateByUrl("/students");
  }

}
