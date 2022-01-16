import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Course } from './course';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course | null> {

  constructor(
    private router: Router,
    private coursesService: CoursesService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course | null> {
    const id = route.paramMap.get('id')!;

    if (isNaN(+id)) {
      this.navigateToCoursesUrl();
      return of(null);
    }

    return this.coursesService.findById(+id!).pipe(
      catchError(() => {
        this.navigateToCoursesUrl();
        return of(null);
      })
    );
  }

  private navigateToCoursesUrl() {
    this.router.navigateByUrl("/courses");
  }

}
