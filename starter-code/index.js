class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(x) {
      this.items.push(x);
      this.length++;
      this.items.sort((a, b) => {
        return a - b;
      });
    }

    get(pos) {
     return this.items[pos];
    }
    
    max() {
      if (this.items.length > 0 ) {
       return this.items.reduce(function(a ,b) {
          return Math.max(a, b)
        })
      } else {
        throw new Error("EmptySortedList");
      }
      
    }
    min() {
      if (this.items.length > 0 ) {
        return this.items.reduce(function(a ,b) {
          return Math.min(a, b)
        })
      } else {
        throw new Error("EmptySortedList");
      }
    }

    sum() {
     return this.items.reduce((a, b) => a + b, 0) 
    }

    average() {
      if (this.items.length > 0 ) {
        return this.sum()/this.length;
      } else {
        throw new Error("EmptySortedList");
      }
    }
  };
  
  module.exports = SortedList;