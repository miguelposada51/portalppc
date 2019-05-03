import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoCanales } from '../interfaces/info-canales.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];
  // canales: any[] = [];
  datosCanales: InfoCanales = {};

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
    this.cargarCanales();


  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);
    });


    // this.equipo = resp
  }

  private cargarCanales() {

    // Leer el archivo JSON
    // this.http.get('assets/data/canales.json')
    this.http.get('http://ec2-3-19-66-195.us-east-2.compute.amazonaws.com:3000/station')
    .subscribe( (resp: InfoCanales) => {

      this.datosCanales =  resp;
       console.log(this.datosCanales);
    });


    // this.equipo = resp
  }

}



