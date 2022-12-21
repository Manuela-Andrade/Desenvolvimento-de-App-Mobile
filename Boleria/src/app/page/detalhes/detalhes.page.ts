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
    receita: any = {};


    constructor(

      private activateRoute: ActivatedRoute,
      private banco: DatabaseService,
      private router: Router,
      private util: UtilityService
      
    ) { }

    ngOnInit() {
      this.routeId = this.activateRoute.snapshot.params['id'];
      console.log(this.routeId);

      if(this.routeId){
        //Está trazendo o produto do banco de dados
        this.banco.getOneReceita(this.routeId).subscribe(caixa => {this.receita = caixa});
      }
    }
      update(form: any){
      this.banco.update(form.value, this.routeId);
      this.router.navigate(['']);
      this.util.toastando("Item Atualizado com sucesso", "middle", "medium");
    }
 
  }

  


