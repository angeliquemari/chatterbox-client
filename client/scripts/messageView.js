var MessageView = {

  render: function () {
    // `this` is bound to a specific chat
    // _.escape escapes html text i.e. sanitizes text
    return _.template(`
      <div class="chat">
        <div class="username">${_.escape(this.username)}</div>
        <div class="text">${_.escape(this.text)}</div>
        <div class="createdAt">${_.escape(this.createdAt)}</div>
      </div>
    `);
  }

};