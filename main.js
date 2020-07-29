const Ray = function() {
    const ray = {
        length: 0,

        push: function(value) {
            this[this.length] = value;
            this.length++;
        },

        pop: function() {
            const lastIndex = this.length-1;
            const toBeRemoved = this[lastIndex];
            delete this[lastIndex];
            this.length--;

            return toBeRemoved;
        },

// loop through each key from 0 to this.length and compare each key
// compare each keys value to the value we're looking for
// if we do find the value, return true
// if we loop through it all and never find the value, return false
        includes: function(value) {
            for ( let i = 0; i < this.length; i++) {
                if  ( this[i] === value) {
                    return true;
                }
            }
            return false;
        },

//return the index of the key inside the given value
// using a for - loop through each key until you hit the actual value
// the place is not there go ahead and return -1

        indexOf: function (thing) {
            for ( i = 0; i <= this.length-1; i++) {
                if ( this[i] === thing) {
                    return this[i] + indexOf;
                }
            }
            return -1;
        },


        shift: function () {


        },

        // use this.length-1
// go in and remove the value of the key from the end using .unshift
// use .shift to .pop 
// return the element using delete
        // shift: function (str) {
        //     for (let i = 0; i <= this.length-1; i--) {

        //     }


        // },

// I need to use the for loop
// do the reverse rom the last
// add to the beginning of the object
// using the shift operator
//         unshift: function (str) {
//             for ( let i = 0; i <=this.length; i--) {

//             }
        
    
 
        unshift: function () {

        }


    }
    return ray;
}










module.exports = Ray
