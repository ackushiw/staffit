'use strict';

angular.module('staffitApp')
    .factory('Paste', function($scope) {
        // Service logic
        // ...

        var input = pasteData;
        var people = input.map(function(p) {
            var m = p.replace(/[-]+\s+/g, '').match(/(^\d+)\.\s(\w+\s\w+)\s(\w*)\s?C\:\s(.*\s(?:AM|PM)).*P:\s(\d+-\d+-\d+)\s?(.*)?$/);
            
        });


        // Public API here
        return {
            someMethod: function() {
                return {
                    number: m[1],
                    name: m[2],
                    position: m[3],
                    calltime: m[4],
                    phone: m[5],
                    ntc: m[6]
                };
            }
        };
    });