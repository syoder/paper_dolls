$( function() {
  // alert("foo");
  alex = new Image(600, 800);
  alex.src = "alex.png";
  $('#doll').append(alex);

  $('.item').click( function(e) {
    var imgName = $(e.target).attr('data-img');
    var existingImg = $('#doll img[src=\"'+imgName+'\"]');
    if (existingImg.length > 0) {
      existingImg.remove();
    } else {
      item = new Image(600, 800);
      item.src = imgName;
      $('#doll').append(item);
    }
  });
});

