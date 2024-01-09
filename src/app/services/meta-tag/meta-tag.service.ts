import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageData } from '../../models/page-data';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  private metaService = inject(Meta);
  private titleService = inject(Title);

  public setTags(pageData: PageData): void {
    const nicheShackUrl = 'https://www.nicheshack.com/'

    this.titleService.setTitle('');
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("name='twitter:title'");
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("name='twitter:description'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("name='twitter:image'");

    // Title
    if (pageData.title) {
      const title = pageData.title.includes('Niche Shack') ? pageData.title : pageData.title + ' - Niche Shack';

      this.titleService.setTitle(title);
      this.metaService.addTag({ property: 'og:title', content: title });
      this.metaService.addTag({ name: 'twitter:title', content: title });
    }


    // Description
    if (pageData.description) {
      this.metaService.addTag({ name: 'description', content: pageData.description });
      this.metaService.addTag({ property: 'og:description', content: pageData.description });
      this.metaService.addTag({ name: 'twitter:description', content: pageData.description });
    }


    // Url
    if (pageData.url) {
      this.metaService.addTag({ property: 'og:url', content: nicheShackUrl + pageData.url });
    }


    // Image
    if (pageData.image) {
      this.metaService.addTag({ property: 'og:image', content: nicheShackUrl + 'assets/' + pageData.image });
      this.metaService.addTag({ name: 'twitter:image', content: nicheShackUrl + 'assets/' + pageData.image });
    }
  }
}