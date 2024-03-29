// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
        let numOfPgs = this.itemsPerPage > (this.collection.length-1) ? 1 : Math.ceil(this.collection.length/this.itemsPerPage) 
        return this.collection.length === 0 ? 0 : numOfPgs
	}
	pageItemCount(pageIndex) {
        let countArr = this.collection.slice(0)
        let pages = []
        while(countArr.length){
            // make pages
            let aPage = countArr.splice(0,this.itemsPerPage)
            pages.push(aPage)
        }
        return pages[pageIndex] === undefined ? -1 : pages[pageIndex].length
	}
	pageIndex(itemIndex) {
        return itemIndex > (this.collection.length-1) || itemIndex < 0 ? -1 : Math.floor(itemIndex / this.itemsPerPage)
	}
}

