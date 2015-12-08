var app = angular.module ("MyApp", []);

app.controller("headerController", function($scope){
    
    $scope.logoUrl = "img/logo2.png";
    
});

app.controller("adsController", function($scope){
    
    $scope.adverts = [
        {
            url: "img/ad9.jpg",
            dateAdded:"",
            availability:"store"
        },
        {
            url: "img/ad10.jpg",
            dateAdded:"",
            availability:"online"
        },
        {
            url: "img/ad11.jpg",
            dateAdded:"",
            availability:"store"
        },
        {
            url: "img/ad12.jpg",
            dateAdded:"",
            availability:"online"
        },
        {
            url: "img/ad13.jpg",
            dateAdded:"",
            availability:"online"
        },
        {
            url: "img/ad14.jpg",
            dateAdded:"",
            availability:"store"
        },
        {
            url: "img/ad15.jpg",
            dateAdded:"",
            availability:"store"
        },
        {
            url: "img/ad16.jpg",
            dateAdded:"",
            availability:"online"
        }
        ];
        
    
    
});