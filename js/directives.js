'use strict';

app.directive('ngFocus', function ngFocus($timeout) {
	return function (scope, elem, attrs) {
		scope.$watch(attrs.ngFocus, function (newVal) {
			if (newVal) {
				$timeout(function () {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
});

app.directive('ngOnBlur', function () {
	return function (scope, elem, attrs) {
		elem.bind('blur', function () {
			scope.$apply(attrs.ngOnBlur);
		});
	};
});
