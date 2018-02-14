"use strict";

app.controller("InventoryCtrl", function($rootScope, $scope, InventoryService) {

  const loadAllProducts = () => {
    InventoryService.getAllProducts().then((results) => {
      $scope.products = results;
    });
  };

  const loadAllLocations = () => {
    InventoryService.getAllLocations().then((results) => {
      Object.keys(results.data).forEach((key)=>{
         results.data[key].id = key;
       });
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

  $scope.updateLocation = (location) => {
    InventoryService.putLocation(location);
  };

  $scope.deleteLocation = (location) => {
    InventoryService.deleteLocation(location);
  };
  // const getProducts = (text) => {
  //   InventoryService.
  // }

});
