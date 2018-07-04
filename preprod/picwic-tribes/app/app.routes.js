app.config(function($stateProvider, $urlRouterProvider){

  var baseUrl = "app/";

  $urlRouterProvider.otherwise("/accueil");

  $stateProvider
    .state('home', {
      url: "/accueil",
      views: {
        nav: {
          templateUrl: baseUrl + "components/navbar/navbar.html"
        },
        content: {
          templateUrl: baseUrl + "components/home/home.html",
          controller: 'HomeController'
        }
      }
    })
    .state('site', {
      url: "/site/:codeSite",
      views: {
        nav: {
          templateUrl: baseUrl + "components/navbar/navbar.html"
        },
        content: {
          templateUrl: baseUrl + "components/site/site.html",
          controller: 'SiteController'
        }
      }
    })
    .state('search', {
      url: "/recherche/:query",
      views: {
        nav: {
          templateUrl: baseUrl + "components/navbar/navbar.html"
        },
        content: {
          templateUrl: baseUrl + "components/search/search.html",
          controller: 'SearchResultsController'
        }
      }
    });
});
