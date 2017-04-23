var state = {
  items: []
};

function addItemToState(item, state) {
  state.items.push(item);
}

function renderItemToState(state) {
  var itemToRender = state.items.pop();
  var itemToAdd = '<li>' + 
            '<span class="shopping-item">' + itemToRender + '</span>' +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' + 
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' + 
           '</li>'
  $('.shopping-list').append(itemToAdd);
  $('#shopping-list-entry').val('');
}

// $().on('keydown', function() {
//  event.which === 13
// });
// to look for enter

$(function() {
  // add items
  $('#js-shopping-list-form > button').on('click', function() {
    event.preventDefault();
    var item = $('#shopping-list-entry').val();
    if (item === '') {
      alert('You need to add something!');
    } else {
      addItemToState(item, state);
      renderItemToState(state);
    }
  });
  // delete items
  $('ul').on('click', '.shopping-item-delete',function() {
    $(this).closest('li').remove();
  });
  // check and line through item
  $('ul').on('click', '.shopping-item-toggle',function() {
    $(this).closest('li').toggleClass('shopping-item__checked');
  });
});