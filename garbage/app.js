'use strict';

var dogs = prompt('How many dogs are good bois?');
console.log(dogs);
console.log('There are at least ' + dogs + ' that are good bois');
alert(dogs + ' GOOD BOIS!!')
while (dogs < 9000) {
    alert('You need more than ' + dogs + ' good bois');
    var dogs = prompt(' How many good bois? ');
    };
    
if (dogs >= 9000) {
    alert('ITS OVER 9000!!!!!!!')
    };
    









var qty = 3;
var stringQty = '3';
console.log(typeof qty);
console.log(typeof stringQty);
console.log(qty == stringQty);
console.log(qty === stringQty);

var cat = 'alice';
var cats = [
        'alice',
        'shadow',
        'merker',
        'deathcatforcutie'
      ];
console.log('----------------------')
console.log(cats);

var shenanagins = [
'thisisanitem',
cats,
'thisisanotherthing'
];
console.log('------------------------')
console.log(shenanagins)

cats.pop();
console.log('----------------')
console.log(cats);
console.log('-----------------')
console.log(shenanagins)
cats.push('bobbert')
console.log('-------------')
console.log(cats)
cats.shift();
console.log('---------------')
console.log(cats)
console.log ('----------')
cats.unshift('tabby');
console.log(cats)
console.log(cats.length)
console.log(cat.length)

var placeTabby = cats.indexOf('tabby');
console.log(placeTabby)

