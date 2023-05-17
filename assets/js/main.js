$(document).ready(function () {
    var names = [];
    $('button').click(function(){
        var name = $('#inputName').val();
        if (name !== ' ') {
            names.push(name);
            $('#list').append('<li>' + name + '</li>');
            $('#inputName').val('')
        }
    });
    $('#inputSearch').keyup(function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#list li').each(function() {
          var listItemText = $(this).text().toLowerCase();
          if (listItemText.indexOf(searchTerm) === -1) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      });
});