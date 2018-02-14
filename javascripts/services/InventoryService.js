 "use strict";

app.service("InventoryService", function ($http, $q, FIREBASE_CONFIG){

   const getAllProducts = () => {
     return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/products.json`).then((results) => {
         resolve(results);
       });
     });
   };

   const getAllLocations = () => {
     return $q((resolve, reject) => {
       $http.get(`${FIREBASE_CONFIG.databaseURL}/locations.json`).then((results) => {
         resolve(results);
       });
     });
   };

   const postProduct = (product) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/products.json`, JSON.stringify(product));
   };

   const postLocation = (location) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/locations.json`, JSON.stringify(location));
   };

  return {getAllLocations, getAllProducts, postLocation, postProduct};

 });
