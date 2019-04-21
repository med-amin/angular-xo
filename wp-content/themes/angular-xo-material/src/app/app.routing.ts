import { Routes } from '@angular/router';

export const XoMaterialAppLazyRoutes: Routes = [
	{
		path: 'xo-material-page-default',
		loadChildren: './pages/default/default.module#XoMaterialDefaultPageModule',
	},
	{
		path: 'xo-material-page-home',
		loadChildren: './pages/home/home.module#XoMaterialHomePageModule',
	},
	{
		path: 'xo-material-page-content',
		loadChildren: './pages/content/content.module#XoMaterialContentPageModule',
	},
	{
		path: 'xo-material-page-posts',
		loadChildren: './pages/posts/posts.module#XoMaterialPostsPageModule',
	},
	{
		path: 'xo-material-page-sitemap',
		loadChildren: './pages/sitemap/sitemap.module#XoMaterialSitemapPageModule',
	},
	{
		path: 'xo-material-page-about',
		loadChildren: './pages/about/about.module#XoMaterialAboutPageModule',
	},
	{
		path: 'xo-material-page-contact',
		loadChildren: './pages/contact/contact.module#XoMaterialContactPageModule',
	}
];
