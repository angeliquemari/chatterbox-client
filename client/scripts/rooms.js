class Rooms {

  constructor() {
    this.rooms = [];
  }

  addRoom (roomname) {
    this.rooms.push(roomname);
    console.log(this.rooms);
  }
  roomExists (roomname) {
    if (this.rooms.includes(roomname)) {
      return true;
    }
    return false;
  }
}
