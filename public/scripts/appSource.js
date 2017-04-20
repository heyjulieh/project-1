console.log('Sanity Check!');
/* CLIENT-SIDE JS */

$(document).ready(function() {
  console.log('app.js loaded!');

// Prevent user from inputing anything other than numbers
  $("#rating").keydown(function (e) {
         // Allow: backspace, delete, tab, escape, enter and .
         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
              // Allow: Ctrl+A, Command+A
             (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
              // Allow: home, end, left, right, down, up
             (e.keyCode >= 35 && e.keyCode <= 40)) {
                  // let it happen, don't do anything
                  return;
         }
         // Ensure that it is a number and stop the keypress
         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
             e.preventDefault();
         }
     });


// Render all shoes on Source page
  $.ajax({
    method: 'GET',
    url: '/api/source',
    success: renderMultipleShoes
  });


  // Post on submit button in source html
  $('#submitForm').on('submit', function(e) {
    e.preventDefault();
    console.log('working')
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/source', formData, function(shoe) {
      console.log('shoe after POST', shoe);
      renderShoes(shoe);  //render the server's response
    });
    $(this).trigger("reset");
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
    renderShoes(shoe);
  });
}

function fetchAndReRenderShoeWithId(shoeId) {
  $.get('/api/source/' + shoeId, function(data) {
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
                    <h4 class='inline-header'>Brand Name:</h4>
                    <span class='brand-name'>${brand.name}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Established:</h4>
                    <span class='brand-establishDate'>${brand.establishDate}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Origin:</h4>
                    <span class='brand-location'>${brand.location}</span>
                  </li><br>
                </ul>
              </div>
            </div>
            <!-- end of brand internal row -->
            <div class='panel-footer'>
            <button id="singlebutton" name="singlebutton" class="btn btn-primary">Edit</button>
            <button id="singlebutton" name="singlebutton" class="btn btn-danger">Delete</button>
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

  var sourceHtml = (`
    <div class="row shoe" data-shoe-id="${shoe._id}">
      <div class="col s12 m12 l12">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin shoe internal row -->
            <div class='row'>
              <div class="col s12 m6 l6 thumbnail shoe-art">
                <img id="images" src="${shoe.images}" alt="shoe image">
              </div>
              <div class="col s12 m6 l6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Name:</h4>
                    <span id="name" class='shoe-name'>${shoe.name}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Brand Name:</h4>
                    <span id="brandName" class='shoe-brand'>${shoe.brand}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Colorway:</h4>
                    <span id="colorway" class='shoe-colorway'>${shoe.colorway}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Released Date:</h4>
                    <span id="releaseDate" class='shoe-releaseDate'>${shoe.releaseDate}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Rating:</h4>
                    <span id="rating" class='shoe-rating'>${shoe.rating}</span>
                  </li><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>UserName: </h4>
                    <span id="userName" class='shoe-editor'>${shoe.editor}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of shoe internal row -->
            <div class='panel-footer'>
            <button id="singlebutton" name="singlebutton" class="btn btn-primary">Edit</button>
            <button id="singlebutton" name="singlebutton" class="btn btn-danger">Delete</button>
              <div class='panel-footer'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  $('#shoes').prepend(sourceHtml);
}

$('#shoes').on('click', '.delete-shoe', handleDeleteShoeClick);

// when a delete button for an album is clicked
function handleDeleteShoeClick(e) {
  var shoeId = $(this).parents('.shoe').data('shoe-id');
  console.log('someone wants to delete shoe id=' + shoeId );
  $.ajax({
    url: '/api/shoes/' + shoeId,
    method: 'DELETE',
    success: handleDeleteShoeSuccess
  });
}
// callback after DELETE /api/albums/:id
function handleDeleteShoeSuccess(data) {
  var deletedShoeId = data._id;
  console.log('removing the following shoe from the page:', deletedShoeId);
  $('div[data-shoe-id=' + deletedShoeId + ']').remove();
}
