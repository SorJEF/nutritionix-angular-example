'use strict';

var NavbarComponent = function() {
  this.navbar = element(by.css('.navbar'));
  this.navbarHeader = this.navbar.element(by.css('.navbar-header'));
  this.navbarNav = this.navbar.element(by.css('#navbar-main .nav.navbar-nav:not(.navbar-right)'));
};

module.exports = new NavbarComponent();
