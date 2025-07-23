import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './portal.component.html'
})
export class PortalComponent {}
