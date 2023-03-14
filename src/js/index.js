$(function() {
  // Load default page
  loadContent('index.html');

  // Handle click events on navigation links
  $('.nav-link').click(function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    loadContent(url);
  });
});

function loadContent(url) {
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'html',
    success: function(data) {
      $('#content').html(data);
    },
    error: function(xhr, status, error) {
      console.log('Error loading content: ' + error);
    }
  });
}
