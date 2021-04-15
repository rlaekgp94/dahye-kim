jQuery(document).ready(function () {
  jQuery('.category-wrap-tabmenu li a').click(function () {
      //removing the previous selected menu state
      jQuery('.category-wrap-tabmenu li').find('a.active').removeClass('active');
      //adding the state for this parent menu
      jQuery(this).addClass('active');

  });
});
