import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaTagService } from '../../services/meta-tag/meta-tag.service';

@Component({
  selector: 'ns-fat-burning-desserts',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './fat-burning-desserts.component.html',
  styleUrl: './fat-burning-desserts.component.scss'
})
export class FatBurningDessertsComponent {
  private route = inject(ActivatedRoute);
  protected param!: string | null;
  private metaTagService = inject(MetaTagService);
  protected heading!: string;

  ngOnInit() {
    const image = 'images/fat-burning-desserts.avif';

    this.param = this.route.snapshot.paramMap.get('id');

    switch (this.param) {
      case 'good-recipes':
        this.heading = 'Good Recipes for Weight Loss';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Elevate your weight loss journey with this free fat-burning desserts ebook, a treasure trove of good recipes for weight loss.',
          url: 'fat-burning-desserts/good-recipes',
          image: image
        });
        break;

      case 'weight-loss-recipes':
        this.heading = 'Weight Loss Recipes';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Explore a world of culinary delights that align with your fitness goals with this free ebook featuring a diverse range of weight loss recipes.',
          url: 'fat-burning-desserts/weight-loss-recipes',
          image: image
        });
        break;

      case 'diet-recipes':
        this.heading = 'Diet Recipes';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Elevate your culinary experience on the path to a healthier lifestyle with this free ebook, brimming with delectable diet recipes.',
          url: 'fat-burning-desserts/diet-recipes',
          image: image
        });
        break;

      case 'free-weight-loss-recipes':
        this.heading = 'Free Weight Loss Recipes';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Embark on a culinary adventure toward a healthier you with this free ebook showcasing a delightful array of free weight loss recipes.',
          url: 'fat-burning-desserts/free-weight-loss-recipes',
          image: image
        });
        break;

      case 'recipes-to-lose-weight':
        this.heading = 'Recipes to Help You Lose Weight';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Uncover the perfect blend of taste and wellness with this free ebook featuring a variety of recipes to help you lose weight.',
          url: 'fat-burning-desserts/recipes-to-lose-weight',
          image: image
        });
        break;

      case 'free-diet-recipes':
        this.heading = 'Free Diet Recipes';

        this.metaTagService.setTags({
          title: this.heading,
          description: 'Explore the world of healthy eating without breaking the bank with this free ebook offering a diverse selection of delicious and nutritious free diet recipes.',
          url: 'fat-burning-desserts/free-diet-recipes',
          image: image
        });
        break;


        default:
          this.heading = 'Fat Burning Desserts';

          this.metaTagService.setTags({
            title: this.heading,
            description: 'Explore the world of healthy eating without breaking the bank with this free ebook offering a diverse selection of delicious and nutritious free diet recipes.',
            url: 'fat-burning-desserts',
            image: image
          });
          break;

    }

  }
}
