class Rooms {

  constructor() {
    this.rooms = {viewall: []};
  }

  addRoom (roomname) {
    if (roomname !== undefined && roomname !== '') {
      this.rooms[roomname] = [];
    }
    // console.log(this.rooms);
  }

  roomExists (roomname) {
    if (this.rooms[roomname]) {
      return true;
    }
    return false;
  }

  addMessageToRoom(message, roomname) {
    if (App.rooms.roomExists(roomname)) {
      this.rooms[roomname].push(message);
    } else {
      this.rooms['viewall'].push(message);
    }
  }

}
