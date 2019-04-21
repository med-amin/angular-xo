/**
 * @XoPageTemplate Contact
 * @XoDefaultTemplate True
 * @XoLoadChildren XoMaterialContactPageModule
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { XoPostResolver, XoBreadcrumbsResolver } from 'angular-xo';

import { XoMaterialContactPageComponent } from './contact.component';
import { XoMaterialBreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';
import { XoMaterialBackToTopModule } from '../../components/backToTop/backToTop.module';

@NgModule({
	imports: [
		XoMaterialBreadcrumbsModule,
		XoMaterialBackToTopModule,
		RouterModule.forChild([
			{
				path: '',
				component: XoMaterialContactPageComponent,
				resolve: {
					post: XoPostResolver,
					breadcrumbs: XoBreadcrumbsResolver
				}
			}
		])
	],
	declarations: [XoMaterialContactPageComponent]
})
export class XoMaterialContactPageModule { }
