"use strict";

app.controller("InventoryCtrl", function($rootScope, $scope, InventoryService) {

  const loadAllProducts = () => {
    InventoryService.getAllProducts().then((results) => {
      Object.keys(results.data).forEach((key)=> {
        if (results.data[key] != null){
          results.data[key].id = key;
        }
      });
      $scope.products = results.data;
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
  loadAllProducts();


// Locations //
  $scope.addNewLocation = (location) => {
    InventoryService.postLocation(location);
    loadAllLocations();
  };

  $scope.updateLocation = (location) => {
    InventoryService.putLocation(location);
    loadAllLocations();
  };

  $scope.deleteLocation = (location) => {
    InventoryService.deleteLocation(location).then((result) => {
      loadAllLocations();
    }).catch((err) => {
      console.log("error in deleteLocation");
    });
  };

// Products //
  $scope.addNewProduct = (product) => {
    InventoryService.postProduct(product);
  };

  $scope.updateProduct = (product) => {
    InventoryService.putProduct(product);
    loadAllLocations();
  };

  $scope.deleteProduct = (product) => {
    InventoryService.deleteProduct(product).then((result) => {
      loadAllProducts();
    }).catch((err) => {
      console.log("error in deleteProduct");
    });
  };

});
