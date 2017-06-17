$(function() {
  var $panels = $('.js-faq-panel');
  $('.js-search').on('keyup', function() {
    var text = $.trim($(this).val());

    if (text.length) {
      $panels.each(function() {
        $panel = $(this);
        if ($panel.text().indexOf(text) < 0) {
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
