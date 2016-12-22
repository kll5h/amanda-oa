(function() {
    'use strict';

    angular
        .module('amandaOaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('process', {
            abstract: true,
            parent: 'app'
        });
    }
})();
