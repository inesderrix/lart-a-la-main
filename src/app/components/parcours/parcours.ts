import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcoursItem } from '../../services/models';
import { PARCOURS_ITEMS } from '../../services/parcours';

@Component({
  selector: 'app-parcours',
  imports: [CommonModule],
  templateUrl: './parcours.html',
  styleUrls: ['./parcours.scss']
})
export class Parcours {
  parcoursItems = PARCOURS_ITEMS;
  
  get educationItems(): ParcoursItem[] {
    return this.parcoursItems.filter(item => item.type === 'education');
  }
  
  get experienceItems(): ParcoursItem[] {
    return this.parcoursItems.filter(item => item.type === 'experience');
  }
}
