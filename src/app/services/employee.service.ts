import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from 'src/app/models/employee'
const baseUrl = 'http://localhost:8080/api/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(data): Observable<Employee> {
    return this.http.post<Employee>(baseUrl, data);
  }

  update(id, data): Observable<Employee> {
    return this.http.put<Employee>(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<Employee> {
    return this.http.delete<Employee>(`${baseUrl}/${id}`);
  }

}
