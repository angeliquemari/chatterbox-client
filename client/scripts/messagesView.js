var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(chat) {
    var chatHTMLSnippet = MessageView.render.bind(chat);
    this.$chats.append(chatHTMLSnippet);
  },

  render: function(data) {
    // loop through chats (results array), for each, call messageView.render
    // to generate html snippet with info about specific chat, append to view
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var chat = data[i];
      // if (!App.rooms.roomExists(chat.roomname)) {
      //   App.rooms.addRoom(chat.roomname);
        // App.roomsView.$select.append(`<option value="${chat.roomname}">${chat.roomname}</option>`);
      // }
      RoomsView.addRoom(chat.roomname);
      // check if room exists, if it doesn't, add new room
      // add room to rooms object
      // add room to drop down
      this.renderMessage(chat);
    }
  }

};