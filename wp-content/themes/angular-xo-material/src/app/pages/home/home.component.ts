import {Component,} from '@angular/core';

import {XoGlobals, XoPostComponent} from 'angular-xo';
import {ActivatedRoute, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {environment} from '../../../environments/environment';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class XoMaterialHomePageComponent extends XoPostComponent {


    distUrl(){
        return environment.distUrl;
    }
    log(post) {
        console.log(post);
    }

}
