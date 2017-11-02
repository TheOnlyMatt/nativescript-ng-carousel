"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
//Carousel imports
var image_1 = require("tns-core-modules/ui/image");
var CarouselItem = require('nativescript-carousel').CarouselItem;
var app = require("tns-core-modules/application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    /* ***********************************************************
     * Use the sideDrawerTransition property to change the open/close animation of the drawer.
     *************************************************************/
    HomeComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
     * According to guidelines, if you have a drawer on your page, you should always
     * have a button that opens it. Use the showDrawer() function to open the app drawer section.
     *************************************************************/
    HomeComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.imageList = [
            "~/images/hongkong1081704.jpg",
            "~/images/image-2.jpg",
            "~/images/images.jpeg",
            "~/images/img_fjords.jpg",
        ];
    };
    HomeComponent.prototype.onCarouselLoaded = function (args) {
        this.buildCarousel(args.object);
    };
    HomeComponent.prototype.buildCarousel = function (carousel) {
        var count = 0;
        for (var _i = 0, _a = this.imageList; _i < _a.length; _i++) {
            var photoUrl = _a[_i];
            var image = new image_1.Image();
            image.width = 300;
            image.height = 800;
            image.src = photoUrl;
            image.className = 'image';
            image.stretch = "aspectFill";
            image.loadMode = "async";
            var item = new CarouselItem();
            item.addChild(image);
            carousel.addChild(item);
            count++;
            if (app.android) {
                var adapter = carousel.android.getAdapter();
                if (adapter) {
                    adapter.notifyDataSetChanged();
                    carousel._pageIndicatorView.setCount(count);
                    if (count === 1) {
                        carousel._pageIndicatorView.setSelection(item.android);
                    }
                }
            }
        }
        carousel.refresh();
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild('carousel'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "carousel", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw2REFBOEY7QUFDOUYsa0VBQWdGO0FBRWhGLGtCQUFrQjtBQUNsQixtREFBa0Q7QUFDbEQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ25FLGtEQUFvRDtBQU9wRDtJQUFBO0lBbUZBLENBQUM7SUExRUc7O21FQUUrRDtJQUMvRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7bUVBRytEO0lBQy9ELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFRRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtTQUM1QixDQUFBO0lBQ0wsQ0FBQztJQUVNLHdDQUFnQixHQUF2QixVQUF3QixJQUFJO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxxQ0FBYSxHQUFyQixVQUFzQixRQUFRO1FBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLEdBQUcsQ0FBQyxDQUFpQixVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjO1lBQTlCLElBQUksUUFBUSxTQUFBO1lBQ2IsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUM3QixLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUV6QixJQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixLQUFLLEVBQUUsQ0FBQztZQUVSLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNkLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBRTlDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ1YsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUM7b0JBQy9CLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMzRCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1NBQ0o7UUFFRCxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQTVFb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjswREFBQztJQXlCdEM7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7bURBQUM7SUE5Qm5DLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7T0FDVyxhQUFhLENBbUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbi8vQ2Fyb3VzZWwgaW1wb3J0c1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlJztcbmNvbnN0IENhcm91c2VsSXRlbSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1jYXJvdXNlbCcpLkNhcm91c2VsSXRlbTtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgLy8gQ2Fyb3VzZWwgZWxlbWVudHNcblxuICAgIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJykgY2Fyb3VzZWw6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIGltYWdlTGlzdCA6IGFueVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmltYWdlTGlzdCA9IFtcbiAgICAgICAgICAgIFwifi9pbWFnZXMvaG9uZ2tvbmcxMDgxNzA0LmpwZ1wiLFxuICAgICAgICAgICAgXCJ+L2ltYWdlcy9pbWFnZS0yLmpwZ1wiLFxuICAgICAgICAgICAgXCJ+L2ltYWdlcy9pbWFnZXMuanBlZ1wiLFxuICAgICAgICAgICAgXCJ+L2ltYWdlcy9pbWdfZmpvcmRzLmpwZ1wiLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2Fyb3VzZWxMb2FkZWQoYXJncyl7XG5cbiAgICAgICAgdGhpcy5idWlsZENhcm91c2VsKGFyZ3Mub2JqZWN0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQ2Fyb3VzZWwoY2Fyb3VzZWwpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBwaG90b1VybCBvZiB0aGlzLmltYWdlTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLndpZHRoID0gMzAwO1xuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gODAwO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGhvdG9Vcmw7XG4gICAgICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgaW1hZ2Uuc3RyZXRjaCA9IFwiYXNwZWN0RmlsbFwiO1xuICAgICAgICAgICAgaW1hZ2UubG9hZE1vZGUgPSBcImFzeW5jXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2Fyb3VzZWxJdGVtKCk7XG4gICAgICAgICAgICBpdGVtLmFkZENoaWxkKGltYWdlKTtcblxuICAgICAgICAgICAgY2Fyb3VzZWwuYWRkQ2hpbGQoaXRlbSk7XG4gICAgICAgICAgICBjb3VudCsrO1xuXG4gICAgICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFwdGVyID0gY2Fyb3VzZWwuYW5kcm9pZC5nZXRBZGFwdGVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLm5vdGlmeURhdGFTZXRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcm91c2VsLl9wYWdlSW5kaWNhdG9yVmlldy5zZXRDb3VudChjb3VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbC5fcGFnZUluZGljYXRvclZpZXcuc2V0U2VsZWN0aW9uKGl0ZW0uYW5kcm9pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYXJvdXNlbC5yZWZyZXNoKCk7XG4gICAgfVxuXG59XG4iXX0=