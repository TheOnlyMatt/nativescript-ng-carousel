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
        this.buildCarousel();
    };
    HomeComponent.prototype.buildCarousel = function () {
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
            this.carousel.nativeElement.addChild(item);
            count++;
            if (app.android) {
                var adapter = this.carousel.nativeElement.android.getAdapter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw2REFBOEY7QUFDOUYsa0VBQWdGO0FBRWhGLGtCQUFrQjtBQUNsQixtREFBa0Q7QUFDbEQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ25FLGtEQUFvRDtBQU9wRDtJQUFBO0lBZ0ZBLENBQUM7SUF2RUc7O21FQUUrRDtJQUMvRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7bUVBRytEO0lBQy9ELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFRRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLDhCQUE4QjtZQUM5QixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtTQUM1QixDQUFBO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLEdBQUcsQ0FBQyxDQUFpQixVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjO1lBQTlCLElBQUksUUFBUSxTQUFBO1lBQ2IsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUMxQixLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUNyQixLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUM3QixLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUV6QixJQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLEtBQUssRUFBRSxDQUFDO1lBRVIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUVqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNWLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRS9ELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzlFLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUF6RW9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUF5QnRDO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO21EQUFDO0lBOUJuQyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO09BQ1csYUFBYSxDQWdGekI7SUFBRCxvQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG4vL0Nhcm91c2VsIGltcG9ydHNcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZSc7XG5jb25zdCBDYXJvdXNlbEl0ZW0gPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtY2Fyb3VzZWwnKS5DYXJvdXNlbEl0ZW07XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIC8vIENhcm91c2VsIGVsZW1lbnRzXG5cbiAgICBAVmlld0NoaWxkKCdjYXJvdXNlbCcpIGNhcm91c2VsOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpbWFnZUxpc3QgOiBhbnlcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbWFnZUxpc3QgPSBbXG4gICAgICAgICAgICBcIn4vaW1hZ2VzL2hvbmdrb25nMTA4MTcwNC5qcGdcIixcbiAgICAgICAgICAgIFwifi9pbWFnZXMvaW1hZ2UtMi5qcGdcIixcbiAgICAgICAgICAgIFwifi9pbWFnZXMvaW1hZ2VzLmpwZWdcIixcbiAgICAgICAgICAgIFwifi9pbWFnZXMvaW1nX2Zqb3Jkcy5qcGdcIixcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuYnVpbGRDYXJvdXNlbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRDYXJvdXNlbCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBwaG90b1VybCBvZiB0aGlzLmltYWdlTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLndpZHRoID0gMzAwO1xuICAgICAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gODAwO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGhvdG9Vcmw7XG4gICAgICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgaW1hZ2Uuc3RyZXRjaCA9IFwiYXNwZWN0RmlsbFwiO1xuICAgICAgICAgICAgaW1hZ2UubG9hZE1vZGUgPSBcImFzeW5jXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgQ2Fyb3VzZWxJdGVtKCk7XG4gICAgICAgICAgICBpdGVtLmFkZENoaWxkKGltYWdlKTtcblxuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5uYXRpdmVFbGVtZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuY2Fyb3VzZWwubmF0aXZlRWxlbWVudC5hbmRyb2lkLmdldEFkYXB0ZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIubm90aWZ5RGF0YVNldENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5uYXRpdmVFbGVtZW50Ll9wYWdlSW5kaWNhdG9yVmlldy5zZXRDb3VudChjb3VudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsLm5hdGl2ZUVsZW1lbnQuX3BhZ2VJbmRpY2F0b3JWaWV3LnNldFNlbGVjdGlvbihpdGVtLmFuZHJvaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJvdXNlbC5uYXRpdmVFbGVtZW50LnJlZnJlc2goKTtcbiAgICB9XG5cbn1cbiJdfQ==