"use strict";

app.controller("InventoryCtrl", function($rootScope, $scope, InventoryService) {

  const loadAllProducts = () => {
    InventoryService.getAllProducts().then((results) => {
      $scope.products = results;
    });
  };

  const loadAllLocations = () => {
    InventoryService.getAllLocations().then((results) => {
      $scope.locations = results.data;
    });
  };

  loadAllLocations();

  $scope.addNewProduct = (product) => {
    InventoryService.postProduct(product);
  };

  $scope.addNewLocation = (location) => {
    InventoryService.postLocation(location);
  };

  // const getProducts = (text) => {
  //   InventoryService.
  // }

});
