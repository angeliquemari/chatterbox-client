class Messages {

  constructor () {
    this.messages = {};
  }

  addMessage(message) {
    this.messages[message.objectId] = message;
    // console.log(this.messages);
  }
}

// method to get time of last message?
