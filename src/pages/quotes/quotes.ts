import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
@Component({
    selector: 'page-quotes',
    templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{
    quoteGroup: {category: string, quotes: Quote[], icon: string};

    constructor(
        private navParams: NavParams,
        private alertCtrl: AlertController,
        private quotesService: QuotesService
    ){}

    ngOnInit(){
        this.quoteGroup = this.navParams.data;  
        console.log(this.quoteGroup.category);
    }

    onAddToFavorites(selectedQuote: Quote){
        // const alert = this.alertCtrl.create({
        //     title: 'Add Quote',
        //     subTitle: 'Are you sure?',
        //     message: 'Are you sure you want to add the quote to favorites?',
        //     buttons: [{
        //         text: 'Yes, go ahead',
        //         handler: () => {
                    this.quotesService.addQuoteToFavorites(selectedQuote);
        //         }
        //     },
        //     {
        //         text: 'No, I changed my mind!',
        //         role: 'cancel',
        //         handler: () => {
        //             console.log('NO');
        //         }
        //     }
        // ]
        // });

        // alert.present();
    }

    onRemoveFromFavorites(quote: Quote){
        this.quotesService.removeQuoteFromFavorites(quote);
    }

    isFavorite(quote: Quote){
        return this.quotesService.isQouteFavorite(quote);
    }
    addtocart(quote){
        this.quotesService.addTocart(quote);
    }
}