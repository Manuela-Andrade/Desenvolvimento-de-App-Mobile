import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Receitas } from 'src/app/model/receita.model';

import { DatabaseService } from 'src/app/servicos/database.service';
import { UtilityService } from 'src/app/servicos/utility.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  imagem = "https://i.pinimg.com/736x/7c/51/28/7c51287d2be5551a718e617b3e447b29.jpg";

  listaReceitas: Receitas[] = [];

  constructor(
    
    private banco: DatabaseService,

    private alertCtrl: AlertController,

    private utility: UtilityService,


  ) {}

  ngOnInit(){
    this.utility.carregando("aguarde", 2000);

    this.banco.getReceita().subscribe(results => this.listaReceitas = results);
  }

  delet(id: number){
    this.banco.delReceita(id);
    this.utility.toastando("Item excluido", "bottom", "danger");


  }

  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Receitas',
      inputs:[
        {
          name: 'receita',
          type: 'text',
          placeholder: 'Informe a Receita'
        },
        {
          name: 'ingredientes',
          type: 'text',
          placeholder: 'Informe os Ingredientes'
        },
        {
          name: 'img',
          type: 'text',
          placeholder: 'http://receita_imagem.com'
        },
        {
          name: 'preparo',
          type: 'text',
          placeholder: 'Informe o preparo'
        },
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
          
        },
        {
          text: 'Cadastrar',
          handler: (form) => {
            let item = {
              receita: form.receita,
              ingredientes: form.ingredientes,
              img: form.img,
              preparo: form.preparo
              
            }

            this.banco.postReceita(item);   
            this.utility.toastando("Item Cadastrado", "top", "success");         
            
          }
        }
      ]
    });

    (await alert).present();
}

}

