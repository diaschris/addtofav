import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';
import { QuotesService } from '../../services/quotes';
import { AddtocartPage } from '../addtocart/addtocart';
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
  
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
    addtocartPage = AddtocartPage;
    constructor(public fav:QuotesService){
    }
}