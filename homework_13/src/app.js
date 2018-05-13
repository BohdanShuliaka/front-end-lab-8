var app = angular.module("myApp", []);
app.controller("myCtrl", [
    '$scope', function($scope) {
    $scope.appTitle = "Traveling";
    $scope.appHeadline = "Blog";
    $scope.posts = defaultPosts;
    $scope.layoutPosts = $scope.posts;
    $scope.addActive = false;
    $scope.showError = false;

    $scope.save = function(saved) {
      $scope.editableTitle = saved;
      $scope.disableEditor();
    };
    $scope.edit = function(post)  {
        post.editable = false;
        post.error = false;
    }
    $scope.addNewPost = function(title, descr, categories, photo) {
        $scope.showError = false;
        if (!photo) {
            photo = './assets/default.jpg';
        };
        newCategories = categories.split(/[ ,]+/);
        let newPost = {
            title: title,
            categories: newCategories,
            description: descr,
            url: photo
        };
        $scope.posts.push(newPost);
        $scope.categories = $scope.createSidebar();
        $scope.addActive = false;
    }

    $scope.createSidebar = function() {
        let categories = ['All'];
        $scope.posts.forEach(item => {
            item.categories.forEach(category => {
                console.log(category)
                if (categories.indexOf(category) === -1) {
                    categories.push(category);
                }
            })
        });
        return categories;
    }
    $scope.categories = $scope.createSidebar();

    $scope.filter = function(category) {
        if(category === 'All') { 
            $scope.layoutPosts = $scope.posts;
            return;
        } else {
            $scope.layoutPosts = [];
            $scope.posts.forEach(post => {
                if(post.categories.indexOf(category) !== -1) {
                    $scope.layoutPosts.push(post);
                }
            })
        }
    } 
}]);


