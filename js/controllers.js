app.controller('MainCtrl', function MainCtrl($scope, storage) {
	var data = $scope.data = storage.get() || [];
	$scope.editingItem = null;
	$scope.newItemText = '';

	$scope.$watch('data', function (newValue, oldValue) {
		if (newValue !== oldValue) {
			storage.put(data);
		}
	}, true);

	$scope.add = function () {
		var newItemText;
		newItemText = $scope.newItemText.trim();
		if (!newItemText.length) {
			return;
		}

		data.push({
			text: newItemText
		});
		$scope.newItemText = '';
	};

	$scope.edit = function (item) {
		$scope.editingItem = item;
	};

	$scope.doneEditing = function (item) {
		$scope.editingItem = null;
		item.text = item.text.trim();

		if (!item.text) {
			$scope.remove(item);
		}
	};

	$scope.remove = function (item) {
		data.splice(data.indexOf(item), 1);
	};
});
