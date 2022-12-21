import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    
    private loading: LoadingController,

    private toatsController: ToastController

  ) { }


  async carregando(message: string, duration: number){
    const load = this.loading.create({
      mode: 'ios',
      message,
      duration

    });

    (await load).present(); 
    }

    // Método do toast - Exibe uma mensagem 
    async toastando(message: string, position: "top" | "middle" | "bottom", color: string){
      const toastei = this.toatsController.create({
        message,
        position,
        duration: 2000,
        color
      });

      (await toastei).present();

      setTimeout(this.refresh, 2000);
    }

    refresh(){
      location.reload();
    }
  }