export const environment = {
	production: false,
    distUrl: "/wp-content/themes/angular-xo-material/dist/"
};

const appConfig = {
	app: {
		title: 'Xo for Angular',
		url: 'http://wordpress-angular.me',
		version: '0.1.2',
		debug: true
	},
	paths: {
		apiUrl: 'http://wordpress-angular.me/xo-api',
		templateUrl: 'http://wordpress-angular.me/wp-content/themes/angular-xo-material/'
	}
};

window['appConfig'] = appConfig;
