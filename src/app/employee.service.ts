import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl='';

  constructor(private http: HttpClient) { }
  public getEmployees(): Observable<Employee[]>{
    return this.http.get<any>('${this.apiServerUrl}/employee/all');

  }
}
