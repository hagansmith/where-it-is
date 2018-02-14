"use strict";

app.controller("OrderCtrl", function($http, $rootScope, $scope, $timeout, OrderService) {


  const allTheOrders = () => {
    OrderService.getOrders().then((results) => {
      $scope.orders = results.orders;
    });
  };

  allTheOrders();

  // In this example, we set up our model using a plain object.
          // Using a class works too. All that matters is that we implement
          // getItemAtIndex and getLength.
           var vm = this;
          vm.infiniteItems = {
              numLoaded_: 0,
              toLoad_: 0,
              items: [],

              // Required.
              getItemAtIndex: function (index) {
                  if (index > this.numLoaded_) {
                      this.fetchMoreItems_(index);
                      return null;
                  }
                  return this.items[index];
              },

              // Required.
              getLength: function () {
                  return this.numLoaded_ + 5;
              },

              fetchMoreItems_: function (index) {
                  if (this.toLoad_ < index) {
                      this.toLoad_ += 5;
                      $http.get('/data/shipstation.json').then(angular.bind(this, function (obj) {
                          this.items = this.items.concat(obj.data);
                          this.numLoaded_ = this.toLoad_;
                          console.log(this);
                      }));
                  }
              }
          };


});
