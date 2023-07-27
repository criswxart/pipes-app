import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Cristian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = { 
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernado', 'Hernando', 'Eduardo', 'Melissa','Natalia']
  public clientMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  deleteClient(): void{
    this.clients.shift();
  }

  //keyValue pipe
  public person = {
    name: 'Cristian',
    age: 29,
    address: 'Chile'
  }

  //asyn pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value) )
  );
}
