import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  links = [
    { href: '#projets',  label: 'Projets'  },
    { href: '#parcours', label: 'Parcours' },
    { href: '#contact',  label: 'Contact'  },
  ];
}
