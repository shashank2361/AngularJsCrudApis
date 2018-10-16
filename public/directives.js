ageasApp.directive("homeResults", function () {
    return {
     restrict: 'E',
        templateUrl: 'Templates/homeresults.html',
        replace: true,
//        link: linkfunction,
        scope: {
            noteObject: "=" ,
            removeNodeFunction: "&"
        }
    }



    function linkfunction(scope1, element, attr) {
        element.bind('click', function () {
            alert(element[0].innerHTML)
        })

    }
})



 
ageasApp.directive('ngConfirmClick', [
    function () {
        return {
            link: function (scope, element, attr) {

                var msg = attr.ngConfirmClick || "Are you sure?";
            
                var clickAction = attr.confirmedClick;

                element.bind('click', function (event) {
                   
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
}])
