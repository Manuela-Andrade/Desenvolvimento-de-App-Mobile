import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  routeId = null;
  lista: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
    ) { }

  ngOnInit() {
    this.routeId = this.activatedRoute.snapshot.params['id'];
   
    if(this.routeId){
      this.banco.getOneReceita(this.routeId).subscribe(results => {this.lista = results});
    }
  }

  update(form: any){
    this.banco.atualizarReceita(form.value, this.routeId);
    this.router.navigate(['']);
    this.util.toastando("Receita atualizada!", "middle", "medium");
  }

}
