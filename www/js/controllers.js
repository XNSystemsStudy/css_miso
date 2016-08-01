angular.module('app.controllers', [])
  
.controller('favoritesCtrl', function($scope) {
	$scope.img_url = {
		order_tel: "img/order_tel.png",
		bill_before: "img/bill_before.png",
		bill_after: "img/bill_after.png"
	};

	$scope.items = [
	{ 
		id:"favorites-list-item1", 
		name: "가마로강정 구로디지털단지역점", 
		img: "img/mainmenu.png", 
		rating: "5", 
		review: 52, 
		photo: 14, 
		owner: 34, 
		isOrderTel: true,  
		isBillBefore: true,
		isBillAfter: true
	},
	{ 
		id:"favorites-list-item2", 
		name: "가마로강정 하안사거리점", 
		img: "img/mainmenu.png", 
		rating: 4, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: true,  
		isBillBefore: false,
		isBillAfter: true
	},
	{ 
		id:"favorites-list-item3", 
		name: "가마로강정 신림난곡점", 
		img: "img/mainmenu.png", 
		rating: 3, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: false,  
		isBillBefore: false,
		isBillAfter: true
	}, 
	{ 
		id:"favorites-list-item4", 
		name: "가마로강정 철산점", 
		img: "img/mainmenu.png", 
		rating: 5, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: true,  
		isBillBefore: true,
		isBillAfter: true
	},
	{ 
		id:"favorites-list-item5", 
		name: "가마로강정 개봉역점", 
		img: "img/mainmenu.png", 
		rating: 2, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: true,  
		isBillBefore: true,
		isBillAfter: false
	},
	{ 
		id:"favorites-list-item6", 
		name: "가마로강정 가산디지털단지역점", 
		img: "img/mainmenu.png", 
		rating: 1, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: true,  
		isBillBefore: false,
		isBillAfter: false
	},
	{ 
		id:"favorites-list-item7", 
		name: "가마로강정 구로역점", 
		img: "img/mainmenu.png", 
		rating: 5, 
		review:52, 
		photo:14, 
		owner:34, 
		isOrderTel: true,  
		isBillBefore: true,
		isBillAfter: true
	}];
})
   
.controller('cartCtrl', function($scope) {

})
      
.controller('homeCtrl', function($scope) {

})
 