var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    App.rooms = new Rooms();
    RoomsView.$button.on('click', RoomsView.handleClick.bind(this));
  },

  render: function() {
  },

  handleClick: function() {
    var roomname = prompt('Please enter the name of your new room');
    if (roomname) {
      if (!App.rooms.roomExists(roomname)) {
        App.rooms.addRoom(roomname);
        this.$select.append(`<option value="${roomname}">${roomname}</option>`);
      }
    }
  }
};
