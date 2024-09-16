import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarcacoesListaComponent } from "../../components/marcacoes-lista/marcacoes-lista.component";
import { AnimaisListaComponent } from "../../components/animais-lista/animais-lista.component";
import { TutoresListaComponent } from "../../components/tutores-lista/tutores-lista.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterLink, MarcacoesListaComponent, AnimaisListaComponent, TutoresListaComponent, NavbarComponent]
})
export class HomeComponent {

}
