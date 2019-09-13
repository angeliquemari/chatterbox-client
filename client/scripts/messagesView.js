var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    // loop through chats (results array), for each, call messageView.render
    // that will append an html snippet with info about specific chat
    console.log(data);
    // for (var i = 0; i < data.results.length; i++) {
    // for (var i = 0; i < 3; i++) {
    // var chat = data.results[i];
    var chat = data.results[2];
    console.log(chat);
    chat.render = MessageView.render;
    var chatHTMLSnippet = chat.render();
    // var chatHTMLSnippet = MessageView.render(chat);
    this.$chats.append(chatHTMLSnippet);
    // }
  }

};