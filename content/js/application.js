// Navigation behaviour. Makes submenus pop out and in.
$(window).load(function () {
  $('#main_menu').children().each(function(i, element) { 
    var sub_menu = $(element).find('ul');
    sub_menu.css('position', 'absolute');
    sub_menu.css('z-index', 1000);
    sub_menu.css('width', $(element).width());
    sub_menu.mouseover(function(){$(element).show()}); // So that when you mouseout of parent the child stays visible
    $(element).mouseover(function(){$(element).find('ul').show()});
    $(element).mouseout(function(){$(element).find('ul').hide()});
  })
});
