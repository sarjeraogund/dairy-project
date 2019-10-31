(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-top-navigation></app-top-navigation>\r\n<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactus/contactus.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactus/contactus.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <!--==========================\n      Contact Section\n    ============================-->\n    <section id=\"contact\" class=\"section-bg wow fadeInUp\">\n    \n        <div class=\"container\">\n  \n          <div class=\"section-header\">\n            <h3>Contact Us</h3>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n          </div>\n  \n          <div class=\"row contact-info\">\n  \n            <div class=\"col-md-4\">\n              <div class=\"contact-address\">\n                <i class=\"ion-ios-location-outline\"></i>\n                <h3>Address</h3>\n                <address>A108 Adam Street, NY 535022, USA</address>\n              </div>\n            </div>\n  \n            <div class=\"col-md-4\">\n              <div class=\"contact-phone\">\n                <i class=\"ion-ios-telephone-outline\"></i>\n                <h3>Phone Number</h3>\n                <p><a href=\"tel:+155895548855\">+1 5589 55488 55</a></p>\n              </div>\n            </div>\n  \n            <div class=\"col-md-4\">\n              <div class=\"contact-email\">\n                <i class=\"ion-ios-email-outline\"></i>\n                <h3>Email</h3>\n                <p><a href=\"mailto:info@example.com\">info@example.com</a></p>\n              </div>\n            </div>\n  \n          </div>\n  \n          <div class=\"form\">\n            <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n            <div id=\"errormessage\"></div>\n            <form name=\"form\" #f=\"ngForm\" (submit)=\"f.form.valid && onSubmitData()\" novalidate class=\"contactForm\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6\">\n                  <input type=\"text\" \n                        name=\"name\" \n                        class=\"form-control\" \n                        id=\"name\" \n                        placeholder=\"Your Name\" \n                        [(ngModel)]=\"model.name\"\n                        #name=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && name.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-input\">\n                        <div *ngIf=\"name.errors?.required\">Name field is Required</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6\">\n                  <input type=\"email\" \n                        class=\"form-control\" \n                        name=\"email\" id=\"email\" \n                        placeholder=\"Your Email\" \n                        [(ngModel)]=\"model.email\"\n                        #email=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && email.invalid }\"\n                        required email/>\n                    <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"email.errors?.required\">Email field is Required</div>\n                            <div *ngIf=\"email.errors?.email\">Enter valid Email Id</div>\n                    </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" \n                        class=\"form-control\" \n                        name=\"subject\" \n                        id=\"subject\" \n                        placeholder=\"Subject\" \n                        [(ngModel)]=\"model.subject\"\n                        #subject=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && subject.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && subject.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"subject.errors?.required\">Subject field is Required</div>\n                    </div>\n              </div>\n              <div class=\"form-group\">\n                    <textarea class=\"form-control\" \n                        name=\"message\" rows=\"5\" \n                        placeholder=\"Message\"\n                        [(ngModel)]=\"model.message\"\n                        #message=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && message.invalid }\"\n                        required minlength=\"10\">\n                    </textarea>\n                    <div *ngIf=\"f.submitted && message.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"message.errors?.required\">Message field is Required</div>\n                            <div *ngIf=\"message.errors?.minlength\">Enter about your message</div>\n                    </div>\n              </div>\n              <div class=\"text-center\"><button type=\"submit\">Send Message</button></div>\n            </form>\n          </div>\n        </div>\n    </section><!-- #contact -->\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--==========================\n    Footer\n  ============================-->\n  <footer id=\"footer\">\n    <div class=\"footer-top\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-3 col-md-6 footer-info\">\n            <h3>BizPage</h3>\n            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-links\">\n            <h4>Useful Links</h4>\n            <ul>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Home</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">About us</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Services</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Terms of service</a></li>\n              <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#\">Privacy policy</a></li>\n            </ul>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-contact\">\n            <h4>Contact Us</h4>\n            <p>\n              A108 Adam Street <br>\n              New York, NY 535022<br>\n              United States <br>\n              <strong>Phone:</strong> +1 5589 55488 55<br>\n              <strong>Email:</strong> info@example.com<br>\n            </p>\n\n            <div class=\"social-links\">\n              <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n              <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n              <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n              <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n              <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n            </div>\n\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 footer-newsletter\">\n            <h4>Our Newsletter</h4>\n            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>\n            <form action=\"\" method=\"post\">\n              <input type=\"email\" name=\"email\"><input type=\"submit\"  value=\"Subscribe\">\n            </form>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; Copyright <strong>BizPage</strong>. All Rights Reserved\n      </div>\n      <div class=\"credits\">\n        <!--\n          All the links in the footer should remain intact.\n          You can delete the links only if you purchased the pro version.\n          Licensing information: https://bootstrapmade.com/license/\n          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage\n        -->\n        Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\n      </div>\n    </div>\n  </footer><!-- #footer -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n  <!--==========================\n    Intro Section\n  ============================-->\n  <section id=\"intro\">\n    <div class=\"intro-container\">\n      <div id=\"introCarousel\" class=\"carousel  slide carousel-fade\" data-ride=\"carousel\">\n\n        <ol class=\"carousel-indicators\"></ol>\n\n        <div class=\"carousel-inner\" role=\"listbox\">\n\n          <div class=\"carousel-item active\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/1.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>We are professional</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/2.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>At vero eos et accusamus</h2>\n                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/3.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>Temporibus autem quibusdam</h2>\n                <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/4.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>Nam libero tempore</h2>\n                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"carousel-background\"><img src=\"assets/img/intro-carousel/5.jpg\" alt=\"\"></div>\n            <div class=\"carousel-container\">\n              <div class=\"carousel-content\">\n                <h2>Magnam aliquam quaerat</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n                <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <a class=\"carousel-control-prev\" href=\"#introCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon ion-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n\n        <a class=\"carousel-control-next\" href=\"#introCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon ion-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n\n      </div>\n    </div>\n  </section><!-- #intro -->\n\n  <main id=\"main\">\n\n    <!--==========================\n      Featured Services Section\n    ============================-->\n    <section id=\"featured-services\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-4 box\">\n            <i class=\"ion-ios-bookmarks-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Lorem Ipsum Delino</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n\n          <div class=\"col-lg-4 box box-bg\">\n            <i class=\"ion-ios-stopwatch-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n\n          <div class=\"col-lg-4 box\">\n            <i class=\"ion-ios-heart-outline\"></i>\n            <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\n            <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n          </div>\n\n        </div>\n      </div>\n    </section><!-- #featured-services -->\n\n    <!--==========================\n      About Us Section\n    ============================-->\n    <section id=\"about\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>About Us</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        </header>\n\n        <div class=\"row about-cols\">\n\n          <div class=\"col-md-4 wow fadeInUp\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/about-mission.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a href=\"#\">Our Mission</a></h2>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/about-plan.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-list-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a href=\"#\">Our Plan</a></h2>\n              <p>\n                Sed ut perspiciatis unde omnis iste natus error sit voluptatem  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n              </p>\n            </div>\n          </div>\n\n          <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"about-col\">\n              <div class=\"img\">\n                <img src=\"assets/img/about-vision.jpg\" alt=\"\" class=\"img-fluid\">\n                <div class=\"icon\"><i class=\"ion-ios-eye-outline\"></i></div>\n              </div>\n              <h2 class=\"title\"><a href=\"#\">Our Vision</a></h2>\n              <p>\n                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.\n              </p>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #about -->\n\n    <!--==========================\n      Services Section\n    ============================-->\n    <section id=\"services\">\n      <div class=\"container\">\n\n        <header class=\"section-header wow fadeInUp\">\n          <h3>Services</h3>\n          <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>\n        </header>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-analytics-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Lorem Ipsum</a></h4>\n            <p class=\"description\">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-bookmarks-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Dolor Sitema</a></h4>\n            <p class=\"description\">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-paper-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Sed ut perspiciatis</a></h4>\n            <p class=\"description\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Magni Dolores</a></h4>\n            <p class=\"description\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-barcode-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Nemo Enim</a></h4>\n            <p class=\"description\">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>\n          </div>\n          <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n            <div class=\"icon\"><i class=\"ion-ios-people-outline\"></i></div>\n            <h4 class=\"title\"><a href=\"\">Eiusmod Tempor</a></h4>\n            <p class=\"description\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #services -->\n\n    <!--==========================\n      Call To Action Section\n    ============================-->\n    <section id=\"call-to-action\" class=\"wow fadeIn\">\n      <div class=\"container text-center\">\n        <h3>Call To Action</h3>\n        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <a class=\"cta-btn\" href=\"#\">Call To Action</a>\n      </div>\n    </section><!-- #call-to-action -->\n\n    <!--==========================\n      Skills Section\n    ============================-->\n    <section id=\"skills\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Our Skills</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>\n        </header>\n\n        <div class=\"skills-content\">\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">HTML <i class=\"val\">100%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">CSS <i class=\"val\">90%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">JavaScript <i class=\"val\">75%</i></span>\n            </div>\n          </div>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n              <span class=\"skill\">Photoshop <i class=\"val\">55%</i></span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section>\n\n    <!--==========================\n      Facts Section\n    ============================-->\n    <section id=\"facts\"  class=\"wow fadeIn\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Facts</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n        </header>\n\n        <div class=\"row counters\">\n\n  \t\t\t\t<div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">274</span>\n            <p>Clients</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">421</span>\n            <p>Projects</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">1,364</span>\n            <p>Hours Of Support</p>\n  \t\t\t\t</div>\n\n          <div class=\"col-lg-3 col-6 text-center\">\n            <span data-toggle=\"counter-up\">18</span>\n            <p>Hard Workers</p>\n  \t\t\t\t</div>\n\n  \t\t\t</div>\n\n        <div class=\"facts-img\">\n          <img src=\"assets/img/facts-img.png\" alt=\"\" class=\"img-fluid\">\n        </div>\n\n      </div>\n    </section><!-- #facts -->\n\n    <!--==========================\n      Portfolio Section\n    ============================-->\n    <section id=\"portfolio\"  class=\"section-bg\" >\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3 class=\"section-title\">Our Portfolio</h3>\n        </header>\n\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <ul id=\"portfolio-flters\">\n              <li data-filter=\"*\" class=\"filter-active\">All</li>\n              <li data-filter=\".filter-app\">App</li>\n              <li data-filter=\".filter-card\">Card</li>\n              <li data-filter=\".filter-web\">Web</li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row portfolio-container\">\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 1</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 3</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 2</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 2</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 2</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/app3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/app3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">App 3</a></h4>\n                <p>App</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 1</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/card3.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/card3.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Card 3\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Card 3</a></h4>\n                <p>Card</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"portfolio-wrap\">\n              <figure>\n                <img src=\"assets/img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\n                <a href=\"assets/img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                <a href=\"#\" class=\"link-details\" title=\"More Details\"><i class=\"ion ion-android-open\"></i></a>\n              </figure>\n\n              <div class=\"portfolio-info\">\n                <h4><a href=\"#\">Web 1</a></h4>\n                <p>Web</p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #portfolio -->\n\n    <!--==========================\n      Clients Section\n    ============================-->\n    <section id=\"clients\" class=\"wow fadeInUp\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Our Clients</h3>\n        </header>\n\n        <div class=\"owl-carousel clients-carousel\">\n          <img src=\"assets/img/clients/client-1.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-2.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-3.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-4.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-5.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-6.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-7.png\" alt=\"\">\n          <img src=\"assets/img/clients/client-8.png\" alt=\"\">\n        </div>\n\n      </div>\n    </section><!-- #clients -->\n\n    <!--==========================\n      Clients Section\n    ============================-->\n    <section id=\"testimonials\" class=\"section-bg wow fadeInUp\">\n      <div class=\"container\">\n\n        <header class=\"section-header\">\n          <h3>Testimonials</h3>\n        </header>\n\n        <div class=\"owl-carousel testimonials-carousel\">\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-1.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Saul Goodman</h3>\n            <h4>Ceo &amp; Founder</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-2.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Sara Wilsson</h3>\n            <h4>Designer</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-3.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Jena Karlis</h3>\n            <h4>Store Owner</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-4.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>Matt Brandon</h3>\n            <h4>Freelancer</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n          <div class=\"testimonial-item\">\n            <img src=\"assets/img/testimonial-5.jpg\" class=\"testimonial-img\" alt=\"\">\n            <h3>John Larson</h3>\n            <h4>Entrepreneur</h4>\n            <p>\n              <img src=\"assets/img/quote-sign-left.png\" class=\"quote-sign-left\" alt=\"\">\n              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.\n              <img src=\"assets/img/quote-sign-right.png\" class=\"quote-sign-right\" alt=\"\">\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #testimonials -->\n\n    <!--==========================\n      Team Section\n    ============================-->\n    <section id=\"team\">\n      <div class=\"container\">\n        <div class=\"section-header wow fadeInUp\">\n          <h3>Team</h3>\n          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-1.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Walter White</h4>\n                  <span>Chief Executive Officer</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.1s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-2.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Sarah Jhonson</h4>\n                  <span>Product Manager</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-3.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>William Anderson</h4>\n                  <span>CTO</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-3 col-md-6 wow fadeInUp\" data-wow-delay=\"0.3s\">\n            <div class=\"member\">\n              <img src=\"assets/img/team-4.jpg\" class=\"img-fluid\" alt=\"\">\n              <div class=\"member-info\">\n                <div class=\"member-info-content\">\n                  <h4>Amanda Jepson</h4>\n                  <span>Accountant</span>\n                  <div class=\"social\">\n                    <a href=\"\"><i class=\"fa fa-twitter\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-facebook\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-google-plus\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-linkedin\"></i></a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </section><!-- #team -->   \n  </main>  \n  <app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    <!--==========================\n      Contact Section\n    ============================-->\n    <section id=\"contact\" class=\"section-bg wow fadeInUp\">\n    \n        <div class=\"container\">\n  \n          <div class=\"section-header\">\n            <h3>Log In</h3>\n            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>\n          </div>\n  \n          <div class=\"form\">\n            <form name=\"form\" #f=\"ngForm\" (submit)=\"f.form.valid && onSubmitLogin()\" method=\"POST\" novalidate class=\"contactForm\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-6 text-center\">\n                  <input type=\"text\" \n                        name=\"user_id\" \n                        class=\"form-control\" \n                        id=\"user_id\" \n                        placeholder=\"User Name\" \n                        [(ngModel)]=\"model.user_id\"\n                        #user_id=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && user_id.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && user_id.invalid\" class=\"invalid-input\">\n                        <div *ngIf=\"user_id.errors?.required\">User Name field is Required</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6 text-center\">\n                  <input type=\"password\" \n                        class=\"form-control\" \n                        name=\"password\" id=\"password\" \n                        placeholder=\"Your Password\" \n                        [(ngModel)]=\"model.password\"\n                        #password=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && password.invalid }\"\n                        required password/>\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"password.errors?.required\">Password field is Required</div>\n                            <div *ngIf=\"password.errors?.password\">Enter valid Password</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6 text-center\">\n                    <input type=\"checkbox\" name=\"remember\">\n                    <label>Remember Me</label>\n                </div>\n              </div>                \n              <div class=\"text-center\"><button type=\"submit\">Log-In</button></div>\n            </form>\n          </div>\n          </div>\n    </section><!-- #contact -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("    <!--==========================\n      SignUp Section\n    ============================-->\n    <section id=\"contact\" class=\"section-bg wow fadeInUp\">\n    \n        <div class=\"container\">\n          <div class=\"section-header\">\n            <h3>Sign Up</h3>\n          </div>  \n          <div class=\"form\">\n            <form name=\"form\" #f=\"ngForm\" (submit)=\"f.form.valid && onSubmitSignup()\" method=\"POST\" novalidate class=\"contactForm\">\n              <div class=\"form-group\">\n                  <input type=\"text\" \n                        name=\"user_id\" id=\"user_id\" \n                        class=\"form-control\" \n                        placeholder=\"User Id\" \n                        [(ngModel)]=\"model.user_id\"\n                        #user_id=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && user_id.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && user_id.invalid\" class=\"invalid-input\">\n                        <div *ngIf=\"user_id.errors?.required\">User Id field is Required</div>\n                    </div>\n            </div>\n            <div class=\"form-group\">\n                  <input type=\"password\" \n                        class=\"form-control\" \n                        name=\"password\" id=\"password\" \n                        placeholder=\"Password\" \n                        [(ngModel)]=\"model.password\"\n                        #password=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && password.invalid }\"\n                        required minlength=\"7\"/>\n                    <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"password.errors?.required\">Password field is Required</div>\n                            <div *ngIf=\"password.errors?.minlength\">Password length must be greater than 7.</div>\n                    </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" \n                      class=\"form-control\" \n                      name=\"full_name\" id=\"full_name\" \n                      placeholder=\"Full Name\" \n                      [(ngModel)]=\"model.full_name\"\n                      #full_name=\"ngModel\"\n                      [ngClass]=\"{'is-valid': f.submitted && full_name.invalid }\"\n                      required/>\n                  <div *ngIf=\"f.submitted && full_name.invalid\" class=\"invalid-input\">\n                          <div *ngIf=\"full_name.errors?.required\">Full Name is Required</div>\n                  </div>         \n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-6 text-center\">\n                  <input type=\"date\" \n                        class=\"form-control\" \n                        name=\"dob\" id=\"dob\" \n                        placeholder=\"Date of Birth\" \n                        [(ngModel)]=\"model.dob\"\n                        #dob=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && dob.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && dob.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"dob.errors?.required\">Date of Birth is Required</div>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-6 text-center\">\n                  <input type=\"text\" \n                        class=\"form-control\" \n                        name=\"gender\" id=\"gender\" \n                        placeholder=\"Gender\" \n                        [(ngModel)]=\"model.gender\"\n                        #gender=\"ngModel\"\n                        [ngClass]=\"{'is-valid': f.submitted && gender.invalid }\"\n                        required/>\n                    <div *ngIf=\"f.submitted && gender.invalid\" class=\"invalid-input\">\n                            <div *ngIf=\"gender.errors?.required\">Gender is Required</div>\n                    </div>\n                  </div>\n            </div>                \n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6 text-center\">\n                <input type=\"text\" \n                      class=\"form-control\" \n                      name=\"email_id\" id=\"email_id\" \n                      placeholder=\"Email Id\" \n                      [(ngModel)]=\"model.email_id\"\n                      #email_id=\"ngModel\"\n                      [ngClass]=\"{'is-valid': f.submitted && email_id.invalid }\"\n                      required email/>\n                  <div *ngIf=\"f.submitted && email_id.invalid\" class=\"invalid-input\">\n                          <div *ngIf=\"email_id.errors?.required\">Email Id is Required</div>\n                          <div *ngIf=\"email_id.errors?.email\">Enter Valid Email Id</div>\n                  </div>\n              </div>\n              <div class=\"form-group col-md-6 text-center\">\n                <input type=\"text\" \n                      class=\"form-control\" \n                      name=\"mobile_no\" id=\"mobile_no\" \n                      placeholder=\"Mobile No\" \n                      [(ngModel)]=\"model.mobile_no\"\n                      #mobile_no=\"ngModel\"\n                      [ngClass]=\"{'is-valid': f.submitted && mobile_no.invalid }\"\n                      required minlength=\"10\"/>\n                  <div *ngIf=\"f.submitted && mobile_no.invalid\" class=\"invalid-input\">\n                          <div *ngIf=\"mobile_no.errors?.required\">Mobile No is Required</div>\n                          <div *ngIf=\"mobile_no.errors?.minlength\">Enter valid Mobile No</div>\n                  </div>\n                </div>\n            </div>                \n            <div class=\"text-center\"><button type=\"submit\">Save</button></div>\n            </form>\n          </div>\n          </div>\n    </section><!-- #SignUp -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--==========================\n    Header\n  ============================-->\n  <header id=\"header\">\n    <div class=\"container-fluid\">\n\n      <div id=\"logo\" class=\"pull-left\">\n        <h1><a href=\"#intro\" class=\"scrollto\">BizPage</a></h1>\n        <!-- Uncomment below if you prefer to use an image logo -->\n        <!-- <a href=\"#intro\"><img src=\"img/logo.png\" alt=\"\" title=\"\" /></a>-->\n      </div>\n      <nav id=\"nav-menu-container\">\n        <ul class=\"nav-menu\">\n          <li class=\"menu-active\"><a routerLink=\"home\" routerLinkActive=\"active\">Home</a></li>\n          <li><a href=\"#about\">About Us</a></li>\n          <li><a href=\"#services\">Services</a></li>\n          <li><a href=\"#portfolio\">Portfolio</a></li>\n          <li><a href=\"#team\">Team</a></li>\n          <li class=\"menu-has-children\"><a href=\"\">Drop Down</a>\n            <ul>\n              <li><a href=\"#\">Drop Down 1</a></li>\n              <li><a href=\"#\">Drop Down 3</a></li>\n              <li><a href=\"#\">Drop Down 4</a></li>\n              <li><a href=\"#\">Drop Down 5</a></li>\n            </ul>\n          </li>\n          <li><a routerLink=\"contactus\" routerLinkActive=\"active\">Contact</a></li>\n          <li><a routerLink=\"login\" routerLinkActive=\"active\">Log-In</a>/<a routerLink=\"signup\" routerLinkActive=\"active\">Sign-Up</a></li>\n        </ul>\n      </nav><!-- #nav-menu-container -->\n    </div>\n  </header><!-- #header -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
            var routes = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'contactus', component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"] },
                { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
                { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(titleService, meta) {
                    this.titleService = titleService;
                    this.meta = meta;
                    this.title = 'dairy-project';
                    titleService.setTitle("Dairy Products");
                    meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
                        meta.addTag({ name: 'keywords', content: "" }, true),
                        meta.addTag({ name: 'description', content: "" }, true),
                        meta.addTag({ name: 'author', content: "" }, true);
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
            /* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
            /* harmony import */ var _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/top-navigation/top-navigation.component */ "./src/app/components/top-navigation/top-navigation.component.ts");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                        _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                        _components_top_navigation_top_navigation_component__WEBPACK_IMPORTED_MODULE_11__["TopNavigationComponent"],
                        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/contactus/contactus.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/contactus/contactus.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/contactus/contactus.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/contactus/contactus.component.ts ***!
          \*************************************************************/
        /*! exports provided: ContactusComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () { return ContactusComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactusComponent = /** @class */ (function () {
                function ContactusComponent() {
                    this.model = {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    };
                }
                ContactusComponent.prototype.ngOnInit = function () {
                };
                return ContactusComponent;
            }());
            ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contactus',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contactus/contactus.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")).default]
                })
            ], ContactusComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(http) {
                    this.http = http;
                    this.model = {
                        user_id: '',
                        password: '',
                        rememberme: '',
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmitLogin = function () {
                    var url = "http://localhost:8080/users";
                    this.http.post(url, this.model).subscribe(function (result) {
                        alert("success");
                        console.log(result);
                    }, function (error) {
                        alert("error occured");
                    }, function () {
                        alert("ok");
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/page-not-found/page-not-found.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/page-not-found/page-not-found.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
          \***********************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")).default]
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/components/signup/signup.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/signup/signup.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/signup/signup.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/signup/signup.component.ts ***!
          \*******************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(http) {
                    this.http = http;
                    this.user_id = "";
                    this.model = {
                        user_id: '',
                        password: '',
                        full_name: '',
                        dob: '',
                        gender: '',
                        email_id: '',
                        mobile_no: ''
                    };
                }
                SignupComponent.prototype.ngOnInit = function () { };
                SignupComponent.prototype.onSubmitSignup = function () {
                    var url = "http://localhost:8080/users";
                    this.http.post(url, this.model).subscribe(function (result) {
                        alert("success");
                        console.log(result);
                    }, function (error) {
                        alert("error occured");
                    }, function () {
                        alert("ok");
                    });
                };
                SignupComponent.prototype.getUsers = function () {
                    var _this = this;
                    var url1 = "http://localhost:8080/users/" + this.user_id;
                    this.http.get(url1).subscribe(function (response) {
                        _this.response = response;
                        console.log(_this.response);
                        alert("success");
                    });
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/components/top-navigation/top-navigation.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/top-navigation/top-navigation.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/top-navigation/top-navigation.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/top-navigation/top-navigation.component.ts ***!
          \***********************************************************************/
        /*! exports provided: TopNavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavigationComponent", function () { return TopNavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TopNavigationComponent = /** @class */ (function () {
                function TopNavigationComponent() {
                }
                TopNavigationComponent.prototype.ngOnInit = function () {
                };
                return TopNavigationComponent;
            }());
            TopNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-top-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/top-navigation/top-navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-navigation.component.css */ "./src/app/components/top-navigation/top-navigation.component.css")).default]
                })
            ], TopNavigationComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Aarav\AngularJS\dairy-project\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map