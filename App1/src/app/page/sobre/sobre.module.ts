import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { SobrePage } from "./sobre.page";
import { SobrePageRoutingModule } from "./sobre.routing.module";


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      SobrePageRoutingModule
    ],
    declarations: [SobrePage]
  })
  export class HomePageModule {}
  