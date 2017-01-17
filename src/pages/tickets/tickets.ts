import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  tickets: Ticket[]

  constructor(public navCtrl: NavController) {
	this.getTickets();
  }

  getTickets(){
	this.tickets = []

	this.tickets.push(new Ticket(
		1,
	  'Eliberare permis de conducere',
	  'F101',
	  '16:25',
	  false
	));

	this.tickets.push(new Ticket(
		2,
	  'Eliberare buletin',
	  'F102',
	  '08:25',
	  false
	));
  }

	deleteTicket(id){
		// Perform an ajax call to delete the ticket and then call the following code as callback
		this.tickets = this.tickets.filter(function(el) {
				return el.id !== id;
		});
	}

	toggleDetails(ticket: Ticket) {
		// We need a check to see if we have stored information about this ticket
		// like remaining tickets, average time, etc see #18
		// If we don't have anything stored, we need to feth those details
		// and store them for 5 minutes ?
	    if (ticket.showDetails) {
	        ticket.showDetails = false;
	    } else {
	        ticket.showDetails = true;
	    }
	}

	getTicketCount(){
		return 3;
	}

}

class Ticket {
	constructor(public id:number, public title:string, public ticketId:string, public date:string, public showDetails: boolean) {
	}
}
