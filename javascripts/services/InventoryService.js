 "use strict";

app.service("InventoryService", function ($http, $q, FIREBASE_CONFIG){

// Locations //
  const getAllLocations = () => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/locations.json`).then((results) => {
        resolve(results);
      });
    });
  };

   const postLocation = (location) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/locations.json`, JSON.stringify(location));
   };

   const putLocation = (location) => {
     let locationObject = {
       "name" : location.name,
       "pickable" : location.pickable,
       "active" : location.active
     };
     let lid = location.id;
     return $http.put(`${FIREBASE_CONFIG.databaseURL}/locations/${lid}.json`, JSON.stringify(locationObject));
   };

   const deleteLocation = (location) => {
     let lid = location.id;
     return $http.delete(`${FIREBASE_CONFIG.databaseURL}/locations/${lid}.json`);
   };

// Products //
   const getAllProducts = () => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/products.json`).then((results) => {
        resolve(results);
      });
    });
   };

   const postProduct = (product) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/products.json`, JSON.stringify(product));
   };

   const putProduct = (product) => {
     let productObject = {
       "inventory_count" : product.inventory_count,
       "inventory_location" : product.inventory_location,
       "item_name" : product.item_name,
       "part_number" : product.part_number,
       "price" : product.price
     };
     let pid = product.id;
     return $http.put(`${FIREBASE_CONFIG.databaseURL}/products/${pid}.json`, JSON.stringify(productObject));
   };

   const deleteProduct = (product) => {
     let pid = product.id;
     return $http.delete(`${FIREBASE_CONFIG.databaseURL}/products/${pid}.json`);
   };

  return {deleteLocation, deleteProduct, getAllLocations, getAllProducts, postLocation, postProduct, putLocation, putProduct};

 });
