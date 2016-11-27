import { Component } from '@angular/core';

import { ServicesPage } from '../services/services';
import { LocationsPage } from '../locations/locations';
import { TicketsPage } from '../tickets/tickets';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ServicesPage;
  tab2Root: any = LocationsPage;
  tab3Root: any = TicketsPage;

  constructor() {

  }
}
