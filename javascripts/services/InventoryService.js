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

  return {deleteLocation, getAllLocations, getAllProducts, postLocation, postProduct, putLocation};

 });
