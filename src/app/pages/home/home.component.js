"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Ugo on 30/03/2017.
 */
var core_1 = require("@angular/core");
var request_service_1 = require("../../services/request.service");
var config_1 = require("../../config/config");
var HomeComponent = (function () {
    function HomeComponent(requestService) {
        this.requestService = requestService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.requestService.getJoueurs().subscribe(function (joueurs) { return console.log(joueurs); });
        //A corriger, null pointer pour utiliser jquery
        /*$('.matchAVenir').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
        });*/
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: '/app/pages/home/home.html',
        providers: [request_service_1.RequestService, config_1.Config]
    }),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map