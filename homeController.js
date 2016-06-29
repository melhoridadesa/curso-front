melhorIdadeApp.controller('homeController', ['$scope', function($scope)
{
	
	$scope.identifyBanners = $("#banners").attr("text");

	$scope.getBanner = function(typeBanner)
	{
		var objectBanner = $($scope.getIdentifyBanners(typeBanner));

		switch(typeBanner) {
			case "banner_home":
				objectBanner.bxSlider();
		    break;
		}
	};

	$scope.getIdentifyBanners = function(banner)
	{
		return "#" + banner;
	};
	
	function init(banners)
	{
		$scope.getBanner(banners);
	}

	init($scope.identifyBanners);
	
}]);