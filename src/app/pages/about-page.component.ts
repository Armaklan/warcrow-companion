import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ labels.menu.about }}</h1>

    <section class="about">
      <p>
        Warcrow Companion is an open source application develop by Lionel Zuber &lt;Armaklan&gt;.
        You can create issue (<a href="https://github.com/Armaklan/warcrow-companion/issues" target="_blank" rel="noopener noreferrer">link</a>)
        and contribute to it in Github Platform
        (<a href="https://github.com/Armaklan/warcrow-companion/" target="_blank" rel="noopener noreferrer">link</a>).
      </p>
      <p>
        Feel free to comment and suggest ideas!
      </p>
      <p>
        <a href="privacy-policy.html" target="_blank">{{ labels.menu.privacy }}</a>
      </p>
    </section>
  `,
  styles: [`
    .about { max-width: 920px; }
    .about a { color: #1a73e8; text-decoration: none; }
    .about a:hover { text-decoration: underline; }
  `]
})
export class AboutPageComponent {
  private lang = inject(LanguageService);
  get labels() { return this.lang.data.LABEL; }
}
