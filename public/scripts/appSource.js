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

function renderShoes(shoe) {
  var sourceHtml = (`
    <div class="row shoe" data-shoe-id="${shoe._id}">
      <div class="col s12 m12 l12">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin shoe internal row -->
            <div class='row'>
              <div class="col s6 m6 l6 thumbnail shoe-art">
                <img id="images" src="${shoe.images}" alt="shoe image">
              </div>
              <div class="col s12 m6 l6">
                <ul class="list-group" id="sourcelist">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Name:</h4>
                    <span id="name" class='shoe-name' value="name" name="name">${shoe.name}</span>
                  </li><br><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Brand Name:</h4>
                    <span id="brandName" class='shoe-brand' value="brand" name="brand">${shoe.brand}</span>
                  </li><br><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Colorway:</h4>
                    <span id="colorway" class='shoe-colorway' value="colorway" name="colorway">${shoe.colorway}</span>
                  </li><br><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Released Date:</h4>
                    <span id="releaseDate" class='shoe-releaseDate' value="releaseDate" name="releaseDate">${shoe.releaseDate}</span>
                  </li><br><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Rating:</h4>
                    <span id="rating" class='shoe-rating' value="rating" name="rating">${shoe.rating}</span>
                  </li><br><br>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Username: </h4>
                    <span id="username" class='shoe-editor' value="name" name="editor">${shoe.editor}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of shoe internal row -->
            <div class='panel-footer'>
              <button id="edit-button" name="edit-button" class="btn btn-primary">Edit</button>
              <button id="delete-button" name="delete-button" class="btn btn-danger">Delete</button>
              <button id="save-button" class="btn btn-success save-shoe hidden">Save Edits</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  $('#shoes').prepend(sourceHtml);
  $('#shoes').on('click', '#delete-button', handleDeleteShoeClick);
  $('#shoes').on('click', '#edit-button', handleEditShoeClick);
  $('#shoes').on('click', '.save-shoe', handleSaveChangesClick);
}



// when a delete button is clicked

console.log('button clicked!');
  function handleDeleteShoeClick(e) {
    var shoeId = $(this).parents('.shoe').data('shoe-id');
    console.log('you are going to delete this shoe id=' + shoeId );
    $.ajax({
      url: '/api/source/' + shoeId,
      method: 'DELETE',
      success: handleDeleteShoeSuccess
    });
  }

  // callback after DELETE /api/shoes/:id
  function handleDeleteShoeSuccess(data) {
    var deletedShoeId = data._id;
    console.log('removing the following shoe from the page:', deletedShoeId);
    $('div[data-shoe-id=' + deletedShoeId + ']').remove();
  }

  // when the edit button for a shoe is clicked
  function handleEditShoeClick(e) {
    var $shoeRow = $(this).closest('.shoe');
    var shoeId = $shoeRow.data('shoe-id');
    console.log('edit shoe', shoeId);
    e.preventDefault();

    // show the save changes button
    $shoeRow.find('.save-shoe').toggleClass('hidden');
    // hide the edit button
    $shoeRow.find('.edit-shoe').toggleClass('hidden');

    // get the shoe name and replace its field with an input element
    var name = $shoeRow.find('span#shoe-name').text();
    console.log(name);
    $shoeRow.find('span.shoe-name').html('<input class="edit-shoe-name" value="' + name + '"></input>');
    // get the brand name and replace its field with an input element
    var brand = $shoeRow.find('span.shoe-brand').text();
    $shoeRow.find('span.shoe-brand').html('<input class="edit-shoe-brand" value="' + brand + '"></input>');
    // get the releasedate and replace its field with an input element
    var releaseDate = $shoeRow.find('span.shoe-releaseDate').text();
    $shoeRow.find('span.shoe-releaseDate').html('<input class="edit-shoe-releaseDate" value="' + releaseDate + '"></input>');
    // get the colorway and replace its field with an input element
    var colorway = $shoeRow.find('span.shoe-colorway').text();
    $shoeRow.find('span.shoe-colorway').html('<input class="edit-shoe-colorway" value="' + colorway + '"></input>');
    // get the rating and replace its field with an input element
    var rating = $shoeRow.find('span.shoe-rating').text();
    $shoeRow.find('span.shoe-rating').html('<input class="edit-shoe-rating" value="' + rating + '"></input>');
    // get the editor and replace its field with an input element
    var editor = $shoeRow.find('span.shoe-editor').text();
    console.log(editor);
    $shoeRow.find('span.shoe-editor').html('<input class="edit-shoe-editor" value="' + editor + '"></input>');
  }
// after editing an shoe, when the save changes button is clicked
function handleSaveChangesClick(e) {
  var shoeId = $(this).parents('.shoe').data('shoe-id');
  var $shoeRow = $('[data-shoe-id=' + shoeId + ']');
  var data = {
    name: $shoeRow.find('.edit-shoe-name').val(),
    brand: $shoeRow.find('.edit-shoe-brand').val(),
    releaseDate: $shoeRow.find('.edit-shoe-releaseDate').val(),
    colorway: $shoeRow.find('.edit-shoe-colorway').val(),
    rating: $shoeRow.find('.edit-shoe-rating').val(),
    editor: $shoeRow.find('.edit-shoe-editor').val()
  };
  console.log('PUTing data for shoe', shoeId, 'with data', data);
  $.ajax({
    method: 'PUT',
    url: '/api/source/' + shoeId,
    data: data,
    success: handleShoeUpdatedResponse
  });

    function handleShoeUpdatedResponse(data) {
      console.log('response to update', data);
      var shoeId = data._id;
      // scratch this shoe from the page
      $('[data-shoe-id=' + shoeId + ']').remove();
      // and then re-draw it with the updates ;-)
      renderShoes(data);
    }
}
