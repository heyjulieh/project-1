console.log('Sanity Check!');
/* CLIENT-SIDE JS */

$(document).ready(function() {
  console.log('app.js loaded!');



  $.ajax({
    method: 'GET',
    url: '/api/shoes',
    success: renderMultipleShoes
  });


  $.ajax({
    method: 'GET',
    url: '/api/brands',
    success: renderMultipleBrands
  });
});

function renderMultipleBrands(brands) {
  console.log (brands);
  brands.forEach(function(brand) {
    renderBrands(brand);
  });
}

function fetchAndReRenderBrandWithId(brandId) {
  $.get('/api/brands/' + brandId, function(brandData) {
    // remove the current instance of the album from the page
    $('div[data-brand-id=' + brandId + ']').remove();
    // re-render it with the new album data (including songs)
    renderBrand(brandData);
  });
}

function renderMultipleShoes(shoes) {
  console.log (shoes);
  shoes.forEach(function(shoe) {
    if (shoe.editor === 'Kevin Tse' || shoe.editor === 'Julie Huang' || shoe.editor === 'Kevin Tse, Julie Huang' || shoe.editor === 'Julie Huang, Kevin Tse'){
    renderShoes(shoe);
    }
  });
}

function fetchAndReRenderShoeWithId(shoeId) {
  $.get('/api/shoes/' + shoeId, function(data) {
    // remove the current instance of the album from the page
    $('div[data-shoe-id=' + shoeId + ']').remove();
    // re-render it with the new album data (including songs)
    renderShoe(data);
  });
}

function renderBrands(brand){
  console.log('rendering brand', brand);
    // shoe.brandHtml = shoe.brand.map(renderBrand).join("");

  var brandHtml = (`
    <div class="row brand" data-brand-id="${brand._id}">
      <div class="col s12 m12 l12">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin brand internal row -->
            <div class='row'>
              <div class="col s12 m6 l6 thumbnail brand-art">
                <img class="brand-img" src="${brand.image}" alt="brand image">
              </div>
              <div class="col s12 m6 l6">
                <ul id="brand" class="list-group">
                  <li class="list-group-item">
                    <h5 class='inline-header'>Brand Name:</h5>
                    <span class='brand-name'>${brand.name}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Established:</h5>
                    <span class='brand-establishDate'>${brand.establishDate}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Origin:</h5>
                    <span class='brand-location'>${brand.location}</span>
                  </li><br>
                </ul>
              </div>
            </div>
            <!-- end of brand internal row -->
            <div class='panel-footer'>
              <div class='panel-footer'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  $('#brands').prepend(brandHtml);
}


function renderShoes(shoe) {


  var shoeHtml = (`
    <div class="row shoe" data-shoe-id="${shoe._id}">
      <div class="col s12 m12 l12">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin shoe internal row -->
            <div class='row'>
              <div class="col s12 m6 l6 thumbnail shoe-art">
                <img src="${shoe.images}" alt="shoe image">
              </div>
              <div class="col s12 m6 l6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h5 class='inline-header'>Shoe Name:</h5>
                    <span class='shoe-name'>${shoe.name}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Brand Name:</h5>
                    <span class='shoe-brand'>${shoe.brand}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Shoe Colorway:</h5>
                    <span class='shoe-colorway'>${shoe.colorway}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Shoe Price:</h5>
                    <span class='shoe-price'>${shoe.price}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Released Date:</h5>
                    <span class='shoe-releaseDate'>${shoe.releaseDate}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Shoe Type:</h5>
                    <span class='shoe-type'>${shoe.type}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Drop Location: </h5>
                    <span class='shoe-drop-location'>${shoe.dropLocation}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h5 class='inline-header'>Shoe Pick Editor:</h5>
                    <span class='shoe-editor'>${shoe.editor}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of shoe internal row -->
            <div class='panel-footer'>
              <div class='panel-footer'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  $('#shoes').prepend(shoeHtml);
}
