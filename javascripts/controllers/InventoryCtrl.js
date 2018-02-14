"use strict";

app.controller("InventoryCtrl", function($rootScope, $scope, InventoryService) {

  const loadAllProducts = () => {
    InventoryService.getAllProducts().then((results) => {
      $scope.products = results;
      console.log("products", results);
    });
  };

  const loadAllLocations = () => {
    InventoryService.getAllLocations().then((results) => {
      $scope.locations = results;
      console.log("locations", results);
    });
  };

  //loadInventory();

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
