import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //xX|Guarda la lista de clientes|Xx
  List

  //xX|Guarda el total de clientes|Xx
  TotalC

  //xX|Guarda el monto todal de adeudo|Xx
  TotalA = 0

  Conteo = {conteo: "", cliente: "", _id: ""}

  FAlta = {adeudo: 0, cliente: "", _id: ""}

  constructor(private ServicioCliente: ClienteService) { }

  //xX|Consulta a los clientes|Xx
  getClientes(){
    this.ServicioCliente.getCliente().subscribe(
      res => {
        this.List = res
        console.log(this.List)
        this.totalClientes(this.List)
        this.totalAdeudos()
        this.masAdeudos()
        this.masAlto()
      }, err => {
        console.log(err)
      })
    }

    //xX|Obtiene el total de clientes registrados|Xx
    totalClientes(c){
      this.TotalC = c.length
    }

    totalAdeudos(){
      for(let i = 0; i < this.List.length; i++){
        for(let f = 0; f < this.List[i].factura.length; f++){
          this.TotalA = 1 + this.TotalA
        }
      }

    }

    masAdeudos(){
      
      for(let i = 0; i < this.List.length; i++){

        if(this.List[i].factura.length > this.Conteo.conteo){
          this.Conteo.conteo = this.List[i].factura.length
          this.Conteo.cliente = this.List[i].rfc
          this.Conteo._id = this.List[i]._id
        }

      }

    }

    masAlto(){
      for(let i = 0; i < this.List.length; i++){
        for(let f = 0; f < this.List[i].factura.length; f++){
          if(parseFloat(this.List[i].factura[f].adeudo) > this.FAlta.adeudo){
            this.FAlta.adeudo = this.List[i].factura[f].adeudo
            this.FAlta.cliente = this.List[i].rfc
            this.FAlta._id = this.List[i]._id
          }
        }
      }
    }


    ngOnInit(): void{

      //xX|Busca a los clientes al abrir la página|Xx
      this.getClientes()
  
       /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
  
       var datawebsiteViewsChart = {
        labels: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [8, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 17,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
  
      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);

      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
        labels: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
            [12000, 17000, 7000, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    };

   const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: 20000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 10},
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);
  
    }//------------------------Fin onInit

    startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  
  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};

}
