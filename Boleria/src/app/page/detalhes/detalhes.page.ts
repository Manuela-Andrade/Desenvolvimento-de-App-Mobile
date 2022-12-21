import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})

export class DetalhesPage implements OnInit {

    routeId = null;
    oneReceita: any = {};

    constructor(
      private activateRoute: ActivatedRoute,
      private banco: DatabaseService
      
    ) { }

    ngOnInit() {
      this.routeId = this.activateRoute.snapshot.params['id'];

      if(this.routeId){
        this.banco.getOneReceita(this.routeId).subscribe(caixa => this.oneReceita = caixa);
    }
 
  }

}
