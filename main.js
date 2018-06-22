(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MDUCPTIT';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
/* harmony import */ var _friends_friends_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friends/friends.service */ "./src/app/friends/friends.service.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role-list/role-list.component */ "./src/app/role-list/role-list.component.ts");
/* harmony import */ var _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-detail/role-detail.component */ "./src/app/role-detail/role-detail.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _inbox_reader_inbox_reader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inbox-reader/inbox-reader.component */ "./src/app/inbox-reader/inbox-reader.component.ts");
/* harmony import */ var _inbox_reader_inbox_reader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inbox-reader/inbox-reader.service */ "./src/app/inbox-reader/inbox-reader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routesCongig = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"] },
    { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_13__["TestComponent"] },
    {
        path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"], children: [
            { path: 'friends', component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"] },
            { path: 'role-list', component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_10__["RoleListComponent"] },
            { path: 'role-detail', component: _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"] },
            { path: 'inbox-reader', component: _inbox_reader_inbox_reader_component__WEBPACK_IMPORTED_MODULE_14__["InboxReaderComponent"] }
        ]
    },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_8__["SignInComponent"],
                _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_10__["RoleListComponent"],
                _role_detail_role_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoleDetailComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_12__["MainComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_13__["TestComponent"],
                _inbox_reader_inbox_reader_component__WEBPACK_IMPORTED_MODULE_14__["InboxReaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routesCongig)
            ],
            providers: [
                _friends_friends_service__WEBPACK_IMPORTED_MODULE_7__["FriendsService"],
                _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_9__["SignInService"],
                _inbox_reader_inbox_reader_service__WEBPACK_IMPORTED_MODULE_15__["InboxReaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/*!***********************************************!*\
  !*** ./src/app/friends/friends.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/*!************************************************!*\
  !*** ./src/app/friends/friends.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-10\">\n    <h2>Basic Form</h2>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"index.html\">Home</a>\n      </li>\n      <li>\n        <a>Forms</a>\n      </li>\n      <li class=\"active\">\n        <strong>Basic Form</strong>\n      </li>\n    </ol>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Top 10 Best Friends\n            <small>Code by MDUCPTIT</small>\n          </h5>\n          <div class=\"ibox-tools\">\n            <a class=\"collapse-link\">\n              <i class=\"fa fa-chevron-up\"></i>\n            </a>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <label>*Access Token: </label>\n          <div class=\"input-group\">\n            <input type=\"text\" [(ngModel)]=\"token\" class=\"form-control\" (paste)=\"test()\" placeholder=\"Please Enter Your Access Token Full Right\">\n            <span class=\"input-group-btn\">\n              <button type=\"button\" (click)=\"Rank(1)\" class=\"btn btn-primary\">\n                <i class=\"fa fa-check-circle\"></i> Enter</button>\n            </span>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <button class=\"btn btn-primary btn-circle btn-lg col-md-1\" (click)=\"Rank(0)\">\n                <i class=\"fa fa-angle-double-left\"></i>\n              </button>\n            </div>\n            <div class=\"col-md-6\">\n              <button class=\"btn btn-primary btn-circle btn-lg col-md-1 col-md-offset-11\" (click)=\"Rank(1)\">\n                <i class=\"fa fa-angle-double-right\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"wrapper wrapper-content animated fadeInRight\" *ngFor=\"let user of data\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"ibox-content lazur-bg text-center\">\n                <h1>\n                  <code>{{user.name}}</code>\n                </h1>\n                <div class=\"m-b-sm\">\n                  <img alt=\"image\" class=\"img-circle\" src=\"https://graph.facebook.com/{{user.id}}/picture/?height=100&width=100\">\n                </div>\n                <p class=\"font-bold\">\n                  <span class=\"badge badge-warning\">Do You Love Me?</span>\n                </p>\n\n                <div class=\"text-center\">\n                  <a class=\"btn btn-xs btn-success\">\n                    <i class=\"fa fa-thumbs-up\"></i> Like </a>\n                  <a class=\"btn btn-xs btn-danger\">\n                    <i class=\"fa fa-heart\"></i> Love</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"ibox-content\">\n                <div>\n                  <div>\n                    <span>\n                      <i class=\"fa fa-question-circle\"></i> User ID</span>\n                    <small class=\"pull-right\">\n                      <span class=\"badge badge-info\">{{user.id}}</span>\n                    </small>\n                  </div>\n                  <div class=\"progress progress-small\">\n                    <div style=\"width: 100%;\" class=\"progress-bar\"></div>\n                  </div>\n\n                  <div>\n                    <span>\n                      <i class=\"fa fa-user\"></i> Username</span>\n                    <small class=\"pull-right\">\n                      <a href=\"https://fb.com/{{user.username}}\" target=\"_blank\">\n                        <span class=\"badge badge-danger\">{{user.username}}</span>\n                      </a>\n                    </small>\n                  </div>\n                  <div class=\"progress progress-small\">\n                    <div style=\"width: 100%;\" class=\"progress-bar progress-bar-warning\"></div>\n                  </div>\n\n                  <div>\n                    <span>\n                      <i class=\"fa fa-transgender\"></i> Gender</span>\n                    <small class=\"pull-right\">\n                      <span class=\"badge badge-info\">{{user.gender}}</span>\n                    </small>\n                  </div>\n                  <div class=\"progress progress-small\">\n                    <div style=\"width: 100%;\" class=\"progress-bar progress-bar-success\"></div>\n                  </div>\n\n                  <div>\n                    <span>\n                      <i class=\"fa fa-envelope\"></i> Email</span>\n                    <small class=\"pull-right\">\n                      <span class=\"badge badge-info\">{{user.email}}</span>\n                    </small>\n                  </div>\n                  <div class=\"progress progress-small\">\n                    <div style=\"width: 100%;\" class=\"progress-bar progress-bar-danger\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/friends/friends.component.ts":
/*!**********************************************!*\
  !*** ./src/app/friends/friends.component.ts ***!
  \**********************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friends.service */ "./src/app/friends/friends.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(friendsService) {
        this.friendsService = friendsService;
        this.token = '';
        this.after = '';
        this.before = '';
        this.isLoading = false;
    }
    FriendsComponent.prototype.ngOnInit = function () {
        // this.friendsService.getFriends(this.token)
        // .then(birthday => console.log(birthday))
        // .catch(err => console.log(err));
    };
    FriendsComponent.prototype.Rank = function (tmp) {
        var _this = this;
        this.isLoading = true;
        console.log(event);
        if (tmp === 0) {
            this.friendsService.getFriendsBefore(this.token, this.before)
                .then(function (res) {
                _this.data = res.data;
                console.log(_this.data);
                _this.after = res.paging.cursors.after;
                _this.before = res.paging.cursors.before;
                _this.isLoading = false;
            })
                .catch(function (err) {
                console.log(err);
                alert('Please Enter Your Access Token Full Right!');
            });
        }
        else {
            this.friendsService.getFriendsAfter(this.token, this.after)
                .then(function (res) {
                console.log(res);
                _this.data = res.data;
                _this.after = res.paging.cursors.after;
                _this.before = res.paging.cursors.before;
                console.log(_this.before);
                _this.isLoading = false;
            })
                .catch(function (err) {
                console.log(err);
                alert('Please Enter Your Access Token Full Right!');
            });
        }
    };
    FriendsComponent.prototype.test = function ($event) {
        console.log(event);
        console.log(event.target);
    };
    // tslint:disable-next-line:one-line
    FriendsComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'LOADING...';
        }
        return this.data;
    };
    FriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__(/*! ./friends.component.html */ "./src/app/friends/friends.component.html"),
            styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [_friends_service__WEBPACK_IMPORTED_MODULE_1__["FriendsService"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/friends/friends.service.ts":
/*!********************************************!*\
  !*** ./src/app/friends/friends.service.ts ***!
  \********************************************/
/*! exports provided: FriendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function() { return FriendsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsService = /** @class */ (function () {
    function FriendsService(http) {
        this.http = http;
    }
    FriendsService.prototype.getFriendsAfter = function (Token, cursors) {
        var url = 'https://graph.facebook.com/v3.0/me/friends?limit=10&fields=id,name,gender,email,username,friends.limit(0)&access_token=' + Token + '&after=' + cursors;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    FriendsService.prototype.getFriendsBefore = function (Token, cursors) {
        var url = 'https://graph.facebook.com/v3.0/me/friends?limit=10&fields=id,name,gender,email,username,friends.limit(0)&access_token=' + Token + '&before=' + cursors;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    FriendsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FriendsService);
    return FriendsService;
}());



/***/ }),

/***/ "./src/app/inbox-reader/inbox-reader.component.css":
/*!*********************************************************!*\
  !*** ./src/app/inbox-reader/inbox-reader.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inbox-reader/inbox-reader.component.html":
/*!**********************************************************!*\
  !*** ./src/app/inbox-reader/inbox-reader.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"col-lg-10\">\n    <h2>Facebook Tools</h2>\n    <ol class=\"breadcrumb\">\n      <li>\n        <a href=\"index.html\">Home</a>\n      </li>\n      <li>\n        <a>Facebook Tools</a>\n      </li>\n      <li class=\"active\">\n        <strong>Inbox Manager</strong>\n      </li>\n    </ol>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"col-lg-12\">\n    <div class=\"ibox float-e-margins\">\n      <div class=\"ibox-content\">\n        <label>*Access Token: </label>\n        <div class=\"input-group\">\n          <input type=\"text\" [(ngModel)]=\"token\" class=\"form-control\" placeholder=\"Please Enter Your Access Token Full Right\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" (click)=\"getListChat();\" class=\"btn btn-primary\">\n              <i class=\"fa fa-check-circle\"></i> Enter</button>\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"ibox-title\">\n            Messenger\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"list-group\" style=\"height: 400px; overflow: auto;\">\n              <div *ngFor=\"let messenger of data;let i=index\">\n                <button (click)=\"ScanInbox(messenger.id);\" value=\"{{messenger.id}}\" [ngClass]=\"{'active': trangthai && idclick===messenger.id}\"\n                  class=\"list-group-item list-group-item-action\">\n                  <img src=\"https://graph.fb.me/{{getID(messenger.id)}}/picture/?height=30&width=30\" alt=\"image\" class=\"img-circle\"> {{getName(messenger)}}\n                  <span class=\"badge badge-danger\">{{messenger.unread_count}}</span>\n                  <span class=\"badge badge-success\"> {{messenger.message_count}}</span>\n                </button>\n              </div>\n            </div>\n            <div class=\"text-right\">\n              <a class=\"btn btn-danger btn-rounded\" (click)=\"SapXep()\">\n                <i class=\"fa fa-heart\"></i> Top Rank\n              </a>\n              <a class=\"btn btn-primary btn-rounded\" (click)=\"getListChatMore()\">\n                <i class=\"fa fa-retweet\"></i> Tải thêm\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <div class=\"ibox-title\">\n            Conservation\n          </div>\n          <div class=\"ibox-content\" style=\"height: 400px; overflow: auto;\">\n            <div class=\"text-right\">\n              <a class=\"btn btn-info btn-rounded\" (click)=\"ScanInboxOld()\">\n                <i class=\"fa fa-upload\"></i> Tải tin nhắn cũ\n              </a>\n            </div>\n            <div>\n              <div class=\"chat-activity-list\" *ngFor=\"let inbox of messages\">\n                <div class=\"chat-element\">\n                  <div class=\"col-md-1\">\n                    <a class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle m-t-sm\" src=\"https://graph.fb.me/{{inbox.from.id}}/picture/\">\n                    </a>\n                  </div>\n                  <div class=\"col-md-11\">\n                    <div class=\"media-body \">\n                      <small class=\"pull-right text-navy\">1m ago</small>\n                      <strong>{{inbox.from.name}}</strong>\n\n                      <p class=\"m-b-xs\">\n                        {{inbox.message}}\n                      </p>\n\n                      <!--start sticker-->\n                      <div *ngIf=\"inbox.sticker\">\n                        <img src=\"{{inbox.sticker}}\" alt=\"image\">\n                      </div>\n                      <!--end sticker-->\n\n                      <!--start list img-->\n                      <div *ngIf=\"inbox.attachments && inbox.attachments.data.length > 0\">\n                        <div *ngFor=\"let img of inbox.attachments.data\">\n                          <div *ngIf=\"img.image_data && img.image_data.preview_url\">\n                            <p>\n                              <img src=\"{{img.image_data.preview_url}}\" alt=\"image\">\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <!--end list img-->\n\n                      <!--start list file-->\n                      <div *ngIf=\"inbox.attachments && inbox.attachments.data.length > 0\">\n                        <div *ngFor=\"let _File of inbox.attachments.data\">\n                          <div *ngIf=\"_File.file_url && _File.name\">\n                            <p>\n                              <a href=\"{{_File.file_url}}\" target=\"_blank\">\n                                <span class=\"badge badge-warning\">{{_File.name}}</span>\n                              </a>\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <!--end list file-->\n\n                      <!--start link-->\n                      <div *ngIf=\"inbox.shares && inbox.shares.data.length > 0\">\n                        <div *ngFor=\"let _shares of inbox.shares.data\">\n                          <div *ngIf=\"_shares.link\">\n                            <p>\n                              <a href=\"{{_shares.link}}\" target=\"_blank\">\n                                <span class=\"badge badge-danger\">Click để vào liên kết</span>\n                              </a>\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                      <!--end link-->\n                      <small class=\"text-muted text-right\">{{inbox.created_time}}</small>\n                    </div>\n                  </div>\n                </div>\n                <br>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"chat-form\">\n              <form role=\"form\">\n                <div class=\"form-group\">\n                  <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\n                </div>\n                <div class=\"text-right\">\n                  <button type=\"submit\" class=\"btn btn-sm btn-primary m-t-n-xs\">\n                    <strong>Send message</strong>\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inbox-reader/inbox-reader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inbox-reader/inbox-reader.component.ts ***!
  \********************************************************/
/*! exports provided: InboxReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxReaderComponent", function() { return InboxReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inbox_reader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox-reader.service */ "./src/app/inbox-reader/inbox-reader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxReaderComponent = /** @class */ (function () {
    function InboxReaderComponent(inboxReaderService) {
        this.inboxReaderService = inboxReaderService;
        this.token = '';
        this.trangthai = false;
        this.rank = [];
        this.rank_next = 'mducptit';
    }
    InboxReaderComponent.prototype.ngOnInit = function () {
    };
    InboxReaderComponent.prototype.getListChat = function () {
        var _this = this;
        this.inboxReaderService.getListChat(this.token)
            .then(function (res) {
            // console.log(res);
            _this.data_next = res.paging.next;
            console.log(_this.data_next);
            res = res.data;
            _this.data = res;
            // this.inboxReaderService.checkInfo(this.token)
            //   .then(res => {
            //     this.myName = res.name;
            //     console.log(this.myName);
            //   });
        })
            .catch(function (err) { return console.log(err); });
    };
    InboxReaderComponent.prototype.getListChatMore = function () {
        var _this = this;
        this.inboxReaderService.getListChatMore(this.data_next)
            .then(function (res) {
            _this.data_next = res.paging.next;
            var tmp = res.data;
            _this.data = _this.data.concat(tmp);
            // this.inboxReaderService.checkInfo(this.token)
            //   .then(res => {
            //     this.myName = res.name;
            //     console.log(this.myName);
            //   });
        })
            .catch(function (err) { return console.log(err); });
    };
    InboxReaderComponent.prototype.getID = function (idMess) {
        var idProfile = idMess.split("_", 2);
        // console.log(idProfile);
        if (idProfile[1] > '1100000000000000')
            return 4;
        return idProfile[1];
    };
    InboxReaderComponent.prototype.getName = function (data) {
        if (data.name === undefined) {
            return data.senders.data[0].name;
        }
        return data.name;
    };
    InboxReaderComponent.prototype.checkActive = function (id, idevent) {
        if (id === idevent)
            return true;
        return false;
    };
    InboxReaderComponent.prototype.ScanInbox = function (id, $event) {
        var _this = this;
        // console.log(event);
        var k = event.target.value;
        this.trangthai = this.checkActive(id, k);
        this.idclick = id;
        this.inboxReaderService.getMessages(this.token, id)
            .then(function (res) {
            // console.log(res);
            _this.paging_next = res.paging.next;
            res = res.data;
            _this.trangthai = true;
            _this.messages = res;
            _this.messages.reverse();
        })
            .catch(function (err) { return console.log(err); });
    };
    InboxReaderComponent.prototype.ScanInboxOld = function () {
        var _this = this;
        this.inboxReaderService.getMessagesOld(this.paging_next)
            .then(function (res) {
            _this.paging_next = res.paging.next;
            res = res.data;
            _this.trangthai = true;
            var tmp = res.reverse();
            _this.messages = tmp.concat(_this.messages);
        })
            .catch(function (err) { return console.log(err); });
    };
    InboxReaderComponent.prototype.GetTopRank = function () {
        var _this = this;
        if (this.rank_next === 'mducptit') {
            this.rank_next = 'https://graph.facebook.com/v3.0/me/threads/?fields=message_count&limit=500&access_token=' + this.token;
        }
        this.inboxReaderService.getTopRank(this.rank_next)
            .then(function (res) {
            _this.rank_next = res.paging.next;
            _this.rank = _this.rank.concat(res.data);
        })
            .catch(function (err) { return console.log(err); });
    };
    InboxReaderComponent.prototype.SapXep = function () {
        for (var i = 1; i <= 10; i++) {
            this.GetTopRank();
        }
        // for (const Xtmp of this.rank) {
        //   let idm = Xtmp.id.split("_", 2);
        //   if (idm[1] < '1100000000000000' && Xtmp.message_count > max){
        //     let max[] += Xtmp.message_count;
        //     let maxName[] += idm[1];
        //   }
        // }
        console.log(this.rank);
    };
    InboxReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox-reader',
            template: __webpack_require__(/*! ./inbox-reader.component.html */ "./src/app/inbox-reader/inbox-reader.component.html"),
            styles: [__webpack_require__(/*! ./inbox-reader.component.css */ "./src/app/inbox-reader/inbox-reader.component.css")]
        }),
        __metadata("design:paramtypes", [_inbox_reader_service__WEBPACK_IMPORTED_MODULE_1__["InboxReaderService"]])
    ], InboxReaderComponent);
    return InboxReaderComponent;
}());



/***/ }),

/***/ "./src/app/inbox-reader/inbox-reader.service.ts":
/*!******************************************************!*\
  !*** ./src/app/inbox-reader/inbox-reader.service.ts ***!
  \******************************************************/
/*! exports provided: InboxReaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxReaderService", function() { return InboxReaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxReaderService = /** @class */ (function () {
    function InboxReaderService(http) {
        this.http = http;
    }
    // checkInfo(token){
    //   const url = 'https://graph.facebook.com/me/?access_token=' + token;
    //   return this.http.get(url)
    //   .toPromise()
    //   .then(res => res.json());
    // }
    InboxReaderService.prototype.getListChat = function (token) {
        var url = 'https://graph.facebook.com/v3.0/me/threads/?limit=10&fields=message_count,unread_count,name,senders&access_token=' + token;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    InboxReaderService.prototype.getListChatMore = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    InboxReaderService.prototype.getMessages = function (token, threadID) {
        // tslint:disable-next-line:max-line-length
        var url = 'https://graph.facebook.com/v3.0/' + threadID + '/messages?fields=id,from,to,message,created_time,sticker,attachments{image_data,video_data,file_url,name},shares{id,link,name}&limit=10&access_token=' + token;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    InboxReaderService.prototype.getMessagesOld = function (url) {
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    InboxReaderService.prototype.getTopRank = function (url) {
        // const url = 'https://graph.facebook.com/v3.0/me/threads/?fields=message_count&limit=500&access_token=' + token;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    InboxReaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InboxReaderService);
    return InboxReaderService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n      <div class=\"sidebar-collapse\">\n          <ul class=\"nav\" id=\"side-menu\">\n              <li class=\"nav-header\">\n                  <div class=\"dropdown profile-element\">\n                      <span>\n                          <img alt=\"image\" class=\"img-circle\" src=\"../assets/inspinia/img/profile_small.jpg\" />\n                      </span>\n                      <a data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n                          <span class=\"clear\">\n                              <span class=\"block m-t-xs\">\n                                  <strong class=\"font-bold\">David Williams</strong>\n                              </span>\n                              <span class=\"text-muted text-xs block\">Art Director\n                                  <b class=\"caret\"></b>\n                              </span>\n                          </span>\n                      </a>\n                      <ul class=\"dropdown-menu animated fadeInRight m-t-xs\">\n                          <li>\n                              <a href=\"profile.html\">Profile</a>\n                          </li>\n                          <li>\n                              <a href=\"contacts.html\">Contacts</a>\n                          </li>\n                          <li>\n                              <a href=\"mailbox.html\">Mailbox</a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <a href=\"login.html\">Logout</a>\n                          </li>\n                      </ul>\n                  </div>\n                  <div class=\"logo-element\">\n                      IN+\n                  </div>\n              </li>\n              <li class=\"active\">\n                  <a href=\"index.html\">\n                      <i class=\"fa fa-th-large\"></i>\n                      <span class=\"nav-label\">Dashboards</span>\n                      <span class=\"fa arrow\"></span>\n                  </a>\n                  <ul class=\"nav nav-second-level\">\n                      <li class=\"active\">\n                          <a href=\"index.html\">Dashboard v.1</a>\n                      </li>\n                      <li>\n                          <a routerLink=\"friends\">Friends</a>\n                      </li>\n                      <li>\n                          <a routerLink=\"inbox-reader\" >Inbox Reader</a>\n                      </li>\n                  </ul>\n              </li>\n              <li>\n                  <a href=\"#\">\n                      <i class=\"fa fa-bar-chart-o\"></i>\n                      <span class=\"nav-label\">Graphs</span>\n                      <span class=\"fa arrow\"></span>\n                  </a>\n                  <ul class=\"nav nav-second-level\">\n                      <li>\n                          <a href=\"graph_flot.html\">Flot Charts</a>\n                      </li>\n                      <li>\n                          <a href=\"graph_morris.html\">Morris.js Charts</a>\n                      </li>\n                      <li>\n                          <a href=\"graph_rickshaw.html\">Rickshaw Charts</a>\n                      </li>\n                      <li>\n                          <a href=\"graph_chartjs.html\">Chart.js</a>\n                      </li>\n                      <li>\n                          <a href=\"graph_peity.html\">Peity Charts</a>\n                      </li>\n                      <li>\n                          <a href=\"graph_sparkline.html\">Sparkline Charts</a>\n                      </li>\n                  </ul>\n              </li>\n          </ul>\n          \n      </div>\n  </nav>\n\n  <div id=\"page-wrapper\" class=\"gray-bg dashbard-1\">\n      <div class=\"row border-bottom\">\n          <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n              <div class=\"navbar-header\">\n                  <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \">\n                      <i class=\"fa fa-bars\"></i>\n                  </a>\n                  <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"search_results.html\">\n                      <div class=\"form-group\">\n                          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n                      </div>\n                  </form>\n              </div>\n              <ul class=\"nav navbar-top-links navbar-right\">\n                  <li>\n                      <span class=\"m-r-sm text-muted welcome-message\">Welcome to INSPINIA+ Admin Theme.</span>\n                  </li>\n                  <li class=\"dropdown\">\n                      <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-envelope\"></i>\n                          <span class=\"label label-warning\">16</span>\n                      </a>\n                      <ul class=\"dropdown-menu dropdown-messages\">\n                          <li>\n                              <div class=\"dropdown-messages-box\">\n                                  <a href=\"profile.html\" class=\"pull-left\">\n                                      <img alt=\"image\" class=\"img-circle\" src=\"img/a7.jpg\">\n                                  </a>\n                                  <div class=\"media-body\">\n                                      <small class=\"pull-right\">46h ago</small>\n                                      <strong>Mike Loreipsum</strong> started following\n                                      <strong>Monica Smith</strong>.\n                                      <br>\n                                      <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n                                  </div>\n                              </div>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <div class=\"dropdown-messages-box\">\n                                  <a href=\"profile.html\" class=\"pull-left\">\n                                      <img alt=\"image\" class=\"img-circle\" src=\"img/a4.jpg\">\n                                  </a>\n                                  <div class=\"media-body \">\n                                      <small class=\"pull-right text-navy\">5h ago</small>\n                                      <strong>Chris Johnatan Overtunk</strong> started following\n                                      <strong>Monica Smith</strong>.\n                                      <br>\n                                      <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n                                  </div>\n                              </div>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <div class=\"dropdown-messages-box\">\n                                  <a href=\"profile.html\" class=\"pull-left\">\n                                      <img alt=\"image\" class=\"img-circle\" src=\"img/profile.jpg\">\n                                  </a>\n                                  <div class=\"media-body \">\n                                      <small class=\"pull-right\">23h ago</small>\n                                      <strong>Monica Smith</strong> love\n                                      <strong>Kim Smith</strong>.\n                                      <br>\n                                      <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n                                  </div>\n                              </div>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <div class=\"text-center link-block\">\n                                  <a href=\"mailbox.html\">\n                                      <i class=\"fa fa-envelope\"></i>\n                                      <strong>Read All Messages</strong>\n                                  </a>\n                              </div>\n                          </li>\n                      </ul>\n                  </li>\n                  <li class=\"dropdown\">\n                      <a class=\"dropdown-toggle count-info\" data-toggle=\"dropdown\">\n                          <i class=\"fa fa-bell\"></i>\n                          <span class=\"label label-primary\">8</span>\n                      </a>\n                      <ul class=\"dropdown-menu dropdown-alerts\">\n                          <li>\n                              <a href=\"mailbox.html\">\n                                  <div>\n                                      <i class=\"fa fa-envelope fa-fw\"></i> You have 16 messages\n                                      <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                                  </div>\n                              </a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <a href=\"profile.html\">\n                                  <div>\n                                      <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n                                      <span class=\"pull-right text-muted small\">12 minutes ago</span>\n                                  </div>\n                              </a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <a href=\"grid_options.html\">\n                                  <div>\n                                      <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n                                      <span class=\"pull-right text-muted small\">4 minutes ago</span>\n                                  </div>\n                              </a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                              <div class=\"text-center link-block\">\n                                  <a href=\"notifications.html\">\n                                      <strong>See All Alerts</strong>\n                                      <i class=\"fa fa-angle-right\"></i>\n                                  </a>\n                              </div>\n                          </li>\n                      </ul>\n                  </li>\n\n\n                  <li>\n                      <a href=\"login.html\">\n                          <i class=\"fa fa-sign-out\"></i> Log out\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n      </div>\n      <!--Contents-->\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/role-detail/role-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/role-detail/role-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role-detail/role-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/role-detail/role-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  role-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/role-detail/role-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/role-detail/role-detail.component.ts ***!
  \******************************************************/
/*! exports provided: RoleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleDetailComponent", function() { return RoleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleDetailComponent = /** @class */ (function () {
    function RoleDetailComponent() {
    }
    RoleDetailComponent.prototype.ngOnInit = function () {
    };
    RoleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-detail',
            template: __webpack_require__(/*! ./role-detail.component.html */ "./src/app/role-detail/role-detail.component.html"),
            styles: [__webpack_require__(/*! ./role-detail.component.css */ "./src/app/role-detail/role-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleDetailComponent);
    return RoleDetailComponent;
}());



/***/ }),

/***/ "./src/app/role-list/role-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/role-list/role-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/role-list/role-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/role-list/role-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  role-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/role-list/role-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/role-list/role-list.component.ts ***!
  \**************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoleListComponent = /** @class */ (function () {
    function RoleListComponent() {
    }
    RoleListComponent.prototype.ngOnInit = function () {
    };
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/role-list/role-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-content\">\n  <label>*Access Token: </label>\n  <div class=\"input-group\">\n    <input type=\"text\" [(ngModel)]=\"token\" name=\"token\" class=\"form-control\" placeholder=\"Please Enter Your Access Token Full Right\">\n    <span class=\"input-group-btn\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"SignIn();\">\n        <i class=\"fa fa-check-circle\"></i> Enter</button>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, signInService) {
        this.router = router;
        this.signInService = signInService;
        this.token = '';
        this.isLoading = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.SignIn = function () {
        var _this = this;
        this.isLoading = true;
        this.signInService.Login(this.token)
            .then(function (res) {
            console.log(res.id);
            alert('Login Success!');
            _this.router.navigate(['main']);
        })
            .catch(function (err) {
            console.log(err);
            alert('Login Fail! Please login Again!');
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.service.ts ***!
  \********************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
    }
    SignInService.prototype.Login = function (token) {
        var url = 'https://graph.facebook.com/me/?access_token=' + token;
        var newLocal = this.http.get(url);
        return newLocal
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    SignInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input (keyup)=\"onKey($event)\">\n  <p>{{values}}</p>"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.values = '';
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.onKey = function (event) {
        console.log(event);
        this.values += event.code + ' | ';
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\basic-angular-k5\students\VoMinhDuc\Inbox-Manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map