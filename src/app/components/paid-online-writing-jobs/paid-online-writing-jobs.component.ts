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
  protected header2!: string;
  protected text!: string;

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('id');

    switch (this.param) {
      case 'articlewriters':
        this.header1 ='Article Writers';
        this.header2 = '$250 per day';
        this.text = 'Hiring for entry-level article writing positions from all countries. These roles don\'t require professional writing experience, but you should have basic English writing skills and the ability to research topics.';

        this.metaTagService.setTags({
          title: 'PaidOnlineWritingJobs - Article Writers',
          description: 'Hiring for entry-level article writing positions from all countries.',
          url: 'paidonlinewritingjobs/articlewriters',
        });

        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=articlewriters';
        break;

        case 'writeblogpost':
          this.header1 ='Write Blog Posts';
          this.header2 = '$35 an Hour';
          this.text = 'Looking for new writers for entry-level blog writing jobs. You\'ll start at $35 per hour with full training provided. Your task is to write short blog posts introducing new products for e-commerce stores.';
  
          this.metaTagService.setTags({
            title: 'PaidOnlineWritingJobs - Write Blog Post',
            description: 'Looking for new writers for entry-level blog writing jobs.',
            url: 'paidonlinewritingjobs/writeblogpost',
          });
  
          this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=writeblogpost';
          break;


          case 'onlinewriter':
          this.header1 ='Online Writer';
          this.header2 = '$25 - $35 an Hour';
          this.text = 'These online writing jobs are open to everyone, regardless of experience, and welcome applications from all countries. You can earn $25 - $35 per hour, depending on your experience and the type of writing job.';
  
          this.metaTagService.setTags({
            title: 'PaidOnlineWritingJobs - Online Writer',
            description: 'These online writing jobs are open to everyone, regardless of experience, and welcome applications from all countries.',
            url: 'paidonlinewritingjobs/onlinewriter',
          });
  
          this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=easywriter&pid=joblandingpage&ifso=onlinewriter';
          break;



          case 'freelancewriter':
          this.header1 ='Freelance Writer';
          this.header2 = '$25 - $35 an Hour';
          this.text = 'These freelance writing jobs are open to everyone, regardless of experience, and welcome applications from all countries. You can earn $25 - $35 per hour, depending on your experience and the type of writing job.';
  
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