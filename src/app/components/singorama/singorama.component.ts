import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'ns-singorama',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './singorama.component.html',
  styleUrls: [
    './styles/singorama.component.scss',
    './styles/singorama.component.video-section.scss',
    './styles/singorama.component.product-section.scss',
    './styles/singorama.component.inside-section.scss',
    './styles/singorama.component.learn-section.scss',
    './styles/singorama.component.inner-circle-section.scss',
    './styles/singorama.component.bonus-section.scss'
  ]
})
export class SingoramaComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected heading!: string;
  protected description1!: string;
  protected description2!: string;

  protected ngOnInit(): void {

    switch (this.route.snapshot.queryParamMap.get('type')) {
      case 'range':
        this.heading = 'LEARN TO INCREASE YOUR VOCAL RANGE';
        this.description1 = `Introducing Singorama, your gateway to unlocking the full potential of your voice. Experience 
        rapid transformations as you expand your vocal range by an entire octave or more. This comprehensive program delves 
        into the nuances between your chest and head voices, guiding you to seamlessly blend them into a connected, resonant 
        mixed voice that spans your entire vocal spectrum. Through specialized vocal exercises tailored to fortify your vocal 
        muscles, Singorama empowers you to gain precise control without encountering cracks or breaks, ensuring a smooth, 
        controlled delivery at the peak of your vocal capabilities.`;

        this.description2 = `With its 28 dynamic vocal training audio modules, complemented by a wealth of ebooks, worksheets, 
        and purpose-built tools, Singorama doesn’t merely enhance your vocal range—it revolutionizes your singing prowess. 
        Elevate your performance as you learn to wield better tone, pitch perfection, and enhanced control swiftly and 
        effectively. This holistic approach isn't just about hitting higher notes; it's about crafting a versatile, expressive 
        instrument out of your voice, setting you on a fast track to vocal mastery.`;
        break;

      case 'enhance':
        this.heading = 'ENHANCE YOUR SINGING SKILLS';
        this.description1 = `Singorama stands as the ultimate game-changer for aspiring singers hungry to hone their craft and 
        take their vocal prowess to new heights. In just 10 minutes a day, this powerhouse program revolutionizes the way singers 
        develop their skills, offering a comprehensive toolkit designed to elevate abilities to a professional level. Central to 
        Singorama's arsenal are its 28 meticulously crafted vocal training audio modules. These modules are like gold, meticulously 
        designed to bolster your vocal range, refine tone, nail pitch, and grant absolute control, resulting in rapid and tangible 
        improvements in your singing abilities.`;

        this.description2 = `Yet, Singorama goes beyond just audio modules. It's a treasure trove for aspiring vocalists, providing 
        an extensive array of supplementary resources. From ebooks to specialized tools and worksheets, these complementary materials 
        are crafted to fine-tune every aspect of your singing technique. Whether it's pushing your vocal boundaries, perfecting pitch 
        accuracy, or gaining better command, Singorama offers a holistic platform tailored to expedite your journey toward singing mastery.`;

        break;

      case 'high':
        this.heading = 'HIT THOSE HIGH NOTES EFFORTLESSLY';
        this.description1 = `Singorama is your ticket to effortlessly reaching those high notes and elevating your singing prowess to 
        professional levels. Devote just 10 minutes a day to this comprehensive program and watch your vocal abilities soar. At its core, 
        Singorama offers 28 meticulously crafted vocal training audio modules, each dedicated to expanding your range, refining tone, 
        nailing pitch, and mastering control. Experience swift and striking improvements in your singing capabilities.`;

        this.description2 = `But that's not all. Singorama goes beyond with a treasure trove of supplementary resources: ebooks, worksheets, 
        and specialized tools meticulously chosen to complement your audio training. These materials serve as invaluable assets, providing 
        comprehensive support to refine every aspect of your singing technique. Whether it's about stretching your vocal range, honing pitch 
        precision, or gaining better control, Singorama is the all-inclusive platform designed to fast-track your journey to mastering those 
        high notes effortlessly.`;
        break;

      case 'exercises':
        this.heading = 'MASTER VOCAL WARM-UPS & EXERCISES';
        this.description1 = `Singorama stands out as an unparalleled resource for aspiring vocalists dedicated to honing their singing skills. 
        This program highlights the importance of vocal warm-ups and exercises, offering a pathway to elevate singing abilities with just 10 
        minutes of daily commitment. At its core, Singorama boasts an impressive collection of 28 meticulously crafted vocal training audio 
        modules. These modules serve as a powerhouse, targeting enhancements in vocal range, tone, pitch precision, and control, resulting in 
        swift and noticeable progress in the art of singing.`;

        this.description2 = `In addition to the comprehensive audio training, Singorama goes the extra mile by providing an assortment of 
        supplementary resources. Users unlock access to an invaluable library of ebooks, worksheets, and specialized tools meticulously chosen 
        to complement the audio modules. These extra materials serve as invaluable companions, furnishing comprehensive support for refining 
        diverse aspects of vocal technique. Whether aiming to extend vocal range, perfect pitch accuracy, or master effective vocal warm-ups and 
        exercises, Singorama provides an all-encompassing platform tailored to expedite the journey towards singing mastery.`;
        break;

      default:
        this.heading = 'LEARN TO SING LIKE A PRO';
        this.description1 = `Singorama is the ultimate solution for aspiring singers seeking to elevate their vocal abilities to a 
        professional level. With a commitment of just 10 minutes a day, this comprehensive program empowers individuals to realize 
        their singing ambitions. At its heart, Singorama presents a robust system comprising 28 powerful vocal training audio modules. 
        These modules are meticulously designed to enhance vocal range, tone, pitch, and control, ensuring rapid and noticeable 
        improvements in one's singing abilities.`;

        this.description2 = `Beyond its audio modules, Singorama enriches the learning experience through an array of supplementary 
        resources. Users gain access to a treasure trove of ebooks, worksheets, and specialized tools curated to complement the audio 
        training. These additional materials serve as valuable aids, offering comprehensive support in refining various facets of singing 
        technique. Whether aiming to extend vocal range, perfect pitch accuracy, or achieve better control, Singorama provides an 
        all-encompassing platform tailored to expedite the journey towards singing mastery.`;
        break;
    }
  }
}
