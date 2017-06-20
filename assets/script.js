$(function() {
  var $panels = $('.js-faq-panel');
  $('.js-search').on('keyup', function() {
    var text = $.trim($(this).val()).toLowerCase();

    if (text.length) {
      $panels.each(function() {
        $panel = $(this);
        if ($panel.text().toLowerCase().indexOf(text) < 0) {
          $panel.hide();
        } else {
          $panel.show();
        }
      });
    } else {
      $panels.show();
    }
  });
});
