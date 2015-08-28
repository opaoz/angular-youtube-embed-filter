angular.module('you', [])
	.filter('tube', function($sce) {
		return function(value) {
			var result, matches,
				regexp = /youtube.com\/(user|embed|watch.*?v=([A-Za-z0-9_-]*))\/?([A-Za-z0-9_-]*)/;
			if (!value) {
				return;
			}
			matches = value.match(regexp);
			console.log(matches);
			if (matches[2]) {
				result = 'https://www.youtube.com/embed/' + matches[2];
			} else {
				switch (matches[1].toLowerCase()) {
					case 'embed':
						result = value;
						break;
					case 'user':
						result = 'http://www.youtube.com/embed/?listType=user_uploads&list=' + matches[3];
						break;
				}
			}

			return $sce.trustAsResourceUrl(result || value);
		};

	});