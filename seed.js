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
                image: 'http://www.logospike.com/wp-content/uploads/2015/05/Under_Armour_Logo_01.png'
                });

                var shoeList =[];
                  shoeList.push({
                              brand: 'Nike',
                              name: 'Kobe AD',
                              colorway: "Black/Black/White",
                              price: '$160',
                              releaseDate: 'November 22, 2017',
                              type: ['Basketball', 'Fitness'],
                              dropLocation: ['Foot Locker House of Hoops', 'Champs', 'Footaction'],
                              editor: 'Kevin Tse',
                              images: 'http://defpen.com/wp-content/uploads/2016/11/Nike-Kobe-AD-Black-White-3.jpg',
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
                              images: 'https://s3.amazonaws.com/stockx-sneaker-analysis/wp-content/uploads/2017/04/Nike-PG1-Flip-The-Switch.png',
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
                              images: 'http://images.footlocker.com/pi/5999-400/large/under-armour-curry-3zero-boys-preschool',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742988-adidas-ultra-boost-sns-white-black-201178_2.jpg',
                              rating: 5
                            });
                shoeList.push({
                              brand: 'Adidas',
                              name: 'NMD R1 Core Black Lush Red',
                              colorway: 'Core Black/Lush Red',
                              price: '$170',
                              releaseDate: 'December 12, 2015',
                              type: ['Lifestyle', 'Running', 'Walking', 'Urbanwear'],
                              dropLocation: ['Retail Locations'],
                              editor: 'Kevin Tse',
                              images: 'https://cdn.kickgame.co.uk/image/cache/data/nmd/new2/adidas-nmd-runner-pk-black-white-rd-blu-201194_new-1300x1300.jpg',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611743036-air-jordan-1-retro-high-og-bg-gs-bred-black-varsity-red-white-011846_2.jpg',
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
                              images: 'https://stockx.imgix.net/Adidas-Yeezy-Boost-350-Low-Turtle-Dove-I.png?fit=fillmax&bg=FFFFFF&w=700&h=500&auto=compress',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611743073-adidas-pw-human-race-nmd-human-race-yellow-black-201357_4.jpg',
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
                              colorway: 'Core Black/Turbo',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-4-retro-carhartt-x-eminem-blk-chrome-white-012355_2.jpg',
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
                              images: 'https://cdn.shopify.com/s/files/1/0049/9112/products/BTKA_14601386960749998_b14eeed298cffcb879672497ee2bef_1024x1024.jpeg?v=1460138865',
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
                              images: 'https://newsneakernews-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/adidas-ultra-boost-qs-cream-2.jpg',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-air-foamposite-1-supreme-sp-supreme-black-black-metallic-gold-042117_2.png',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742948-air-jordan-1-x-fragment-fragment-black-sport-royal-white-012101_1.jpg',
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
                              images: 'https://cdn.shopify.com/s/files/1/0230/0485/products/IMG_1144_large.JPG?v=1484190813',
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
                              images: 'https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-air-yeezy-2-sp-red-october-red-red-090148_1.jpg',
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
