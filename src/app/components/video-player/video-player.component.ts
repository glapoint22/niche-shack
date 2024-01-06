import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'ns-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  @ViewChild('iframe') private iframe!: ElementRef<HTMLIFrameElement>;
  @Output() public onClose: EventEmitter<void> = new EventEmitter();

  private renderer: Renderer2 = inject(Renderer2);
  private el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private body!: HTMLElement;

  ngOnInit() {
    // Initialize the body element reference
    this.body = this.el.nativeElement.ownerDocument.body;
  }


  public playYouTube(videoId: string, youTube: any): void {

    this.renderer.setStyle(this.body, 'overflow', 'hidden');

    this.iframe.nativeElement.src = 'https://www.youtube.com/embed/' + videoId + '?enablejsapi=1';

    const youTubePlayer = new youTube.Player(this.iframe.nativeElement, {
      events: {
        'onReady': () => {
          youTubePlayer.playVideo();
        }
      }
    });
  }


  protected close(): void {
    this.renderer.setStyle(this.body, 'overflow', 'auto');
    this.onClose.emit();
  }
}