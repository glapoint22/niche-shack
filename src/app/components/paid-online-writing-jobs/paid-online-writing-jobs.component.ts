import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaTagService } from '../../services/meta-tag/meta-tag.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ns-paid-online-writing-jobs',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './paid-online-writing-jobs.component.html',
  styleUrl: './paid-online-writing-jobs.component.scss'
})
export class PaidOnlineWritingJobsComponent {
  protected route = inject(ActivatedRoute);
  protected param!: string | null;
  protected hoplink!: string;
  private metaTagService = inject(MetaTagService);
  protected header1!: string;
  protected text!: string;

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('id');

    switch (this.param) {
      case 'articlewriters':
        this.header1 ='Article Writing Jobs';
        this.text = 'article writing job';

        this.metaTagService.setTags({
          title: 'PaidOnlineWritingJobs - Article Writers',
          description: 'Hiring for entry-level article writing positions from all countries.',
          url: 'paidonlinewritingjobs/articlewriters',
        });

        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=articlewriters';
        break;

        case 'writeblogpost':
          this.header1 ='Blog Post Jobs';
          this.text = 'blog post job';
  
          this.metaTagService.setTags({
            title: 'PaidOnlineWritingJobs - Write Blog Post',
            description: 'Looking for new writers for entry-level blog writing jobs.',
            url: 'paidonlinewritingjobs/writeblogpost',
          });
  
          this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=writeblogpost';
          break;


          case 'onlinewriter':
          this.header1 ='Online Writing Jobs';
          this.text = 'online writing job';
  
          this.metaTagService.setTags({
            title: 'PaidOnlineWritingJobs - Online Writer',
            description: 'These online writing jobs are open to everyone, regardless of experience, and welcome applications from all countries.',
            url: 'paidonlinewritingjobs/onlinewriter',
          });
  
          this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=onlinewriter';
          break;



          case 'freelancewriter':
          this.header1 ='Freelance Writing Jobs';
          this.text = 'freelance writing job';
  
          this.metaTagService.setTags({
            title: 'PaidOnlineWritingJobs - Freelance Writer',
            description: 'These freelance writing jobs are open to everyone, regardless of experience, and welcome applications from all countries.',
            url: 'paidonlinewritingjobs/freelancewriter',
          });
  
          this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=onlinewriter';
          break;
    }
  }
}