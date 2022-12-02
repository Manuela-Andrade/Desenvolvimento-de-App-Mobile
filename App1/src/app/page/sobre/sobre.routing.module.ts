import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SobrePage } from "./sobre.page";


//Variável que contém o caminho para o componente( page que será carregado nessa rota filha)
const routes: Routes = [
    //Rotas simples
    {path: '', component: SobrePage}
];

@NgModule({

    //RouterModule possui às ferramentas para criação de rotas
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SobrePageRoutingModule{

}