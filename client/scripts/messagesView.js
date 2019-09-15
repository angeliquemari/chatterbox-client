var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.messages = new Messages();
  },

  clearMessages: function() {
    this.$chats.empty();
  },

  renderMessage: function(chat) {
    var chatHTMLSnippet = MessageView.render.bind(chat);
    this.$chats.append(chatHTMLSnippet);
  },

  render: function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var chat = data[i];
      RoomsView.addRoom(chat.roomname);
      // (if new) add message to messages storage
      App.messages.addMessage(chat);
      // add message to rooms storage
      App.rooms.addMessageToRoom(chat, chat.roomname);
      this.renderMessage(chat);
    }
  }

};