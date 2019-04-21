/**
 * @XoPageTemplate About
 * @XoDefaultTemplate false
 * @XoLoadChildren XoMaterialAboutPageModule
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XoPostResolver, XoBreadcrumbsResolver } from 'angular-xo';

import { XoMaterialAboutPageComponent } from './about.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialBackToTopModule } from '../../components/backToTop/backToTop.module';

@NgModule({
	imports: [
		XoMaterialBreadcrumbsModule,
		XoMaterialBackToTopModule,
		RouterModule.forChild([
			{
				path: '',
				component: XoMaterialAboutPageComponent,
				resolve: {
					post: XoPostResolver,
					breadcrumbs: XoBreadcrumbsResolver
				}
			}
		])
	],
	declarations: [XoMaterialAboutPageComponent]
})
export class XoMaterialAboutPageModule { }
