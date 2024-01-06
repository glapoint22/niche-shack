import { Injectable, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private viewContainerRef!: ViewContainerRef;
  private youTube: any;
  


  public setContainerRef(containerRef: ViewContainerRef) {
    this.viewContainerRef = containerRef;
  }


  public initializeYouTube(): void {
    const _window = window as any;

    // Create the YouTube object
    _window.onYouTubeIframeAPIReady = () => {
      this.youTube = _window.YT;
    }

    const youTubeScriptTag = document.createElement('script');
    youTubeScriptTag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(youTubeScriptTag);
  }


  private async loadVideoPlayer() {
    const { VideoPlayerComponent } = await import('../../components/video-player/video-player.component');

    const componentRef = this.viewContainerRef.createComponent(VideoPlayerComponent);
    componentRef.changeDetectorRef.detectChanges();
    const videoPlayer = componentRef.instance;

    videoPlayer.onClose
      .pipe(take(1))
      .subscribe(() => this.viewContainerRef.clear());

    return videoPlayer;
  }

  public playYouTubeVideo(videoId: string): void {
    this.loadVideoPlayer()
      .then(videoPlayer => {
        videoPlayer.playYouTube(videoId, this.youTube);
      });
  }
}