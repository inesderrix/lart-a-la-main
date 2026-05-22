import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Projets } from './components/projets/projets';
import { Parcours } from './components/parcours/parcours';
import { Footer } from './components/footer/footer';
import { PROJECTS } from './services/projects';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Projets, Parcours, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio test signal');
  
  readonly projects = PROJECTS;
}
