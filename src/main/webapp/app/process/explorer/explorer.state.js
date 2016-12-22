(function() {
    'use strict';

    angular
        .module('amandaOaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig ($stateProvider) {
        $stateProvider.state('explorer', {
            parent: 'process',
            url: '/explorer',
            data: {
                authorities: [],
                pageTitle: 'global.menu.process.explorer'
            },
            views: {
                'content@': {
                    templateUrl: 'app/process/explorer/explorer.html'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', function ($translate) {
                    return $translate.refresh();
                }]
            }
        });
    }
})();
