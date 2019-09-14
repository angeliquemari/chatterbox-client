var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit.bind(this));
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // input type="text" name="message" id="message"
    // console.log(this.$form);
    var messageText = this.$form[0].children[0].value; // is there a better way of getting this?
    // make POST request
    var message = {username: App.username, text: messageText, roomname: 'viewall'};
    Parse.create(message, function() { console.log('Sent: ' + messageText); });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};