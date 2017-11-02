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
        this.imageList = [
            "~/images/hongkong1081704.jpg",
            "~/images/image-2.jpg",
            "~/images/images.jpeg",
            "~/images/img_fjords.jpg",
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw2REFBOEY7QUFDOUYsa0VBQWdGO0FBRWhGLGtCQUFrQjtBQUNsQixtREFBa0Q7QUFDbEQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ25FLGtEQUFvRDtBQU9wRDtJQUxBO1FBcUNZLGNBQVMsR0FBVztZQUN4Qiw4QkFBOEI7WUFDOUIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0Qix5QkFBeUI7U0FDNUIsQ0FBQTtJQTZDTCxDQUFDO0lBekVHOzttRUFFK0Q7SUFDL0QsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELHNCQUFJLCtDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRDs7O21FQUcrRDtJQUMvRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBYUQsdUNBQWUsR0FBZjtJQUNBLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsSUFBSTtRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsUUFBUTtRQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxHQUFHLENBQUMsQ0FBaUIsVUFBYyxFQUFkLEtBQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYztZQUE5QixJQUFJLFFBQVEsU0FBQTtZQUNiLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDbEIsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbkIsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7WUFDckIsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDN0IsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFFekIsSUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXJCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsS0FBSyxFQUFFLENBQUM7WUFFUixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUU5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNWLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUMvQixRQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUU1QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxRQUFRLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztTQUNKO1FBRUQsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUEzRW9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUF5QnRDO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO21EQUFDO0lBOUJuQyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO09BQ1csYUFBYSxDQWtGekI7SUFBRCxvQkFBQztDQUFBLEFBbEZELElBa0ZDO0FBbEZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG4vL0Nhcm91c2VsIGltcG9ydHNcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZSc7XG5jb25zdCBDYXJvdXNlbEl0ZW0gPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtY2Fyb3VzZWwnKS5DYXJvdXNlbEl0ZW07XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAgKiBJdCBpcyB1c2VkIGluIHRoZSBcIm9uRHJhd2VyQnV0dG9uVGFwXCIgZnVuY3Rpb24gYmVsb3cgdG8gbWFuaXB1bGF0ZSB0aGUgZHJhd2VyLlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIEFjY29yZGluZyB0byBndWlkZWxpbmVzLCBpZiB5b3UgaGF2ZSBhIGRyYXdlciBvbiB5b3VyIHBhZ2UsIHlvdSBzaG91bGQgYWx3YXlzXG4gICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIC8vIENhcm91c2VsIGVsZW1lbnRzXG5cbiAgICBAVmlld0NoaWxkKCdjYXJvdXNlbCcpIGNhcm91c2VsOiBFbGVtZW50UmVmO1xuXG4gICAgcHJpdmF0ZSBpbWFnZUxpc3QgOiBhbnlbXSA9IFtcbiAgICAgICAgXCJ+L2ltYWdlcy9ob25na29uZzEwODE3MDQuanBnXCIsXG4gICAgICAgIFwifi9pbWFnZXMvaW1hZ2UtMi5qcGdcIixcbiAgICAgICAgXCJ+L2ltYWdlcy9pbWFnZXMuanBlZ1wiLFxuICAgICAgICBcIn4vaW1hZ2VzL2ltZ19mam9yZHMuanBnXCIsXG4gICAgXVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNhcm91c2VsTG9hZGVkKGFyZ3Mpe1xuXG4gICAgICAgIHRoaXMuYnVpbGRDYXJvdXNlbChhcmdzLm9iamVjdCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZENhcm91c2VsKGNhcm91c2VsKTogdm9pZCB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcGhvdG9Vcmwgb2YgdGhpcy5pbWFnZUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS53aWR0aCA9IDMwMDtcbiAgICAgICAgICAgIGltYWdlLmhlaWdodCA9IDgwMDtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHBob3RvVXJsO1xuICAgICAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gJ2ltYWdlJztcbiAgICAgICAgICAgIGltYWdlLnN0cmV0Y2ggPSBcImFzcGVjdEZpbGxcIjtcbiAgICAgICAgICAgIGltYWdlLmxvYWRNb2RlID0gXCJhc3luY1wiO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmV3IENhcm91c2VsSXRlbSgpO1xuICAgICAgICAgICAgaXRlbS5hZGRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgICAgIGNhcm91c2VsLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgY291bnQrKztcblxuICAgICAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRhcHRlciA9IGNhcm91c2VsLmFuZHJvaWQuZ2V0QWRhcHRlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRlci5ub3RpZnlEYXRhU2V0Q2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICBjYXJvdXNlbC5fcGFnZUluZGljYXRvclZpZXcuc2V0Q291bnQoY291bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwuX3BhZ2VJbmRpY2F0b3JWaWV3LnNldFNlbGVjdGlvbihpdGVtLmFuZHJvaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2Fyb3VzZWwucmVmcmVzaCgpO1xuICAgIH1cblxufVxuIl19