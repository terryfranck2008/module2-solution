(function () {

    'use strict';

    angular.module('shoppingModule', [])
        .controller('ToBuyController', toBuyController)
        .controller('AlreadyBoughtController', alreadyBoughtController)
        .service('ShoppingListCheckOffService', shoppingListCheckOffService);

    toBuyController.$inject = ['ShoppingListCheckOffService'];
    function toBuyController(ShoppingListCheckOffService) {

        var toBuyCtrl = this;
        toBuyCtrl.listItems = ShoppingListCheckOffService.itemsToBuy;

        toBuyCtrl.buyItem = function(name, quantity, index){
            ShoppingListCheckOffService.buyItem(name, quantity, index);
        };

    }

    alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function alreadyBoughtController(ShoppingListCheckOffService) {

        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.listBoughtItems = ShoppingListCheckOffService.itemsBought;

    }

    shoppingListCheckOffService.$inject = [];
    function shoppingListCheckOffService() {

        var service = this;
        service.itemsToBuy = [
            {
                name:"cookies",
                quantity: 10
            },
            {
                name:"sugar cube",
                quantity: 5
            },
            {
                name:"soap",
                quantity: 12
            },
            {
                name:"shoes",
                quantity: 4
            },
            {
                name:"eggs",
                quantity: 20
            }
        ];

        service.itemsBought = [];
        service.buyItem = function(name, qty, index){
            var item = {
                name: name,
                quantity: qty 
            };

            service.itemsBought.push(item);
            service.itemsToBuy.splice(index, 1);
        };

    }
})();

