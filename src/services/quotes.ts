import { Quote } from './../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: Quote[] = []
 public addtocart:Quote[]=[];
    addQuoteToFavorites(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes.length);
    }

    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
        console.log(this.favoriteQuotes.length);
    }

    getFavoriteQuotes(){ 
        // slice method returns a copy of the array, meaning that when we edit the array
        // we dont edit the original but rather the copy we recieved
        return this.favoriteQuotes.slice();
    }

    
    isQouteFavorite(quote: Quote){
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
    // getcount(){

    //    console.log(this.favoriteQuotes.length,"adjd");
    //    return this.favoriteQuotes.length;
    // }
    addTocart(quote){
        console.log(this.addtocart,"hdhuhujij");
      return  this.addtocart.push(quote);
        
    }
    deletefromcart(id){
        this.addtocart.splice(this.addtocart.indexOf(id),1);
    }

}