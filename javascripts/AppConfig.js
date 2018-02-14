"use strict";

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/main", {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .when("/orders", {
      templateUrl: 'partials/orders.html',
      controller: 'OrderCtrl'
    })
    .when("/inventory", {
      templateUrl: 'partials/inventory/inventoryMain.html',
      controller: 'InventoryCtrl'
    })
    .when("/newProduct", {
      templateUrl: 'partials/inventory/newProduct.html',
      controller: 'InventoryCtrl'
    })
    .when("/editProduct", {
      templateUrl: 'partials/inventory/editProduct.html',
      controller: 'InventoryCtrl'
    })
    .when("/newLocation", {
      templateUrl: 'partials/inventory/newLocation.html',
      controller: 'InventoryCtrl'
    })
    .when("/viewLocations", {
      templateUrl: 'partials/inventory/viewLocations.html',
      controller: 'InventoryCtrl'
    })


    .otherwise('/main');
});
