import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private apiUrl = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) { }

  save(course: Course) {
    return this.http.post<Course>(`${this.apiUrl}`, course);
  }

  update(id: number, course: Course) {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  findById(id: number | string) {
    return this.http.get<Course>(`${this.apiUrl}/${id}?_embed=students`);
  }

  findAll() {
    return this.http.get<Course[]>(`${this.apiUrl}?_embed=students`);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
