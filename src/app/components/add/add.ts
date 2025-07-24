import { Component } from '@angular/core';
import { Http } from '../../services/http';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  name: string = '';
  email: string = '';

  constructor(private httpService: Http) {}

  addUser(): void {
    this.httpService.add({ name: this.name, email: this.email }).subscribe();
  }
}
