var app = angular.module('app',[]);

app.controller('main',['$scope',function ($scope) {

    $scope.text = '';

    $scope.removeDots = function(text) {
        var letters = [
            {
                doted: '[أإآ]',
                dotless: 'ا'
            },
            {
                doted: '[ءًٌٍَُِّْ]',
                dotless: ''
            },
            {
                doted: '[بنتث]',
                dotless: 'ٮ'
            },
            {
                doted: '[خج]',
                dotless: 'ح'
            },
            {
                doted: 'ذ',
                dotless: 'د'
            },
            {
                doted: 'ز',
                dotless: 'ر'
            },
            {
                doted: 'ش',
                dotless: 'س'
            },
            {
                doted: 'ض',
                dotless: 'ص'
            },
            {
                doted: 'ظ',
                dotless: 'ط'
            },
            {
                doted: 'غ',
                dotless: 'ع'
            },
            {
                doted: 'ف',
                dotless: 'ڡ'
            },
            {
                doted: 'ق',
                dotless: 'ٯ'
            },
            {
                doted: 'ة',
                dotless: 'ه'
            },
            {
                doted: 'ؤ',
                dotless: 'و'
            },
            {
                doted: '[يئ]',
                dotless: 'ى'
            },
        ];

        for (var i = 0; i < letters.length; i++) {
            var regExp = new RegExp(letters[i].doted,'g');
            text = text.replace(/ن(\s|$)/g,'ں ');
            text = text.replace(regExp,letters[i].dotless);
        }

        return text;
    };
}]);
