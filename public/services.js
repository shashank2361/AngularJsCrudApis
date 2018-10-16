ageasApp.factory('getNotes', ['$http', function ($http) {
    return {
        data: function () {
            return $http({
                url: "http://localhost:3333/api/notes",
                method: "get"
            }).then(function (response) {
                return response.data;
            });
        }
    }
}])

ageasApp.factory('removeNote', ['$http', '$route', '$log', function ($http, $route , $log) {
    return {
        data: function (ind) {
            return $http({
                url: "http://localhost:3333/api/notes/" + ind,
                method: "delete"
            }).then(function (response) {
                alert("Deleted id : " + response.data.id + " Title " + response.data.title  );
                $route.reload();
                $log.log (response.data);
                return response.data;
            }, function (response) {
                alert("Error ");
            });
        }
    }
}]);



ageasApp.factory('postNote', ['$http', function ($http) {
    return {
        data: function (title, body) {

            return $http({
                url: "http://localhost:3333/api/notes",
                method: "post",
                data: {
                    'title': title,
                    'body': body
                }
            }).then(function (response) {
                alert("Success");
                return response.data;

            }, function (response) {
                alert("Error ")
            });
        }
    }
}]);


ageasApp.factory('patchNote', ['$http', function ($http) {
    return {
        data: function (id, title, body) {

            return $http({
                url: "http://localhost:3333/api/notes",
                method: "patch",
                data: {
                    id: id,
                    title: title,
                    body: body
                }
            }).then(function (response) {
                alert("Success");
                return response.data;
            }, function (response) {
               
                alert("Error ")
            });
        }
    }
}]);

ageasApp.factory('getNoteById', ['$http', function ($http) {
    return {
        data: function (id) {
            return $http({
                url: "http://localhost:3333/api/notes/" + id,
                method: "get"
            }).then(function (response) {           
                return response.data;
            }, function (response) {
                alert("Error ")
            });
        }
    }
}]);