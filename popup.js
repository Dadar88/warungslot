function getUrgent(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


jQuery( document ).ready(function() {
    jQuery( "body" ).prepend( '<div class="urgent"><div><a href="http://warungslot.pro/" target="_blank"><img src="https://i.ibb.co/Sth75XY/warning-warungslot.webp"></a><span class="tutup-urgent">✖</span></div></div>' );
    
    jQuery('.urgent ').on('click', 'span.tutup-urgent', function() {
        jQuery('.urgent ').remove();
        document.cookie = "urgent=hide"; 
    });
    jQuery('body').on('click', '.urgent', function() {
        jQuery('.urgent ').remove();
        document.cookie = "urgent=hide"; 
    });
    
    if(getUrgent("urgent") == 'hide'){
        jQuery('.urgent ').hide();
    }
});
