var app;
(function (app) {
    'use strict';
    app.templateUrlBase = './client/views';
    function Controller(name) {
        return function (clazz) {
            clazz.$name = name;
            app.angularModule.controller(name, clazz);
        };
    }
    app.Controller = Controller;
    function Directive(directive) {
        return function (clazz) {
            app.angularModule.directive(directive.name, function () {
                directive.controller = clazz;
                if (directive.templateUrl) {
                    directive.templateUrl = app.templateUrlBase + directive.templateUrl;
                }
                directive.controllerAs = 'vm';
                if (directive.bindToController) {
                    directive.scope = {};
                }
                return directive;
            });
        };
    }
    app.Directive = Directive;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule = angular.module('app', ['ui.router']);
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    app.angularModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var mainpage = {
                name: 'mainpage',
                url: '/mainpage',
                templateUrl: '/client/views/mainPage.html',
                controller: 'MainPageController',
                controllerAs: 'vm'
            };
            $stateProvider.state(mainpage);
            $urlRouterProvider.otherwise("mainpage");
        }]);
})(app || (app = {}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app;
(function (app) {
    'use strict';
    var MainPageCtrl = (function () {
        function MainPageCtrl() {
            this.internDto = new app.InternDto();
            this.internDto.internID = '113';
            this.internDto.internName = 'Nguyen Quoc Viet';
            this.internDto.internBirthday = '27/06/1999';
            this.internDto.internInCompanyDay = '15/11/2021';
        }
        MainPageCtrl = __decorate([
            app.Controller('MainPageController')
        ], MainPageCtrl);
        return MainPageCtrl;
    }());
    app.MainPageCtrl = MainPageCtrl;
})(app || (app = {}));
var app;
(function (app) {
    'use strict';
    var TempDirectiveTestCtrl = (function () {
        function TempDirectiveTestCtrl() {
        }
        TempDirectiveTestCtrl = __decorate([
            app.Directive({
                name: 'tempDirectiveTest',
                restrict: 'E',
                bindToController: {
                    internDto: "="
                },
                link: function (scope, el, attrs, ctrl) {
                },
                templateUrl: '/temp.html'
            }),
            app.Controller('TempDirectiveTestCtrl')
        ], TempDirectiveTestCtrl);
        return TempDirectiveTestCtrl;
    }());
    app.TempDirectiveTestCtrl = TempDirectiveTestCtrl;
})(app || (app = {}));
var app;
(function (app) {
    var InternDto = (function () {
        function InternDto() {
        }
        return InternDto;
    }());
    app.InternDto = InternDto;
})(app || (app = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21tb24vYW5ub3RhdGlvbi50cyIsImNsaWVudC9jb21tb24vYXBwLm1vZHVsZS50cyIsImNsaWVudC9jb21tb24vYXBwLnJvdXRlLnRzIiwiY2xpZW50L2NvbnRyb2xsZXJzL21haW5QYWdlLmNvbnRyb2xsZXIudHMiLCJjbGllbnQvZGlyZWN0aXZlcy90ZW1wLmRpcmVjdGl2ZS50cyIsImNsaWVudC9kdG8vaW50ZXJuLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLEdBQUcsQ0E2QlQ7QUE3QkQsV0FBTyxHQUFHO0lBQ04sWUFBWSxDQUFDO0lBQ0YsbUJBQWUsR0FBRyxnQkFBZ0IsQ0FBQztJQUU5QyxTQUFnQixVQUFVLENBQUMsSUFBWTtRQUNuQyxPQUFPLFVBQVUsS0FBVTtZQUN2QixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFBLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFMZSxjQUFVLGFBS3pCLENBQUE7SUFDRCxTQUFnQixTQUFTLENBQUMsU0FBYztRQUNwQyxPQUFPLFVBQVUsS0FBUztZQUN0QixJQUFBLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRztnQkFDckMsU0FBUyxDQUFDLFVBQVUsR0FBRSxLQUFLLENBQUM7Z0JBQzVCLElBQUcsU0FBUyxDQUFDLFdBQVcsRUFBQztvQkFDckIsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFBLGVBQWUsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO2lCQUVuRTtnQkFFRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFFOUIsSUFBRyxTQUFTLENBQUMsZ0JBQWdCLEVBQUM7b0JBQzFCLFNBQVMsQ0FBQyxLQUFLLEdBQUUsRUFBRSxDQUFBO2lCQUN0QjtnQkFDRCxPQUFPLFNBQVMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFsQmUsYUFBUyxZQWtCeEIsQ0FBQTtBQUNMLENBQUMsRUE3Qk0sR0FBRyxLQUFILEdBQUcsUUE2QlQ7QUM3QkQsSUFBTyxHQUFHLENBSVQ7QUFKRCxXQUFPLEdBQUc7SUFDTixZQUFZLENBQUE7SUFFRCxpQkFBYSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtBQUNsRSxDQUFDLEVBSk0sR0FBRyxLQUFILEdBQUcsUUFJVDtBQ0pELElBQU8sR0FBRyxDQWtCVDtBQWxCRCxXQUFPLEdBQUc7SUFDTixZQUFZLENBQUE7SUFJWixJQUFBLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxvQkFBb0IsRUFBRSxVQUFTLGNBQWMsRUFBQyxrQkFBa0I7WUFDbkcsSUFBSSxRQUFRLEdBQUU7Z0JBQ1YsSUFBSSxFQUFHLFVBQVU7Z0JBQ2pCLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxVQUFVLEVBQUUsb0JBQW9CO2dCQUNoQyxZQUFZLEVBQUUsSUFBSTthQUNyQixDQUFBO1lBQ0QsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0MsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVQLENBQUMsRUFsQk0sR0FBRyxLQUFILEdBQUcsUUFrQlQ7Ozs7Ozs7QUNsQkQsSUFBTyxHQUFHLENBZ0JUO0FBaEJELFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQTtJQUdaO1FBR0E7WUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBQSxTQUFTLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUUsWUFBWSxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUUsWUFBWSxDQUFBO1FBQ25ELENBQUM7UUFUWSxZQUFZO1lBRHhCLElBQUEsVUFBVSxDQUFFLG9CQUFvQixDQUFDO1dBQ3JCLFlBQVksQ0FXeEI7UUFBRCxtQkFBQztLQVhELEFBV0MsSUFBQTtJQVhZLGdCQUFZLGVBV3hCLENBQUE7QUFDTCxDQUFDLEVBaEJNLEdBQUcsS0FBSCxHQUFHLFFBZ0JUO0FDZEQsSUFBTyxHQUFHLENBb0JQO0FBcEJILFdBQU8sR0FBRztJQUNOLFlBQVksQ0FBQTtJQWNWO1FBRUE7UUFBYyxDQUFDO1FBRkYscUJBQXFCO1lBWmpDLElBQUEsU0FBUyxDQUFDO2dCQUNQLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLGdCQUFnQixFQUFFO29CQUNkLFNBQVMsRUFBRSxHQUFHO2lCQUNqQjtnQkFDRCxJQUFJLEVBQUUsVUFBQyxLQUFxQixFQUFFLEVBQVUsRUFBRSxLQUEwQixFQUFFLElBQTJCO2dCQUNqRyxDQUFDO2dCQUNELFdBQVcsRUFBRSxZQUFZO2FBQ2hDLENBQUM7WUFFRyxJQUFBLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztXQUN2QixxQkFBcUIsQ0FHckM7UUFBRCw0QkFBQztLQUhHLEFBR0gsSUFBQTtJQUhnQix5QkFBcUIsd0JBR3JDLENBQUE7QUFFRCxDQUFDLEVBcEJJLEdBQUcsS0FBSCxHQUFHLFFBb0JQO0FDdEJILElBQU8sR0FBRyxDQVFUO0FBUkQsV0FBTyxHQUFHO0lBQ047UUFBQTtRQU1BLENBQUM7UUFBRCxnQkFBQztJQUFELENBTkEsQUFNQyxJQUFBO0lBTlksYUFBUyxZQU1yQixDQUFBO0FBQ0wsQ0FBQyxFQVJNLEdBQUcsS0FBSCxHQUFHLFFBUVQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIGFwcHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGV4cG9ydCBsZXQgdGVtcGxhdGVVcmxCYXNlID0gJy4vY2xpZW50L3ZpZXdzJztcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gQ29udHJvbGxlcihuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiggY2xheno6IGFueSl7XHJcbiAgICAgICAgICAgIGNsYXp6LiRuYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgYW5ndWxhck1vZHVsZS5jb250cm9sbGVyKG5hbWUsY2xhenopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIERpcmVjdGl2ZShkaXJlY3RpdmU6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjbGF6ejphbnkpe1xyXG4gICAgICAgICAgICBhbmd1bGFyTW9kdWxlLmRpcmVjdGl2ZShkaXJlY3RpdmUubmFtZSAsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmUuY29udHJvbGxlciA9Y2xheno7XHJcbiAgICAgICAgICAgICAgICBpZihkaXJlY3RpdmUudGVtcGxhdGVVcmwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS50ZW1wbGF0ZVVybCA9IHRlbXBsYXRlVXJsQmFzZSArIGRpcmVjdGl2ZS50ZW1wbGF0ZVVybDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlLmNvbnRyb2xsZXJBcyA9ICd2bSc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aXZlLmJpbmRUb0NvbnRyb2xsZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZS5zY29wZSA9e31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwibW9kdWxlIGFwcHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGV4cG9ydCBsZXQgYW5ndWxhck1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLFsndWkucm91dGVyJ10pXHJcbn0iLCJtb2R1bGUgYXBwe1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAvLyAgQHBhcmFtICRyb3V0ZVByb3ZpZGVyXHJcblxyXG4gICAgYW5ndWxhck1vZHVsZS5jb25maWcoWyckc3RhdGVQcm92aWRlcicsJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCR1cmxSb3V0ZXJQcm92aWRlcil7XHJcbiAgICAgICAgbGV0IG1haW5wYWdlID17XHJcbiAgICAgICAgICAgIG5hbWUgOiAnbWFpbnBhZ2UnLFxyXG4gICAgICAgICAgICB1cmw6ICcvbWFpbnBhZ2UnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9jbGllbnQvdmlld3MvbWFpblBhZ2UuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluUGFnZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICAgICAgICB9XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUobWFpbnBhZ2UpO1xyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCJtYWlucGFnZVwiKTtcclxuXHJcbiAgICB9XSlcclxuXHJcbn0iLCJtb2R1bGUgYXBwe1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgQENvbnRyb2xsZXIgKCdNYWluUGFnZUNvbnRyb2xsZXInKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1haW5QYWdlQ3RybHtcclxuXHJcbiAgICBwcml2YXRlIGludGVybkR0bzogSW50ZXJuRHRvO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmludGVybkR0byA9IG5ldyBJbnRlcm5EdG8oKTtcclxuICAgICAgICB0aGlzLmludGVybkR0by5pbnRlcm5JRCA9ICcxMTMnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJuRHRvLmludGVybk5hbWUgPSAnTmd1eWVuIFF1b2MgVmlldCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcm5EdG8uaW50ZXJuQmlydGhkYXkgPScyNy8wNi8xOTk5JztcclxuICAgICAgICB0aGlzLmludGVybkR0by5pbnRlcm5JbkNvbXBhbnlEYXk9ICcxNS8xMS8yMDIxJ1xyXG4gICAgfSBcclxuXHJcbiAgICB9XHJcbn0iLCJcclxuXHJcbm1vZHVsZSBhcHB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuICBcclxuICAgICAgQERpcmVjdGl2ZSh7XHJcbiAgICAgICAgICBuYW1lOiAndGVtcERpcmVjdGl2ZVRlc3QnLFxyXG4gICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHtcclxuICAgICAgICAgICAgICBpbnRlcm5EdG86IFwiPVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGluazogKHNjb3BlOiBhbmd1bGFyLklTY29wZSwgZWw6IEpRdWVyeSwgYXR0cnM6IGFuZ3VsYXIuSUF0dHJpYnV0ZXMsIGN0cmw6IFRlbXBEaXJlY3RpdmVUZXN0Q3RybCkgPT57XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdGVtcC5odG1sJ1xyXG4gIH0pXHJcbiAgXHJcbiAgICAgIEBDb250cm9sbGVyKCdUZW1wRGlyZWN0aXZlVGVzdEN0cmwnKVxyXG4gICAgICBleHBvcnQgY2xhc3MgVGVtcERpcmVjdGl2ZVRlc3RDdHJse1xyXG4gICAgICBwcml2YXRlIGludGVybkR0bzogSW50ZXJuRHRvO1xyXG4gICAgICBjb25zdHJ1Y3Rvcigpe31cclxuICB9XHJcbiAgXHJcbiAgfSIsIm1vZHVsZSBhcHB7XHJcbiAgICBleHBvcnQgY2xhc3MgSW50ZXJuRHRve1xyXG4gICAgICAgIGludGVybklEOiBzdHJpbmc7XHJcbiAgICAgICAgaW50ZXJuTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGludGVybkJpcnRoZGF5OiBzdHJpbmc7XHJcbiAgICAgICAgaW50ZXJuSW5Db21wYW55RGF5OiBzdHJpbmc7XHJcblxyXG4gICAgfVxyXG59Il19
