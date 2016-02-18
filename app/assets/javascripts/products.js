
$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
     url: '/products?search=' + $('#search').val(),
     type: 'GET',
     dataType: 'script'
    });
  });

    // $.getScript('products?search=' + searchValue);

    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
   });
});



  // <script type="text/javascript">
  //   function display_search_results() {
  //     if (this.readyState === 4) {
  //       console.log(this);
  //       document.getElementById('products').innerHTML = this.responseText;
  //     }
  //   }
  //
  //   var form = document.getElementById('search-form');
  //   form.addEventListener('submit', function(event) {
  //     event.preventDefault():
  //     var searchValue = document.getElementById('search').value;
  //
  //     var xhr = new XMLHttpRequest();
  //     xhr.onload = display_search_results;
  //     xhr.open('GET', '/products?search=' + searchValue, true);
  //     xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //     xhr.send();
  //   });
  // </script>
