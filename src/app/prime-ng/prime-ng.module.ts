import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
 exports:[
  ButtonModule,
  CardModule,
  FieldsetModule,
  MenubarModule,
  PanelModule,
//   MenuModule,
 ]
})
export class PrimeNgModule { }
