// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require websocket_rails/main
var dispatcher = new WebSocketRails('localhost:3001/websocket');
alert("ss")
dispatcher.on_open = function(data) {
  console.log('Connection has been established: ', data);
  // You can trigger new server events inside this callback if you wish.
}

dispatcher.on_error = function(data) {
   console.log('on error');
};

dispatcher.on_close = function(data) {
   console.log('on close');
};

dispatcher.bind('tasks.create_success', function(task) {
  alert(task)
  console.log('successfully created ' + task.name);
});
dispatcher.bind('task.create_success', function(task) {
  alert(task)
  console.log('successfully created ' + task.name);
});
