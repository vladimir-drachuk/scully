(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/content/content.component */ "./src/app/core/components/content/content.component.ts");
/* harmony import */ var _core_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/intro/intro.component */ "./src/app/core/components/intro/intro.component.ts");
/* harmony import */ var _main_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/components/main/main.component */ "./src/app/main/components/main/main.component.ts");
/* harmony import */ var _architects_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./architects/components/list-of-architects/list-of-architects.component */ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts");
/* harmony import */ var _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _worklog_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worklog/components/our-worklog/our-worklog.component */ "./src/app/worklog/components/our-worklog/our-worklog.component.ts");
/* harmony import */ var _styleguide_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleguide/components/our-styleguide/our-styleguide.component */ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts");
/* harmony import */ var _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _architects_components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./architects/components/architect-detailed/architect-detailed.component */ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts");













const routes = [
    {
        path: '',
        component: _core_components_intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"]
    },
    {
        path: 'content',
        component: _core_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
        children: [
            {
                path: '',
                component: _main_components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
            },
            {
                path: 'architects',
                component: _architects_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"]
            },
            {
                path: 'architects/:id',
                component: _architects_components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_10__["ArchitectDetailedComponent"]
            },
            {
                path: 'team',
                component: _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_6__["OurTeamComponent"]
            },
            {
                path: 'worklog',
                component: _worklog_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_7__["OurWorklogComponent"]
            },
            {
                path: 'styleguide',
                component: _styleguide_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_8__["OurStyleguideComponent"]
            }
        ]
    },
    {
        path: '**',
        component: _core_components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'top'
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'top'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(translator) {
        this.translator = translator;
        this.title = 'cultural-portal';
        this.translator.setLanguage(this.translator.currentLang);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./architects/architects.module */ "./src/app/architects/architects.module.ts");
/* harmony import */ var _team_team_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./team/team.module */ "./src/app/team/team.module.ts");
/* harmony import */ var _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./worklog/worklog.module */ "./src/app/worklog/worklog.module.ts");
/* harmony import */ var _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styleguide/styleguide.module */ "./src/app/styleguide/styleguide.module.ts");
/* harmony import */ var _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../locales/architects-data */ "./src/locales/architects-data.ts");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__["ArchitectsData"],
        _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["OurTranslateService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
            _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
            _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
            _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
            _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"].forRoot(),
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
        _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
        _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
        _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
        _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBRootModule"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_8__["MainModule"],
                    _architects_architects_module__WEBPACK_IMPORTED_MODULE_9__["ArchitectsModule"],
                    _team_team_module__WEBPACK_IMPORTED_MODULE_10__["TeamModule"],
                    _worklog_worklog_module__WEBPACK_IMPORTED_MODULE_11__["WorklogModule"],
                    _styleguide_styleguide_module__WEBPACK_IMPORTED_MODULE_12__["StyleguideModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"].forRoot(),
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
                ],
                providers: [
                    _locales_architects_data__WEBPACK_IMPORTED_MODULE_13__["ArchitectsData"],
                    _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["OurTranslateService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/architects/architects.module.ts":
/*!*************************************************!*\
  !*** ./src/app/architects/architects.module.ts ***!
  \*************************************************/
/*! exports provided: ArchitectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsModule", function() { return ArchitectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/architect-detailed/about/about.component */ "./src/app/architects/components/architect-detailed/about/about.component.ts");
/* harmony import */ var _components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-of-architects/list-of-architects.component */ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts");
/* harmony import */ var _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/architect-detailed/architect-detailed.component */ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts");
/* harmony import */ var _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/colored.directive */ "./src/app/architects/directives/colored.directive.ts");
/* harmony import */ var _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/search-by.pipe */ "./src/app/shared/pipes/search-by.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/architect-detailed/photo-gallery/photo-gallery.component */ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/architect-detailed/timeline/timeline.component */ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts");
/* harmony import */ var _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/architect-detailed/video/video.component */ "./src/app/architects/components/architect-detailed/video/video.component.ts");
/* harmony import */ var _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/architect-detailed/map/map.component */ "./src/app/architects/components/architect-detailed/map/map.component.ts");


















class ArchitectsModule {
}
ArchitectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ArchitectsModule });
ArchitectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ArchitectsModule_Factory(t) { return new (t || ArchitectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ArchitectsModule, { declarations: [_components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"],
        _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__["ArchitectDetailedComponent"],
        _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__["ColoredDirective"],
        _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__["PhotoGalleryComponent"],
        _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
        _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
        _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
        _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
        ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]], exports: [_shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_list_of_architects_list_of_architects_component__WEBPACK_IMPORTED_MODULE_5__["ListOfArchitectsComponent"],
                    _components_architect_detailed_architect_detailed_component__WEBPACK_IMPORTED_MODULE_6__["ArchitectDetailedComponent"],
                    _components_architect_detailed_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _directives_colored_directive__WEBPACK_IMPORTED_MODULE_7__["ColoredDirective"],
                    _components_architect_detailed_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_11__["PhotoGalleryComponent"],
                    _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
                    _components_architect_detailed_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                    _components_architect_detailed_video_video_component__WEBPACK_IMPORTED_MODULE_15__["VideoComponent"],
                    _components_architect_detailed_map_map_component__WEBPACK_IMPORTED_MODULE_16__["MapComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"],
                    ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_13__["AnimateOnScrollModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MDBBootstrapModule"]
                ],
                exports: [
                    _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchByPipe"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/about/about.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/about/about.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_colored_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/colored.directive */ "./src/app/architects/directives/colored.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function AboutComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r38.author.work.indexOf(item_r39));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r38.author.path + "." + item_r39.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r39.date);
} }
class AboutComponent {
    constructor() {
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], inputs: { author: "author" }, decls: 25, vars: 20, consts: [[1, "author"], ["alt", "photo", 3, "src"], [1, "portfolio"], ["appColored", "", 3, "item", 4, "ngFor", "ngForOf"], ["appColored", "", 3, "item"], [1, "works-name"], [1, "works-year"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AboutComponent_tr_24_Template, 6, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.author.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.author.path + "." + ctx.author.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.author.path + "." + ctx.author.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, ctx.author.path + "." + ctx.author.vita));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "pageLinks.Important-works"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, "pageLinks.Building-name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, "pageLinks.Built date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.work);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _directives_colored_directive__WEBPACK_IMPORTED_MODULE_2__["ColoredDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n}\n.author[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px;\n  color: #3E3636;\n}\n.portfolio[_ngcontent-%COMP%] {\n  margin: 30px;\n  color: #000000;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .works-name[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-right: 150px;\n  word-break: break-word;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .works-year[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.portfolio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .colored[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9zY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QURlSjtBQ1pBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FEZUo7QUNaQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNGYlM7QUM0QmI7QUNaQTtFQUNJLFlBQUE7RUFDQSxjRmpCSTtBQ2dDUjtBQ2RJO0VBQ0kseUJBQUE7QURnQlI7QUNmUTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FEaUJaO0FDZlE7RUFDSSxpQkFBQTtBRGlCWjtBQ2ZRO0VBQ0ksYUFBQTtBRGlCWjtBQ2ZRO0VBQ0kseUJGbENBO0FDbURaIiwiZmlsZSI6ImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xuJGZvbnRfY29sb3I6ICMzRTM2MzY7XG4kYmxhY2s6ICMwMDAwMDA7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xuICAgIGNvbG9yOiAkYmxhY2s7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGhvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLnBvcnRmb2xpbyB7XG4gIG1hcmdpbjogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucG9ydGZvbGlvIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbi5wb3J0Zm9saW8gdGFibGUgLndvcmtzLW5hbWUge1xuICB3aWR0aDogNjAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLnBvcnRmb2xpbyB0YWJsZSAud29ya3MteWVhciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnBvcnRmb2xpbyB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucG9ydGZvbGlvIHRhYmxlIC5jb2xvcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RTdEMztcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGhvciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59XG5cbi5wb3J0Zm9saW8ge1xuICAgIG1hcmdpbjogMzBweDtcbiAgICBjb2xvcjogJGJsYWNrO1xuICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgLndvcmtzLW5hbWUge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC53b3Jrcy15ZWFyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Yl9jb2xvcjsgXG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/architect-detailed.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/architect-detailed.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ArchitectDetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectDetailedComponent", function() { return ArchitectDetailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/architects/components/architect-detailed/about/about.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-gallery/photo-gallery.component */ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video/video.component */ "./src/app/architects/components/architect-detailed/video/video.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/architects/components/architect-detailed/map/map.component.ts");









class ArchitectDetailedComponent {
    constructor(arcInfo, route) {
        this.arcInfo = arcInfo;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.author = this.arcInfo.getById(params.id);
        });
    }
}
ArchitectDetailedComponent.ɵfac = function ArchitectDetailedComponent_Factory(t) { return new (t || ArchitectDetailedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ArchitectDetailedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArchitectDetailedComponent, selectors: [["app-architect-detailed"]], decls: 5, vars: 5, consts: [[3, "author"]], template: function ArchitectDetailedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-timeline", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-photo-gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.author);
    } }, directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"], _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9hcmNoaXRlY3QtZGV0YWlsZWQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectDetailedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-architect-detailed',
                templateUrl: './architect-detailed.component.html',
                styleUrls: ['./architect-detailed.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/map/map.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/map/map.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class MapComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].mapsUrl}${this.author.geovidgetLink}`);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { author: "author" }, decls: 5, vars: 4, consts: [[1, "map_container"], ["title", "geowidget", 3, "src"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.Map-of-works"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.map_container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  padding: 50px;\n}\niframe[title=geowidget][_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n}\n@media screen and (max-width: 576px) {\n  iframe[title=geowidget][_ngcontent-%COMP%] {\n    width: 390px;\n    height: 310px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL21hcC9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiYXBwL2FyY2hpdGVjdHMvY29tcG9uZW50cy9hcmNoaXRlY3QtZGV0YWlsZWQvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL21hcC9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvYXBwXFxhcmNoaXRlY3RzXFxjb21wb25lbnRzXFxhcmNoaXRlY3QtZGV0YWlsZWRcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRGVGO0FDWkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRGVGO0FDWkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VEZUY7QUFDRiIsImZpbGUiOiJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xuJGZvbnRfY29sb3I6ICMzRTM2MzY7XG4kYmxhY2s6ICMwMDAwMDA7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xuICAgIGNvbG9yOiAkYmxhY2s7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLm1hcF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5pZnJhbWVbdGl0bGU9Z2Vvd2lkZ2V0XSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgaWZyYW1lW3RpdGxlPWdlb3dpZGdldF0ge1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMnO1xuXG5oNCB7XG4gIGNvbG9yOiAkYmxhY2s7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XG59XG5cbi5tYXBfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuaWZyYW1lW3RpdGxlPVwiZ2Vvd2lkZ2V0XCJdIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICBpZnJhbWVbdGl0bGU9XCJnZW93aWRnZXRcIl0ge1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/photo-gallery/photo-gallery.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function PhotoGalleryComponent_mdb_carousel_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", work_r41.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PhotoGalleryComponent {
    constructor() {
    }
    ngOnInit() {
        this.images = this.author.images;
        this.conf = {
            imageOffset: '0px',
            showDeleteControl: false,
            showImageTitle: false,
        };
    }
}
PhotoGalleryComponent.ɵfac = function PhotoGalleryComponent_Factory(t) { return new (t || PhotoGalleryComponent)(); };
PhotoGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoGalleryComponent, selectors: [["app-photo-gallery"]], inputs: { author: "author" }, decls: 6, vars: 5, consts: [[1, "photo_gallery"], [1, "carousel", "slide", "carousel-fade", 3, "animation"], [4, "ngFor", "ngForOf"], ["alt", "Author work", 1, "author_work_image", 3, "src"]], template: function PhotoGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhotoGalleryComponent_mdb_carousel_item_5_Template, 2, 1, "mdb-carousel-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "pageLinks.Gallery"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animation", "fade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.work);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.photo_gallery[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 400px;\n  margin: 0 auto;\n}\n.author_work_image[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3Bob3RvLWdhbGxlcnkvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL3Njc3NcXF92YXJpYWJsZXMuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3Bob3RvLWdhbGxlcnkvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcYXJjaGl0ZWN0c1xcY29tcG9uZW50c1xcYXJjaGl0ZWN0LWRldGFpbGVkXFxwaG90by1nYWxsZXJ5XFxwaG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEZUY7QUNaQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEZUYiLCJmaWxlIjoiYXBwL2FyY2hpdGVjdHMvY29tcG9uZW50cy9hcmNoaXRlY3QtZGV0YWlsZWQvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xuJGZvbnRfY29sb3I6ICMzRTM2MzY7XG4kYmxhY2s6ICMwMDAwMDA7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xuICAgIGNvbG9yOiAkYmxhY2s7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuaDQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLnBob3RvX2dhbGxlcnkge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hdXRob3Jfd29ya19pbWFnZSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbmg0IHtcbiAgY29sb3I6ICRibGFjaztcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCAwIDIwcHggMDtcbn1cblxuLnBob3RvX2dhbGxlcnkge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hdXRob3Jfd29ya19pbWFnZSB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-photo-gallery',
                templateUrl: './photo-gallery.component.html',
                styleUrls: ['./photo-gallery.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/timeline/timeline.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/timeline/timeline.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enum_animations_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enum/animations.enum */ "./src/app/architects/enum/animations.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-animate-on-scroll */ "./node_modules/ng2-animate-on-scroll/__ivy_ngcc__/fesm2015/ng2-animate-on-scroll.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function TimelineComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r43 = ctx.$implicit;
    const i_r44 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animationName", ctx_r42.setAnimation(i_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r43.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r42.author.path + "." + card_r43.text));
} }
class TimelineComponent {
    constructor() {
        this.animations = _enum_animations_enum__WEBPACK_IMPORTED_MODULE_1__["Animations"];
    }
    ngOnInit() { }
    setAnimation(index) {
        return !(index % 2) ? this.animations.right : this.animations.left;
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], inputs: { author: "author" }, decls: 7, vars: 4, consts: [[1, "container"], [1, "timeline_title"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], ["animateOnScroll", "", 1, "animated", 3, "animationName"], [1, "timeline-img"], [1, "timeline-content"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimelineComponent_div_6_Template, 9, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.Timeline"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.author.timelineData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_3__["AnimateOnScrollDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 100px 0;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background: #757575;\n  width: 5px;\n  height: 80%;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 70px;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n  float: right;\n  padding: 40px 30px 10px 30px;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  left: -15px;\n  border-width: 10px 15px 10px 0;\n  border-color: transparent #f5f5f5 transparent transparent;\n}\n.timeline-item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45%;\n  padding: 10px 30px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);\n  font-size: 1.2em;\n}\n.timeline-content[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  top: 30px;\n  right: -15px;\n  border-width: 10px 0 10px 15px;\n  border-color: transparent transparent transparent #f5f5f5;\n}\n.timeline-img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: #D29F9F;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  margin-top: 25px;\n  margin-left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3RpbWVsaW5lL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9zY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3RpbWVsaW5lL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsZ0JBQUE7QURlRjtBQ1pBO0VBQ0UsY0ZKTTtFRUtOLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUVFLGtCQUFBO0FEY0Y7QUNaRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBRGNKO0FDVkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QURhRjtBQ1RJO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FEV047QUNUTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7QURXUjtBQ05FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FEUUo7QUNIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7QURNRjtBQ0pFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBRE1KO0FDRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRnJGVztFRXNGWCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURLRiIsImZpbGUiOiJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBjb2xvcjogJGJsYWNrO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuXG5oNCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xufVxuXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udGltZWxpbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6ICM3NTc1NzU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4udGltZWxpbmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA0MHB4IDMwcHggMTBweCAzMHB4O1xufVxuLnRpbWVsaW5lLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAtMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNWY1ZjUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udGltZWxpbmUtaXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAtMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxNXB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmNWY1ZjU7XG59XG5cbi50aW1lbGluZS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjRDI5RjlGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59IiwiQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cblxuaDQge1xuICBjb2xvcjogJGJsYWNrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xufVxuXG4udGltZWxpbmUge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICM3NTc1NzU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuXG4udGltZWxpbmUtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuXG4gICY6bnRoLWNoaWxkKGV2ZW4pIHtcblxuICAgIC50aW1lbGluZS1jb250ZW50IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDQwcHggMzBweCAxMHB4IDMwcHg7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBsZWZ0OiAtMTVweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDE1cHggMTBweCAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmNWY1ZjUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cblxuLnRpbWVsaW5lLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDIwcHggMjVweCAtMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogLTE1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDAgMTBweCAxNXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2Y1ZjVmNTtcbiAgfVxufVxuXG4udGltZWxpbmUtaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogJG1haW5fY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/architect-detailed/video/video.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/architects/components/architect-detailed/video/video.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class VideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    set author(author) {
        this.authorSet = author;
        this.setYoutubeUrl();
    }
    get author() {
        return this.authorSet;
    }
    setYoutubeUrl() {
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].youtubeUrl}${this.author.videoId}`);
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { author: "author" }, decls: 19, vars: 7, consts: [[1, "video_container"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", "video_link", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["basicModal", ""], ["role", "dialog", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100"], [1, "modal-body"], ["width", "600", "height", "400", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r45.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r45.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "pageLinks.Watch-video"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 5, ctx.author.path + "." + ctx.author.name), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh4[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  margin: 50px 0 20px 0;\n}\n.video_link[_ngcontent-%COMP%] {\n  background: #D29F9F !important;\n}\n.video_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 100px 0;\n  margin: 0 auto;\n}\n.modal-content[_ngcontent-%COMP%] {\n  width: 600px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  right: 10%;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 600px;\n  height: 60px;\n}\n.modal-body[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3ZpZGVvL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9zY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvYXJjaGl0ZWN0LWRldGFpbGVkL3ZpZGVvL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGFyY2hpdGVjdC1kZXRhaWxlZFxcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0kscUJBQUE7RUFDQSxpRkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kscUJBQUE7RUFDQSxjQVpJO0FDTVI7QURTQTtFQUNJLHlDQUFBO0VBQ0EsY0FsQlM7QUNZYjtBQ1pBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEZUY7QUNaQTtFQUNFLDhCQUFBO0FEZUY7QUNaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURlRjtBQ1pBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEZUY7QUNaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBRGVGO0FDWkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEZUY7QUNaQTtFQUNFLGFBQUE7QURlRiIsImZpbGUiOiJhcHAvYXJjaGl0ZWN0cy9jb21wb25lbnRzL2FyY2hpdGVjdC1kZXRhaWxlZC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBjb2xvcjogJGJsYWNrO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUwcHggMCAyMHB4IDA7XG59XG5cbi52aWRlb19saW5rIHtcbiAgYmFja2dyb3VuZDogI0QyOUY5RiAhaW1wb3J0YW50O1xufVxuXG4udmlkZW9fY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMDBweCAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICB3aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAxMCU7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubW9kYWwtYm9keSBpZnJhbWUge1xuICBwYWRkaW5nOiAxMHB4O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcblxuaDQge1xuICBjb2xvcjogJGJsYWNrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4IDAgMjBweCAwO1xufVxuXG4udmlkZW9fbGluayB7XG4gIGJhY2tncm91bmQ6ICRtYWluX2NvbG9yICFpbXBvcnRhbnQ7XG59XG5cbi52aWRlb19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tb2RhbC1ib2R5IGlmcmFtZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video',
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { author: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/components/list-of-architects/list-of-architects.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/architects/components/list-of-architects/list-of-architects.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ListOfArchitectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfArchitectsComponent", function() { return ListOfArchitectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/search-by.pipe */ "./src/app/shared/pipes/search-by.pipe.ts");








function ListOfArchitectsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const architect_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", architect_r11 == null ? null : architect_r11.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", architect_r11 == null ? null : architect_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, architect_r11.path + "." + architect_r11.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, architect_r11.path + "." + architect_r11.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, architect_r11.path + "." + architect_r11.vita));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/content/architects/", architect_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 13, "pageLinks.More"), " ");
} }
class ListOfArchitectsComponent {
    constructor(architectService) {
        this.architectService = architectService;
        this.architects = [];
        this.searchStr = '';
    }
    ngOnInit() {
        this.getArchitects();
    }
    getArchitects() {
        this.architects = this.architectService.getAll();
    }
}
ListOfArchitectsComponent.ɵfac = function ListOfArchitectsComponent_Factory(t) { return new (t || ListOfArchitectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"])); };
ListOfArchitectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListOfArchitectsComponent, selectors: [["app-list-of-architects"]], decls: 9, vars: 8, consts: [[1, "architects__wrapper"], [1, "architects__search"], [1, "architects__label"], ["type", "text", 1, "architects__input", 3, "ngModel", "placeholder", "ngModelChange"], [1, "architects__container"], [1, "architects__list"], ["class", "architects__item arch-card", 4, "ngFor", "ngForOf"], [1, "architects__item", "arch-card"], [1, "arch-card__preview"], [1, "arch-card__img", 3, "src", "alt"], [1, "arch-card__content"], [1, "arch-card__title"], [1, "arch-card__date"], [1, "arch-card__desc"], [1, "arch-card__link", 3, "routerLink"]], template: function ListOfArchitectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListOfArchitectsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListOfArchitectsComponent_li_7_Template, 16, 15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "searchBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "pageLinks.Search-area"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.architects, ctx.searchStr));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _shared_pipes_search_by_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchByPipe"]], styles: [".architects__wrapper[_ngcontent-%COMP%] {\n  min-height: 350px;\n}\n.architects__label[_ngcontent-%COMP%] {\n  display: block;\n}\n.architects__search[_ngcontent-%COMP%] {\n  margin: 25px auto;\n  max-width: 840px;\n}\n.architects__input[_ngcontent-%COMP%] {\n  padding: 7px 20px 8px;\n  width: 100%;\n  font-size: 20px;\n  background: #fff;\n  border: 1px solid #3E3636;\n  border-radius: 20px;\n}\n.architects__input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.architects__list[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.architects__item[_ngcontent-%COMP%] {\n  margin: 0 20px 70px;\n}\n.arch-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 285px;\n  padding-bottom: 25px;\n  text-align: center;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.arch-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 7px 8px 4px rgba(0, 0, 0, 0.25);\n}\n.arch-card__preview[_ngcontent-%COMP%] {\n  position: relative;\n  height: 240px;\n  margin-bottom: 20px;\n}\n.arch-card__img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.arch-card__content[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n.arch-card__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.arch-card__date[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.arch-card__desc[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  max-height: 40px;\n  font-size: 16px;\n  overflow: hidden;\n}\n.arch-card__link[_ngcontent-%COMP%] {\n  padding: 8px 10px 9px;\n  min-width: 190px;\n  font-size: 18px;\n  text-decoration: none;\n  border: 1px solid #3E3636;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvbGlzdC1vZi1hcmNoaXRlY3RzL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGFyY2hpdGVjdHNcXGNvbXBvbmVudHNcXGxpc3Qtb2YtYXJjaGl0ZWN0c1xcbGlzdC1vZi1hcmNoaXRlY3RzLmNvbXBvbmVudC5zY3NzIiwiYXBwL2FyY2hpdGVjdHMvY29tcG9uZW50cy9saXN0LW9mLWFyY2hpdGVjdHMvbGlzdC1vZi1hcmNoaXRlY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtBQ0NOO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FKO0FERUU7RUFDRSxtQkFBQTtBQ0FKO0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDQUY7QURDRTtFQUNFLDJDQUFBO0FDQ0o7QURBRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6ImFwcC9hcmNoaXRlY3RzL2NvbXBvbmVudHMvbGlzdC1vZi1hcmNoaXRlY3RzL2xpc3Qtb2YtYXJjaGl0ZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcmNoaXRlY3RzIHtcbiAgJl9fd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gIH1cbiAgJl9fbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICZfX3NlYXJjaCB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4NDBweDtcbiAgfVxuICAmX19pbnB1dCB7XG4gICAgcGFkZGluZzogN3B4IDIwcHggOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRTM2MzY7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICZfX2l0ZW0ge1xuICAgIG1hcmdpbjogMCAyMHB4IDcwcHg7XG4gIH1cbn1cbi5hcmNoLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyODVweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogN3B4IDhweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTt9XG4gICZfX3ByZXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgJl9faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gICZfX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgJl9fZGF0ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAmX19kZXNjIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgJl9fbGluayB7XG4gICAgcGFkZGluZzogOHB4IDEwcHggOXB4O1xuICAgIG1pbi13aWR0aDogMTkwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuIiwiLmFyY2hpdGVjdHNfX3dyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cbi5hcmNoaXRlY3RzX19sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFyY2hpdGVjdHNfX3NlYXJjaCB7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xuICBtYXgtd2lkdGg6IDg0MHB4O1xufVxuLmFyY2hpdGVjdHNfX2lucHV0IHtcbiAgcGFkZGluZzogN3B4IDIwcHggOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmFyY2hpdGVjdHNfX2lucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hcmNoaXRlY3RzX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hcmNoaXRlY3RzX19pdGVtIHtcbiAgbWFyZ2luOiAwIDIwcHggNzBweDtcbn1cblxuLmFyY2gtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI4NXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5hcmNoLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiA3cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuLmFyY2gtY2FyZF9fcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hcmNoLWNhcmRfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5hcmNoLWNhcmRfX2NvbnRlbnQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uYXJjaC1jYXJkX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5hcmNoLWNhcmRfX2RhdGUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmFyY2gtY2FyZF9fZGVzYyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hcmNoLWNhcmRfX2xpbmsge1xuICBwYWRkaW5nOiA4cHggMTBweCA5cHg7XG4gIG1pbi13aWR0aDogMTkwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfArchitectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-of-architects',
                templateUrl: './list-of-architects.component.html',
                styleUrls: ['./list-of-architects.component.scss']
            }]
    }], function () { return [{ type: _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/architects/directives/colored.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/architects/directives/colored.directive.ts ***!
  \************************************************************/
/*! exports provided: ColoredDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoredDirective", function() { return ColoredDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ColoredDirective {
    constructor(elem) {
        this.elem = elem;
    }
    ngOnChanges() {
        if (!(this.item % 2)) {
            this.elem.nativeElement.classList.add('colored');
        }
    }
}
ColoredDirective.ɵfac = function ColoredDirective_Factory(t) { return new (t || ColoredDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ColoredDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ColoredDirective, selectors: [["", "appColored", ""]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColoredDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appColored]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/architects/enum/animations.enum.ts":
/*!****************************************************!*\
  !*** ./src/app/architects/enum/animations.enum.ts ***!
  \****************************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
var Animations;
(function (Animations) {
    Animations["left"] = "fadeInLeft";
    Animations["right"] = "fadeInRight";
})(Animations || (Animations = {}));


/***/ }),

/***/ "./src/app/core/components/content/content.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/components/content/content.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












const _c0 = ["sidenav"];
const _c1 = ["content"];
const _c2 = function () { return { exact: true }; };
function ContentComponent_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_mat_list_item_8_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r3.routing)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, item_r3.title), " ");
} }
class ContentComponent {
    constructor(nav) {
        this.nav = nav;
        this.navigator = this.nav.navMenu;
    }
    open() {
        this.sidenav.open();
        this.content.getElementRef().nativeElement.classList.add('content-blocked');
    }
    close() {
        this.sidenav.close();
        this.content.getElementRef().nativeElement.classList.remove('content-blocked');
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], viewQuery: function ContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 18, vars: 1, consts: [[1, "example-container", 3, "backdropClick"], ["disableClose", "", "fixedInViewport", "", 3, "keydown.escape"], ["sidenav", ""], [1, "button-line"], ["mat-icon-button", "", 3, "click"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["content", ""], [1, "wrapper"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", "click"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function ContentComponent_Template_mat_sidenav_container_backdropClick_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function ContentComponent_Template_mat_sidenav_keydown_escape_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentComponent_mat_list_item_8_Template, 3, 6, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-content", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentComponent_Template_button_click_11_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigator);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\nbutton[_ngcontent-%COMP%] {\n  display: none;\n  outline: none;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgrey;\n  padding: 0 5px;\n  outline: none;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-sidenav[_ngcontent-%COMP%]   .button-line[_ngcontent-%COMP%] {\n  height: 43px;\n  background-color: #D29F9F;\n}\n.content-blocked[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n@media (max-width: 630px) {\n  app-header[_ngcontent-%COMP%] {\n    padding: 43px;\n  }\n\n  mat-sidenav[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  button[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    z-index: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvY29udGVudC9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiYXBwL2NvcmUvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJhcHAvY29yZS9jb21wb25lbnRzL2NvbnRlbnQvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcY29yZVxcY29tcG9uZW50c1xcY29udGVudFxcY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBRGVKO0FDWkE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEZUo7QUNaQTtFQUNJLGFBQUE7QURlSjtBQ2RJO0VBQ0ksWUFBQTtFQUNBLHlCRnRCSztBQ3NDYjtBQ1pBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FEZUo7QUNaQTtFQUNJLHlCRi9CUTtBQzhDWjtBQ1pBO0VBQ0k7SUFDSSxhQUFBO0VEZU47O0VDWkU7SUFDSSxjQUFBO0VEZU47O0VDYkU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLE1BQUE7SUFDQSxVQUFBO0VEZ0JOO0FBQ0YiLCJmaWxlIjoiYXBwL2NvcmUvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbl9jb2xvcjogI0QyOUY5RjtcbiRzdWJfY29sb3I6ICNGOUU3RDM7XG4kZm9udF9jb2xvcjogIzNFMzYzNjtcbiRibGFjazogIzAwMDAwMDtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xuICAgIHNyYzogdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgY29sb3I6ICRibGFjaztcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICRmb250X2NvbG9yO1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgc3JjOiB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5tYXQtc2lkZW5hdiAuYnV0dG9uLWxpbmUge1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XG59XG5cbi5jb250ZW50LWJsb2NrZWQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RTdEMztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIGFwcC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDQzcHg7XG4gIH1cblxuICBtYXQtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMjtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcblxuLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAuYnV0dG9uLWxpbmUge1xuICAgICAgICBoZWlnaHQ6IDQzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xuICAgIH1cbn1cblxuLmNvbnRlbnQtYmxvY2tlZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3ViX2NvbG9yO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcbiAgICBhcHAtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogNDNweDtcbiAgICB9XG5cbiAgICBtYXQtc2lkZW5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 6, consts: [["src", "../../../../assets/images/footer_img_color.png", "alt", "city", 1, "cityImage"], [1, "footerTextWrapper"], [1, "footerText"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A9 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "pageLinks.footerCreatedBy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "pageLinks.footerPoweredBy"), " The Rolling Scopes");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".image-wrapper[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n\n.cityImage[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.footerTextWrapper[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  border: 1px solid #D29F9F;\n  background-color: #D29F9F;\n}\n\n.footerText[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-size: 20px;\n  line-height: 30px;\n  color: #3E3636;\n}\n\n@media (max-width: 600px) {\n  .footerText[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    line-height: 5vw;\n  }\n\n  .footerTextWrapper[_ngcontent-%COMP%] {\n    padding: 3vw 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGNvcmVcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUVFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDQUY7O0VER0E7SUFDRSxjQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJhcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNpdHlJbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3RlclRleHRXcmFwcGVyIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDI5RjlGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDI5RjlGO1xufVxuXG4uZm9vdGVyVGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIFxuICAuZm9vdGVyVGV4dCB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgbGluZS1oZWlnaHQ6IDV2dztcbiAgfVxuXG4gIC5mb290ZXJUZXh0V3JhcHBlciB7XG4gICAgcGFkZGluZzogM3Z3IDA7XG4gIH1cblxufVxuIiwiLmltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jaXR5SW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXJUZXh0V3JhcHBlciB7XG4gIHBhZGRpbmc6IDI1cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QyOUY5RjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QyOUY5Rjtcbn1cblxuLmZvb3RlclRleHQge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9vdGVyVGV4dCB7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgbGluZS1oZWlnaHQ6IDV2dztcbiAgfVxuXG4gIC5mb290ZXJUZXh0V3JhcHBlciB7XG4gICAgcGFkZGluZzogM3Z3IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







const _c0 = function () { return { exact: true }; };
function HeaderComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r36.routing)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, item_r36.title), " ");
} }
class HeaderComponent {
    constructor(nav) {
        this.nav = nav;
        this.navigator = this.nav.navMenu;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [[1, "header"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 4, 6, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "pageLinks.h1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _language_language_component__WEBPACK_IMPORTED_MODULE_3__["LanguageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\nh1[_ngcontent-%COMP%] {\n  padding: 40px 0;\n  margin: 0;\n  text-align: center;\n  font-size: 36px;\n}\nnav[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #D29F9F;\n  height: 43px;\n  width: 100%;\n}\nul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 10px 0;\n}\nli[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n}\na.active[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\napp-language[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n@media (max-width: 820px) {\n  li[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 630px) {\n  h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    position: fixed;\n    top: 0;\n    z-index: 1;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9zY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJhcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJhcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvYXBwXFxjb3JlXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEZUo7QUNaRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxtQkZaUztFRWFULFlBQUE7RUFDQSxXQUFBO0FEZUo7QUNaRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FEZUo7QUNaRTtFQUNFLGNBQUE7QURlSjtBQ1pFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FEZUo7QUNkSTtFQUNFLDBCQUFBO0FEZ0JOO0FDWkU7RUFDRSxrQkFBQTtBRGVKO0FDWkU7RUFDRTtJQUNFLGNBQUE7RURlSjs7RUNaRTtJQUNFLGVBQUE7RURlSjtBQUNGO0FDWkU7RUFDRTtJQUNFLGFBQUE7RURjSjs7RUNYRTtJQUNFLHFCQUFBO1lBQUEseUJBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7RURjSjs7RUNaRTtJQUNFLGFBQUE7RURlSjtBQUNGIiwiZmlsZSI6ImFwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBjb2xvcjogJGJsYWNrO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbmgxIHtcbiAgcGFkZGluZzogNDBweCAwO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0QyOUY5RjtcbiAgaGVpZ2h0OiA0M3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5hLmFjdGl2ZSwgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hcHAtbGFuZ3VhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICBsaSB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICBhIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICBoMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG5hdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcblxuICBoMSB7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG5cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICRtYWluX2NvbG9yO1xuICAgIGhlaWdodDogNDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuICBcbiAgbGkge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAmLmFjdGl2ZSwgJjpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cblxuICBhcHAtbGFuZ3VhZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAgIGxpIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIH1cblxuICAgIGEge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgIGgxIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgbmF2e1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIHVse1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/header/language/language.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/components/header/language/language.component.ts ***!
  \***********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");







class LanguageComponent {
    constructor(translator, fb) {
        this.translator = translator;
        this.fb = fb;
        this.initForm();
        this.currentLang = this.translator.currentLang;
        this.languageForm.get('currentLanguage').valueChanges.subscribe(language => {
            this.translator.currentLang = language;
            this.translator.setLanguage(language);
        });
    }
    initForm() {
        this.languageForm = this.fb.group({
            currentLanguage: this.translator.currentLang
        });
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 12, vars: 2, consts: [[3, "formGroup"], ["appearance", "none"], ["for", "select"], ["matNativeControl", "", "formControlName", "currentLanguage", "id", "select"], ["select", ""], ["value", "ru"], ["value", "en"], ["value", "by"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.languageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r37.value ? _r37.value.toUpperCase() : ctx.currentLang.toUpperCase());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nlabel[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n  margin-left: 20px;\n  cursor: pointer;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  border: none;\n  width: 0;\n}\n\nmat-select[_ngcontent-%COMP%] {\n  position: absolute;\n  visibility: hidden;\n  top: 12px;\n  left: 10px;\n  width: 0;\n}\n\n@media (max-width: 820px) {\n  label[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-left: 10px;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    top: -7px;\n  }\n\n  mat-select[_ngcontent-%COMP%] {\n    top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2xhbmd1YWdlL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGNvcmVcXGNvbXBvbmVudHNcXGhlYWRlclxcbGFuZ3VhZ2VcXGxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwiYXBwL2NvcmUvY29tcG9uZW50cy9oZWFkZXIvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNDTjs7RURFRTtJQUNJLFNBQUE7RUNDTjs7RURFRTtJQUNJLFFBQUE7RUNDTjtBQUNGIiwiZmlsZSI6ImFwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2xhbmd1YWdlL2xhbmd1YWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxubGFiZWwge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAwO1xufVxuXG5tYXQtc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgfVxuXG4gICAgbWF0LXNlbGVjdCB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgIH1cbn0iLCJmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5sYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMDtcbn1cblxubWF0LXNlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0b3A6IDEycHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB0b3A6IC03cHg7XG4gIH1cblxuICBtYXQtc2VsZWN0IHtcbiAgICB0b3A6IDhweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language',
                templateUrl: './language.component.html',
                styleUrls: ['./language.component.scss']
            }]
    }], function () { return [{ type: _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_1__["OurTranslateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/intro/intro.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/intro/intro.component.ts ***!
  \**********************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../team/components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








const _c0 = ["mainHeading"];
function IntroComponent_h1_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntroComponent_h1_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Culture Portal?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntroComponent_h1_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class IntroComponent {
    constructor() {
        this.localStorageReferenceObject = localStorage;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            this.mainHeading.nativeElement.style.transform = 'translate(0px,' + Math.round(scrolled / 1.25) + '%)';
        });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], viewQuery: function IntroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainHeading = _t.first);
    } }, decls: 30, vars: 15, consts: [[1, "langSelector"], [1, "langCheckbox"], [1, "generalWrapper"], [1, "heading"], [1, "heading-text"], ["mainHeading", ""], [1, "fore-pic"], ["id", "subheadingIntroduction"], [1, "subheadingWrapper"], [1, "shield"], [1, "text-effect"], ["class", "neon", "data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?", "contenteditable", "", 4, "ngIf"], ["class", "neon", "data-text", "Culture Portal?", "contenteditable", "", 4, "ngIf"], ["class", "neon", "data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?", "contenteditable", "", 4, "ngIf"], [1, "gradient"], [1, "spotlight"], [1, "description"], [1, "buttonWrapper"], ["routerLink", "/content", 1, "enterPortalLink"], [1, "movingStrip"], ["data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B?", "contenteditable", "", 1, "neon"], ["data-text", "Culture Portal?", "contenteditable", "", 1, "neon"], ["data-text", "\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B \u041F\u0430\u0440\u0442\u0430\u043B?", "contenteditable", "", 1, "neon"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-language", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, IntroComponent_h1_15_Template, 2, 0, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, IntroComponent_h1_16_Template, 2, 0, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IntroComponent_h1_17_Template, 2, 0, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-our-team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "pageLinks.architectsOfBelarus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "pageLinks.whatIs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "en" || !ctx.localStorageReferenceObject.hasOwnProperty("lang"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localStorageReferenceObject.hasOwnProperty("lang") && ctx.localStorageReferenceObject.lang === "by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, "pageLinks.portalInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 13, "pageLinks.enter"));
    } }, directives: [_header_language_language_component__WEBPACK_IMPORTED_MODULE_1__["LanguageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _team_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_4__["OurTeamComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".langSelector[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  border-top: 0px solid transparent;\n  border-left: 100px solid rgba(211, 211, 211, 0.5);\n  border-bottom: 100px solid transparent;\n  z-index: 1;\n}\n\n@media (max-width: 820px) {\n  .langSelector[_ngcontent-%COMP%] {\n    border-left: 70px solid rgba(211, 211, 211, 0.5);\n    border-bottom: 70px solid transparent;\n  }\n}\n\n.langCheckbox[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 96;\n}\n\n.heading[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  background: url('intro_header_background.png');\n  background-size: cover;\n  background-attachment: fixed;\n  overflow: hidden;\n}\n\n.heading-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  margin-top: -50px;\n  font-family: \"Gothic\";\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  color: #000000;\n  font-size: 6vw;\n}\n\n.heading-text[_ngcontent-%COMP%]::after {\n  content: \"____________\";\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n          transform: translate(-50%);\n  font-weight: bold;\n}\n\n.fore-pic[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 5%;\n  width: 25vw;\n  height: 25vw;\n  background-image: url('Skorina.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 1;\n}\n\n#subheadingIntroduction[_ngcontent-%COMP%] {\n  margin-top: 4vw;\n  margin-left: 4vw;\n  font-family: \"Gothic\";\n  font-size: 4vw;\n  line-height: 5vw;\n  font-style: normal;\n  font-weight: normal;\n  color: #3E3636;\n}\n\n.subheadingWrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 9vw;\n  width: 80%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 4vw;\n  margin-bottom: 0;\n}\n\n.shield[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: inherit;\n  width: inherit;\n  z-index: 90;\n}\n\n.text-effect[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  -webkit-filter: contrast(110%) brightness(190%);\n          filter: contrast(110%) brightness(190%);\n}\n\n.neon[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  color: transparent;\n}\n\n.neon[_ngcontent-%COMP%]::before, .neon[_ngcontent-%COMP%]::after {\n  content: attr(data-text);\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.neon[_ngcontent-%COMP%]::after {\n  mix-blend-mode: difference;\n}\n\n.neon[_ngcontent-%COMP%]::before {\n  -webkit-filter: blur(0.02em);\n          filter: blur(0.02em);\n}\n\n.gradient[_ngcontent-%COMP%], .spotlight[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background: #D29F9F;\n  mix-blend-mode: multiply;\n}\n\n.spotlight[_ngcontent-%COMP%] {\n  -webkit-animation: light 5s infinite linear;\n          animation: light 5s infinite linear;\n  background: radial-gradient(circle, white, transparent 25%) 0 0/25% 25%, radial-gradient(circle, white, black 25%) 50% 50%/12.5% 12.5%;\n  top: -100%;\n  left: -100%;\n  mix-blend-mode: color-dodge;\n}\n\n@-webkit-keyframes light {\n  100% {\n    -webkit-transform: translate3d(50%, 50%, 0);\n            transform: translate3d(50%, 50%, 0);\n  }\n}\n\n@keyframes light {\n  100% {\n    -webkit-transform: translate3d(50%, 50%, 0);\n            transform: translate3d(50%, 50%, 0);\n  }\n}\n\n.neon[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  font-size: 6vw;\n  line-height: 7vw;\n  font-weight: bold;\n  text-align: center;\n  margin: 0;\n  color: black;\n}\n\n.neon[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 0 4vw;\n  font-size: 2vw;\n  line-height: 3vw;\n  font-weight: normal;\n  text-align: justify;\n  text-indent: 4em;\n  color: #3E3636;\n}\n\n.buttonWrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 4vw;\n}\n\n.enterPortalLink[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  font-size: 2vw;\n  letter-spacing: 2px;\n  color: #3E3636;\n  border: 2px solid #3E3636;\n  border-radius: 5px;\n  padding: 2vw 5vw;\n  position: relative;\n  text-align: center;\n  background: #D29F9F;\n  -webkit-transition: background 0.15s ease-in-out;\n  transition: background 0.15s ease-in-out;\n}\n\n.enterPortalLink[_ngcontent-%COMP%]:hover {\n  background: #AF8989;\n}\n\n.movingStrip[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(1%, rgba(255, 255, 255, 0.03)), color-stop(30%, rgba(255, 255, 255, 0.6)), color-stop(50%, rgba(255, 255, 255, 0.85)), color-stop(70%, rgba(255, 255, 255, 0.85)), color-stop(71%, rgba(255, 255, 255, 0.85)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 1%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.85) 71%, rgba(255, 255, 255, 0) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n  width: 15%;\n  height: 100%;\n  transform: skew(-10deg, 0deg);\n  -webkit-transform: skew(-10deg, 0deg);\n  -moz-transform: skew(-10deg, 0deg);\n  -ms-transform: skew(-10deg, 0deg);\n  -o-transform: skew(-10deg, 0deg);\n  animation: move 2s;\n  animation-iteration-count: infinite;\n  animation-delay: 1s;\n  -webkit-animation: move 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-delay: 1s;\n  -moz-transform: skew(-10deg, 0deg);\n  -moz-animation: move 2s;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-delay: 1s;\n  -ms-transform: skew(-10deg, 0deg);\n  -ms-animation: move 2s;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-delay: 1s;\n  -o-transform: skew(-10deg, 0deg);\n  -o-animation: move 2s;\n  -o-animation-iteration-count: infinite;\n  -o-animation-delay: 1s;\n}\n\n@keyframes move {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  5% {\n    opacity: 0;\n  }\n  48% {\n    opacity: 0.9;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    left: 82%;\n  }\n}\n\n@-webkit-keyframes move {\n  0% {\n    left: 0;\n    opacity: 0;\n  }\n  5% {\n    opacity: 0;\n  }\n  48% {\n    opacity: 0.9;\n  }\n  80% {\n    opacity: 0;\n  }\n  100% {\n    left: 82%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvaW50cm8vRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcY29yZVxcY29tcG9uZW50c1xcaW50cm9cXGludHJvLmNvbXBvbmVudC5zY3NzIiwiYXBwL2NvcmUvY29tcG9uZW50cy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0QsaUNBQUE7RUFDQSxpREFBQTtFQUNBLHNDQUFBO0VBQ0MsVUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxnREFBQTtJQUNELHFDQUFBO0VDRUQ7QUFDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSxjQUFBO0VBRUEsY0FBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ0FGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO1VBQUEsb0JBQUE7QUNFRjs7QURDQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUNFRjs7QURDQTtFQUNFLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxzSUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNFRjs7QURDQTtFQUNFO0lBQ0UsMkNBQUE7WUFBQSxtQ0FBQTtFQ0VGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLDJDQUFBO1lBQUEsbUNBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFJQSx3Q0FBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBTUEsNlVBQUE7RUFBQSxzUEFBQTtFQUNBLHVIQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDSUY7O0FERkE7RUFDRTtJQUNFLE9BQUE7SUFDQSxVQUFBO0VDS0Y7RURIQTtJQUNFLFVBQUE7RUNLRjtFREhBO0lBQ0UsWUFBQTtFQ0tGO0VESEE7SUFDRSxVQUFBO0VDS0Y7RURIQTtJQUNFLFNBQUE7RUNLRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxPQUFBO0lBQ0EsVUFBQTtFQ0tGO0VESEE7SUFDRSxVQUFBO0VDS0Y7RURIQTtJQUNFLFlBQUE7RUNLRjtFREhBO0lBQ0UsVUFBQTtFQ0tGO0VESEE7SUFDRSxTQUFBO0VDS0Y7QUFDRiIsImZpbGUiOiJhcHAvY29yZS9jb21wb25lbnRzL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmdTZWxlY3RvciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXHRib3JkZXItdG9wOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1sZWZ0OiAxMDBweCBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNSk7XG5cdGJvcmRlci1ib3R0b206IDEwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5sYW5nU2VsZWN0b3Ige1xuICAgIGJvcmRlci1sZWZ0OiA3MHB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcblx0ICBib3JkZXItYm90dG9tOiA3MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5sYW5nQ2hlY2tib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB6LWluZGV4OiA5Njtcbn1cblxuLmhlYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnRyb19oZWFkZXJfYmFja2dyb3VuZC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIFxuICBmb250LXNpemU6IDZ2dztcbn1cblxuLmhlYWRpbmctdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiAnX19fX19fX19fX19fJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JlLXBpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMjV2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL1Nrb3JpbmEucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNzdWJoZWFkaW5nSW50cm9kdWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNHZ3O1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgZm9udC1zaXplOiA0dnc7XG4gIGxpbmUtaGVpZ2h0OiA1dnc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbi5zdWJoZWFkaW5nV3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5dnc7XG4gIHdpZHRoOiA4MCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBtYXJnaW4tbGVmdDogNHZ3O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2hpZWxkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHotaW5kZXg6IDkwO1xufVxuXG4udGV4dC1lZmZlY3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmlsdGVyOiBjb250cmFzdCgxMTAlKSBicmlnaHRuZXNzKDE5MCUpO1xufVxuXG4ubmVvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uZW9uOjpiZWZvcmUsIC5uZW9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubmVvbjo6YWZ0ZXIge1xuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbn1cbi5uZW9uOjpiZWZvcmUge1xuICBmaWx0ZXI6IGJsdXIoMC4wMmVtKTtcbn1cblxuLmdyYWRpZW50LFxuLnNwb3RsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbn1cblxuLnNwb3RsaWdodCB7XG4gIGFuaW1hdGlvbjogbGlnaHQgNXMgaW5maW5pdGUgbGluZWFyO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgdHJhbnNwYXJlbnQgMjUlKSAwIDAvMjUlIDI1JSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUsIGJsYWNrIDI1JSkgNTAlIDUwJS8xMi41JSAxMi41JTtcbiAgdG9wOiAtMTAwJTtcbiAgbGVmdDogLTEwMCU7XG4gIG1peC1ibGVuZC1tb2RlOiBjb2xvci1kb2RnZTtcbn1cblxuQGtleWZyYW1lcyBsaWdodCB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNTAlLCA1MCUsIDApO1xuICB9XG59XG4ubmVvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBmb250LXNpemU6IDZ2dztcbiAgbGluZS1oZWlnaHQ6IDd2dztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubmVvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCA0dnc7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsaW5lLWhlaWdodDogM3Z3O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWluZGVudDogNGVtO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLmJ1dHRvbldyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNHZ3O1xufVxuXG4uZW50ZXJQb3J0YWxMaW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgYm9yZGVyOiAycHggc29saWQgIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAydncgNXZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0QyOUY5RjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLmVudGVyUG9ydGFsTGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNBRjg5ODk7XG59XG5cbi5tb3ZpbmdTdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIGNvbG9yLXN0b3AoMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpKSwgY29sb3Itc3RvcCg3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkpLCBjb2xvci1zdG9wKDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUgMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei1hbmltYXRpb246IG1vdmUgMnM7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtbXMtYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0OCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogODglO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0OCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogODIlO1xuICB9XG59XG5ALW8ta2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cbn1cbiIsIi5sYW5nU2VsZWN0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTAwcHggc29saWQgcmdiYSgyMTEsIDIxMSwgMjExLCAwLjUpO1xuICBib3JkZXItYm90dG9tOiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5sYW5nU2VsZWN0b3Ige1xuICAgIGJvcmRlci1sZWZ0OiA3MHB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC41KTtcbiAgICBib3JkZXItYm90dG9tOiA3MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG59XG4ubGFuZ0NoZWNrYm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgei1pbmRleDogOTY7XG59XG5cbi5oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ludHJvX2hlYWRlcl9iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRpbmctdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiA2dnc7XG59XG5cbi5oZWFkaW5nLXRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJfX19fX19fX19fX19cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JlLXBpYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1JTtcbiAgd2lkdGg6IDI1dnc7XG4gIGhlaWdodDogMjV2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Ta29yaW5hLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgei1pbmRleDogMTtcbn1cblxuI3N1YmhlYWRpbmdJbnRyb2R1Y3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0dnc7XG4gIG1hcmdpbi1sZWZ0OiA0dnc7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBmb250LXNpemU6IDR2dztcbiAgbGluZS1oZWlnaHQ6IDV2dztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLnN1YmhlYWRpbmdXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDl2dztcbiAgd2lkdGg6IDgwJTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA0dnc7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zaGllbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgei1pbmRleDogOTA7XG59XG5cbi50ZXh0LWVmZmVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmaWx0ZXI6IGNvbnRyYXN0KDExMCUpIGJyaWdodG5lc3MoMTkwJSk7XG59XG5cbi5uZW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmVvbjo6YmVmb3JlLCAubmVvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubmVvbjo6YWZ0ZXIge1xuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbn1cblxuLm5lb246OmJlZm9yZSB7XG4gIGZpbHRlcjogYmx1cigwLjAyZW0pO1xufVxuXG4uZ3JhZGllbnQsXG4uc3BvdGxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI0QyOUY5RjtcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xufVxuXG4uc3BvdGxpZ2h0IHtcbiAgYW5pbWF0aW9uOiBsaWdodCA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlLCB0cmFuc3BhcmVudCAyNSUpIDAgMC8yNSUgMjUlLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB3aGl0ZSwgYmxhY2sgMjUlKSA1MCUgNTAlLzEyLjUlIDEyLjUlO1xuICB0b3A6IC0xMDAlO1xuICBsZWZ0OiAtMTAwJTtcbiAgbWl4LWJsZW5kLW1vZGU6IGNvbG9yLWRvZGdlO1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0IHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1MCUsIDUwJSwgMCk7XG4gIH1cbn1cbi5uZW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGZvbnQtc2l6ZTogNnZ3O1xuICBsaW5lLWhlaWdodDogN3Z3O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5lb246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgNHZ3O1xuICBmb250LXNpemU6IDJ2dztcbiAgbGluZS1oZWlnaHQ6IDN2dztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDRlbTtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbi5idXR0b25XcmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDR2dztcbn1cblxuLmVudGVyUG9ydGFsTGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDJ2dztcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMzRTM2MzY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRTM2MzY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnZ3IDV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNEMjlGOUY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuLmVudGVyUG9ydGFsTGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNBRjg5ODk7XG59XG5cbi5tb3ZpbmdTdHJpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSksIGNvbG9yLXN0b3AoMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykpLCBjb2xvci1zdG9wKDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpKSwgY29sb3Itc3RvcCg3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkpLCBjb2xvci1zdG9wKDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNzElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMykgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KSA3MSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb246IG1vdmUgMnM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW1vei1hbmltYXRpb246IG1vdmUgMnM7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtMTBkZWcsIDBkZWcpO1xuICAtbXMtYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtby10cmFuc2Zvcm06IHNrZXcoLTEwZGVnLCAwZGVnKTtcbiAgLW8tYW5pbWF0aW9uOiBtb3ZlIDJzO1xuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA0OCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICA4MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogODIlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4OCU7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIG1vdmUge1xuICAwJSB7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQ4JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiA4MiU7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgbW92ZSB7XG4gIDAlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNDglIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDgyJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, { mainHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainHeading']
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageNotFoundComponent {
    constructor() {
        this.history = window.history;
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 16, vars: 1, consts: [[1, "wrapper"], [1, "smile-wrapper"], ["src", "/assets/images/sad-smile.png"], [3, "click"], [3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Page you are looking for doesn`t exist or another error occured.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_span_click_10_listener() { return ctx.history.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", or head over to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Main page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to choose another direction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/content");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background: url('castle.jpg');\n  background-size: cover;\n}\n.wrapper[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n}\n.smile-wrapper[_ngcontent-%COMP%] {\n  z-index: 1;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 120px;\n  margin: 50px;\n  z-index: 1;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #3E3636;\n  z-index: 1;\n}\np[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 20px;\n  color: #3E3636;\n  z-index: 1;\n}\nspan[_ngcontent-%COMP%] {\n  color: #D29F9F;\n  cursor: pointer;\n  font-size: 1.2em;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-decoration: underline;\n  color: #3E3636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL3Njc3NcXF92YXJpYWJsZXMuc2NzcyIsImFwcC9jb3JlL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJhcHAvY29yZS9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXGNvcmVcXGNvbXBvbmVudHNcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURlSjtBQ1pBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRGVKO0FDZEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGdCUjtBQ1pBO0VBQ0ksVUFBQTtBRGVKO0FDWkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FEZUo7QUNaQTtFQUNJLGVBQUE7RUFDQSxjRnhDUztFRXlDVCxVQUFBO0FEZUo7QUNaQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0YvQ1M7RUVnRFQsVUFBQTtBRGVKO0FDWkE7RUFDSSxjRnREUztFRXVEVCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FEZUoiLCJmaWxlIjoiYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBjb2xvcjogJGJsYWNrO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYXN0bGUuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi53cmFwcGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMDtcbn1cblxuLnNtaWxlLXdyYXBwZXIge1xuICB6LWluZGV4OiAxO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG4gIG1hcmdpbjogNTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjM0UzNjM2O1xuICB6LWluZGV4OiAxO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjM0UzNjM2O1xuICB6LWluZGV4OiAxO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNEMjlGOUY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzNFMzYzNjtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Nhc3RsZS5qcGcpOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbn1cblxuLnNtaWxlLXdyYXBwZXIge1xuICAgIHotaW5kZXg6IDE7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDEyMHB4O1xuICAgIG1hcmdpbjogNTBweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogJG1haW5fY29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzNFMzYzNjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/core/components/content/content.component.ts");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/core/components/intro/intro.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/core/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/core/services/navigation.service.ts");
/* harmony import */ var _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/language/language.component */ "./src/app/core/components/header/language/language.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _team_team_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../team/team.module */ "./src/app/team/team.module.ts");
























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
                }
            }),
            _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
        _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
        _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                    _components_content_content_component__WEBPACK_IMPORTED_MODULE_14__["ContentComponent"],
                    _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_15__["IntroComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                    _components_header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
                        }
                    }),
                    _team_team_module__WEBPACK_IMPORTED_MODULE_21__["TeamModule"]
                ],
                providers: [_services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/architects-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/architects-api.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchitectsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsApiService", function() { return ArchitectsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _locales_architects_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locales/architects-data */ "./src/locales/architects-data.ts");



class ArchitectsApiService {
    constructor(architectsData) {
        this.architectsData = architectsData;
    }
    getAll() {
        return this.architectsData.authors;
    }
    getById(id) {
        return this.architectsData.authors.find(author => author.id === id);
    }
    getRandom() {
        return this.architectsData.authors[Math.floor(Math.random() * this.architectsData.authors.length)];
    }
}
ArchitectsApiService.ɵfac = function ArchitectsApiService_Factory(t) { return new (t || ArchitectsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_locales_architects_data__WEBPACK_IMPORTED_MODULE_1__["ArchitectsData"])); };
ArchitectsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArchitectsApiService, factory: ArchitectsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArchitectsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _locales_architects_data__WEBPACK_IMPORTED_MODULE_1__["ArchitectsData"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/navigation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/navigation.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NavigationService {
    constructor() {
        this.navMenu = [
            {
                title: 'pageLinks.home',
                routing: '/'
            },
            {
                title: 'pageLinks.main',
                routing: '/content'
            },
            {
                title: 'pageLinks.listOfArchitects',
                routing: '/content/architects'
            },
            {
                title: 'pageLinks.workLog',
                routing: '/content/worklog'
            },
            {
                title: 'pageLinks.styleGuide',
                routing: '/content/styleguide',
            },
        ];
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/components/day-author/day-author.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/components/day-author/day-author.component.ts ***!
  \********************************************************************/
/*! exports provided: DayAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayAuthorComponent", function() { return DayAuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/architects-api.service */ "./src/app/core/services/architects-api.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






const _c0 = function (a1) { return ["architects", a1]; };
class DayAuthorComponent {
    constructor(architectsApi) {
        this.architectsApi = architectsApi;
    }
    ngOnInit() {
        this.randomArchitect = this.architectsApi.getRandom();
    }
}
DayAuthorComponent.ɵfac = function DayAuthorComponent_Factory(t) { return new (t || DayAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"])); };
DayAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayAuthorComponent, selectors: [["app-day-author"]], decls: 15, vars: 16, consts: [[1, "img-wrapper"], ["alt", "author", 3, "src"], [1, "content"], ["mat-stroked-button", "", 3, "routerLink"]], template: function DayAuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.randomArchitect.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx.randomArchitect.path + "." + ctx.randomArchitect.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.randomArchitect.path + "." + ctx.randomArchitect.date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, ctx.randomArchitect.path + "." + ctx.randomArchitect.vita));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.randomArchitect.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "pageLinks.More"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n[_nghost-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n  width: 385px;\n  background-color: #F9E7D3;\n  color: #3E3636;\n}\n.img-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 430px;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-top: 10px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n}\n@media (max-width: 1280px) {\n  [_nghost-%COMP%] {\n    width: 300px;\n    height: 575px;\n  }\n\n  .img-wrapper[_ngcontent-%COMP%] {\n    height: 370px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL2NvbXBvbmVudHMvZGF5LWF1dGhvci9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwiYXBwL21haW4vY29tcG9uZW50cy9kYXktYXV0aG9yL2RheS1hdXRob3IuY29tcG9uZW50LnNjc3MiLCJhcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcbWFpblxcY29tcG9uZW50c1xcZGF5LWF1dGhvclxcZGF5LWF1dGhvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkZMUTtFRU1SLGNGTFM7QUNvQmI7QUNYQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBRGNKO0FDYkk7RUFDSSxXQUFBO0FEZVI7QUNYQTtFQUNJLGFBQUE7QURjSjtBQ2JJO0VBQ0ksdUJBQUE7QURlUjtBQ1pJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FEY1I7QUNYSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRGFSO0FDVEE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VEWU47O0VDVEU7SUFDSSxhQUFBO0VEWU47O0VDVEU7SUFDSSxhQUFBO0VEWU47RUNYTTtJQUNJLGVBQUE7RURhVjtFQ1ZNO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VEWVY7QUFDRiIsImZpbGUiOiJhcHAvbWFpbi9jb21wb25lbnRzL2RheS1hdXRob3IvZGF5LWF1dGhvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgxLCBoMiwgaDMge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBjb2xvcjogJGJsYWNrO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBzcmM6IHVybChcInNyYy9hc3NldHMvZm9udHMvR290aGljUnVzLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmgxLCBoMiwgaDMge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG59XG5cbjpob3N0IHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDM4NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFN0QzO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA0MzBweDtcbn1cbi5pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmNvbnRlbnQgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTc1cHg7XG4gIH1cblxuICAuaW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogMzcwcHg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY29udGVudCBoNCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5jb250ZW50IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzg1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Yl9jb2xvcjtcbiAgICBjb2xvcjogJGZvbnRfY29sb3I7XG59XG5cblxuLmltZy13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogNDMwcHg7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICA6aG9zdCB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA1NzVweDtcbiAgICB9XG5cbiAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIH1cblxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-day-author',
                templateUrl: './day-author.component.html',
                styleUrls: ['./day-author.component.scss']
            }]
    }], function () { return [{ type: _core_services_architects_api_service__WEBPACK_IMPORTED_MODULE_1__["ArchitectsApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/components/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main/components/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _day_author_day_author_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../day-author/day-author.component */ "./src/app/main/components/day-author/day-author.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 24, vars: 33, consts: [[3, "innerHTML"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-day-author");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, "pageLinks.Main-content-1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, "pageLinks.Main-content-2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, "pageLinks.Main-content-3"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, "pageLinks.Main-content-4"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 19, "pageLinks.Main-content-5"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, "pageLinks.Main-content-6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, "pageLinks.Main-content-7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, "pageLinks.Main-content-8"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 27, "pageLinks.Main-content-9"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 29, "pageLinks.Main-content-10"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 31, "pageLinks.Main-content-11"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_1__["DayAuthorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 40px 30px 90px 30px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n\np[_ngcontent-%COMP%] {\n  text-indent: 1.5em;\n  margin: 10px;\n  font-size: 20px;\n  line-height: 35px;\n  text-align: justify;\n}\n\n@media (max-width: 940px) {\n  [_nghost-%COMP%] {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-top: 10px;\n  }\n\n  div[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n\n@media (max-width: 630px) {\n  [_nghost-%COMP%] {\n    padding: 10px 15px 40px 15px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 17px;\n    line-height: 30px;\n  }\n}\n\n@media (max-width: 420px) {\n  [_nghost-%COMP%] {\n    padding: 10px 10px 40px 10px;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluL2NvbXBvbmVudHMvbWFpbi9FOlxc0JLQvtCy0LAtINGE0LvQtdGF0LBcXFRyYWluaW5nXFxSU1NjaG9vbFxcY3VsdHVyYWwtcG9ydGFsXFxzcmMvYXBwXFxtYWluXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwiYXBwL21haW4vY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURJQTtFQUNFO0lBQ0UsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EseUJBQUE7WUFBQSxtQkFBQTtJQUNBLGlCQUFBO0VDREY7O0VER0E7SUFDRSxnQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLDRCQUFBO0VDREY7O0VESUE7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNERjtBQUNGOztBRElBO0VBQ0U7SUFDRSw0QkFBQTtFQ0ZGOztFREtBO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJhcHAvbWFpbi9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogNDBweCAzMHB4IDkwcHggMzBweDtcbn1cblxuZGl2IHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxucCB7XG4gIHRleHQtaW5kZW50OiAxLjVlbTtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gIDpob3N0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgZGl2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDQwcHggMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCA0MHB4IDEwcHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDQwcHggMzBweCA5MHB4IDMwcHg7XG59XG5cbmRpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbnAge1xuICB0ZXh0LWluZGVudDogMS41ZW07XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gIDpob3N0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cblxuICBkaXYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICA6aG9zdCB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDQwcHggMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNDBweCAxMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/main/components/main/main.component.ts");
/* harmony import */ var _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/day-author/day-author.component */ "./src/app/main/components/day-author/day-author.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__["DayAuthorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
                    _components_day_author_day_author_component__WEBPACK_IMPORTED_MODULE_3__["DayAuthorComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/search-by.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/search-by.pipe.ts ***!
  \************************************************/
/*! exports provided: SearchByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByPipe", function() { return SearchByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class SearchByPipe {
    constructor(translate) {
        this.translate = translate;
    }
    transform(list, search = '') {
        if (!search.trim()) {
            return list;
        }
        return list.filter(item => this.translate
            .instant(`${item.path}.${item.searchKey}`)
            .toLowerCase()
            .includes(search.toLowerCase()));
    }
}
SearchByPipe.ɵfac = function SearchByPipe_Factory(t) { return new (t || SearchByPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
SearchByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchBy", type: SearchByPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchBy'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/translate.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/translate.service.ts ***!
  \******************************************************/
/*! exports provided: OurTranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTranslateService", function() { return OurTranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class OurTranslateService {
    constructor(translateService) {
        this.translateService = translateService;
        this.defaultLang = 'en';
        this.currentLang = localStorage.getItem('lang') || this.defaultLang;
    }
    setLanguage(language) {
        this.translateService.setDefaultLang(language);
        localStorage.setItem('lang', language);
    }
}
OurTranslateService.ɵfac = function OurTranslateService_Factory(t) { return new (t || OurTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
OurTranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OurTranslateService, factory: OurTranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OurStyleguideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStyleguideComponent", function() { return OurStyleguideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class OurStyleguideComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OurStyleguideComponent.ɵfac = function OurStyleguideComponent_Factory(t) { return new (t || OurStyleguideComponent)(); };
OurStyleguideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurStyleguideComponent, selectors: [["app-our-styleguide"]], decls: 74, vars: 48, consts: [[1, "welcomeHeading"], ["routerLink", "/"], [1, "styleguideColors"], [1, "wrp"], [1, "color-box", 2, "background-color", "#D29F9F"], [1, "text"], [1, "color-box", 2, "background-color", "#f9e7d3"], [1, "color-box", 2, "background-color", "#000000"], [1, "color-box", 2, "background-color", "#3e3636"], [1, "styleguideHeadings"], [1, "styleguideButtons"], [1, "colored_btn"], [1, "outlined_btn"], [1, "stuleguideSearchForm"], [1, "form"], ["type", "search", 3, "placeholder"], [1, "icon"], ["src", "../../../../assets/images/search_icon.png", "alt", "search"], [1, "styleguideTextWrapper"], [1, "styleguideText"]], template: function OurStyleguideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#d29f9f");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#f9e7d3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "#000000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#3e3636");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, quis ipsum! Inventore assumenda quisquam corrupti vitae aliquam, quos similique velit cupiditate culpa doloremque nostrum, dicta voluptatum esse a laborum asperiores? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "pageLinks.styleguideWelcome"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "pageLinks.styleguideCulturePortal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, "pageLinks.styleguideDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "pageLinks.styleguidePrimaryColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 24, "pageLinks.styleguideSecondaryColor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 26, "pageLinks.styleguidePrimaryText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 28, "pageLinks.styleguideSecondaryText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 30, "pageLinks.styleguideHeading"), " 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 32, "pageLinks.styleguideHeading"), " 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 34, "pageLinks.styleguideHeading"), " 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 36, "pageLinks.styleguideHeading"), " 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 38, "pageLinks.styleguideHeading"), " 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 40, "pageLinks.styleguideHeading"), " 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 42, "pageLinks.styleguideButtonColored"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 44, "pageLinks.styleguideButtonOutlined"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 46, "pageLinks.Search-area"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".welcomeHeading[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.welcomeHeading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n  text-align: center;\n}\n.welcomeHeading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #D29F9F;\n  text-decoration: none;\n}\n.welcomeHeading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ca8e8e;\n}\n.welcomeHeading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n  text-align: center;\n}\n.styleguideButtons[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: center;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 2% 5%;\n  padding: 10px 30px;\n  text-align: center;\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 18px;\n  color: #3E3636;\n  border: 2px solid #3E3636;\n  border-radius: 5px;\n  background: #D29F9F;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%]:hover, .styleguideButtons[_ngcontent-%COMP%]   .colored_btn[_ngcontent-%COMP%]:focus {\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n}\n.styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  margin: 2% 5%;\n  padding: 10px 30px;\n  text-align: center;\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 18px;\n  color: #3E3636;\n  border: 1px solid #3E3636;\n  border-radius: 5px;\n  background: #ffffff;\n}\n.styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%]:hover, .styleguideButtons[_ngcontent-%COMP%]   .outlined_btn[_ngcontent-%COMP%]:focus {\n  background: #D29F9F;\n}\n.styleguideColors[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.styleguideColors[_ngcontent-%COMP%]   .wrp[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 40%;\n}\n.styleguideColors[_ngcontent-%COMP%]   .color-box[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  width: 115px;\n  height: 70px;\n  margin-right: 20px;\n  background-color: red;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.styleguideColors[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid gray;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 2px 5px;\n}\n.styleguideColors[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n}\n.styleguideHeadings[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  margin-left: 40%;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\n.styleguideHeadings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .styleguideHeadings[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  position: relative;\n  width: 41%;\n  margin: 0 auto;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 35px;\n  padding-left: 10px;\n  border: 1px solid #3E3636;\n  border-radius: 20px;\n  outline: none;\n  background: #fff;\n  color: #666;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  width: 50px;\n  height: 35px;\n  border: none;\n  background-color: #3E3636;\n  border-radius: 0 20px 20px 0;\n  cursor: pointer;\n  outline: none;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  margin: auto;\n}\n.stuleguideSearchForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  -webkit-filter: brightness(150%);\n          filter: brightness(150%);\n}\n.styleguideTextWrapper[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.styleguideTextWrapper[_ngcontent-%COMP%]   .styleguideText[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n  text-align: justify;\n  padding: 0 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 25px;\n  color: #3E3636;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdHlsZWd1aWRlL2NvbXBvbmVudHMvb3VyLXN0eWxlZ3VpZGUvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcc3R5bGVndWlkZVxcY29tcG9uZW50c1xcb3VyLXN0eWxlZ3VpZGVcXG91ci1zdHlsZWd1aWRlLmNvbXBvbmVudC5zY3NzIiwiYXBwL3N0eWxlZ3VpZGUvY29tcG9uZW50cy9vdXItc3R5bGVndWlkZS9vdXItc3R5bGVndWlkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNMRjtBRE9FO0VBQ0kscUJBQUE7RUFDQSxjQVRFO0VBVUYsa0JBQUE7QUNMTjtBRFFFO0VBQ0ksY0FqQk87RUFrQlAscUJBQUE7QUNOTjtBRFNFO0VBQ0ksY0FBQTtBQ1BOO0FEVUU7RUFDSSx5Q0FBQTtFQUNBLGNBekJPO0VBMEJQLGtCQUFBO0FDUk47QURlQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEY0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEYUk7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDWE47QURlRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDYko7QURjSTtFQUNJLG1CQUFBO0FDWlI7QURvQkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDakJGO0FEbUJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2pCSjtBRG9CRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQ2xCSjtBRHFCRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0FDbkJKO0FEc0JFO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRDJCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUN4QkY7QUQwQkU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUN4Qk47QUQyQkU7RUFDSSxxQkFBQTtFQUNBLGNBNUhFO0FDbUdSO0FENEJFO0VBQ0kseUNBQUE7RUFDQSxjQWxJTztBQ3dHYjtBRGlDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUM5QkY7QURnQ0U7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDOUJOO0FEaUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDL0JOO0FEa0NJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQXJLTztFQXNLUCw0QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDaENOO0FEa0NNO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2hDVjtBRG1DRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNqQ0o7QUR3Q0E7RUFDRSxlQUFBO0FDckNGO0FEdUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNyQ0oiLCJmaWxlIjoiYXBwL3N0eWxlZ3VpZGUvY29tcG9uZW50cy9vdXItc3R5bGVndWlkZS9vdXItc3R5bGVndWlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluX2NvbG9yOiAjRDI5RjlGO1xuJHN1Yl9jb2xvcjogI0Y5RTdEMztcbiRmb250X2NvbG9yOiAjM0UzNjM2O1xuJGJsYWNrOiAjMDAwMDAwO1xuICBcbi8vIFdlbGNvbWUgUGFyYWdyYXBoXG4ud2VsY29tZUhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICBoMSB7XG4gICAgICBmb250LWZhbWlseTogJ0dvdGhpYyc7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBhIHtcbiAgICAgIGNvbG9yOiAkbWFpbl9jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgYTpob3ZlciB7XG4gICAgICBjb2xvcjogZGFya2VuKCRjb2xvcjogJG1haW5fY29sb3IsICRhbW91bnQ6IDUpO1xuICB9XG4gIFxuICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgY29sb3I6ICRmb250X2NvbG9yO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cblxuXG4vLyBCdXR0b25zXG4uc3R5bGVndWlkZUJ1dHRvbnMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuY29sb3JlZF9idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAyJSA1JTtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzNFMzYzNjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM0UzNjM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRDI5RjlGO1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgLm91dGxpbmVkX2J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIlIDUlO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjM0UzNjM2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRTM2MzY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNEMjlGOUY7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBDb2xvcnNcbi5zdHlsZWd1aWRlQ29sb3JzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIC53cnAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG4gIFxuICAuY29sb3ItYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgfVxuICBcbiAgLnRleHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cblxuXG4vLyBIZWFkaW5nc1xuLnN0eWxlZ3VpZGVIZWFkaW5ncyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgXG4gIGgxIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG4gIH1cbiAgXG4gIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbiAgfVxufVxuXG5cblxuLy8gU2VhcmNoIEZvcm1cbi5zdHVsZWd1aWRlU2VhcmNoRm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuZm9ybSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogNDElO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRmb250X2NvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gICAgYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMHB4O1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udF9jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIH1cbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxNTAlKTtcbiAgfVxufVxuXG5cblxuLy8gVGV4dFxuLnN0eWxlZ3VpZGVUZXh0V3JhcHBlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgXG4gIC5zdHlsZWd1aWRlVGV4dCB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgY29sb3I6ICMzRTM2MzY7XG4gIH1cbn1cbiIsIi53ZWxjb21lSGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLndlbGNvbWVIZWFkaW5nIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2VsY29tZUhlYWRpbmcgYSB7XG4gIGNvbG9yOiAjRDI5RjlGO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ud2VsY29tZUhlYWRpbmcgYTpob3ZlciB7XG4gIGNvbG9yOiAjY2E4ZThlO1xufVxuLndlbGNvbWVIZWFkaW5nIHAge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzRTM2MzY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0eWxlZ3VpZGVCdXR0b25zIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3R5bGVndWlkZUJ1dHRvbnMgLmNvbG9yZWRfYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMiUgNSU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgYm9yZGVyOiAycHggc29saWQgIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjRDI5RjlGO1xufVxuLnN0eWxlZ3VpZGVCdXR0b25zIC5jb2xvcmVkX2J0bjpob3ZlciwgLnN0eWxlZ3VpZGVCdXR0b25zIC5jb2xvcmVkX2J0bjpmb2N1cyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbi5zdHlsZWd1aWRlQnV0dG9ucyAub3V0bGluZWRfYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMiUgNSU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzNFMzYzNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNFMzYzNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnN0eWxlZ3VpZGVCdXR0b25zIC5vdXRsaW5lZF9idG46aG92ZXIsIC5zdHlsZWd1aWRlQnV0dG9ucyAub3V0bGluZWRfYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI0QyOUY5Rjtcbn1cblxuLnN0eWxlZ3VpZGVDb2xvcnMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3R5bGVndWlkZUNvbG9ycyAud3JwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cbi5zdHlsZWd1aWRlQ29sb3JzIC5jb2xvci1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5zdHlsZWd1aWRlQ29sb3JzIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG59XG4uc3R5bGVndWlkZUNvbG9ycyBoMiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3R5bGVndWlkZUhlYWRpbmdzIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN0eWxlZ3VpZGVIZWFkaW5ncyBoMSwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoMiwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoMywgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNCwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNSwgLnN0eWxlZ3VpZGVIZWFkaW5ncyBoNiB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cbi5zdHlsZWd1aWRlSGVhZGluZ3MgaDEge1xuICBmb250LWZhbWlseTogXCJHb3RoaWNcIjtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc3R5bGVndWlkZUhlYWRpbmdzIGgyLCAuc3R5bGVndWlkZUhlYWRpbmdzIGgzLCAuc3R5bGVndWlkZUhlYWRpbmdzIGg0LCAuc3R5bGVndWlkZUhlYWRpbmdzIGg1LCAuc3R5bGVndWlkZUhlYWRpbmdzIGg2IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG4uc3R1bGVndWlkZVNlYXJjaEZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uc3R1bGVndWlkZVNlYXJjaEZvcm0gLmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0MSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN0dWxlZ3VpZGVTZWFyY2hGb3JtIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjM0UzNjM2O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzY2Njtcbn1cbi5zdHVsZWd1aWRlU2VhcmNoRm9ybSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UzNjM2O1xuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3R1bGVndWlkZVNlYXJjaEZvcm0gYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4uc3R1bGVndWlkZVNlYXJjaEZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xufVxuXG4uc3R5bGVndWlkZVRleHRXcmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnN0eWxlZ3VpZGVUZXh0V3JhcHBlciAuc3R5bGVndWlkZVRleHQge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzNFMzYzNjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurStyleguideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-styleguide',
                templateUrl: './our-styleguide.component.html',
                styleUrls: ['./our-styleguide.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/styleguide/styleguide.module.ts":
/*!*************************************************!*\
  !*** ./src/app/styleguide/styleguide.module.ts ***!
  \*************************************************/
/*! exports provided: StyleguideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleguideModule", function() { return StyleguideModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-styleguide/our-styleguide.component */ "./src/app/styleguide/components/our-styleguide/our-styleguide.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class StyleguideModule {
}
StyleguideModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StyleguideModule });
StyleguideModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StyleguideModule_Factory(t) { return new (t || StyleguideModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StyleguideModule, { declarations: [_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__["OurStyleguideComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleguideModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_styleguide_our_styleguide_component__WEBPACK_IMPORTED_MODULE_2__["OurStyleguideComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/team/components/our-team/our-team.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/team/components/our-team/our-team.component.ts ***!
  \****************************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class OurTeamComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OurTeamComponent.ɵfac = function OurTeamComponent_Factory(t) { return new (t || OurTeamComponent)(); };
OurTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurTeamComponent, selectors: [["app-our-team"]], decls: 80, vars: 42, consts: [[1, "wrp"], [1, "list"], [1, "item"], [1, "photo"], ["src", "/assets/images/vladimir-drachuk.jpg", "alt", "Vladimir Drachuk"], ["href", "https://github.com/vladimir-drachuk"], ["src", "/assets/images/github_icon3.png", "alt", "github", 1, "icon"], [1, "text"], [1, "name"], ["src", "/assets/images/Alex-Edward-Klim.jpg", "alt", "Alexey Klimovskoy"], ["href", "https://github.com/Alex-Edward-Klim"], ["src", "/assets/images/shrrrimp.jpg", "alt", "Yuliya Takmakova"], ["href", "https://github.com/shrrrimp"], ["src", "/assets/images/pavel-leskavets.jpg", "alt", "Pavel Leskavets"], ["href", "https://github.com/pavel-leskavets"], ["src", "/assets/images/beMoreHuman.jpg", "alt", "Oleksandr Klymenko"], ["href", "https://github.com/BeMoreHuman"], ["src", "/assets/images/dimlbc.jpg", "alt", "Dmitri Lobachevski"], ["href", "https://github.com/dimlbc"], ["id", "more-btn", "routerLink", "/content/worklog"]], template: function OurTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "pageLinks.ourTeam"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 16, "pageLinks.teamVladimirDrachuk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "pageLinks.teamDescriptionVladimirDrachuk"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 20, "pageLinks.teamAlexKlim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 22, "pageLinks.teamDescriptionAlexKlim"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 24, "pageLinks.teamYuliyaTakmakova"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 26, "pageLinks.teamDescriptionYuliyaTakmakova"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 28, "pageLinks.teamPavelLeskavets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 30, "pageLinks.teamDescriptionPavelLeskavets"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 32, "pageLinks.teamOleksandrKlymenko"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 34, "pageLinks.teamDescriptionOleksandrKlymenko"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 36, "pageLinks.teamDmitriLobachevski"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 38, "pageLinks.teamDescriptionDmitriLobachevski"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 40, "pageLinks.More"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"Gothic\";\n  src: url('GothicRus.woff') format(\"woff\"), url('GothicRus.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Gothic\";\n  color: #000000;\n}\np[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #3E3636;\n}\n.wrp[_ngcontent-%COMP%] {\n  padding: 70px 90px;\n  background-color: #3E3636;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  font-size: 30pt;\n}\n.list[_ngcontent-%COMP%] {\n  margin: 70px 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 45px 70px;\n}\n.item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 144px 1fr;\n}\n.item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  align-self: center;\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 18pt;\n}\n.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-align: justify;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 144px;\n  height: 144px;\n  border-radius: 100%;\n}\n.photo[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  border: none;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.photo[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 100%;\n  border: 2px solid #2b2525;\n}\n#more-btn[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 10px 30px;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  border-radius: 5px;\n}\n#more-btn[_ngcontent-%COMP%]:hover {\n  background-color: #D29F9F;\n  color: #3E3636;\n}\n@media (max-width: 940px) {\n  .wrp[_ngcontent-%COMP%] {\n    padding: 70px 20px;\n  }\n}\n@media (max-width: 820px) {\n  .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-top: 20px;\n  }\n}\n@media (max-width: 630px) {\n  .list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media (max-width: 420px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 24pt;\n  }\n\n  .photo[_ngcontent-%COMP%] {\n    width: 120px;\n    height: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90ZWFtL2NvbXBvbmVudHMvb3VyLXRlYW0vRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL3Njc3NcXF92YXJpYWJsZXMuc2NzcyIsImFwcC90ZWFtL2NvbXBvbmVudHMvb3VyLXRlYW0vb3VyLXRlYW0uY29tcG9uZW50LnNjc3MiLCJhcHAvdGVhbS9jb21wb25lbnRzL291ci10ZWFtL0U6XFzQktC+0LLQsC0g0YTQu9C10YXQsFxcVHJhaW5pbmdcXFJTU2Nob29sXFxjdWx0dXJhbC1wb3J0YWxcXHNyYy9hcHBcXHRlYW1cXGNvbXBvbmVudHNcXG91ci10ZWFtXFxvdXItdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLHFCQUFBO0VBQ0EsaUZBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEo7QURRQTtFQUNJLHFCQUFBO0VBQ0EsY0FaSTtBQ01SO0FEU0E7RUFDSSx5Q0FBQTtFQUNBLGNBbEJTO0FDWWI7QUNaQTtFQUNFLGtCQUFBO0VBQ0EseUJGRlc7QUNpQmI7QUNaQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEZUY7QUNaQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FEZUY7QUNaQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBRGVGO0FDYkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FEZUo7QUNaRTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7QURjSjtBQ1hFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FEYUo7QUNUQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRFlGO0FDVkU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURZSjtBQ1RFO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QURXSjtBQ1JFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURVSjtBQ05BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEU0Y7QUNOQTtFQUNFLHlCRm5GVztFRW9GWCxjRmxGVztBQzJGYjtBQ05BO0VBQ0U7SUFDRSxrQkFBQTtFRFNGO0FBQ0Y7QUNOQTtFQUNFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VEUUY7O0VDTEE7SUFDRSx5QkFBQTtJQUNBLGdCQUFBO0VEUUY7QUFDRjtBQ0xBO0VBQ0U7SUFDRSwwQkFBQTtFRE9GOztFQ0pBO0lBQ0UsY0FBQTtFRE9GOztFQ0pBO0lBQ0Usa0JBQUE7RURPRjtBQUNGO0FDSkE7RUFDRTtJQUNFLGVBQUE7RURNRjs7RUNIQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VETUY7QUFDRiIsImZpbGUiOiJhcHAvdGVhbS9jb21wb25lbnRzL291ci10ZWFtL291ci10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW5fY29sb3I6ICNEMjlGOUY7XG4kc3ViX2NvbG9yOiAjRjlFN0QzO1xuJGZvbnRfY29sb3I6ICMzRTM2MzY7XG4kYmxhY2s6ICMwMDAwMDA7XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnR290aGljJztcbiAgICBzcmM6IHVybCgnc3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCdzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuaDEsIGgyLCBoMyB7XG4gICAgZm9udC1mYW1pbHk6ICdHb3RoaWMnO1xuICAgIGNvbG9yOiAkYmxhY2s7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkZm9udF9jb2xvcjtcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR290aGljXCI7XG4gIHNyYzogdXJsKFwic3JjL2Fzc2V0cy9mb250cy9Hb3RoaWNSdXMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJzcmMvYXNzZXRzL2ZvbnRzL0dvdGhpY1J1cy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpY1wiO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxuLndycCB7XG4gIHBhZGRpbmc6IDcwcHggOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNFMzYzNjtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDcwcHggMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDQ1cHggNzBweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0NHB4IDFmcjtcbn1cbi5pdGVtIC50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pdGVtIC5uYW1lIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHQ7XG59XG4uaXRlbSBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE0NHB4O1xuICBoZWlnaHQ6IDE0NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLnBob3RvIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4ucGhvdG8gLmljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucGhvdG8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyYjI1MjU7XG59XG5cbiNtb3JlLWJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNtb3JlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTQwcHgpIHtcbiAgLndycCB7XG4gICAgcGFkZGluZzogNzBweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAubGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGhvdG8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHQ7XG4gIH1cblxuICAucGhvdG8ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG59IiwiQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xuXG4ud3JwIHtcbiAgcGFkZGluZzogNzBweCA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9udF9jb2xvcjtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW46IDcwcHggMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDQ1cHggNzBweDtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE0NHB4IDFmcjtcblxuICAudGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThwdDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cblxuLnBob3RvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTQ0cHg7XG4gIGhlaWdodDogMTQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuICAuaWNvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2VuKCRjb2xvcjogJGZvbnRfY29sb3IsICRhbW91bnQ6IDcpO1xuICB9XG59XG5cbiNtb3JlLWJ0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNtb3JlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluX2NvbG9yO1xuICBjb2xvcjogJGZvbnRfY29sb3I7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAud3JwIHtcbiAgICBwYWRkaW5nOiA3MHB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAudGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAubGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGhvdG8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRwdDtcbiAgfVxuXG4gIC5waG90byB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-team',
                templateUrl: './our-team.component.html',
                styleUrls: ['./our-team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/team/team.module.ts":
/*!*************************************!*\
  !*** ./src/app/team/team.module.ts ***!
  \*************************************/
/*! exports provided: TeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamModule", function() { return TeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-team/our-team.component */ "./src/app/team/components/our-team/our-team.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class TeamModule {
}
TeamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TeamModule_Factory(t) { return new (t || TeamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ],
                exports: [
                    _components_our_team_our_team_component__WEBPACK_IMPORTED_MODULE_2__["OurTeamComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/worklog/components/our-worklog/our-worklog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/worklog/components/our-worklog/our-worklog.component.ts ***!
  \*************************************************************************/
/*! exports provided: OurWorklogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurWorklogComponent", function() { return OurWorklogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants_team_members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/team-members */ "./src/app/worklog/constants/team-members.ts");
/* harmony import */ var _constants_scopes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/scopes */ "./src/app/worklog/constants/scopes.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function OurWorklogComponent_mat_expansion_panel_5_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "worklog.feature"));
} }
function OurWorklogComponent_mat_expansion_panel_5_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r23.feature), " ");
} }
function OurWorklogComponent_mat_expansion_panel_5_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "worklog.time"));
} }
function OurWorklogComponent_mat_expansion_panel_5_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r24.time), " ");
} }
function OurWorklogComponent_mat_expansion_panel_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function OurWorklogComponent_mat_expansion_panel_5_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function OurWorklogComponent_mat_expansion_panel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OurWorklogComponent_mat_expansion_panel_5_th_7_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurWorklogComponent_mat_expansion_panel_5_td_8_Template, 3, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurWorklogComponent_mat_expansion_panel_5_th_10_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OurWorklogComponent_mat_expansion_panel_5_td_11_Template, 3, 3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OurWorklogComponent_mat_expansion_panel_5_tr_12_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OurWorklogComponent_mat_expansion_panel_5_tr_13_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r16 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, member_r16.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", member_r16.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns);
} }
function OurWorklogComponent_mat_checkbox_37_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_37_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const item_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r26.completed = !item_r26.completed; return ctx_r27.onMinScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r26.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r26.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r26.text), " ");
} }
function OurWorklogComponent_mat_checkbox_42_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_42_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r29.completed = !item_r29.completed; return ctx_r30.onNormalScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r29.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r29.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r29.text), " ");
} }
function OurWorklogComponent_mat_checkbox_47_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OurWorklogComponent_mat_checkbox_47_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const item_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); item_r32.completed = !item_r32.completed; return ctx_r33.onExtraScopeChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r32.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", item_r32.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, item_r32.text), " ");
} }
class OurWorklogComponent {
    constructor() {
        this.displayedColumns = ['feature', 'time'];
        this.team = _constants_team_members__WEBPACK_IMPORTED_MODULE_1__["teamMembersWorklog"];
        this.minScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["minScope"];
        this.normalScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["normalScope"];
        this.extraScope = _constants_scopes__WEBPACK_IMPORTED_MODULE_2__["extraScope"];
        this.minScopeTotal = this.minScope.reduce((acc, item) => acc + item.value, 0);
        this.normalScopeTotal = this.normalScope.reduce((acc, item) => acc + item.value, 0);
        this.extraScopeTotal = this.extraScope.reduce((acc, item) => acc + item.value, 0);
        this.totalScore = this.minScopeTotal + this.normalScopeTotal + this.extraScopeTotal;
    }
    ngOnInit() {
        this.onMinScopeChange();
        this.onNormalScopeChange();
        this.onExtraScopeChange();
    }
    onMinScopeChange() {
        this.minScopeActual = this.minScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    onNormalScopeChange() {
        this.normalScopeActual = this.normalScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    onExtraScopeChange() {
        this.extraScopeActual = this.extraScope
            .filter(item => item.completed)
            .reduce((acc, item) => acc + item.value, 0);
        this.countActualScore();
    }
    countActualScore() {
        this.actualScore = this.minScopeActual + this.normalScopeActual + this.extraScopeActual;
    }
}
OurWorklogComponent.ɵfac = function OurWorklogComponent_Factory(t) { return new (t || OurWorklogComponent)(); };
OurWorklogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurWorklogComponent, selectors: [["app-our-worklog"]], decls: 51, vars: 51, consts: [[1, "accordion-wrapper"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "difficulties-wrapper"], [1, "difficulties-header"], [1, "difficulties"], [1, "author"], [1, "self-evaluation-container"], [1, "self-evaluation-header"], [1, "min-scope"], [1, "total"], [3, "checked", "change", 4, "ngFor", "ngForOf"], [1, "normal-scope"], [1, "extra-scope"], [1, "total-container"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "feature"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "time"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "checked", "change"]], template: function OurWorklogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OurWorklogComponent_mat_expansion_panel_5_Template, 14, 6, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "cite", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, OurWorklogComponent_mat_checkbox_37_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OurWorklogComponent_mat_checkbox_42_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OurWorklogComponent_mat_checkbox_47_Template, 5, 5, "mat-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 25, "worklog.header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 27, "worklog.worklog-difficulties"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 29, "worklog.difficulty1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 31, "worklog.difficulty1-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 33, "worklog.difficulty2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 35, "worklog.difficulty2-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 37, "worklog.difficulty3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 39, "worklog.difficulty3-author"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 41, "worklog.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 43, "min-scope.title"), ": ", ctx.minScopeActual, "/", ctx.minScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.minScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 45, "normal-scope.title"), ": ", ctx.normalScopeActual, "/", ctx.normalScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.normalScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 47, "extra-scope.title"), ": ", ctx.extraScopeActual, "/", ctx.extraScopeTotal, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.extraScope);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 49, "worklog.total"), ": ", ctx.actualScore, " / ", ctx.totalScore, " ");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["h2[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: normal;\n  color: #3E3636;\n}\n\n.accordion-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 2rem auto;\n}\n\nmat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #D29F9F;\n}\n\nmat-panel-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #3E3636;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #F9E7D3;\n}\n\n.difficulties-wrapper[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  padding: 2rem;\n  background-color: #F9E7D3;\n}\n\n.difficulties-header[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n  text-align: center;\n}\n\n.difficulties[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.author[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-bottom: 3rem;\n}\n\n.self-evaluation-container[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 1rem auto;\n}\n\n.self-evaluation-header[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  font-weight: normal;\n  text-align: center;\n}\n\n.total[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-bottom: 1rem;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border-bottom: 5px solid #D29F9F;\n}\n\n.min-scope[_ngcontent-%COMP%], .normal-scope[_ngcontent-%COMP%], .extra-scope[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-bottom: 1rem;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.2rem;\n}\n\n.total-container[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93b3JrbG9nL2NvbXBvbmVudHMvb3VyLXdvcmtsb2cvRTpcXNCS0L7QstCwLSDRhNC70LXRhdCwXFxUcmFpbmluZ1xcUlNTY2hvb2xcXGN1bHR1cmFsLXBvcnRhbFxcc3JjL2FwcFxcd29ya2xvZ1xcY29tcG9uZW50c1xcb3VyLXdvcmtsb2dcXG91ci13b3JrbG9nLmNvbXBvbmVudC5zY3NzIiwiYXBwL3dvcmtsb2cvY29tcG9uZW50cy9vdXItd29ya2xvZy9vdXItd29ya2xvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ1FGOztBRE5BO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNXRjs7QURUQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1lGOztBRFZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7QUNhRjs7QURYQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ2NGOztBRFpBO0VBQ0UsaUJBQUE7QUNlRiIsImZpbGUiOiJhcHAvd29ya2xvZy9jb21wb25lbnRzL291ci13b3JrbG9nL291ci13b3JrbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuLmFjY29yZGlvbi13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDI5RjlGO1xufVxubWF0LXBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RTdEMztcbn1cbi5kaWZmaWN1bHRpZXMtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUU3RDM7XG59XG4uZGlmZmljdWx0aWVzLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaWZmaWN1bHRpZXMge1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hdXRob3Ige1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5zZWxmLWV2YWx1YXRpb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4uc2VsZi1ldmFsdWF0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvdGFsIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMC40cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNEMjlGOUY7XG59XG4ubWluLXNjb3BlLCAubm9ybWFsLXNjb3BlLCAuZXh0cmEtc2NvcGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxubWF0LWNoZWNrYm94e1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IC4ycmVtO1xufVxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuIiwiaDIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjM0UzNjM2O1xufVxuXG4uYWNjb3JkaW9uLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMjlGOUY7XG59XG5cbm1hdC1wYW5lbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzNFMzYzNjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFN0QzO1xufVxuXG4uZGlmZmljdWx0aWVzLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlFN0QzO1xufVxuXG4uZGlmZmljdWx0aWVzLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpZmZpY3VsdGllcyB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYXV0aG9yIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5zZWxmLWV2YWx1YXRpb24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG5cbi5zZWxmLWV2YWx1YXRpb24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3RhbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjRDI5RjlGO1xufVxuXG4ubWluLXNjb3BlLCAubm9ybWFsLXNjb3BlLCAuZXh0cmEtc2NvcGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurWorklogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-worklog',
                templateUrl: './our-worklog.component.html',
                styleUrls: ['./our-worklog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/worklog/constants/scopes.ts":
/*!*********************************************!*\
  !*** ./src/app/worklog/constants/scopes.ts ***!
  \*********************************************/
/*! exports provided: minScope, normalScope, extraScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minScope", function() { return minScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalScope", function() { return normalScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraScope", function() { return extraScope; });
const minScope = [
    { value: 10, text: 'min-scope.item1', completed: true },
    { value: 10, text: 'min-scope.item2', completed: true },
    { value: 10, text: 'min-scope.item3', completed: true },
    { value: 20, text: 'min-scope.item4', completed: true }
];
const normalScope = [
    { value: 20, text: 'normal-scope.item1', completed: true },
    { value: 10, text: 'normal-scope.item2', completed: true },
    { value: 10, text: 'normal-scope.item3', completed: true },
    { value: 10, text: 'normal-scope.item4', completed: true },
    { value: 10, text: 'normal-scope.item5', completed: true },
    { value: 20, text: 'normal-scope.item6', completed: true },
    { value: 10, text: 'normal-scope.item7', completed: true },
    { value: 20, text: 'normal-scope.item8', completed: true },
    { value: 20, text: 'normal-scope.item9', completed: true },
    { value: 10, text: 'normal-scope.item10', completed: true }
];
const extraScope = [
    { value: 10, text: 'extra-scope.item1', completed: true },
    { value: 10, text: 'extra-scope.item2', completed: true },
    { value: 10, text: 'extra-scope.item3', completed: true },
    { value: 20, text: 'extra-scope.item4', completed: true },
    { value: 20, text: 'extra-scope.item5', completed: true },
    { value: 20, text: 'extra-scope.item6', completed: true }
];


/***/ }),

/***/ "./src/app/worklog/constants/team-members.ts":
/*!***************************************************!*\
  !*** ./src/app/worklog/constants/team-members.ts ***!
  \***************************************************/
/*! exports provided: teamMembersWorklog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamMembersWorklog", function() { return teamMembersWorklog; });
const dmitri = {
    name: 'dimlbc.name',
    features: [
        { feature: 'dimlbc.feature', time: 'dimlbc.time' },
        { feature: 'dimlbc.feature1', time: 'dimlbc.time1' }
    ]
};
const julia = {
    name: 'julia.name',
    features: [
        { feature: 'julia.feature', time: 'julia.time' },
        { feature: 'julia.feature1', time: 'julia.time1' }
    ]
};
const alexKlim = {
    name: 'alexKlim.name',
    features: [
        { feature: 'alexKlim.feature', time: 'alexKlim.time' },
        { feature: 'alexKlim.feature1', time: 'alexKlim.time1' },
        { feature: 'alexKlim.feature2', time: 'alexKlim.time2' },
        { feature: 'alexKlim.feature3', time: 'alexKlim.time3' },
        { feature: 'alexKlim.feature4', time: 'alexKlim.time4' }
    ]
};
const alex = {
    name: 'alex.name',
    features: [
        { feature: 'alex.feature', time: 'alex.time' },
        { feature: 'alex.feature1', time: 'alex.time1' }
    ]
};
const pavel = {
    name: 'pavel.name',
    features: [
        { feature: 'pavel.feature', time: 'pavel.time' },
        { feature: 'pavel.feature1', time: 'pavel.time1' }
    ]
};
const vladimir = {
    name: 'vladimir.name',
    features: [
        { feature: 'vladimir.feature', time: 'vladimir.time' },
        { feature: 'vladimir.feature1', time: 'vladimir.time1' }
    ]
};
const teamMembersWorklog = [dmitri, julia, alex, alexKlim, vladimir, pavel];


/***/ }),

/***/ "./src/app/worklog/worklog.module.ts":
/*!*******************************************!*\
  !*** ./src/app/worklog/worklog.module.ts ***!
  \*******************************************/
/*! exports provided: WorklogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklogModule", function() { return WorklogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/our-worklog/our-worklog.component */ "./src/app/worklog/components/our-worklog/our-worklog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");








class WorklogModule {
}
WorklogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorklogModule });
WorklogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorklogModule_Factory(t) { return new (t || WorklogModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorklogModule, { declarations: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]], exports: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorklogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]],
                exports: [_components_our_worklog_our_worklog_component__WEBPACK_IMPORTED_MODULE_2__["OurWorklogComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    youtubeUrl: 'https://www.youtube.com/embed/',
    mapsUrl: 'https://www.google.com/maps/d/embed?'
};


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/locales/architects-data.ts":
/*!****************************************!*\
  !*** ./src/locales/architects-data.ts ***!
  \****************************************/
/*! exports provided: ArchitectsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectsData", function() { return ArchitectsData; });
class ArchitectsData {
    constructor() {
        this.authors = [
            {
                id: '1',
                path: 'levin',
                name: 'name',
                date: 'date',
                img: 'assets/images/Levin.jpg',
                videoId: 'qoWJgqu47gA',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1DMvXxw4BPZYozlqBwvqmgzWLMr6HpzH5&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1954-1960',
                        text: 'timeline1'
                    },
                    {
                        date: '1960',
                        text: 'timeline2'
                    },
                    {
                        date: '1960-1967',
                        text: 'timeline3'
                    },
                    {
                        date: '1968',
                        text: 'timeline4'
                    },
                    {
                        date: '1970',
                        text: 'timeline5'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1969',
                        img: '/assets/works/Levin/Колас.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1972',
                        img: '/assets/works/Levin/Купала.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1972',
                        img: '/assets/works/Levin/Метро.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898331,
                        length: 27.560555,
                        date: '1984',
                        img: '/assets/works/Levin/Предместье.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 53.898331,
                        length: 27.560555,
                        date: '1980—1986',
                        img: '/assets/works/Levin/Хатынь.jpg'
                    }
                ]
            },
            {
                id: '2',
                path: 'dzuzeppe',
                name: 'name',
                date: 'date',
                img: 'assets/images/Sakko.jpg',
                videoId: 'IRZfWzGChyo',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=10ZwynmgbM79zAAagBDpS4fxav_vpOQfO&hl=en',
                timelineData: [
                    {
                        date: '1768',
                        text: 'timeline1'
                    },
                    {
                        date: '1771',
                        text: 'timeline2'
                    },
                    {
                        date: '1771-1780',
                        text: 'timeline3'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/площадь.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Святский.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/театр.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Щорсы.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Sakko/Ciążeń.jpg'
                    }
                ]
            },
            {
                id: '3',
                path: 'karako',
                name: 'name',
                date: 'date',
                img: 'assets/images/Karako.jpg',
                videoId: 'TkaLjjNj8Ls',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1XdWwCcjN5n_7C0kFCxcq2G2r2VYV6fFO&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1966—1972',
                        text: 'timeline1'
                    },
                    {
                        date: '1972—1976',
                        text: 'timeline2'
                    },
                    {
                        date: '1976—1982',
                        text: 'timeline3'
                    },
                    {
                        date: '1982',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1970',
                        img: '/assets/works/Karako/банк.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: 'XVIII century',
                        img: '/assets/works/Karako/ЦМ.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '2004',
                        img: '/assets/works/Karako/Школа.jpg'
                    }
                ]
            },
            {
                id: '4',
                path: 'ananich',
                name: 'name',
                date: 'date',
                img: 'assets/images/Ananich.jpg',
                videoId: 'LiSW2jgILeQ',
                vita: 'vita',
                authorOfTheDay: 'true',
                lng: 'en',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1vhu3Tx8WxYjPhjjqoz1_mbK6wuDt-yPn&hl=en',
                searchKey: 'searchKey',
                timelineData: [
                    {
                        date: '1978',
                        text: 'timeline1'
                    },
                    {
                        date: '1979-2009',
                        text: 'timeline2'
                    },
                    {
                        date: '2009',
                        text: 'timeline3'
                    },
                    {
                        date: '2015',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '2007',
                        img: '/assets/works/Ananich/беларусбанк.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '2016',
                        img: '/assets/works/Ananich/посольство.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '2012',
                        img: '/assets/works/Ananich/бсб-банк.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 53.898331,
                        length: 27.560555,
                        date: '2007',
                        img: '/assets/works/Ananich/нацбанк.jpg'
                    }
                ]
            },
            {
                id: '5',
                path: 'langbard',
                name: 'name',
                date: 'date',
                img: 'assets/images/Langbard.jpg',
                videoId: 'dlQIlW3V-iU',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                geovidgetLink: 'mid=1azzyT0kI_WJG5h08u9p0Kt-Nv_h_FO8s&hl=en',
                timelineData: [
                    {
                        date: '1907',
                        text: 'timeline1'
                    },
                    {
                        date: '1923',
                        text: 'timeline2'
                    },
                    {
                        date: '1929',
                        text: 'timeline3'
                    },
                    {
                        date: '1926 - 1927',
                        text: 'timeline4'
                    },
                    {
                        date: '1937',
                        text: 'timeline5'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1930-1934',
                        img: '/assets/works/Langbard/ленинград.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1934-1939',
                        img: '/assets/works/Langbard/офицер.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1935',
                        img: '/assets/works/Langbard/Правительство.jpg'
                    }
                ]
            },
            {
                id: '6',
                path: 'paolo',
                name: 'name',
                date: 'date',
                img: 'assets/images/Fontana.jpg',
                videoId: 'oRW-u95CTQQ',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1h1uJwA9rkRhJToIj-Wna3cup2YWiBSDE&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1730',
                        text: 'timeline1'
                    },
                    {
                        date: '1730 - 1740',
                        text: 'timeline2'
                    },
                    {
                        date: '1745',
                        text: 'timeline3'
                    },
                    {
                        date: '1748',
                        text: 'timeline4'
                    }
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.898,
                        length: 27.56,
                        date: '1754—1770',
                        img: '/assets/works/Fontana/Винницкий.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.898,
                        length: 27.551,
                        date: '1758—1760',
                        img: '/assets/works/Fontana/сангушко.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.898,
                        length: 27.551,
                        date: '1764 - 1774',
                        img: '/assets/works/Fontana/Синагога.jpg'
                    }
                ]
            },
            {
                id: '7',
                path: 'shabunevsky',
                name: 'name',
                date: 'date',
                img: 'assets/images/Shabunevsky.jpg',
                videoId: 'a43rFmrY78c',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1ss2nwd8StdF6TlThZSXZU7yfEFYCTGKw&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1892',
                        text: 'timeline1'
                    },
                    {
                        date: '1897',
                        text: 'timeline2'
                    },
                    {
                        date: '1903',
                        text: 'timeline3'
                    },
                    {
                        date: '1919',
                        text: 'timeline4'
                    },
                    {
                        date: '1924',
                        text: 'timeline5'
                    },
                    {
                        date: '1937',
                        text: 'timeline6'
                    },
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 52.4333,
                        length: 31.0037,
                        date: '1898',
                        img: '/assets/works/Shabunevsky/Гимназия.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 52.4304,
                        length: 31.0110,
                        date: '1901',
                        img: '/assets/works/Shabunevsky/Орловский.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 52.4269,
                        length: 31.0137,
                        date: '1910-1912',
                        img: '/assets/works/Shabunevsky/Виленский.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 52.4292,
                        length: 31.0062,
                        date: '1909',
                        img: '/assets/works/Shabunevsky/Доктор.jpg'
                    },
                    {
                        title: 'worktitle5',
                        width: 52.4155,
                        length: 31.0096,
                        date: '1915',
                        img: '/assets/works/Shabunevsky/Земская.jpg'
                    }
                ]
            },
            {
                id: '8',
                path: 'parusnikov',
                name: 'name',
                date: 'date',
                img: 'assets/images/Parusnikov.jpg',
                videoId: 'Kzdllifv0UE',
                vita: 'vita',
                authorOfTheDay: 'false',
                lng: 'en',
                geovidgetLink: 'mid=1JQjnp6_ZKpRCdDrjjUKIqybiqkSB6sFC&hl=en',
                searchKey: 'searchKey',
                birthPlace: 'birthPlace',
                timelineData: [
                    {
                        date: '1913-1918',
                        text: 'timeline1'
                    },
                    {
                        date: '1924',
                        text: 'timeline2'
                    },
                    {
                        date: '1941-1944',
                        text: 'timeline3'
                    },
                    {
                        date: '1944-1948',
                        text: 'timeline4'
                    },
                    {
                        date: '1953',
                        text: 'timeline5'
                    },
                ],
                work: [
                    {
                        title: 'worktitle1',
                        width: 53.8983,
                        length: 27.5543,
                        date: '1945—1947',
                        img: '/assets/works/Parusnikov/КГБ.jpg'
                    },
                    {
                        title: 'worktitle2',
                        width: 53.9000,
                        length: 27.5588,
                        date: '1950',
                        img: '/assets/works/Parusnikov/Нацбанк.jpg'
                    },
                    {
                        title: 'worktitle3',
                        width: 53.9066,
                        length: 27.5711,
                        date: '1954',
                        img: '/assets/works/Parusnikov/Мост.jpg'
                    },
                    {
                        title: 'worktitle4',
                        width: 57.6325,
                        length: 39.8871,
                        date: '1960',
                        img: '/assets/works/Parusnikov/Дом.jpg'
                    }
                ]
            }
        ];
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Вова- флеха\Training\RSSchool\cultural-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map