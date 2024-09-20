import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SegundoComponenteComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
  mensaje = "hola a todos";

}
