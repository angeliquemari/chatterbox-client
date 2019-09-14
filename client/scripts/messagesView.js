var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    // loop through chats (results array), for each, call messageView.render
    // that will append an html snippet with info about specific chat
    // console.log(data);
    for (var i = 0; i < data.results.length; i++) {
      var chat = data.results[i];
      // console.log(chat);
      var chatHTMLSnippet = MessageView.render.bind(chat);
      this.$chats.append(chatHTMLSnippet);
    }
  }

};