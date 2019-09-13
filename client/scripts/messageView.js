var MessageView = {

  render: function () {
    var obj = this;
    return _.template(`
      <div class="chat">
        <div class="username">${obj.username}</div>
        <div class="text">${obj.text}</div>
        <div class="text">${obj.createdAt}</div>
      </div>
    `);
  }

  // render: function (chat) {
  //   var template = _.template(`
  //       <div class="chat">
  //         <div class="username">${username}</div>
  //         <div class="text">${text}</div>
  //         <div class="createdAt">${createdAt}</div>
  //       </div>
  //     `)
  //     return template(chat);
  //   }
  // function() {
  //   console.log(`
  //   <div class="chat">
  //     <div class="username">${this.username}</div>
  //     <div class="text">${this.text}</div>
  //     <div class="text"><%-${this.createdAt}%></div>
  //   </div>
  // `);
  // }


};