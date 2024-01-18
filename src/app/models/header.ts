import { Directive, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "./menu-item";

@Directive()
export abstract class Header {
    protected hoplink!: string;
    protected menuItems: Array<MenuItem> = [];
    protected buttonLabel!: string;
    private menuVisible!: boolean;
    private route = inject(ActivatedRoute);

    protected ngOnInit(): void {
        this.hoplink = this.route.snapshot.data['hoplink'];
    }

    protected toggleMenu(menu: HTMLElement): void {
        if (!this.menuVisible) {
            menu.style.transform = 'translate(0, 0)';
            this.menuVisible = true;
        } else {
            menu.style.transform = 'translate(0, -100%)';
            this.menuVisible = false;
        }
    }
}