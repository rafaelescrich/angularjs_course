var app = angular.module("instantSearch", []);
app.filter('searchFor', function () {

    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        
        searchString = searchString.toLowerCase();
        
        var result = [];
        angular.forEach(arr, function (item) {
            if (item.name.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;
    };
});

function ContactListController($scope) {
    $scope.searchString = "";
    $scope.name = "Contact List";
    $scope.operadoras = [{name: "TIM"}, {name: "Oi"}, {name: "Vivo"}];
    $scope.contacts = [{
        name: 'Pedro Artur',
        phone: "91247736",
        active: false,
        operadora: { name: "TIM" }
    }, {
        name: 'Rafael Escrich',
        phone: "99766374",
        active: false
    }, {
        name: 'Monique Vicente',
        phone: "99581807",
        active: false
    }, {
        name: 'João Cunha',
        phone: "99766374",
        active: false
    }];

    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };

    $scope.add = function (contact) {
        $scope.contacts.push(angular.copy(contact));
        $scope.contact = {};
    };
    
    $scope.remove = function (contactIndex) {
        $scope.contacts.splice(contactIndex, 1);
        $scope.contact = {};
    };
}