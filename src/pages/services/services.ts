import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  searchQuery: string = '';
  recentSearchItems: string[];
  popularSearchItems: string[];
  serviceItems: Service[];

  constructor(public navCtrl: NavController) {
    this.recentSearchItems = [];
    this.popularSearchItems = [];
  }

  getSearchItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.recentSearchItems = [
        'permise auto',
        'inmatriculari auto',
        'asigurari auto',
        'placute auto',
        'certificate auto'
      ];
      this.popularSearchItems = [
        'permise',
        'inmatriculari',
        'pasapoarte',
        'buletine',
        'vize flotant'
      ];
      this.recentSearchItems = this.recentSearchItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) != -1);
      });
      this.popularSearchItems = this.popularSearchItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) != -1);
      });
    } else {
      this.recentSearchItems = []
      this.popularSearchItems = []
    }

    this.getServiceItems();
  }

  getServiceItems() {
    this.serviceItems = []

    let val = this.searchQuery;

    if (val && val.trim() != '') {
      this.serviceItems.push(new Service(
        'Inmatriculari vehicule',
        'Lorem ipsum', 
        'http://downloadicons.net/sites/default/files/car-icon-46226.png'
      ));
      this.serviceItems.push(new Service(
        'Eliberare permise auto', 
        'Lorem ipsum', 
        'https://www.iconexperience.com/_img/i_collection_png/256x256/plain/id_card.png'
      ));
      this.serviceItems.push(new Service(
        'Eliberare pasapoarte', 
        'Lorem ipsum', 
        'https://www.iconexperience.com/_img/i_collection_png/256x256/plain/id_card.png'
      ));

      this.serviceItems = this.serviceItems.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(val.toLowerCase()) != -1 
          || item.description.toLowerCase().indexOf(val.toLowerCase()) != -1
        );
      });
    }
  }
}

class Service {
  constructor(public name:string, public description:string, public image:string) {
  }
}