import { Component } from '@angular/core';

import { XoPostComponent } from 'angular-xo';
import {environment} from '../../../environments/environment';
@Component({
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class XoMaterialAboutPageComponent extends XoPostComponent {


	distUrl(){
		return environment.distUrl;
	}

	log(obj){
		console.log(obj);
	}

}
