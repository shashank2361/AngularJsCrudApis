ageasApp.controller('homeController', ['getNotes', 'removeNote', function (getNotes, removeNote) {

    var vm = this;
    getNotes.data().then(function (response) {
        vm.notes = response;
    }, function (response) {
        alert("Error");
    });

    vm.removeNote = function (ind) {
        if (confirm("Are you sure? Id to delete : " + ind)) {
            removeNote.data(ind)
                .then(function (response) {
                    vm.note = {
                        id: response.id,
                        title: response.title,
                        body: response.body,
                        updatedAt: response.updatedAt,
                        createdAt: response.createdAt
                    }
                });
        }
    }
}]);

ageasApp.controller('postController', ['$http', 'postNote', function ($http, postNote) {
    var vm = this;
    vm.isLoading = false;
    vm.note = {};
    vm.submit = function () {

        postNote.data(this.title, this.body).then(function (response) {
            vm.isLoading = true;
            console.log(response);
            vm.note = {
                id: response.id,
                title: response.title,
                body: response.body,
                updatedAt: response.updatedAt,
                createdAt: response.createdAt
            }
        });
    }
}]);

ageasApp.controller('editController', ['$routeParams', '$http', 'getNoteById', 'patchNote', function ($routeParams, $http, getNoteById, patchNote) {

    var vm = this;
    getNoteById.data($routeParams.id).then(function (response) {
        vm.note = {
            id: response.id,
            title: response.title,
            body: response.body
        }
    });

    vm.patchRecord = function () {
        vm.isLoading = false;

        patchNote.data(vm.note.id, vm.note.title, vm.note.body).then(function (response) {
            vm.isLoading = true;
            vm.note = {
                id: response.id,
                title: response.title,
                body: response.body,
                updatedAt: response.updatedAt,
                createdAt: response.createdAt
            }
        });
    }
}]);
