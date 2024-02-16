import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ns-live-chat-jobs',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './live-chat-jobs.component.html',
  styleUrl: './live-chat-jobs.component.scss'
})
export class LiveChatJobsComponent {
  protected hoplink: string = 'https://hop.clickbank.net/?affiliate=nshack&vendor=socialsrep&pid=joblandingpage&ifso=jobofferlivechatassistant';
}