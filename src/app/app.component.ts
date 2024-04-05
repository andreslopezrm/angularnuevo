import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  name = signal<string>('Pruebas')

  ngOnInit(): void {
    this.#title.setTitle('Página de Inicio - Mi Sitio Web');
    this.#meta.addTag({ name: 'description', content: 'Este es un artículo sobre optimización SEO en Angular.' });
    this.#meta.addTag({ name: 'keywords', content: 'Angular, SEO, meta etiquetas, optimización' });
  }
}
