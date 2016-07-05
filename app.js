angular.module('sortApp', [])

.controller('mainController', function($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = 'false'; // set the default sort order
    $scope.searchLocations = ''; //set the default search/filter term

    //create list of locations
    $scope.places = [
        {name: 'Kansas City', state: 'MO', hotelCost: '0'},
        {name: 'Minneapolis', state:'MI', hotelCost: '150'},
        {name: 'San Franscisco', state:'CA', hotelCost: '199'},
        {name: 'Myrtle Beach', state:'NC', hotelCost: '199'}
];
});