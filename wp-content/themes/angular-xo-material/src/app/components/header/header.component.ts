import {Component, OnInit} from '@angular/core';

import {XoApiMenusService, XoMenus} from 'angular-xo';
import {XoApiOptionsService2} from "./options.service";



@Component({
	selector: 'xo-material-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class XoMaterialHeaderComponent implements OnInit {
	navItemsLeft: Array<XoMenus.Menu>;
	navItemsRight: Array<XoMenus.Menu>;

	constructor(private _menus: XoApiMenusService) { }

	ngOnInit() {
		this.getNavigation();
	}


	getNavigation() {
		this._menus.get('header_left')
			.subscribe((response) => {
				if (response.success)
					this.navItemsLeft = response.items;
			});
		this._menus.get('header_right')
			.subscribe((response) => {
				if (response.success)
					this.navItemsRight = response.items;
			});
	}

	log(string) {
		console.log(this)
	}
}
