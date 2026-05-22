import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../services/models';
import { CommonModule } from '@angular/common';

const CATEGORY_COLORS: Record<string, string> = {
  'Couture': 'chip--couture',
  'Crochet': 'chip--crochet',
  'Décoration': 'chip--decoration',
  'Fleurs': 'chip--fleurs',
  'Maquillage FX': 'chip--maquillage',
  'Coiffure': 'chip--coiffure',
};

@Component({
  selector: 'app-projet-card',
  imports: [CommonModule],
  templateUrl: './projet-card.html',
  styleUrls: ['./projet-card.scss'],
})

export class ProjetCard {
  @Input({ required: true }) project!: Project;
  @Output() openModal = new EventEmitter<Project>();

  get chipClass(): string {
    return CATEGORY_COLORS[this.project.category] ?? '';
  }

  onImageClick(): void {
    this.openModal.emit(this.project);
  }
}
