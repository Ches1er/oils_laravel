(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--16-3!./src/styles.less ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n}\n.container {\n  width: 100%;\n  margin: 0 auto;\n  background-image: url('http://oilexpress.online/img/bgc/white_wall_hash.png');\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.wrapper {\n  border-radius: 5px;\n  margin: 10px 0;\n  width: 80%;\n  background-image: url('http://oilexpress.online/img/bgc/concrete_seamless.png');\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n}\nheader,\nfooter {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n}\nfooter {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  border-top: 1px solid #C0C0C0;\n  border-bottom: 1px solid #C0C0C0;\n}\n/* Main*/\n.main_content {\n  width: 100%;\n  box-sizing: border-box;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 5px;\n}\n.main_content_header {\n  width: 100%;\n  padding: 0 0 10px 0;\n  font-size: 1.5em;\n  color: #505050;\n  font-family: 'Oswald', sans-serif;\n}\n.products_unit_header {\n  font-size: 2em;\n  width: 100%;\n  padding: 0 0 10px 0;\n  background-image: url('http://oilexpress.online/img/bgc/white_wall_hash.png');\n  color: #505050;\n  font-family: 'Oswald', sans-serif;\n  font-weight: bold;\n}\n.main_nav {\n  height: auto;\n  background-color: #fff;\n  margin-bottom: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.main_content_left {\n  width: 30%;\n}\n.main_content_right {\n  width: 70%;\n  border: 1px solid #C0C0C0;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.tip {\n  width: 70%;\n  font-size: small;\n  color: #325c8e;\n  margin: 5px 0;\n  text-indent: 5px;\n}\n/*Pagination*/\n.pagination {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-family: Arial;\n}\n/* Main content nav */\n.main_nav ul {\n  width: 100%;\n  list-style: none;\n  padding: 5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.main_nav ul li {\n  display: inline-block;\n  width: auto;\n}\n.main_nav ul li a {\n  color: #325c8e;\n  display: block;\n  width: 100%;\n  text-align: center;\n  text-decoration: none;\n  height: 30px;\n  line-height: 30px;\n  font-family: 'Scada', sans-serif;\n}\n.main_nav ul li a:hover {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  color: #505050;\n}\n/* Main left list */\n.news_list {\n  list-style: none;\n}\n.news_list li {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n.news_list li .news_name {\n  color: #417dbe;\n}\n.news_list li .news_short {\n  color: black;\n  font-size: small;\n}\n/*production by - list*/\n.production_by_list {\n  list-style: none;\n  padding: 5px;\n}\n.production_by_list_unit {\n  color: #417dbe;\n  cursor: pointer;\n}\n.products_by_list_products {\n  list-style: none;\n  margin: 5px;\n}\n.products_by_list_product {\n  font-size: small;\n  color: #1d4ebe;\n  cursor: pointer;\n}\n.product_block {\n  width: 100%;\n  padding: 5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n.product_block_img_name {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n}\n.product_block_img img {\n  width: 200px;\n  height: auto;\n}\n.product_block_name {\n  font-family: 'Roboto', sans-serif;\n  color: #505050;\n  margin: 5px 0 10px 0;\n  width: 100%;\n  text-align: center;\n  font-size: 28px;\n}\n.product_block_tech_info {\n  font-family: 'Roboto', sans-serif;\n  color: #505050;\n}\n/* Main right */\n.main_right_header {\n  text-align: center;\n  font-size: larger;\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  color: #505050;\n}\n.main_right_header_aux {\n  font-size: small;\n  color: #4b4b4b;\n  text-indent: 10px;\n  margin-bottom: 20px;\n}\n.main_right_unit_header {\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  color: #727272;\n}\n/* Main right news*/\n.news {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  width: 100%;\n}\n.news .news_name {\n  width: 100%;\n  text-align: center;\n}\n.news .news_img {\n  float: left;\n}\n/*For windows*/\n.window {\n  width: 500px;\n  height: auto;\n  position: absolute;\n  left: calc(50% - 250px);\n  top: 100px;\n  background-color: #fff;\n}\n.auth_window {\n  width: 300px;\n  height: auto;\n  position: absolute;\n  left: calc(50% - 150px);\n  top: 100px;\n  background-color: #fff;\n}\n.order_window {\n  padding: 10px;\n  margin: 20px auto;\n  width: 80%;\n  background-color: #fff;\n}\n.auth_error {\n  font-family: 'Raleway', sans-serif;\n  color: red;\n  text-align: center;\n}\n.auth_window-header {\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #eee;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif;\n  color: #325c8e;\n}\n.auth_window-main {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n.auth_window-main .form-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n.auth_window-main .form-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n}\n.auth_remember_me_block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.form-group label {\n  font-size: 0.8em;\n  font-family: 'Roboto', sans-serif;\n  margin-bottom: 5px;\n}\n.input_with_button {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n}\n.input_with_button button {\n  margin-left: 2px;\n  background-color: #a5d7ff;\n  color: black;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.input_with_button button:hover {\n  background-color: #86b0d3;\n}\n.auth_remember_me_block label {\n  margin-bottom: 0;\n  margin-right: 10px;\n}\n.auth_window .auth_window-footer {\n  width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: #eee;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.auth_window_btn_block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  margin-left: 10px;\n}\n.auth_window_redirect_block {\n  margin: 5px 5px 5px 0;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: small;\n}\n.auth_window_redirect_block span {\n  cursor: pointer;\n  color: #1d4ebe;\n}\n.auth_window_btn_block .wnd-btn {\n  margin: 5px 5px 5px 0;\n  height: 30px;\n  line-height: 30px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.window-header {\n  padding: 0 20px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #eee;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif;\n  color: #325c8e;\n}\n.window-main {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  background-color: #ccdeff;\n}\n.window dl {\n  margin: 0;\n}\n.window dt {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: larger;\n  margin-bottom: 5px;\n}\n.window dt span {\n  font-weight: bold;\n}\n.window input {\n  width: 100%;\n}\n.window .window-footer {\n  padding: 10px 20px;\n  background-color: #eee;\n}\n.wnd-btn {\n  margin-right: 10px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.add {\n  height: 20px;\n  width: 30px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: 5px;\n  padding: 0;\n}\n.remove {\n  height: 20px;\n  width: 30px;\n  text-align: center;\n  line-height: 20px;\n  margin-left: 5px;\n  padding: 0;\n}\n.wnd-btn:hover {\n  background-color: #86b0d3;\n}\n.fade {\n  position: fixed;\n  height: 100%;\n  z-index: 2222;\n  background-color: rgba(0, 0, 0, 0.5);\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow-x: auto;\n}\n.validation_error {\n  color: red;\n  font-size: small;\n}\n.not_required_info {\n  font-size: small;\n  color: #86b0d3;\n}\n/* Admin */\n.admin_block_header {\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  font-size: large;\n}\n.admin_content_block_label_small {\n  color: #626262;\n  text-decoration: underline;\n}\n.red {\n  color: red;\n}\n.admin_content_form {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  padding: 5px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.form-group {\n  margin-bottom: 5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.used_types {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n}\n.used_type {\n  background-color: darkorange;\n  margin: 2px;\n  padding: 2px;\n  border: 1px solid darkorange;\n  border-radius: 2px;\n}\n.auth_window-main .form-group {\n  margin-bottom: 5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.form-group-unit {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  margin-bottom: 3px;\n  width: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.form-group-unit-input-btn-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n}\n.admin_content_form .form-group select {\n  width: 150px;\n}\n.admin_content_input {\n  width: 150px;\n}\n.admin_content_input_number {\n  width: 50px;\n}\n.admin-btn {\n  margin-top: 5px;\n  display: inline-block;\n  margin-right: 10px;\n  height: 20px;\n  line-height: 20px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.admin-btn:hover {\n  background-color: #86b0d3;\n}\n.array_validation_error {\n  width: 100%;\n}\n.choosenImg {\n  width: 225px;\n  height: 225px;\n}\n.info_message {\n  padding: 5px;\n  margin: 5px 0;\n  border: 1px solid #124071;\n  color: #124071;\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: bolder;\n  border-radius: 3px;\n}\ninput[type=\"checkbox\"] {\n  margin-right: 5px;\n}\n.add_block_unit {\n  color: #626262;\n  font-family: 'Open Sans Condensed', sans-serif;\n}\n.admin_content_block_label {\n  margin-bottom: 10px;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: bold;\n  color: #124071;\n  text-indent: 10px;\n}\n.admin_block_header {\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  font-size: large;\n  color: #505050;\n  font-weight: bold;\n}\n.admin_block_header_small {\n  width: 100%;\n  margin: 3px 0;\n  padding: 10px;\n  color: #626262;\n  font-weight: bold;\n  font-family: 'Open Sans Condensed', sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n}\n.form-group-images-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.form-group-images-block .add {\n  margin: 0;\n}\n.admin_block_min_image {\n  width: 100px;\n  height: auto;\n  cursor: pointer;\n}\nagm-map {\n  width: 500px;\n  height: 400px;\n}\n.btn {\n  background-color: #a5d7ff;\n  border: none;\n  /* Remove borders */\n  color: white;\n  /* White text */\n  padding: 12px 16px;\n  /* Some padding */\n  font-size: 16px;\n  /* Set a font size */\n  cursor: pointer;\n  /* Mouse pointer on hover */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #325c8e;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/* Print */\n@media print {\n  .wrapper {\n    width: 100%;\n  }\n}\n@media (min-width: 200px) and (max-width: 640px) {\n  .main_nav ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n  }\n  .wrapper {\n    width: 98%;\n  }\n  .article_full div div img {\n    max-width: 300px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMubGVzcyIsInNyYy9DOi9Vc2Vycy9JdmFuL0Rlc2t0b3Avb2lscy9vaWxzL3NyYy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNFOUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBREFGO0FDRUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZFQUFBO0VBQ0EsMkJBQUE7RUFBQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7QURBRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7RUFBQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtNQUFBLGtCQUFBO1VBQUEsY0FBQTtBREFGO0FDRUE7O0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRENGO0FDQ0E7RUFDRSwyQkFBQTtFQUFBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO01BQUEseUJBQUE7VUFBQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QURDRjtBQUNBLFFBQVE7QUNFUjtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7TUFBQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FEQUY7QUNFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FEQUY7QUNFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FEQUY7QUNFQTtFQUNFLFlBQUE7RUFDQSxz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aWxlIjoic3JjL3N0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL29pbGV4cHJlc3Mub25saW5lL2ltZy9iZ2Mvd2hpdGVfd2FsbF9oYXNoLnBuZycpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL29pbGV4cHJlc3Mub25saW5lL2ltZy9iZ2MvY29uY3JldGVfc2VhbWxlc3MucG5nJyk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbmhlYWRlcixcbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MwQzBDMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDMEMwQzA7XG59XG4vKiBNYWluKi9cbi5tYWluX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbn1cbi5wcm9kdWN0c191bml0X2hlYWRlciB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vb2lsZXhwcmVzcy5vbmxpbmUvaW1nL2JnYy93aGl0ZV93YWxsX2hhc2gucG5nJyk7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fbmF2IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWFpbl9jb250ZW50X2xlZnQge1xuICB3aWR0aDogMzAlO1xufVxuLm1haW5fY29udGVudF9yaWdodCB7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMEMwQzA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi50aXAge1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzMyNWM4ZTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbn1cbi8qUGFnaW5hdGlvbiovXG4ucGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG4vKiBNYWluIGNvbnRlbnQgbmF2ICovXG4ubWFpbl9uYXYgdWwge1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tYWluX25hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG59XG4ubWFpbl9uYXYgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMzI1YzhlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LWZhbWlseTogJ1NjYWRhJywgc2Fucy1zZXJpZjtcbn1cbi5tYWluX25hdiB1bCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY29sb3I6ICM1MDUwNTA7XG59XG4vKiBNYWluIGxlZnQgbGlzdCAqL1xuLm5ld3NfbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmV3c19saXN0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5uZXdzX2xpc3QgbGkgLm5ld3NfbmFtZSB7XG4gIGNvbG9yOiAjNDE3ZGJlO1xufVxuLm5ld3NfbGlzdCBsaSAubmV3c19zaG9ydCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi8qcHJvZHVjdGlvbiBieSAtIGxpc3QqL1xuLnByb2R1Y3Rpb25fYnlfbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5wcm9kdWN0aW9uX2J5X2xpc3RfdW5pdCB7XG4gIGNvbG9yOiAjNDE3ZGJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZHVjdHNfYnlfbGlzdF9wcm9kdWN0cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogNXB4O1xufVxuLnByb2R1Y3RzX2J5X2xpc3RfcHJvZHVjdCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMWQ0ZWJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZHVjdF9ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4ucHJvZHVjdF9ibG9ja19pbWdfbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuLnByb2R1Y3RfYmxvY2tfaW1nIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3RfYmxvY2tfbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4ucHJvZHVjdF9ibG9ja190ZWNoX2luZm8ge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuLyogTWFpbiByaWdodCAqL1xuLm1haW5fcmlnaHRfaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuLm1haW5fcmlnaHRfaGVhZGVyX2F1eCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3JpZ2h0X3VuaXRfaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuLyogTWFpbiByaWdodCBuZXdzKi9cbi5uZXdzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXdzIC5uZXdzX25hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5ld3MgLm5ld3NfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4vKkZvciB3aW5kb3dzKi9cbi53aW5kb3cge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hdXRoX3dpbmRvdyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm9yZGVyX3dpbmRvdyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmF1dGhfZXJyb3Ige1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXV0aF93aW5kb3ctaGVhZGVyIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMjVjOGU7XG59XG4uYXV0aF93aW5kb3ctbWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5hdXRoX3dpbmRvdy1tYWluIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5hdXRoX3dpbmRvdy1tYWluIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5hdXRoX3JlbWVtYmVyX21lX2Jsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5wdXRfd2l0aF9idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuLmlucHV0X3dpdGhfYnV0dG9uIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cyBlYXNlIDBzO1xufVxuLmlucHV0X3dpdGhfYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmIwZDM7XG59XG4uYXV0aF9yZW1lbWJlcl9tZV9ibG9jayBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5hdXRoX3dpbmRvdyAuYXV0aF93aW5kb3ctZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXV0aF93aW5kb3dfYnRuX2Jsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYXV0aF93aW5kb3dfcmVkaXJlY3RfYmxvY2sge1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5hdXRoX3dpbmRvd19yZWRpcmVjdF9ibG9jayBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzFkNGViZTtcbn1cbi5hdXRoX3dpbmRvd19idG5fYmxvY2sgLnduZC1idG4ge1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzIGVhc2UgMHM7XG59XG4ud2luZG93LWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzI1YzhlO1xufVxuLndpbmRvdy1tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkZWZmO1xufVxuLndpbmRvdyBkbCB7XG4gIG1hcmdpbjogMDtcbn1cbi53aW5kb3cgZHQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLndpbmRvdyBkdCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud2luZG93IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2luZG93IC53aW5kb3ctZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnduZC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzIGVhc2UgMHM7XG59XG4uYWRkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnJlbW92ZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ud25kLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmIwZDM7XG59XG4uZmFkZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi52YWxpZGF0aW9uX2Vycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5ub3RfcmVxdWlyZWRfaW5mbyB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjODZiMGQzO1xufVxuLyogQWRtaW4gKi9cbi5hZG1pbl9ibG9ja19oZWFkZXIge1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hZG1pbl9jb250ZW50X2Jsb2NrX2xhYmVsX3NtYWxsIHtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYWRtaW5fY29udGVudF9mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi51c2VkX3R5cGVzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG59XG4udXNlZF90eXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya29yYW5nZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmF1dGhfd2luZG93LW1haW4gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmZvcm0tZ3JvdXAtdW5pdCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgd2lkdGg6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0tZ3JvdXAtdW5pdC1pbnB1dC1idG4tYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmFkbWluX2NvbnRlbnRfZm9ybSAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICB3aWR0aDogMTUwcHg7XG59XG4uYWRtaW5fY29udGVudF9pbnB1dCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5hZG1pbl9jb250ZW50X2lucHV0X251bWJlciB7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmFkbWluLWJ0biB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzIGVhc2UgMHM7XG59XG4uYWRtaW4tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2YjBkMztcbn1cbi5hcnJheV92YWxpZGF0aW9uX2Vycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hvb3NlbkltZyB7XG4gIHdpZHRoOiAyMjVweDtcbiAgaGVpZ2h0OiAyMjVweDtcbn1cbi5pbmZvX21lc3NhZ2Uge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMjQwNzE7XG4gIGNvbG9yOiAjMTI0MDcxO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYWRkX2Jsb2NrX3VuaXQge1xuICBjb2xvcjogIzYyNjI2MjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cbi5hZG1pbl9jb250ZW50X2Jsb2NrX2xhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMTI0MDcxO1xuICB0ZXh0LWluZGVudDogMTBweDtcbn1cbi5hZG1pbl9ibG9ja19oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGNvbG9yOiAjNTA1MDUwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hZG1pbl9ibG9ja19oZWFkZXJfc21hbGwge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmZvcm0tZ3JvdXAtaW1hZ2VzLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0tZ3JvdXAtaW1hZ2VzLWJsb2NrIC5hZGQge1xuICBtYXJnaW46IDA7XG59XG4uYWRtaW5fYmxvY2tfbWluX2ltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmFnbS1tYXAge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgYm9yZGVyOiBub25lO1xuICAvKiBSZW1vdmUgYm9yZGVycyAqL1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIFdoaXRlIHRleHQgKi9cbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICAvKiBTb21lIHBhZGRpbmcgKi9cbiAgZm9udC1zaXplOiAxNnB4O1xuICAvKiBTZXQgYSBmb250IHNpemUgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBNb3VzZSBwb2ludGVyIG9uIGhvdmVyICovXG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4vKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBtb3VzZS1vdmVyICovXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNWM4ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi8qIFByaW50ICovXG5AbWVkaWEgcHJpbnQge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5tYWluX25hdiB1bCB7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICB9XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogOTglO1xuICB9XG4gIC5hcnRpY2xlX2Z1bGwgZGl2IGRpdiBpbWcge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuKntcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9vaWxleHByZXNzLm9ubGluZS9pbWcvYmdjL3doaXRlX3dhbGxfaGFzaC5wbmcnKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL29pbGV4cHJlc3Mub25saW5lL2ltZy9iZ2MvY29uY3JldGVfc2VhbWxlc3MucG5nJyk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbn1cbmhlYWRlciwgZm9vdGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuZm9vdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDMEMwQzA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzBDMEMwO1xufVxuXG4vKiBNYWluKi9cbi5tYWluX2NvbnRlbnR7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfaGVhZGVye1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbn1cbi5wcm9kdWN0c191bml0X2hlYWRlcntcbiAgZm9udC1zaXplOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9vaWxleHByZXNzLm9ubGluZS9pbWcvYmdjL3doaXRlX3dhbGxfaGFzaC5wbmcnKTtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9uYXZ7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG59XG4ubWFpbl9jb250ZW50X2xlZnR7XG4gIHdpZHRoOiAzMCU7XG59XG4ubWFpbl9jb250ZW50X3JpZ2h0e1xuICB3aWR0aDogNzAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzBDMEMwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggMCByZ2JhKDAsMCwwLCAuMik7XG59XG4udGlwe1xuICB3aWR0aDogNzAlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzMyNWM4ZTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbn1cblxuLypQYWdpbmF0aW9uKi9cblxuLnBhZ2luYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4vKiBNYWluIGNvbnRlbnQgbmF2ICovXG5cbi5tYWluX25hdiB1bHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ubWFpbl9uYXYgdWwgbGl7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG59XG4ubWFpbl9uYXYgdWwgbGkgYXtcbiAgY29sb3I6ICMzMjVjOGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2NhZGEnLCBzYW5zLXNlcmlmO1xufVxuLm1haW5fbmF2IHVsIGxpIGE6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLyogTWFpbiBsZWZ0IGxpc3QgKi9cbi5uZXdzX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm5ld3NfbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4ubmV3c19saXN0IGxpIC5uZXdzX25hbWUge1xuICBjb2xvcjogIzQxN2RiZTtcbn1cbi5uZXdzX2xpc3QgbGkgLm5ld3Nfc2hvcnQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4vKnByb2R1Y3Rpb24gYnkgLSBsaXN0Ki9cbi5wcm9kdWN0aW9uX2J5X2xpc3R7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5wcm9kdWN0aW9uX2J5X2xpc3RfdW5pdHtcbiAgY29sb3I6ICM0MTdkYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0c19ieV9saXN0X3Byb2R1Y3RzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4ucHJvZHVjdHNfYnlfbGlzdF9wcm9kdWN0e1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzFkNGViZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RfYmxvY2t7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4ucHJvZHVjdF9ibG9ja19pbWdfbmFtZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG4ucHJvZHVjdF9ibG9ja19pbWcgaW1ne1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi5wcm9kdWN0X2Jsb2NrX25hbWV7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG59XG4ucHJvZHVjdF9ibG9ja190ZWNoX2luZm97XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG5cblxuLyogTWFpbiByaWdodCAqL1xuXG4ubWFpbl9yaWdodF9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG4ubWFpbl9yaWdodF9oZWFkZXJfYXV4e1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzRiNGI0YjtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9yaWdodF91bml0X2hlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzcyNzI3Mjtcbn1cbi8qIE1haW4gcmlnaHQgbmV3cyovXG5cbi5uZXdze1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5ld3MgLm5ld3NfbmFtZXtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uZXdzIC5uZXdzX2RhdGV7XG5cbn1cbi5uZXdzIC5uZXdzX2Z1bGx7XG5cbn1cbi5uZXdzIC5uZXdzX2ltZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4vKkZvciB3aW5kb3dzKi9cblxuLndpbmRvd3tcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYXV0aF93aW5kb3d7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xuICB0b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG59XG4ub3JkZXJfd2luZG93e1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hdXRoX2Vycm9yIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF1dGhfd2luZG93LWhlYWRlcntcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMjVjOGU7XG59XG4uYXV0aF93aW5kb3ctbWFpbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfd2luZG93LW1haW4gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfd2luZG93LW1haW4gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfcmVtZW1iZXJfbWVfYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWx7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmlucHV0X3dpdGhfYnV0dG9ue1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuLmlucHV0X3dpdGhfYnV0dG9uIGJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMjE4cyBlYXNlIDBzO1xufVxuLmlucHV0X3dpdGhfYnV0dG9uIGJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2YjBkMztcbn1cbi5hdXRoX3JlbWVtYmVyX21lX2Jsb2NrIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmF1dGhfd2luZG93IC5hdXRoX3dpbmRvdy1mb290ZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmF1dGhfd2luZG93X2J0bl9ibG9ja3tcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYXV0aF93aW5kb3dfcmVkaXJlY3RfYmxvY2t7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLmF1dGhfd2luZG93X3JlZGlyZWN0X2Jsb2NrIHNwYW57XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxZDRlYmU7XG59XG4uYXV0aF93aW5kb3dfYnRuX2Jsb2NrIC53bmQtYnRuIHtcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkN2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjIxOHMgZWFzZSAwcztcbn1cblxuLndpbmRvdy1oZWFkZXJ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzI1YzhlO1xufVxuLndpbmRvdy1tYWlue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2RlZmY7XG59XG4ud2luZG93IGRse1xuICBtYXJnaW46IDA7XG59XG4ud2luZG93IGR0e1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLndpbmRvdyBkdCBzcGFue1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53aW5kb3cgaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndpbmRvdyAud2luZG93LWZvb3RlcntcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLnduZC1idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMjE4cyBlYXNlIDBzO1xufVxuLmFkZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMDtcbn1cbi5yZW1vdmUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnduZC1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmIwZDM7XG59XG4uZmFkZXtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4udmFsaWRhdGlvbl9lcnJvcntcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm5vdF9yZXF1aXJlZF9pbmZve1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogIzg2YjBkMztcbn1cblxuLyogQWRtaW4gKi9cbi5hZG1pbl9ibG9ja19oZWFkZXIge1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5hZG1pbl9jb250ZW50X2Jsb2NrX2xhYmVsX3NtYWxse1xuICBjb2xvcjogIzYyNjI2MjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5hZG1pbl9jb250ZW50X2Zvcm17XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbn1cbi51c2VkX3R5cGVze1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbn1cbi51c2VkX3R5cGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYXV0aF93aW5kb3ctbWFpbiAuZm9ybS1ncm91cHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5mb3JtLWdyb3VwLXVuaXR7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgd2lkdGg6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmZvcm0tZ3JvdXAtdW5pdC1pbnB1dC1idG4tYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYWRtaW5fY29udGVudF9mb3JtIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5hZG1pbl9jb250ZW50X2lucHV0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmFkbWluX2NvbnRlbnRfaW5wdXRfbnVtYmVyIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uYWRtaW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4yMThzIGVhc2UgMHM7XG59XG4uYWRtaW4tYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZiMGQzO1xufVxuXG4uYXJyYXlfdmFsaWRhdGlvbl9lcnJvcntcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hvb3NlbkltZyB7XG4gIHdpZHRoOiAyMjVweDtcbiAgaGVpZ2h0OiAyMjVweDtcbn1cbi5pbmZvX21lc3NhZ2V7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEyNDA3MTtcbiAgY29sb3I6ICMxMjQwNzE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl17bWFyZ2luLXJpZ2h0OiA1cHh9O1xuLmFkZF9ibG9ja191bml0e1xuICBjb2xvcjogIzYyNjI2MjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cbi5hZG1pbl9jb250ZW50X2Jsb2NrX2xhYmVse1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxMjQwNzE7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xufVxuLmFkbWluX2Jsb2NrX2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFkbWluX2Jsb2NrX2hlYWRlcl9zbWFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDNweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzYyNjI2MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tZ3JvdXAtaW1hZ2VzLWJsb2Nre1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZm9ybS1ncm91cC1pbWFnZXMtYmxvY2sgLmFkZCB7XG4gIG1hcmdpbjogMDtcbn1cbi5hZG1pbl9ibG9ja19taW5faW1hZ2V7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hZ20tbWFwe1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cbiAgcGFkZGluZzogMTJweCAxNnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cbiAgZm9udC1zaXplOiAxNnB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBNb3VzZSBwb2ludGVyIG9uIGhvdmVyICovXG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIG1vdXNlLW92ZXIgKi9cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1YzhlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vKiBQcmludCAqL1xuXG5AbWVkaWEgcHJpbnQge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogNjQwcHgpXG57XG4gIC5tYWluX25hdiB1bHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIH1cbiAgLndyYXBwZXJ7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxuICAvLyBJbWFnZSBpbnNpZGUgYXJ0aWNsZXNcbiAgLmFydGljbGVfZnVsbHtcbiAgICBkaXZ7XG4gICAgICBkaXZ7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--16-3!./styles.less */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan\Desktop\oils\oils\src\styles.less */"./src/styles.less");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map