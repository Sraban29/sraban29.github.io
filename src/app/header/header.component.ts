import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'About Me',
              icon: 'icon-home',
              routerLink:'/aboutMe'
              // items:[
              //     {
              //         label:'New',
              //         icon:'pi pi-fw pi-plus',
              //         items:[
              //         {
              //             label:'Bookmark',
              //             icon:'pi pi-fw pi-bookmark'
              //         },
              //         {
              //             label:'Video',
              //             icon:'pi pi-fw pi-video'
              //         },

              //         ]
              //     },
              //     {
              //         label:'Delete',
              //         icon:'pi pi-fw pi-trash'
              //     },
              //     {
              //         separator:true
              //     },
              //     {
              //         label:'Export',
              //         icon:'pi pi-fw pi-external-link'
              //     }
              // ]
          },
          {
              label:'Resume',
              icon:'icon-resume',
              routerLink:'/resume'
          },
          {
              label:'Projects',
              icon:'icon-project',
              routerLink:'/projects'
          },
          {
              label:'Contact',
              icon:'icon-contact',
              routerLink:'/contact'
          }
      ];
  }
}
