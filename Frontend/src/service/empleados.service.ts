import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { Observable, catchError } from 'rxjs';

interface Employees {
  id:number;
  nombre: string;
  cargo: Object;
}

interface Cargo {
  id:number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' // corrected the header name to 'Content-Type'
    })
  };
  

  getAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>('http://localhost:8090/clients', this.httpOptions)
    .pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      throw new Error('Error en get');
    }));
  }

  CreateContact(name: string, cargo: number): Observable<any[]> {
    const data ={
      name,
      role:{
        id: cargo
      }
    }
    return this.http.post<Employees[]>('http://localhost:8090/clients',data);
  }

  getAllCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>('http://localhost:8090/roles', this.httpOptions)
    .pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      throw new Error('Error en get');
    }));
  }

  deleteEmployee(id:number):Observable<Employees[]>{
    const url = `http://localhost:8090/clients/${id}`;
    return this.http.delete<Employees[]>(url, this.httpOptions)
    .pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      throw new Error('Error en delete');
    }));

  }

  updateEmployee(id:string , nombre:string, idcargo:number, cargo:string):Observable<Employees[]>{
    console.log(id);
    const data ={
      name:nombre,
      role:{
        id:idcargo,
        name:cargo
      }
    }
    console.log(data);
    
    const url = `http://localhost:8090/clients/${id}`;
    return this.http.put<Employees[]>(url, data,this.httpOptions)

  }
} 
