//Make a call to the Google maps api to get the name of the location
    jQuery.ajax({
      url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true',
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        //If Successful add the data to the 'location' div
     locationdiv.html('Location: '+data.results[0].address_components[2].long_name);
      },
      error: function(xhr, textStatus, errorThrown) {
             errorPosition();
      }
    });