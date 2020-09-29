(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--16-3!./src/styles.less ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n}\n.container {\n  width: 100%;\n  margin: 0 auto;\n  background-image: url('http://oilexpress.online/img/bgc/white_wall_hash.png');\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.wrapper {\n  border-radius: 5px;\n  margin: 10px 0;\n  width: 80%;\n  background-image: url('http://oilexpress.online/img/bgc/concrete_seamless.png');\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n}\nheader,\nfooter {\n  background-color: #fff;\n  width: 100%;\n  height: auto;\n}\nfooter {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  border-top: 1px solid #C0C0C0;\n  border-bottom: 1px solid #C0C0C0;\n}\n/* Main*/\n.main_content {\n  width: 100%;\n  box-sizing: border-box;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 5px;\n}\n.main_content_header {\n  width: 100%;\n  padding: 0 0 10px 0;\n  font-size: 1.5em;\n  color: #505050;\n  font-family: 'Oswald', sans-serif;\n}\n.products_unit_header {\n  font-size: 2em;\n  width: 100%;\n  padding: 0 0 10px 0;\n  background-image: url('http://oilexpress.online/img/bgc/white_wall_hash.png');\n  color: #505050;\n  font-family: 'Oswald', sans-serif;\n  font-weight: bold;\n}\n.main_nav {\n  height: auto;\n  background-color: #fff;\n  margin-bottom: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.main_content_left {\n  width: 30%;\n}\n.main_content_right {\n  width: 70%;\n  border: 1px solid #C0C0C0;\n  box-sizing: border-box;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.tip {\n  width: 70%;\n  font-size: small;\n  color: #325c8e;\n  margin: 5px 0;\n  text-indent: 5px;\n}\n/*Pagination*/\n.pagination {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-family: Arial;\n}\n/* Main content nav */\n.main_nav ul {\n  width: 100%;\n  list-style: none;\n  padding: 5px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  justify-content: space-around;\n}\n.main_nav ul li {\n  display: inline-block;\n  width: auto;\n}\n.main_nav ul li a {\n  color: #325c8e;\n  display: block;\n  width: 100%;\n  text-align: center;\n  text-decoration: none;\n  height: 30px;\n  line-height: 30px;\n  font-family: 'Scada', sans-serif;\n}\n.main_nav ul li a:hover {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  color: #505050;\n}\n/* Main left list */\n.news_list {\n  list-style: none;\n}\n.news_list li {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.news_list li .news_name {\n  color: #417dbe;\n}\n.news_list li .news_short {\n  color: black;\n  font-size: small;\n}\n/*production by - list*/\n.production_by_list {\n  list-style: none;\n  padding: 5px;\n}\n.production_by_list_unit {\n  color: #417dbe;\n  cursor: pointer;\n}\n.products_by_list_products {\n  list-style: none;\n  margin: 5px;\n}\n.products_by_list_product {\n  font-size: small;\n  color: #1d4ebe;\n  cursor: pointer;\n}\n.product_block {\n  width: 100%;\n  padding: 5px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.product_block_img_name {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n}\n.product_block_img img {\n  width: 200px;\n  height: auto;\n}\n.product_block_name {\n  font-family: 'Roboto', sans-serif;\n  color: #505050;\n  margin: 5px 0 10px 0;\n  width: 100%;\n  text-align: center;\n  font-size: 28px;\n}\n.product_block_tech_info {\n  font-family: 'Roboto', sans-serif;\n  color: #505050;\n}\n/* Main right */\n.main_right_header {\n  text-align: center;\n  font-size: larger;\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  color: #505050;\n}\n.main_right_header_aux {\n  font-size: small;\n  color: #4b4b4b;\n  text-indent: 10px;\n  margin-bottom: 20px;\n}\n.main_right_unit_header {\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  color: #727272;\n}\n/* Main right news*/\n.news {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  width: 100%;\n}\n.news .news_name {\n  width: 100%;\n  text-align: center;\n}\n.news .news_img {\n  float: left;\n}\n/*For windows*/\n.window {\n  width: 500px;\n  height: auto;\n  position: absolute;\n  left: calc(50% - 250px);\n  top: 100px;\n  background-color: #fff;\n}\n.auth_window {\n  width: 300px;\n  height: auto;\n  position: absolute;\n  left: calc(50% - 150px);\n  top: 100px;\n  background-color: #fff;\n}\n.order_window {\n  padding: 10px;\n  margin: 20px auto;\n  width: 80%;\n  background-color: #fff;\n}\n.auth_error {\n  font-family: 'Raleway', sans-serif;\n  color: red;\n  text-align: center;\n}\n.auth_window-header {\n  padding: 0 10px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #eee;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif;\n  color: #325c8e;\n}\n.auth_window-main {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.auth_window-main .form-group {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.auth_window-main .form-group {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n}\n.auth_remember_me_block {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n          justify-content: start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.form-group label {\n  font-size: 0.8em;\n  font-family: 'Roboto', sans-serif;\n  margin-bottom: 5px;\n}\n.input_with_button {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n}\n.input_with_button button {\n  margin-left: 2px;\n  background-color: #a5d7ff;\n  color: black;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.input_with_button button:hover {\n  background-color: #86b0d3;\n}\n.auth_remember_me_block label {\n  margin-bottom: 0;\n  margin-right: 10px;\n}\n.auth_window .auth_window-footer {\n  width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n  background-color: #eee;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.auth_window_btn_block {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  margin-left: 10px;\n}\n.auth_window_redirect_block {\n  margin: 5px 5px 5px 0;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  font-size: small;\n}\n.auth_window_redirect_block span {\n  cursor: pointer;\n  color: #1d4ebe;\n}\n.auth_window_btn_block .wnd-btn {\n  margin: 5px 5px 5px 0;\n  height: 30px;\n  line-height: 30px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.window-header {\n  padding: 0 20px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #eee;\n  font-weight: bold;\n  font-family: 'Raleway', sans-serif;\n  color: #325c8e;\n}\n.window-main {\n  width: 100%;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  background-color: #ccdeff;\n}\n.window dl {\n  margin: 0;\n}\n.window dt {\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-size: larger;\n  margin-bottom: 5px;\n}\n.window dt span {\n  font-weight: bold;\n}\n.window input {\n  width: 100%;\n}\n.window .window-footer {\n  padding: 10px 20px;\n  background-color: #eee;\n}\n.wnd-btn {\n  margin-right: 10px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.add {\n  height: 20px;\n  width: 30px;\n  text-align: center;\n  line-height: 20px;\n  margin-top: 5px;\n  padding: 0;\n}\n.remove {\n  height: 20px;\n  width: 30px;\n  text-align: center;\n  line-height: 20px;\n  margin-left: 5px;\n  padding: 0;\n}\n.wnd-btn:hover {\n  background-color: #86b0d3;\n}\n.fade {\n  position: fixed;\n  height: 100%;\n  z-index: 2222;\n  background-color: rgba(0, 0, 0, 0.5);\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  overflow-x: auto;\n}\n.validation_error {\n  color: red;\n  font-size: small;\n}\n.not_required_info {\n  font-size: small;\n  color: #86b0d3;\n}\n/* Admin */\n.admin_block_header {\n  font-family: 'Oswald', sans-serif;\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  font-size: large;\n}\n.admin_content_form {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  padding: 5px;\n  box-sizing: border-box;\n  width: 100%;\n}\n.form-group {\n  margin-bottom: 5px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.used_types {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column wrap;\n}\n.used_type {\n  background-color: darkorange;\n  margin: 2px;\n  padding: 2px;\n  border: 1px solid darkorange;\n  border-radius: 2px;\n}\n.auth_window-main .form-group {\n  margin-bottom: 5px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n.form-group-unit {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column nowrap;\n  margin-bottom: 3px;\n  width: auto;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n.form-group-unit-input-btn-block {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  align-content: flex-start;\n}\n.admin_content_form .form-group select {\n  width: 150px;\n}\n.admin_content_input {\n  width: 150px;\n}\n.admin_content_input_number {\n  width: 50px;\n}\n.admin-btn {\n  margin-top: 5px;\n  display: inline-block;\n  margin-right: 10px;\n  height: 20px;\n  line-height: 20px;\n  background-color: #a5d7ff;\n  color: white;\n  cursor: pointer;\n  padding: 0 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  -webkit-transition: all 0.218s ease 0s;\n  transition: all 0.218s ease 0s;\n}\n.admin-btn:hover {\n  background-color: #86b0d3;\n}\n.array_validation_error {\n  width: 100%;\n}\n.choosenImg {\n  width: 225px;\n  height: 225px;\n}\n.info_message {\n  padding: 5px;\n  margin: 5px 0;\n  border: 1px solid #124071;\n  color: #124071;\n  width: 100%;\n  box-sizing: border-box;\n  font-weight: bolder;\n  border-radius: 3px;\n}\ninput[type=\"checkbox\"] {\n  margin-right: 5px;\n}\n.add_block_unit {\n  color: #626262;\n  font-family: 'Open Sans Condensed', sans-serif;\n}\n.admin_content_block_label {\n  margin-bottom: 10px;\n  font-family: 'Open Sans Condensed', sans-serif;\n  font-weight: bold;\n  color: #124071;\n  text-indent: 10px;\n}\n.admin_block_header {\n  width: 100%;\n  margin: 10px 0;\n  padding: 10px;\n  font-size: large;\n  color: #505050;\n  font-weight: bold;\n}\n.admin_block_header_small {\n  width: 100%;\n  margin: 3px 0;\n  padding: 10px;\n  color: #626262;\n  font-weight: bold;\n  font-family: 'Open Sans Condensed', sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  box-sizing: border-box;\n}\n.form-group-images-block {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.form-group-images-block .add {\n  margin: 0;\n}\n.admin_block_min_image {\n  width: 100px;\n  height: auto;\n  cursor: pointer;\n}\nagm-map {\n  width: 500px;\n  height: 400px;\n}\n.btn {\n  background-color: #a5d7ff;\n  border: none;\n  /* Remove borders */\n  color: white;\n  /* White text */\n  padding: 12px 16px;\n  /* Some padding */\n  font-size: 16px;\n  /* Set a font size */\n  cursor: pointer;\n  /* Mouse pointer on hover */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #325c8e;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n/* Print */\n@media print {\n  .wrapper {\n    width: 100%;\n  }\n}\n@media (min-width: 200px) and (max-width: 640px) {\n  .main_nav ul {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column nowrap;\n  }\n  .wrapper {\n    width: 98%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMubGVzcyIsInNyYy9DOi9Vc2Vycy9JdmFuL0Rlc2t0b3Avb2lscy9vaWxzL3NyYy9zdHlsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUNFOUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBREFGO0FDRUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZFQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURBRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxjQUFBO0FEQUY7QUNFQTs7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEQ0Y7QUNDQTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FEQ0Y7QUFDQSxRQUFRO0FDRVI7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FEQUY7QUNFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FEQUY7QUNFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FEQUY7QUNFQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QURBRjtBQ0VBO0VBQ0UsVUFBQTtBREFGO0FDRUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBDQUFB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O0VBQUEsZ0JBQUE7QURwQkY7QUFDQSxVQUFVO0FDd0JWO0VBQ0U7SUFDRSxXQUFBO0VEdEJGO0FBQ0Y7QUN5QkE7RUFFRTtJQUNFLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSx3QkFBQTtFRHhCRjtFQzBCQTtJQUNFLFVBQUE7RUR4QkY7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vb2lsZXhwcmVzcy5vbmxpbmUvaW1nL2JnYy93aGl0ZV93YWxsX2hhc2gucG5nJyk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vb2lsZXhwcmVzcy5vbmxpbmUvaW1nL2JnYy9jb25jcmV0ZV9zZWFtbGVzcy5wbmcnKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzBDMEMwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0MwQzBDMDtcbn1cbi8qIE1haW4qL1xuLm1haW5fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xufVxuLnByb2R1Y3RzX3VuaXRfaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9vaWxleHByZXNzLm9ubGluZS9pbWcvYmdjL3doaXRlX3dhbGxfaGFzaC5wbmcnKTtcbiAgY29sb3I6ICM1MDUwNTA7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9uYXYge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5tYWluX2NvbnRlbnRfbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG59XG4ubWFpbl9jb250ZW50X3JpZ2h0IHtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MwQzBDMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnRpcCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMzI1YzhlO1xuICBtYXJnaW46IDVweCAwO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuLypQYWdpbmF0aW9uKi9cbi5wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cbi8qIE1haW4gY29udGVudCBuYXYgKi9cbi5tYWluX25hdiB1bCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1haW5fbmF2IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbn1cbi5tYWluX25hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICMzMjVjOGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2NhZGEnLCBzYW5zLXNlcmlmO1xufVxuLm1haW5fbmF2IHVsIGxpIGE6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cbi8qIE1haW4gbGVmdCBsaXN0ICovXG4ubmV3c19saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uZXdzX2xpc3QgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLm5ld3NfbGlzdCBsaSAubmV3c19uYW1lIHtcbiAgY29sb3I6ICM0MTdkYmU7XG59XG4ubmV3c19saXN0IGxpIC5uZXdzX3Nob3J0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLypwcm9kdWN0aW9uIGJ5IC0gbGlzdCovXG4ucHJvZHVjdGlvbl9ieV9saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLnByb2R1Y3Rpb25fYnlfbGlzdF91bml0IHtcbiAgY29sb3I6ICM0MTdkYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0c19ieV9saXN0X3Byb2R1Y3RzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4ucHJvZHVjdHNfYnlfbGlzdF9wcm9kdWN0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICMxZDRlYmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0X2Jsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5wcm9kdWN0X2Jsb2NrX2ltZ19uYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG4ucHJvZHVjdF9ibG9ja19pbWcgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdF9ibG9ja19uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5wcm9kdWN0X2Jsb2NrX3RlY2hfaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG4vKiBNYWluIHJpZ2h0ICovXG4ubWFpbl9yaWdodF9oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG4ubWFpbl9yaWdodF9oZWFkZXJfYXV4IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICM0YjRiNGI7XG4gIHRleHQtaW5kZW50OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fcmlnaHRfdW5pdF9oZWFkZXIge1xuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM3MjcyNzI7XG59XG4vKiBNYWluIHJpZ2h0IG5ld3MqL1xuLm5ld3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5ld3MgLm5ld3NfbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmV3cyAubmV3c19pbWcge1xuICBmbG9hdDogbGVmdDtcbn1cbi8qRm9yIHdpbmRvd3MqL1xuLndpbmRvdyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xuICB0b3A6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmF1dGhfd2luZG93IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ub3JkZXJfd2luZG93IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYXV0aF9lcnJvciB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdXRoX3dpbmRvdy1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMyNWM4ZTtcbn1cbi5hdXRoX3dpbmRvdy1tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfd2luZG93LW1haW4gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfd2luZG93LW1haW4gLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuLmF1dGhfcmVtZW1iZXJfbWVfYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5pbnB1dF93aXRoX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG4uaW5wdXRfd2l0aF9idXR0b24gYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzIGVhc2UgMHM7XG59XG4uaW5wdXRfd2l0aF9idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2YjBkMztcbn1cbi5hdXRoX3JlbWVtYmVyX21lX2Jsb2NrIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmF1dGhfd2luZG93IC5hdXRoX3dpbmRvdy1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hdXRoX3dpbmRvd19idG5fYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5hdXRoX3dpbmRvd19yZWRpcmVjdF9ibG9jayB7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLmF1dGhfd2luZG93X3JlZGlyZWN0X2Jsb2NrIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWQ0ZWJlO1xufVxuLmF1dGhfd2luZG93X2J0bl9ibG9jayAud25kLWJ0biB7XG4gIG1hcmdpbjogNXB4IDVweCA1cHggMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIxOHMgZWFzZSAwcztcbn1cbi53aW5kb3ctaGVhZGVyIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMjVjOGU7XG59XG4ud2luZG93LW1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2RlZmY7XG59XG4ud2luZG93IGRsIHtcbiAgbWFyZ2luOiAwO1xufVxuLndpbmRvdyBkdCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2luZG93IGR0IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53aW5kb3cgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi53aW5kb3cgLndpbmRvdy1mb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4ud25kLWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIxOHMgZWFzZSAwcztcbn1cbi5hZGQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ucmVtb3ZlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogMDtcbn1cbi53bmQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2YjBkMztcbn1cbi5mYWRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnZhbGlkYXRpb25fZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLm5vdF9yZXF1aXJlZF9pbmZvIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICM4NmIwZDM7XG59XG4vKiBBZG1pbiAqL1xuLmFkbWluX2Jsb2NrX2hlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmFkbWluX2NvbnRlbnRfZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4udXNlZF90eXBlcyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xufVxuLnVzZWRfdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hdXRoX3dpbmRvdy1tYWluIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5mb3JtLWdyb3VwLXVuaXQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5mb3JtLWdyb3VwLXVuaXQtaW5wdXQtYnRuLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cbi5hZG1pbl9jb250ZW50X2Zvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmFkbWluX2NvbnRlbnRfaW5wdXQge1xuICB3aWR0aDogMTUwcHg7XG59XG4uYWRtaW5fY29udGVudF9pbnB1dF9udW1iZXIge1xuICB3aWR0aDogNTBweDtcbn1cbi5hZG1pbi1idG4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkN2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjE4cyBlYXNlIDBzO1xufVxuLmFkbWluLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmIwZDM7XG59XG4uYXJyYXlfdmFsaWRhdGlvbl9lcnJvciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNob29zZW5JbWcge1xuICB3aWR0aDogMjI1cHg7XG4gIGhlaWdodDogMjI1cHg7XG59XG4uaW5mb19tZXNzYWdlIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTI0MDcxO1xuICBjb2xvcjogIzEyNDA3MTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmFkZF9ibG9ja191bml0IHtcbiAgY29sb3I6ICM2MjYyNjI7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG59XG4uYWRtaW5fY29udGVudF9ibG9ja19sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzEyNDA3MTtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG59XG4uYWRtaW5fYmxvY2tfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYWRtaW5fYmxvY2tfaGVhZGVyX3NtYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3B4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5mb3JtLWdyb3VwLWltYWdlcy1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mb3JtLWdyb3VwLWltYWdlcy1ibG9jayAuYWRkIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFkbWluX2Jsb2NrX21pbl9pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hZ20tbWFwIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgLyogUmVtb3ZlIGJvcmRlcnMgKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiBXaGl0ZSB0ZXh0ICovXG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgLyogU29tZSBwYWRkaW5nICovXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogU2V0IGEgZm9udCBzaXplICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjVjOGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4vKiBQcmludCAqL1xuQG1lZGlhIHByaW50IHtcbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAubWFpbl9uYXYgdWwge1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgfVxuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDk4JTtcbiAgfVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4qe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL29pbGV4cHJlc3Mub25saW5lL2ltZy9iZ2Mvd2hpdGVfd2FsbF9oYXNoLnBuZycpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud3JhcHBlcntcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vb2lsZXhwcmVzcy5vbmxpbmUvaW1nL2JnYy9jb25jcmV0ZV9zZWFtbGVzcy5wbmcnKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xufVxuaGVhZGVyLCBmb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MwQzBDMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDMEMwQzA7XG59XG5cbi8qIE1haW4qL1xuLm1haW5fY29udGVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9oZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xufVxuLnByb2R1Y3RzX3VuaXRfaGVhZGVye1xuICBmb250LXNpemU6IDJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL29pbGV4cHJlc3Mub25saW5lL2ltZy9iZ2Mvd2hpdGVfd2FsbF9oYXNoLnBuZycpO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX25hdntcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbn1cbi5tYWluX2NvbnRlbnRfbGVmdHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5tYWluX2NvbnRlbnRfcmlnaHR7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDMEMwQzA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAwIHJnYmEoMCwwLDAsIC4yKTtcbn1cbi50aXB7XG4gIHdpZHRoOiA3MCU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMzI1YzhlO1xuICBtYXJnaW46IDVweCAwO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuXG4vKlBhZ2luYXRpb24qL1xuXG4ucGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi8qIE1haW4gY29udGVudCBuYXYgKi9cblxuLm1haW5fbmF2IHVse1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tYWluX25hdiB1bCBsaXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogYXV0bztcbn1cbi5tYWluX25hdiB1bCBsaSBhe1xuICBjb2xvcjogIzMyNWM4ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZm9udC1mYW1pbHk6ICdTY2FkYScsIHNhbnMtc2VyaWY7XG59XG4ubWFpbl9uYXYgdWwgbGkgYTpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4vKiBNYWluIGxlZnQgbGlzdCAqL1xuLm5ld3NfbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmV3c19saXN0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5uZXdzX2xpc3QgbGkgLm5ld3NfbmFtZSB7XG4gIGNvbG9yOiAjNDE3ZGJlO1xufVxuLm5ld3NfbGlzdCBsaSAubmV3c19zaG9ydCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi8qcHJvZHVjdGlvbiBieSAtIGxpc3QqL1xuLnByb2R1Y3Rpb25fYnlfbGlzdHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLnByb2R1Y3Rpb25fYnlfbGlzdF91bml0e1xuICBjb2xvcjogIzQxN2RiZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzX2J5X2xpc3RfcHJvZHVjdHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDVweDtcbn1cbi5wcm9kdWN0c19ieV9saXN0X3Byb2R1Y3R7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjMWQ0ZWJlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZHVjdF9ibG9ja3tcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbi5wcm9kdWN0X2Jsb2NrX2ltZ19uYW1le1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbn1cbi5wcm9kdWN0X2Jsb2NrX2ltZyBpbWd7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3RfYmxvY2tfbmFtZXtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5wcm9kdWN0X2Jsb2NrX3RlY2hfaW5mb3tcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuXG4vKiBNYWluIHJpZ2h0ICovXG5cbi5tYWluX3JpZ2h0X2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzUwNTA1MDtcbn1cbi5tYWluX3JpZ2h0X2hlYWRlcl9hdXh7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjNGI0YjRiO1xuICB0ZXh0LWluZGVudDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX3JpZ2h0X3VuaXRfaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuLyogTWFpbiByaWdodCBuZXdzKi9cblxuLm5ld3N7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmV3cyAubmV3c19uYW1le1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5ld3MgLm5ld3NfZGF0ZXtcblxufVxuLm5ld3MgLm5ld3NfZnVsbHtcblxufVxuLm5ld3MgLm5ld3NfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qRm9yIHdpbmRvd3MqL1xuXG4ud2luZG93e1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcbiAgdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5hdXRoX3dpbmRvd3tcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNTBweCk7XG4gIHRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbn1cbi5vcmRlcl93aW5kb3d7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmF1dGhfZXJyb3Ige1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXV0aF93aW5kb3ctaGVhZGVye1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMyNWM4ZTtcbn1cbi5hdXRoX3dpbmRvdy1tYWlue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4uYXV0aF93aW5kb3ctbWFpbiAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4uYXV0aF93aW5kb3ctbWFpbiAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG4uYXV0aF9yZW1lbWJlcl9tZV9ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9ybS1ncm91cCBsYWJlbHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5wdXRfd2l0aF9idXR0b257XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG59XG4uaW5wdXRfd2l0aF9idXR0b24gYnV0dG9ue1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkN2ZmO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4yMThzIGVhc2UgMHM7XG59XG4uaW5wdXRfd2l0aF9idXR0b24gYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZiMGQzO1xufVxuLmF1dGhfcmVtZW1iZXJfbWVfYmxvY2sgbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYXV0aF93aW5kb3cgLmF1dGhfd2luZG93LWZvb3RlcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXV0aF93aW5kb3dfYnRuX2Jsb2Nre1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5hdXRoX3dpbmRvd19yZWRpcmVjdF9ibG9ja3tcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4uYXV0aF93aW5kb3dfcmVkaXJlY3RfYmxvY2sgc3BhbntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzFkNGViZTtcbn1cbi5hdXRoX3dpbmRvd19idG5fYmxvY2sgLnduZC1idG4ge1xuICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWQ3ZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMjE4cyBlYXNlIDBzO1xufVxuXG4ud2luZG93LWhlYWRlcntcbiAgcGFkZGluZzogMCAyMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzMjVjOGU7XG59XG4ud2luZG93LW1haW57XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZGVmZjtcbn1cbi53aW5kb3cgZGx7XG4gIG1hcmdpbjogMDtcbn1cbi53aW5kb3cgZHR7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2luZG93IGR0IHNwYW57XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLndpbmRvdyBpbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2luZG93IC53aW5kb3ctZm9vdGVye1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG4ud25kLWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDdmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4yMThzIGVhc2UgMHM7XG59XG4uYWRkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLnJlbW92ZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ud25kLWJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2YjBkMztcbn1cbi5mYWRle1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi52YWxpZGF0aW9uX2Vycm9ye1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubm90X3JlcXVpcmVkX2luZm97XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjODZiMGQzO1xufVxuXG4vKiBBZG1pbiAqL1xuLmFkbWluX2Jsb2NrX2hlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLmFkbWluX2NvbnRlbnRfZm9ybXtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxufVxuLnVzZWRfdHlwZXN7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xufVxuLnVzZWRfdHlwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hdXRoX3dpbmRvdy1tYWluIC5mb3JtLWdyb3Vwe1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmZvcm0tZ3JvdXAtdW5pdHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB3aWR0aDogYXV0bztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZm9ybS1ncm91cC11bml0LWlucHV0LWJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5hZG1pbl9jb250ZW50X2Zvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmFkbWluX2NvbnRlbnRfaW5wdXQge1xuICB3aWR0aDogMTUwcHg7XG59XG4uYWRtaW5fY29udGVudF9pbnB1dF9udW1iZXIge1xuICB3aWR0aDogNTBweDtcbn1cbi5hZG1pbi1idG4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkN2ZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjIxOHMgZWFzZSAwcztcbn1cbi5hZG1pbi1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NmIwZDM7XG59XG5cbi5hcnJheV92YWxpZGF0aW9uX2Vycm9ye1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaG9vc2VuSW1nIHtcbiAgd2lkdGg6IDIyNXB4O1xuICBoZWlnaHQ6IDIyNXB4O1xufVxuLmluZm9fbWVzc2FnZXtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTI0MDcxO1xuICBjb2xvcjogIzEyNDA3MTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXttYXJnaW4tcmlnaHQ6IDVweH07XG4uYWRkX2Jsb2NrX3VuaXR7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xufVxuLmFkbWluX2NvbnRlbnRfYmxvY2tfbGFiZWx7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzEyNDA3MTtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG59XG4uYWRtaW5fYmxvY2tfaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBjb2xvcjogIzUwNTA1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYWRtaW5fYmxvY2tfaGVhZGVyX3NtYWxsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3B4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjNjI2MjYyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1ncm91cC1pbWFnZXMtYmxvY2t7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mb3JtLWdyb3VwLWltYWdlcy1ibG9jayAuYWRkIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFkbWluX2Jsb2NrX21pbl9pbWFnZXtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmFnbS1tYXB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkN2ZmO1xuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXG4gIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xuICBmb250LXNpemU6IDE2cHg7IC8qIFNldCBhIGZvbnQgc2l6ZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjVjOGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi8qIFByaW50ICovXG5cbkBtZWRpYSBwcmludCB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA2NDBweClcbntcbiAgLm1haW5fbmF2IHVse1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgfVxuICAud3JhcHBlcntcbiAgICB3aWR0aDogOTglO1xuICB9XG59XG5cblxuXG4iXX0= */", '', '']]

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
//# sourceMappingURL=styles-es2015.js.map