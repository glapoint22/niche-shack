import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetaTagService } from '../../services/meta-tag/meta-tag.service';

@Component({
    selector: 'ns-teds-woodworking',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './teds-woodworking.component.html',
    styleUrl: './teds-woodworking.component.scss'
})
export class TedsWoodworkingComponent {
    protected route = inject(ActivatedRoute);
    protected heading!: string;
    protected item!: string;
    protected upperCaseItem!: string;
    protected param!: string | null;
    protected isDefault!: boolean;
    protected hoplink: string = 'https://df831m-al8wrbwcqi81iv6sfb2.hop.clickbank.net';
    private metaTagService = inject(MetaTagService);

    ngOnInit() {
        this.param = this.route.snapshot.paramMap.get('id');

        switch (this.param) {
            case 'adirondack-chair-plans':
                this.heading = 'So You Want to Build an Adirondack Chair?';
                this.item = 'Adirondack chair';
                this.upperCaseItem = 'Adirondack Chair';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Adirondack Chair Plans',
                    description: 'Build your own Adirondack chairs with these expert plans. Easy instructions for timeless, comfortable outdoor seating. Build your backyard oasis today!',
                    url: 'tedswoodworking/adirondack-chair-plans',
                });
                break;

            case 'barn-house-plans':
                this.heading = 'So You Want to Build a Barn House?';
                this.item = 'barn house';
                this.upperCaseItem = 'Barn House';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Barn House Plans',
                    description: 'Discover expert barn house plans to create a functional and beautiful space. Start building your dream barn house today!',
                    url: 'tedswoodworking/barn-house-plans',
                });
                break;

            case 'bee-hive-plans':
                this.heading = 'So You Want to Build a Bee Hive?';
                this.item = 'bee hive';
                this.upperCaseItem = 'Bee Hive';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Bee Hive Plans',
                    description: 'Build your own bee hive with these detailed plans. Support beekeeping and enjoy fresh honey from your backyard.',
                    url: 'tedswoodworking/bee-hive-plans',
                });
                break;

            case 'bird-feeder-plans':
                this.heading = 'So You Want to Build a Bird Feeder?';
                this.item = 'bird feeder';
                this.upperCaseItem = 'Bird Feeder';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Bird Feeder Plans',
                    description: 'Attract beautiful birds to your garden. Build a unique bird feeder with these comprehensive plans for bird enthusiasts.',
                    url: 'tedswoodworking/bird-feeder-plans',
                });
                break;

            case 'bird-house-plans':
                this.heading = 'So You Want to Build a Bird House?';
                this.item = 'bird house';
                this.upperCaseItem = 'Bird House';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Bird House Plans',
                    description: 'Construct charming bird houses with these detailed plans. Create a welcoming space for feathered friends in your backyard.',
                    url: 'tedswoodworking/bird-house-plans',
                });
                break;

            case 'bookcase-plans':
                this.heading = 'So You Want to Build a Bookcase?';
                this.item = 'bookcase';
                this.upperCaseItem = 'Bookcase';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Bookcase Plans',
                    description: 'Build stylish and functional bookcases to display your collection. Transform your space with these expertly crafted plans.',
                    url: 'tedswoodworking/book-case-plans',
                });
                break;

            case 'cabin-plans':
                this.heading = 'So You Want to Build a Cabin?';
                this.item = 'cabin';
                this.upperCaseItem = 'Cabin';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Cabin Plans',
                    description: 'Create a cozy retreat with these cabin plans. Experience the charm of a rustic cabin with these detailed woodworking guides.',
                    url: 'tedswoodworking/cabin-plans',
                });
                break;

            case 'cabinet-plans':
                this.heading = 'So You Want to Build a Cabinet?';
                this.item = 'cabinet';
                this.upperCaseItem = 'Cabinet';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Cabinet Plans',
                    description: 'Upgrade your living spaces with custom cabinets. Discover detailed plans to build functional and stylish cabinets for every room.',
                    url: 'tedswoodworking/cabinet-plans',
                });
                break;

            case 'carport-plans':
                this.heading = 'So You Want to Build a Carport?';
                this.item = 'carport';
                this.upperCaseItem = 'Carport';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Carport Plans',
                    description: 'Build a sturdy carport to protect your vehicles from the elements. Explore these comprehensive plans for a functional and stylish carport.',
                    url: 'tedswoodworking/carport-plans',
                });
                break;

            case 'cat-house-plans':
                this.heading = 'So You Want to Build a Cat House?';
                this.item = 'cat house';
                this.upperCaseItem = 'Cat House';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Cat House Plans',
                    description: 'Craft a comfortable and stylish cat house with these detailed plans. Spoil your furry friend with a cozy retreat of their own.',
                    url: 'tedswoodworking/cat-house-plans',
                });
                break;

            case 'chicken-coop-plans':
                this.heading = 'So You Want to Build a Chicken Coop?';
                this.item = 'chicken coop';
                this.upperCaseItem = 'Chicken Coop';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Chicken Coop Plans',
                    description: 'Build a functional and spacious chicken coop with these expert plans. Provide a comfortable home for your feathered friends.',
                    url: 'tedswoodworking/chicken-coop-plans',
                });
                break;

            case 'coffee-table-plans':
                this.heading = 'So You Want to Build a Coffee Table?';
                this.item = 'coffee table';
                this.upperCaseItem = 'Coffee Table';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Coffee Table Plans',
                    description: 'Craft a unique and stylish coffee table with these detailed plans. Elevate your living room with a centerpiece you build yourself.',
                    url: 'tedswoodworking/coffee-table-plans',
                });
                break;

            case 'deck-plans':
                this.heading = 'So You Want to Build a Deck?';
                this.item = 'deck';
                this.upperCaseItem = 'Deck';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Deck Plans',
                    description: 'Build a stunning deck with these expert plans. Create an outdoor oasis where you can relax and entertain with family and friends.',
                    url: 'tedswoodworking/deck-plans',
                });
                break;

            case 'desk-plans':
                this.heading = 'So You Want to Build a Desk?';
                this.item = 'desk';
                this.upperCaseItem = 'Desk';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Desk Plans',
                    description: 'Create a functional and inspiring workspace with these desk plans. Boost your productivity with a desk crafted to meet your needs.',
                    url: 'tedswoodworking/desk-plans',
                });
                break;

            case 'dog-house-plans':
                this.heading = 'So You Want to Build a Dog House?';
                this.item = 'dog house';
                this.upperCaseItem = 'Dog House';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Dog House Plans',
                    description: 'Build a cozy and stylish dog house for your furry friend. Discover detailed plans to create a comfortable retreat for your pup.',
                    url: 'tedswoodworking/dog-house-plans',
                });
                break;

            case 'dollhouse-plans':
                this.heading = 'So You Want to Build a Dollhouse?';
                this.item = 'dollhouse';
                this.upperCaseItem = 'Dollhouse';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Dollhouse Plans',
                    description: 'Build a charming dollhouse with these detailed plans. Create lasting memories with a handcrafted dollhouse for play and display.',
                    url: 'tedswoodworking/dollhouse-plans',
                });
                break;

            case 'dresser-plans':
                this.heading = 'So You Want to Build a Dresser?';
                this.item = 'dresser';
                this.upperCaseItem = 'Dresser';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Dresser Plans',
                    description: 'Build a stylish and functional dresser to organize your space. Discover detailed plans for creating a beautiful storage solution.',
                    url: 'tedswoodworking/dresser-plans',
                });
                break;

            case 'garage-plans':
                this.heading = 'So You Want to Build a Garage?';
                this.item = 'garage';
                this.upperCaseItem = 'Garage';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Garage Plans',
                    description: 'Build a spacious and organized garage with these expert plans. Expand your storage and create a functional space for your vehicles and tools.',
                    url: 'tedswoodworking/garage-plans',
                });
                break;

            case 'gazebo-plans':
                this.heading = 'So You Want to Build a Gazebo?';
                this.item = 'gazebo';
                this.upperCaseItem = 'Gazebo';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Gazebo Plans',
                    description: 'Create a stunning outdoor retreat with these gazebo plans. Enhance your outdoor living space with a beautifully crafted gazebo.',
                    url: 'tedswoodworking/gazebo-plans',
                });
                break;

            case 'greenhouse-plans':
                this.heading = 'So You Want to Build a Greenhouse?';
                this.item = 'greenhouse';
                this.upperCaseItem = 'Greenhouse';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Greenhouse Plans',
                    description: 'Build a functional and efficient greenhouse with these detailed plans. Grow your own plants and vegetables with a handcrafted greenhouse.',
                    url: 'tedswoodworking/greenhouse-plans',
                });
                break;

            case 'gun-cabinet-plans':
                this.heading = 'So You Want to Build a Gun Cabinet?';
                this.item = 'gun cabinet';
                this.upperCaseItem = 'Gun Cabinet';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Gun Cabinet Plans',
                    description: 'Build a secure and stylish gun cabinet with these expert plans. Safely store your firearms while adding a touch of craftsmanship to your space.',
                    url: 'tedswoodworking/gun-cabinet-plans',
                });
                break;

            case 'horse-barn-plans':
                this.heading = 'So You Want to Build a Horse Barn?';
                this.item = 'horse barn';
                this.upperCaseItem = 'Horse Barn';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Horse Barn Plans',
                    description: 'Build a spacious and comfortable barn for your horses with these expert plans. Provide a secure and cozy home for your equine companions.',
                    url: 'tedswoodworking/horse-barn-plans',
                });
                break;

            case 'pergola-plans':
                this.heading = 'So You Want to Build a Pergola?';
                this.item = 'pergola';
                this.upperCaseItem = 'Pergola';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Pergola Plans',
                    description: 'Create a stunning outdoor space with a beautifully crafted pergola. Elevate your garden with these expertly designed pergola plans.',
                    url: 'tedswoodworking/pergola-plans',
                });
                break;

            case 'picnic-table-plans':
                this.heading = 'So You Want to Build a Picnic Table?';
                this.item = 'picnic table';
                this.upperCaseItem = 'Picnic Table';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Picnic Table Plans',
                    description: 'Build a durable and inviting picnic table for outdoor gatherings. Create lasting memories with friends and family around a handcrafted picnic table.',
                    url: 'tedswoodworking/picnic-table-plans',
                });
                break;

            case 'playhouse-plans':
                this.heading = 'So You Want to Build a Playhouse?';
                this.item = 'playhouse';
                this.upperCaseItem = 'Playhouse';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Playhouse Plans',
                    description: 'Build a magical playhouse for your child with these detailed plans. Spark creativity and provide a space for imaginative play with a handcrafted playhouse.',
                    url: 'tedswoodworking/playhouse-plans',
                });
                break;

            case 'rabbit-hutch-plans':
                this.heading = 'So You Want to Build a Rabbit Hutch?';
                this.item = 'rabbit hutch';
                this.upperCaseItem = 'Rabbit Hutch';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Rabbit Hutch Plans',
                    description: 'Build a comfortable and secure home for your bunnies with these expert plans. Provide a cozy retreat for your furry friends with a handcrafted rabbit hutch.',
                    url: 'tedswoodworking/rabbit-hutch-plans',
                });
                break;

            case 'shed-plans':
                this.heading = 'So You Want to Build a Shed?';
                this.item = 'shed';
                this.upperCaseItem = 'Shed';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Shed Plans',
                    description: 'Build a spacious and organized shed with these expert plans. Maximize your storage space and keep your belongings secure with a handcrafted shed.',
                    url: 'tedswoodworking/shed-plans',
                });
                break;

            case 'small-home-plans':
                this.heading = 'So You Want to Build a Small Home?';
                this.item = 'small home';
                this.upperCaseItem = 'Small Home';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Small Home Plans',
                    description: 'Discover plans for a charming and efficient small home. Live simply with a handcrafted small home that combines functionality and style.',
                    url: 'tedswoodworking/small-home-plans',
                });
                break;

            case 'wooden-boat-plans':
                this.heading = 'So You Want to Build a Wooden Boat?';
                this.item = 'wooden boat';
                this.upperCaseItem = 'Wooden Boat';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Wooden Boat Plans',
                    description: 'Build a classic wooden boat and embark on nautical adventures. Craft your own vessel with these expertly designed wooden boat plans.',
                    url: 'tedswoodworking/wooden-boat-plans',
                });
                break;

            case 'workbench-plans':
                this.heading = 'So You Want to Build a Workbench?';
                this.item = 'workbench';
                this.upperCaseItem = 'Workbench';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Workbench Plans',
                    description: 'Build a sturdy and functional workbench for your projects. Create a dedicated workspace with these expertly crafted workbench plans.',
                    url: 'tedswoodworking/workbench-plans',
                });
                break;


            case 'easy-wood-projects':
                this.heading = 'Looking for Easy Wood Projects to Tackle?';
                this.item = 'project';
                this.upperCaseItem = '';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Easy Wood Projects',
                    description: 'Discover easy wood projects for beginners! Explore simple DIY woodworking ideas & craft beautiful pieces effortlessly.',
                    url: 'tedswoodworking/easy-wood-projects',
                });
                break;

            case 'woodworking-plans':
                this.heading = 'Introducing the Most Extensive Compilation of Woodworking Plans in the World!';
                this.item = 'project';
                this.upperCaseItem = '';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking - Woodworking Plans',
                    description: '',
                    url: 'tedswoodworking/woodworking-plans',
                });
                break;

            default:
                this.isDefault = true;
                this.heading = 'Introducing Ted\'s Woodworking, the World\'s Largest Database of Woodworking Projects!';
                this.item = 'project';
                this.upperCaseItem = '';
                this.metaTagService.setTags({
                    title: 'Ted\'s Woodworking',
                    description: '',
                    url: 'tedswoodworking',
                });

                break;
        }
    }

}
