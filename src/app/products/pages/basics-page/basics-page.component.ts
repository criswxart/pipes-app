import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'cristian';
  public nameUpper: string = 'CRISTIAN';
  public fullName: string = 'CrIsTiAn';

  public customDate = new Date();

}
