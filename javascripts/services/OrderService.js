 "use strict";

app.service("OrderService", function ($http, $q, SHIPSTATION_CONFIG){

   const getOrders = () => {
     return $q((resolve, reject) => {
       $http.get('/data/shipstation.json').then((results) => {
         resolve(results.data);
       });
     });
   };

return {getOrders};

 });
