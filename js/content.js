window.addEventListener('DOMContentLoaded', function() {
    var contentImage = document.getElementById('content-image');
    var contentImageWrapper = document.getElementById('content-image-wrapper');
  
    function centerContentImage() {
      var screenHeight = window.innerHeight;
      var contentImageHeight = contentImage.offsetHeight;
  
      if (contentImageHeight < screenHeight) {
        var verticalMargin = (screenHeight - contentImageHeight) / 2;
        contentImageWrapper.style.marginTop = verticalMargin + 'px';
        contentImageWrapper.style.marginBottom = verticalMargin + 'px';
      } else {
        contentImageWrapper.style.marginTop = '0';
        contentImageWrapper.style.marginBottom = '0';
      }
    }
  
    centerContentImage();
  
    window.addEventListener('resize', centerContentImage);
  });
  