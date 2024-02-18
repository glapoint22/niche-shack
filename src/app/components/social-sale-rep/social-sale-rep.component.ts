import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaTagService } from '../../services/meta-tag/meta-tag.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ns-social-sale-rep',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './social-sale-rep.component.html',
  styleUrl: './social-sale-rep.component.scss'
})
export class SocialSaleRepComponent {
  protected hoplink: string = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=jobofferlivechatassistant';
  private route = inject(ActivatedRoute);
  private param!: string | null;
  private metaTagService = inject(MetaTagService);
  protected heading!: string;
  protected keyword!: string;

  ngOnInit() {
    this.param = this.route.snapshot.paramMap.get('id');

    switch (this.param) {
      case 'chatjobfromhome':
        this.heading = 'Chat Job From Home';
        this.keyword = 'chat job from home';

        this.metaTagService.setTags({
          title: 'Chat Job From Home',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/chatjobfromhome',
        });
        break;

      case 'workfromhomechat':
        this.heading = 'Work From Home Chat';
        this.keyword = 'work from home chat job';

        this.metaTagService.setTags({
          title: 'Work From Home Chat',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/workfromhomechat',
        });
        break;

      case 'onlinechatjob':
        this.heading = 'Online Chat Job';
        this.keyword = 'online chat job';

        this.metaTagService.setTags({
          title: 'Online Chat Job',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/onlinechatjob',
        });
        break;

      case 'onlinechatassistantjob':
        this.heading = 'Online Chat Assistant Job';
        this.keyword = 'online chat assistant job';

        this.metaTagService.setTags({
          title: 'Online Chat Assistant Job',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/onlinechatassistantjob',
        });
        break;

      case 'livechatassistantjob':
        this.heading = 'Live Chat Assistant Job';
        this.keyword = 'live chat assistant job';

        this.metaTagService.setTags({
          title: 'Live Chat Assistant Job',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/livechatassistantjob',
        });
        break;

      case 'shopifychatassistantjob':
        this.heading = 'Shopify Chat Assistant Job';
        this.keyword = 'Shopify chat assistant job';
        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=shopifyassistantjob';

        this.metaTagService.setTags({
          title: 'Shopify Chat Assistant Job',
          description: 'You will log in to the Shopify store account of the business you are working for and reply to questions coming in from the live chat.',
          url: 'socialsalerep/shopifychatassistantjob',
        });
        break;


      case 'facebookchatassistant':
        this.heading = 'Facebook Chat Assistant';
        this.keyword = 'Facebook chat assistant job';
        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=facebookchatassistant';
        
        this.metaTagService.setTags({
          title: 'Facebook Chat Assistant',
          description: 'You will be paid to login to the businesses Facebook account and respond to frequently asked questions.',
          url: 'socialsalerep/facebookchatassistant',
        });
        break;


      case 'websitechatassistant':
        this.heading = 'Website Chat Assistant';
        this.keyword = 'website chat assistant job';
        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=websitechatassistantjob';
        
        this.metaTagService.setTags({
          title: 'Website Chat Assistant',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/websitechatassistant',
        });
        break;


      case 'perminutelivechatjob':
        this.heading = '$0.50 Per Minute Live Chat Job';
        this.keyword = '$0.50 per minute live chat job';
        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=perminutelivechatjob';

        this.metaTagService.setTags({
          title: '$0.50 Per Minute Live Chat Job',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/perminutelivechatjob',
        });
        break;


      case 'chatangrycustomers':
        this.heading = 'Chat to Angry Customers Job';
        this.keyword = 'chat to angry customers job';
        this.hoplink = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=chatangrycustomers';

        this.metaTagService.setTags({
          title: 'Chat to Angry Customers Job',
          description: 'You will be paid to reply to live chat messages on a business\'s website or social media accounts.',
          url: 'socialsalerep/chatangrycustomers',
        });
        break;

    }

  }

}
