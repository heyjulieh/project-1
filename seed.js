console.log ('This seed file is a-go!')
var db = require("./models");

// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.


var brandList = [];
  brandList.push({
                name: 'Nike',
                establishDate: 'January 25, 1964',
                location: 'Beaverton, Oregon',
                image: 'http://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/plcio4b3hxvsjo8cdy9t/50-nike-facts-only-brand-to-lose-and-regain-its-position'
                });
  brandList.push({
                name: 'Adidas',
                establishDate: 'August 18, 1949',
                location: 'Herzogenaurach, Germany',
                image: 'http://hoitalent.com/wp-content/uploads/2016/09/adidas.png'
                });
  brandList.push({
                name: 'Under-Armour',
                establishDate: 'December 7, 1996',
                location: 'Washington D.C.',
                image: 'https://lh4.googleusercontent.com/-S0MX0flnwLI/AAAAAAAAAAI/AAAAAAAAAsk/pyavDK7bTCI/s0-c-k-no-ns/photo.jpg'
                });

var shoeList =[];
  shoeList.push
              ({
              brand: 'Nike',
              name: 'Kobe AD',
              colorway: "Black/Black/White",
              price: '$160',
              releaseDate: 'November 22, 2017',
              type: ['Basketball', 'Fitness'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'http://images.nike.com/is/image/DotCom/PDP_HERO/852425_001_A_PREM/kobe-ad-mens-basketball-shoe.jpg'
            });
  shoeList.push({
              brand: 'Nike',
              name: 'PG 1 Flip the Switch',
              colorway: 'Dark Grey/Purple-Violet Dust',
              price: '$110',
              releaseDate: 'May 5, 2017',
              type: ['Basketball', 'Fitness'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/04/nike-pg-1-flip-the-switch-1.jpg?x77385'
            });
  shoeList.push({
              brand: 'Nike',
              name: 'Nike Air Foamposite One Copper 2017',
              colorway: 'Black / Metallic Copper',
              price: '$230',
              releaseDate: 'April 20, 2017',
              type: ['Lifestyle', 'Running', 'Walking', 'Basketball'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/01/copper-nike-foamposite-one.jpg?x77385'
            });
  shoeList.push({
              brand: 'Under-Armour',
              name: 'Curry 3Zer0 Team Royal',
              colorway: 'Team Royal/Taxi',
              price: '$120',
              releaseDate: 'April 15, 2017',
              type: ['Basketball', 'Fitness'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/04/Under-Armour-Curry-3ZER0.jpg?x77385'
              });

  shoeList.push({
              brand: 'Adidas',
              name: 'ADIDAS ULTRA BOOST 3.0 LTD',
              colorway: 'Bronze',
              price: '$TBD',
              releaseDate: 'May 31, 2017',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Kevin Tse',
              images: 'https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/adidas-ultra-boost-3-bronze-boost.jpg'
            });


// remove Brands first
db.Brand.remove({}, function(err, brands) {
  console.log('removed all brands');
  db.Brand.create(brandList, function(err, brands){
    if (err) {
      console.log(err);
      return;
    }
    db.Shoe.remove({}, function(err, shoes){
  console.log('removed all shoes');
  db.Shoe.create(shoeList, function(err, shoes){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all shoes');
    console.log("created", shoes.length, "shoes");
    process.exit();
  });
});
    console.log('recreated all brands');
    console.log("created", brands.length, "brands");
     });

});
