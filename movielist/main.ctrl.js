angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Favorite Movies List - AngularJS App';
    vm.searchInput  = '';
    vm.shows = [
        {
            title: 'Shawshank Redemption',
            year: '1994',
            favorite: true
        },
        {
            title: 'Vacation',
            year: '1982',
            favorite: false
        },
        {
            title: 'Reservoir Dogs',
            year: '1993',
            favorite: true
        },
        {
            title: 'Desperado',
            year: '1997',
            favorite: true
        },
        {
            title: 'Dumb and Dumber',
            year: '1994',
            favorite: false
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function() {
      vm.shows.push(vm.new);
      vm.new = {};
    };
});
