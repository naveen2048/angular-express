import { Component, Input, OnInit  } from '@angular/core';

@Component({
    selector:'app-image',
    template:`<img src="{{basePath}}{{source}}.png" alt="{{source}}" class="Polaris-Thumbnail Polaris-Thumbnail--size{{size}}" />`,
    styleUrls:[]
})
export class ImageComponent implements OnInit{

    basePath:string = "../../assets/images/";

    @Input() source:string;
    @Input() size:string = "Medium";

    constructor(){}

    ngOnInit(){}
}