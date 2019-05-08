import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { HttpClient } from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { InfoCanales } from '../../interfaces/info-canales.interface';

export interface ListadoCanales {
  availabilityWindowEnd: string;
  availabilityWindowStart: string;
  dvbLinkageId: string;
  // linearServiceType: string;
  packagedServiceDescription: string;
  // preventEasInterruption: string;
  linearServiceLocality: string;
}

let ELEMENT_DATA: ListadoCanales[] = [
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class AboutComponent implements OnInit {

  columnsToDisplay = ['availabilityWindowEnd', 'availabilityWindowStart',
                      'dvbLinkageId','packagedServiceDescription', 'Action'];
  expandedElement: ListadoCanales | null;
  dataSource = ELEMENT_DATA;

  constructor( public infoService: InfoPaginaService, private http: HttpClient) {

  this.cargarCanales();
   }

   private cargarCanales() {

    // Leer el archivo JSON
    // this.http.get('assets/data/canales.json')
    this.http.get('http://ec2-3-19-66-195.us-east-2.compute.amazonaws.com:3000/station')
    .subscribe( (resp: InfoCanales) => {
      this.dataSource =  resp.data;
    });
  }
  ngOnInit() {
  }

}
