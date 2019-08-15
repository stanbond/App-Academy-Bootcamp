const FollowToggle = require("./follow_toggle");

$(function () {
  $('button.follow-toggle').each( (i, btn) => {
    let button = new FollowToggle($(btn));
  });
  
})