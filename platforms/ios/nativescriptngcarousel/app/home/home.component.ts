import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef  } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

//Carousel imports
import { Image } from 'tns-core-modules/ui/image';
const CarouselItem = require('nativescript-carousel').CarouselItem;
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit, AfterViewInit {
    /* ***********************************************************
     * Use the @ViewChild decorator to get a reference to the drawer component.
     * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
     *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
     * Use the sideDrawerTransition property to change the open/close animation of the drawer.
     *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
     * According to guidelines, if you have a drawer on your page, you should always
     * have a button that opens it. Use the showDrawer() function to open the app drawer section.
     *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    // Carousel elements

    @ViewChild('carousel') carousel: ElementRef;

    private imageList : any

    ngAfterViewInit() {
        this.imageList = [
            "~/images/hongkong1081704.jpg",
            "~/images/image-2.jpg",
            "~/images/images.jpeg",
            "~/images/img_fjords.jpg",
        ]

        this.buildCarousel();
    }

    private buildCarousel(): void {
        let count = 0;

        for (let photoUrl of this.imageList) {
            const image = new Image();
            image.width = 300;
            image.height = 800;
            image.src = photoUrl;
            image.className = 'image';
            image.stretch = "aspectFill";
            image.loadMode = "async";

            const item = new CarouselItem();
            item.addChild(image);

            this.carousel.nativeElement.addChild(item);
            count++;

            if (app.android) {
                const adapter = this.carousel.nativeElement.android.getAdapter();

                if (adapter) {
                    adapter.notifyDataSetChanged();
                    this.carousel.nativeElement._pageIndicatorView.setCount(count);

                    if (count === 1) {
                        this.carousel.nativeElement._pageIndicatorView.setSelection(item.android);
                    }
                }
            }
        }

        this.carousel.nativeElement.refresh();
    }

}
