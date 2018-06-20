require('./backbone.subroute');
/*
	路由中带:的为参数层, 带*的参数层可以不传
	但因为路由匹配中可能把其他路由的层名字误认为参数, 导致匹配错误, 如
	floorName1/floorName2 错认为 floorName1/param1 而匹配上floorName1/:param1
	因此, 十分建议把层数较深的route放在上面, 层数较浅的放下面(基于机器匹配是由上而下机制), 即
	{
		floorName1/floorName2/floorName3/{{params...}}
		floorName1/floorName2/{{params...}}
		floorName1/{{params...}}
	}
 */
var routesMap = {
	home: {
		'store': 'store',
		'social': 'social',
		'': 'home',
	},
	product: {
		'model': 'model',
		'cashier': 'cashier',
		'mall': 'mall',
	},
	service: {
		'program': 'program',
		'service': 'service',
	},
	support: {
		'*:name': 'support',
	}
};
var routeFuncs = {
	home: function() {
		require.async('modules/home/home', function(exports) {
			exports.apply(null);
		});
	},
	social: function() {
		require.async('modules/home/social/social', function(exports) {
			exports.apply(null);
		});
	},
	store: function() {
		require.async('modules/home/store/store', function(exports) {
			exports.apply(null);
		});
	},
	mall: function() {
		require.async('modules/product/mall/mall', function(exports) {
			exports.apply(null);
		});
	},
	cashier: function() {
		require.async('modules/product/cashier/cashier', function(exports) {
			exports.apply(null);
		});
	},
	model: function() {
		require.async('modules/product/model/model', function(exports) {
			exports.apply(null);
		});
	},
	service: function() {
		require.async('modules/service/service/service', function(exports) {
			exports.apply(null);
		});
	},
	program: function() {
		require.async('modules/service/program/program', function(exports) {
			exports.apply(null);
		});
	},
	support: function() {
		require.async('modules/support/support', function(exports) {
			exports.apply(null);
		});
	},
};
var BackboneRouter  = Backbone.Router.extend({
	defaultAction: function() {
		console.log('404');
		location.hash = '#/home';
	},
	routes: {
		'': 'home'
	},
	home: routeFuncs.home
});

var mainRouter = new BackboneRouter();

(function() {
	for (var prefix in routesMap) {
		var routes = routesMap[prefix];
		var newRoutes = {};
		var extend = {
			routes: newRoutes
		};
		for (var hash in routes) {
			var funcName = routes[hash];
			var hashSplit = hash.split('/');
			newRoutes[hash] = funcName;
			// 遍历hash, 将首字符为*的认为是可选路由, 并新增此路由
			for (var i = 0; i < hashSplit.length; i++) {
				var floor = hashSplit[i];
				if (floor.charAt(0) != '*') continue;
				var newSplit = hashSplit.slice(0, i);
				newRoutes[newSplit.join('/')] = funcName;
				// routes[newSplit.join('/')] = funcName;
			}
			extend[funcName] = routeFuncs[funcName];
		}
		routesMap[prefix] = newRoutes;
		var SubRoute = Backbone.SubRoute.extend(extend);
		var SubRouteInstance = new SubRoute(prefix);
	}
})();

// var router = new Router();
module.exports = {
	routesMap: routesMap,
};
