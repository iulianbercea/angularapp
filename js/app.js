var app = angular.module ("MyApp", []);

app.controller("headerController", function($scope){
    
    $scope.logoUrl = "../img/logo.jpg";
    
});

app.controller("adsController", function($scope){
    
    $scope.advert = [
        {
            url: "../img/ad1.jpg"
        },
        {
            url: "../img.ad2.jpg"
        },
        {
            url: "../img/ad3.jpg"
        },
        {
            url: "../img.ad4.jpg"
        },
        {
            url: "../img.ad5.jpg"
        },
        {
            url: "../img.ad6.jpg"
        }
        ];
        
    
    
});