app.directive('dropzone', function () {
  return {
    scope : {
      done: '&',
      options: '='
    },
    link: function (scope, element, attrs) {

      var previews    = element.find('.dz-previews');
      var progressbar = element.find('.dz-progressbar');

      var config   = scope.options || {};
      var options  = $.extend({
        previewsContainer : previews[0],
        createImageThumbnails : false
      }, config);

      // create a Dropzone for the element with the given options
      var dropzone = new Dropzone(element[0], options);

      dropzone.on("addedfile", function(file) {
        element.addClass('loading');
      });

      dropzone.on('complete', function() {
        if(this.getQueuedFiles().length == 0 && this.getUploadingFiles().length == 0) {
          scope.done();
          element.removeClass('loading');
        }
      });

      dropzone.on('totaluploadprogress', function(progress) {
        progressbar.css({'width' : progress + '%'});
      });

    },
    transclude: true,
    template: '<div class="dz-message" ng-transclude></div>' +
              '<div class="dz-previews"></div>' +
              '<div class="dz-progress"><div class="dz-progressbar"></div></div>'
  };
});