"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var CarouselItem = require('nativescript-carousel').CarouselItem;
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
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQUNoRyw2REFBOEY7QUFDOUYsa0VBQWdGO0FBSWhGLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQVFuRTtJQUFBO0lBZ0ZBLENBQUM7SUF2RUc7O21FQUUrRDtJQUMvRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7bUVBRytEO0lBQy9ELHlDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFyQm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFrQixnQ0FBc0I7MERBQUM7SUFMcEQsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQztPQUNXLGFBQWEsQ0FnRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztBQWhGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmICB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuLy9DYXJvdXNlbCBpbXBvcnRzXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UnO1xuY29uc3QgQ2Fyb3VzZWxJdGVtID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWNhcm91c2VsJykuQ2Fyb3VzZWxJdGVtO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQvKiwgQWZ0ZXJWaWV3SW5pdCovIHtcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFVzZSB0aGUgQFZpZXdDaGlsZCBkZWNvcmF0b3IgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBkcmF3ZXIgY29tcG9uZW50LlxuICAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFVzZSB0aGUgc2lkZURyYXdlclRyYW5zaXRpb24gcHJvcGVydHkgdG8gY2hhbmdlIHRoZSBvcGVuL2Nsb3NlIGFuaW1hdGlvbiBvZiB0aGUgZHJhd2VyLlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQWNjb3JkaW5nIHRvIGd1aWRlbGluZXMsIGlmIHlvdSBoYXZlIGEgZHJhd2VyIG9uIHlvdXIgcGFnZSwgeW91IHNob3VsZCBhbHdheXNcbiAgICAgKiBoYXZlIGEgYnV0dG9uIHRoYXQgb3BlbnMgaXQuIFVzZSB0aGUgc2hvd0RyYXdlcigpIGZ1bmN0aW9uIHRvIG9wZW4gdGhlIGFwcCBkcmF3ZXIgc2VjdGlvbi5cbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgLy8gQ2Fyb3VzZWwgZWxlbWVudHNcbi8qXG4gICAgQFZpZXdDaGlsZCgnY2Fyb3VzZWwnKSBjYXJvdXNlbDogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgaW1hZ2VMaXN0IDogYW55XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VMaXN0ID0gW1xuICAgICAgICAgICAgXCJ+L2ltYWdlcy9ob25na29uZzEwODE3MDQuanBnXCIsXG4gICAgICAgICAgICBcIn4vaW1hZ2VzL2ltYWdlLTIuanBnXCIsXG4gICAgICAgICAgICBcIn4vaW1hZ2VzL2ltYWdlcy5qcGVnXCIsXG4gICAgICAgICAgICBcIn4vaW1hZ2VzL2ltZ19mam9yZHMuanBnXCIsXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLmJ1aWxkQ2Fyb3VzZWwoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJ1aWxkQ2Fyb3VzZWwoKTogdm9pZCB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcGhvdG9Vcmwgb2YgdGhpcy5pbWFnZUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWFnZS53aWR0aCA9IDMwMDtcbiAgICAgICAgICAgIGltYWdlLmhlaWdodCA9IDgwMDtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHBob3RvVXJsO1xuICAgICAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gJ2ltYWdlJztcbiAgICAgICAgICAgIGltYWdlLnN0cmV0Y2ggPSBcImFzcGVjdEZpbGxcIjtcbiAgICAgICAgICAgIGltYWdlLmxvYWRNb2RlID0gXCJhc3luY1wiO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gbmV3IENhcm91c2VsSXRlbSgpO1xuICAgICAgICAgICAgaXRlbS5hZGRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubmF0aXZlRWxlbWVudC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgIGNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLmNhcm91c2VsLm5hdGl2ZUVsZW1lbnQuYW5kcm9pZC5nZXRBZGFwdGVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLm5vdGlmeURhdGFTZXRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubmF0aXZlRWxlbWVudC5fcGFnZUluZGljYXRvclZpZXcuc2V0Q291bnQoY291bnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5uYXRpdmVFbGVtZW50Ll9wYWdlSW5kaWNhdG9yVmlldy5zZXRTZWxlY3Rpb24oaXRlbS5hbmRyb2lkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwubmF0aXZlRWxlbWVudC5yZWZyZXNoKCk7XG4gICAgfSovXG5cbn1cbiJdfQ==