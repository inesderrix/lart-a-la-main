import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetCard } from '../projet-card/projet-card';
import { Project } from '../../services/models';
import { CATEGORIES } from '../../services/projects';

@Component({
  selector: 'app-projets',
  imports: [CommonModule, ProjetCard],
  templateUrl: './projets.html',
  styleUrl: './projets.scss'
})
export class Projets {
  @Input() projects: Project[] = [];
  categories = CATEGORIES;
  selectedCategory = 'Tout';
  selectedProject: Project | null = null;
  isModalOpen = false;
  currentImageIndex = 0;

  mobilePageSize = 6;
  mobileVisible = 6;
  isMobile = window.innerWidth <= 640;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 640;
  }

  get filteredProjects(): Project[] {
    const all = this.selectedCategory === 'Tout'
      ? this.projects
      : this.projects.filter(p => p.category === this.selectedCategory);

    // reset visible quand on change de catégorie
    return all;
  }

  get visibleProjects(): Project[] {
    if (!this.isMobile) return this.filteredProjects;
    return this.filteredProjects.slice(0, this.mobileVisible);
  }

  get hasMore(): boolean {
    return this.isMobile && this.mobileVisible < this.filteredProjects.length;
  }

  loadMore(): void {
    this.mobileVisible += this.mobilePageSize;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.mobileVisible = this.mobilePageSize; // reset au changement de filtre
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    this.currentImageIndex = 0;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) this.currentImageIndex--;
  }

  nextImage(): void {
    if (this.selectedProject?.images && this.currentImageIndex < this.selectedProject.images.length - 1) {
      this.currentImageIndex++;
    }
  }
}