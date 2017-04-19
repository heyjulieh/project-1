console.log('Sanity Check!');
/* CLIENT-SIDE JS */

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/shoes',
    success: renderMultipleShoes
  });
});
//   $('#album-form form').on('submit', function(e) {
//     e.preventDefault();
//     var formData = $(this).serialize();
//     console.log('formData', formData);
//     $.post('/api/albums', formData, function(album) {
//       console.log('album after POST', album);
//       renderAlbum(album);  //render the server's response
//     });
//     $(this).trigger("reset");
//   });
//   // catch and handle the click on an add song button
//   $('#albums').on('click', '.add-song', handleAddSongClick);
//   $('#albums').on('click', '.delete-album', handleDeleteAlbumClick);
//   $('#albums').on('click', '.edit-album', handleAlbumEditClick);
//   $('#albums').on('click', '.save-album', handleSaveChangesClick);
//   // save song modal save button
//   $('#saveSong').on('click', handleNewSongSubmit);
//   $('#albums').on('click', '.edit-songs', handleEditSongsClick);
//   // edit songs modal triggers
//   $('#editSongsModalBody').on('click', 'button.btn-danger', handleDeleteSongClick);
//   $('#editSongsModal').on('click', 'button#editSongsModalSubmit', handleUpdateSongsSave);
// });
// function handleUpdateSongsSave(event) {
//   // build all the songs objects up
//   var $modal = $('#editSongsModal');
//   if($modal.find('form').length < 1) {
//     // if there are no form elements, then there are no songs to update
//     $modal.modal('hide');
//     return;
//   }
//   // snag the albumId from the first form object on the modal
//   var albumId = $modal.find('form').data('album-id');
//   var updatedSongs = [];
//   // see https://api.jquery.com/each/
//   $modal.find('form').each(function () {
//     // in here this is a form element
//     var aSong = {};
//     aSong._id = $(this).attr('id');
//     aSong.name = $(this).find('input.song-name').val();
//     aSong.trackNumber = $(this).find('input.song-trackNumber').val();
//     console.log('found updated data for song: ', aSong);
//     updatedSongs.push(aSong);
//   });
//   // at this point we should have an array of songs to PUT to the server
//   //   this is going to be a lot of requests and after all of them we have to update the page again
//   //   maybe we should display a spinner to let the user know the requests are processing ?
//   //   but let's just take the easy route - hide the modal and continue processing in the background
//   $modal.modal('hide');
//   updateMultipleSongs(albumId, updatedSongs);
// }
// function updateMultipleSongs(albumId, songs) {
//   // Now we're getting into tough stuff!
//   // We're going to kick off as many PUT requests as we need - 1 per songId
//   // We'll keep track of the promises from each and once they are ALL done then
//   //   we'll re-render the entire album again.
//   // We don't want to re-render BEFORE the PUT requests are complete because the data we fetch back
//   //   might not have all the updates in it yet!
//   var url = '/api/albums/' + albumId + '/songs/';
//   var deferreds = [];
//   songs.forEach(function(song) {
//     var ajaxCall = $.ajax({
//       method: 'PUT',
//       url: url + song._id,
//       data: song,
//       error: function(err) { console.log('Error updating song ', song.name, err); }
//     });
//     deferreds.push(ajaxCall);
//   });
//   // wait for all the deferreds then, refetch and re-render the album
//   // the .apply here is allowing us to apply the stuff in the promises array
//   $.when.apply(null, deferreds).always(function() {
//     console.log('all updates sent and received, time to refresh!');
//     console.log(arguments);
//     fetchAndReRenderAlbumWithId(albumId);
//   });
// }
// function fetchAndReRenderAlbumWithId(albumId) {
//   $.get('/api/albums/' + albumId, function(data) {
//     // remove the current instance of the album from the page
//     $('div[data-album-id=' + albumId + ']').remove();
//     // re-render it with the new album data (including songs)
//     renderAlbum(data);
//   });
// }
// // when a delete button in the edit songs modal is clicked
// function handleDeleteSongClick(e) {
//   e.preventDefault();  // this is a form!
//   var $thisButton = $(this);
//   var songId = $thisButton.data('song-id');
//   var albumId = $thisButton.closest('form').data('album-id');
//   var url = '/api/albums/' + albumId + '/songs/' + songId;
//   console.log('send DELETE ', url);
//   $.ajax({
//     method: 'DELETE',
//     url: url,
//     success: handleSongDeleteResponse
//   });
// }
// function handleSongDeleteResponse(data) {
//   console.log('handleSongDeleteResponse got ', data);
//   var songId = data._id;
//   var $formRow = $('form#' + songId);
//   // since albumId isn't passed to this function, we'll deduce it from the page
//   var albumId = $formRow.data('album-id');
//   // remove that song edit form from the page
//   $formRow.remove();
//   fetchAndReRenderAlbumWithId(albumId);
// }
// // when edit songs button clicked
// function handleEditSongsClick(e) {
//   var $albumRow = $(this).closest('.album');
//   var albumId = $albumRow.data('album-id');
//   console.log('edit songs clicked for ', albumId);
//   // seems we need the list of songs here - later, when you see full front-end
//   // frameworks, this'll be a little easier, for now - lets request the data we need
//   $.get('/api/albums/' + albumId + "/songs", function(songs) {
//     console.log('got back songs: ', songs);
//     populateEditSongsModal(songs, albumId);
//     // fire zee modal!
//     $('#editSongsModal').modal();
//   });
// }
// function buildEditSongsForms(songs, albumId) {
//   // create a edit form for each song, using the same albumId for all of them
//   var songEditFormHtmlStrings = songs.map(function(song){
//     return (`
//       <form class="form-inline" id="${song._id}" data-album-id="${albumId}" >
//         <div class="form-group">
//           <input type="text" class="form-control song-trackNumber" value="${song.trackNumber}">
//         </div>
//         <div class="form-group">
//           <input type="text" class="form-control song-name" value="${song.name}">
//         </div>
//         <div class="form-group">
//           <button class="btn btn-danger" data-song-id="${song._id}">x</button>
//         </div>
//       </form>
//     `);
//   });
//   return songEditFormHtmlStrings.join(""); // combine all the forms into a single string
// }
// // takes an array of songs and generates an EDIT form for them
// function populateEditSongsModal(songs, albumId) {
//   var editSongsFormsHtml = buildEditSongsForms(songs, albumId);
//   // find the modal's body and replace it with the generated html
//   $('#editSongsModalBody').html(editSongsFormsHtml);
// }
// // when the edit button for an album is clicked
// function handleAlbumEditClick(e) {
//   var $albumRow = $(this).closest('.album');
//   var albumId = $albumRow.data('album-id');
//   console.log('edit album', albumId);
//   // show the save changes button
//   $albumRow.find('.save-album').toggleClass('hidden');
//   // hide the edit button
//   $albumRow.find('.edit-album').toggleClass('hidden');
//   // get the album name and replace its field with an input element
//   var albumName = $albumRow.find('span.album-name').text();
//   $albumRow.find('span.album-name').html('<input class="edit-album-name" value="' + albumName + '"></input>');
//   // get the artist name and replace its field with an input element
//   var artistName = $albumRow.find('span.artist-name').text();
//   $albumRow.find('span.artist-name').html('<input class="edit-artist-name" value="' + artistName + '"></input>');
//   // get the releasedate and replace its field with an input element
//   var releaseDate = $albumRow.find('span.album-releaseDate').text();
//   $albumRow.find('span.album-releaseDate').html('<input class="edit-album-releaseDate" value="' + releaseDate + '"></input>');
// }
// // after editing an album, when the save changes button is clicked
// function handleSaveChangesClick(e) {
//   var albumId = $(this).parents('.album').data('album-id'); // $(this).closest would have worked fine too
//   var $albumRow = $('[data-album-id=' + albumId + ']');
//   var data = {
//     name: $albumRow.find('.edit-album-name').val(),
//     artistName: $albumRow.find('.edit-artist-name').val(),
//     releaseDate: $albumRow.find('.edit-album-releaseDate').val()
//   };
//   console.log('PUTing data for album', albumId, 'with data', data);
//   $.ajax({
//     method: 'PUT',
//     url: '/api/albums/' + albumId,
//     data: data,
//     success: handleAlbumUpdatedResponse
//   });
// }
// function handleAlbumUpdatedResponse(data) {
//   console.log('response to update', data);
//   var albumId = data._id;
//   // scratch this album from the page
//   $('[data-album-id=' + albumId + ']').remove();
//   // and then re-draw it with the updates ;-)
//   renderAlbum(data);
//   // BONUS: scroll the change into view ;-)
//   $('[data-album-id=' + albumId + ']')[0].scrollIntoView();
// }
// // when a delete button for an album is clicked
// function handleDeleteAlbumClick(e) {
//   var albumId = $(this).parents('.album').data('album-id');
//   console.log('someone wants to delete album id=' + albumId );
//   $.ajax({
//     url: '/api/albums/' + albumId,
//     method: 'DELETE',
//     success: handleDeleteAlbumSuccess
//   });
// }
// // callback after DELETE /api/albums/:id
// function handleDeleteAlbumSuccess(data) {
//   var deletedAlbumId = data._id;
//   console.log('removing the following album from the page:', deletedAlbumId);
//   $('div[data-album-id=' + deletedAlbumId + ']').remove();
// }
function renderMultipleShoes(shoes) {
  console.log (shoes);
  shoes.forEach(function(shoe) {
    renderShoes(shoe);
  });
}

function renderBrand(brand){
  // return `<span>&ndash; (${song.trackNumber}) ${song.name} &ndash;</span>`
}

function renderShoes(shoe) {
  console.log('rendering shoe', shoe);
    // shoe.brandHtml = shoe.brand.map(renderBrand).join("");

  var shoeHtml = (`
    <div class="row shoe" data-shoe-id="${shoe._id}">
      <div class="col m10 offset-m1">
        <div class="panel panel-default">
          <div class="panel-body">

          <!-- begin shoe internal row -->
            <div class='row'>
              <div class="col m3 s12 thumbnail shoe-art">
                <img src="${shoe.image}" alt="shoe image">
              </div>
              <div class="col m9 s12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Name:</h4>
                    <span class='shoe-name'>${shoe.name}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Brand Name:</h4>
                    <span class='shoe-brand'>${shoe.brand}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Colorway:</h4>
                    <span class='shoe-colorway'>${shoe.colorway}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Price:</h4>
                    <span class='shoe-price'>${shoe.price}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Released Date:</h4>
                    <span class='shoe-releaseDate'>${shoe.releaseDate}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Type:</h4>
                    <span class='shoe-type'>${shoe.type}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Drop Location</h4>
                    <span class='shoe-drop-location'>${shoe.dropLocation}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class='inline-header'>Shoe Pick Editor:</h4>
                    <span class='shoe-editor'>${shoe.editor}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of shoe internal row -->
            <div class='panel-footer'>
              <div class='panel-footer'>
                <button class='btn btn-primary add-comment'>Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
  $('#shoes').prepend(shoeHtml);
}
