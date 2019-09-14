var MessageView = {

  render: function () {
    return _.template(`
      <div class="chat">
        <div class="username">${this.username}</div>
        <div class="text">${this.text}</div>
        <div class="text">${this.createdAt}</div>
      </div>
    `);
  }

};