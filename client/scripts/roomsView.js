var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    App.rooms = new Rooms();
    RoomsView.$button.on('click', RoomsView.handleClick.bind(this));
    RoomsView.$select.on('change', RoomsView.render.bind(this));
  },

  render: function() {
    var selectedRoom = $('#rooms select :selected').val();
    var roomMessages = App.rooms.rooms[selectedRoom];
    MessagesView.clearMessages();
    roomMessages.forEach(function(message) {
      MessagesView.renderMessage(message);
    });
  },

  handleClick: function() {
    var roomname = prompt('Please enter the name of your new room');
    this.addRoom(roomname);
  },

  addRoom: function(roomname) {
    if (roomname) {
      if (!App.rooms.roomExists(roomname)) {
        App.rooms.addRoom(roomname);
        this.$select.append(`<option value="${roomname}">${roomname}</option>`);
      }
    }
  }

};
