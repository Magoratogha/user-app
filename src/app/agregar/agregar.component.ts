import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  name = '';
  email = '';
  mensaje = '';

  constructor(private userService: UserService) {}

  guardar() {
    const nuevo: User = { name: this.name, email: this.email };
    this.userService.createUser(nuevo).subscribe(() => {
      this.mensaje = 'Usuario creado exitosamente';
      this.name = '';
      this.email = '';
    });
  }
}
