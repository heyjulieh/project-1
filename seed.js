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
              images: 'http://images.nike.com/is/image/DotCom/PDP_HERO/852425_001_A_PREM/kobe-ad-mens-basketball-shoe.jpg',
              rating: 5
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
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/04/nike-pg-1-flip-the-switch-1.jpg?x77385',
              rating: 5
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
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/01/copper-nike-foamposite-one.jpg?x77385',
              rating: 5
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
              images: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/04/Under-Armour-Curry-3ZER0.jpg?x77385',
              rating: 5
              });

  shoeList.push({
              brand: 'Adidas',
              name: 'ADIDAS ULTRA BOOST 3.0 LTD',
              colorway: 'Bronze',
              price: '$TBD',
              releaseDate: 'May 31, 2017',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Kevin Tse, Julie Huang',
              images: 'https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/adidas-ultra-boost-3-bronze-boost.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Futurecraft 4D Black White',
              colorway: 'Core Black/Footwear White',
              price: '$333',
              releaseDate: 'FALL/WINTER 2017',
              type: ['Lifestyle', 'Running', 'Walking', 'Style'],
              dropLocation: ['TBD online'],
              editor: 'Julie Huang',
              images: 'https://stockx.imgix.net/Adidas-Futurecraft-4D-Black-White.png?fit=fillmax&bg=FFFFFF&w=700&h=500&auto=compress',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Ultra Boost SNS Tee Time',
              colorway: 'White/Black',
              price: '$180',
              releaseDate: 'January 22, 2017',
              type: ['Lifestyle', 'Running', 'Walking', 'Golf'],
              dropLocation: ['Limited Online Drops'],
              editor: 'Julie Huang',
              images: 'https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/sns-adidas-ultra-boost-1.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'NMD R1 Core Black Lush Red',
              colorway: 'Core Black/Core Black/Lush Red',
              price: '$170',
              releaseDate: 'December 12, 2015',
              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
              dropLocation: ['Retail Locations'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/adidas-nmd-core-black-lush-red_TruView/Images/adidas-nmd-core-black-lush-red_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Jordan 1 Retro Bred (2016)',
              colorway: 'Black/Varsity Red-White',
              price: '$160',
              releaseDate: 'September 3, 2016',
              type: ['Lifestyle', 'Basketball'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-Bred-2016_TruView/Images/Air-Jordan-1-Retro-Bred-2016_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Yeezy Boost 350 Turtledove',
              colorway: 'Turtledove/Blue Grey-White',
              price: '$200',
              releaseDate: 'June 27, 2015',
              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
              dropLocation: ['Online and Retail Stores'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-Low-Turtledove_TruView/Images/Adidas-Yeezy-Boost-350-Low-Turtledove_TruView/Lv2/img02.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Jordan 4 Retro Kaws',
              colorway: 'Cool Grey/White',
              price: '$350',
              releaseDate: 'March 31, 2017',
              type: ['Lifestyle', 'Basketball'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/air-jordan-4-retro-kaws_TruView/Images/air-jordan-4-retro-kaws_TruView/Lv2/img25.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Air VaporMax CDG Black',
              colorway: 'Black/Black-Dark Grey',
              price: '$330',
              releaseDate: 'February 10, 2017',
              type: ['Lifestyle', 'Basketball'],
              dropLocation: ['Nike.com', 'Footlocker'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/nike-vapormax-cdg-black_TruView/Images/nike-vapormax-cdg-black_TruView/Lv2/img24.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Adidas Ultra Boost OG Black Gold Purple',
              colorway: 'Core Black/Gold Metal/Purple',
              price: '$330',
              releaseDate: 'March 18, 2015',
              type: ['Running', 'Fitness', 'Walking', 'Lifestyle'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/adidas-ultra-boost-og-black-gold-purple_TruView/Images/adidas-ultra-boost-og-black-gold-purple_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Adidas NMD Pharrell HU Human Race Yellow',
              colorway: 'EQT Yellow/EQT Yellow/FTWR White',
              price: '$240',
              releaseDate: 'July 22, 2016',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/Adidas-NMD-HU-Pharrell-Williams-Yellow_TruView/Images/Adidas-NMD-HU-Pharrell-Williams-Yellow_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Air Presto Acronym Olive',
              colorway: 'Medium Olive/Dust-Black',
              price: '$200',
              releaseDate: 'September 15, 2016',
              type: ['Lifestyle', 'Running'],
              dropLocation: ['Foot Locker', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/nike-air-presto-acronym-olive_TruView/Images/nike-air-presto-acronym-olive_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Adidas EQT Support 93/17 Core Black Turbo',
              colorway: 'Core Black/Core Black/Turbo',
              price: '$180',
              releaseDate: 'January 26, 2015',
              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
              dropLocation: ['Online and Retail Stores'],
              editor: 'Julie Huang, Kevin Tse',
              images: 'https://stockx-360.imgix.net/adidas-eqt-support-93-17-core-black-turbo_TruView/Images/adidas-eqt-support-93-17-core-black-turbo_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Jordan 4 Retro Eminem Carhartt',
              colorway: 'Retro Black/Metallic Silver',
              price: 'N/A',
              releaseDate: 'November 23, 2015',
              type: ['Lifestyle', 'Basketball'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/Air-Jordan-4-Retro-Eminem-Carhartt_TruView/Images/Air-Jordan-4-Retro-Eminem-Carhartt_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Y3 Pure Boost ZG Knit Core Black',
              colorway: 'Core Black/Core Black/White',
              price: '$400',
              releaseDate: 'March 18, 2016',
              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
              dropLocation: ['Online and Retail Stores'],
              editor: 'Julie Huang, Kevin Tse',
              images: 'https://stockx-360.imgix.net/adidas-y3-pure-boost-zg-knit-core-black_TruView/Images/adidas-y3-pure-boost-zg-knit-core-black_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Adidas Ultra Boost Light Tan Cream',
              colorway: 'White/Off White/Cream',
              price: '$180',
              releaseDate: 'December 12, 2015',
              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
              dropLocation: ['Online and Retail Stores'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/Adidas-Ultra-Boost-LTD-Light-Tan-Cream_TruView/Images/Adidas-Ultra-Boost-LTD-Light-Tan-Cream_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Foamposite One Supreme NYC Black',
              colorway: 'Retro Black/Metallic Silver',
              price: '250',
              releaseDate: 'April 3, 2014',
              type: ['Lifestyle', 'Basketball', 'Urbanwear'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/Air-Foamposite-One-Supreme-NYC-Black_TruView/Images/Air-Foamposite-One-Supreme-NYC-Black_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Jordan 1 Retro Fragment',
              colorway: 'Black/Sport Blue-White',
              price: '$185',
              releaseDate: 'December 27, 2014',
              type: ['Lifestyle', 'Basketball'],
              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
              editor: 'Kevin Tse',
              images: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-Fragment_TruView/Images/Air-Jordan-1-Retro-Fragment_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Adidas',
              name: 'Yeezy Boost 350 V2 Beluga',
              colorway: 'Steeple Gray/Beluga/Solar Red',
              price: '$220',
              releaseDate: 'September 24, 2016',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Julie Huang',
              images: 'https://stockx-360.imgix.net/Yeezy-Boost-350-Low-V2-Beluga_TruView/Images/Yeezy-Boost-350-Low-V2-Beluga_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Yeezy 2 Red October',
              colorway: 'Red',
              price: '$250',
              releaseDate: 'February 9, 2014',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Los Angeles', 'San Francisco'],
              editor: 'Julie Huang, Kevin Tse',
              images: 'https://stockx-360.imgix.net/Nike-Air-Yeezy-2-Red-October_TruView/Images/Nike-Air-Yeezy-2-Red-October_TruView/Lv2/img01.jpg',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Air Huarache Black Black White',
              colorway: 'Black/Black-White',
              price: '$110',
              releaseDate: 'December 21, 2013',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Retail and Online Locations'],
              editor: 'Kevin Tse',
              images: 'https://stockx.imgix.net/Nike-Air-Huarache-Black-Black-White.jpg?fit=fillmax&bg=FFFFFF&w=700&h=500&auto=compress',
              rating: 5
            });
shoeList.push({
              brand: 'Nike',
              name: 'Air More Uptempo Black Reflective',
              colorway: 'Black/Black-Black',
              price: '$160',
              releaseDate: 'April 14, 2017',
              type: ['Running', 'Fitness', 'Walking'],
              dropLocation: ['Footlocker', 'Champs', 'Footaction'],
              editor: 'Julie Huang',
              images: 'https://stockx.imgix.net/Nike-Air-More-Uptempo-Black-Reflective.png?fit=fillmax&bg=FFFFFF&w=700&h=500&auto=compress',
              rating: 5
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
