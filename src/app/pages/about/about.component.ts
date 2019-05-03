import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { HttpClient } from '@angular/common/http';
// import 'ag-grid-enterprise';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
  
  // private columnDefs;
  // private detailCellRendererParams;
  // // private rowData: [];
  // rowData: any[] = [];
  // private gridApi;
  // private gridColumnApi;

  constructor( public infoService: InfoPaginaService, private http: HttpClient) { 
    
  //   this.columnDefs = [
  //     {
  //       field: 'name',
  //       cellRenderer: 'agGroupCellRenderer'
  //     },
  //     { field: 'account' },
  //     { field: 'calls' },
  //     {
  //       field: 'minutes',
  //       valueFormatter: 'x.toLocaleString() + \'m\''
  //     }
  //   ];
  //   this.detailCellRendererParams = {
  //     detailGridOptions: {
  //       columnDefs: [
  //         { field: 'callId' },
  //         { field: 'direction' },
  //         { field: 'number' },
  //         {
  //           field: 'duration',
  //           valueFormatter: 'x.toLocaleString() + \'s\''
  //         },
  //         { field: 'switchCode' }
  //       ],
  //       onFirstDataRendered(params) {
  //         params.api.sizeColumnsToFit();
  //       }
  //     },
  //     getDetailRowData: function(params) {
  //       params.successCallback(params.data.callRecords);
  //     }
  //   };
  // }
  // onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;

  //   this.http
  //     .get
  //     ('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/simple/data/data.json').subscribe(
  //       (data: any[]) => {this.rowData = data; console.log(data);}
  //       );

  //   setTimeout(function() {
  //     var rowCount = 0;
  //     params.api.forEachNode(function(node) {
  //       node.setExpanded(rowCount++ === 1);
  //     });
  //   }, 500);
   }

 

  
  ngOnInit() {
  }

}
