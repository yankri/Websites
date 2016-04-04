$(function () {

    /* SET PARAMETERS */
    var change_img_time = 4000;
    var transition_speed = 100;

    var simple_slideshow = $("#slideshow"),
        listItems = simple_slideshow.children('li'),
        listLen = listItems.length,
        i = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });
        };
    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
});

$(function () {

    /* SET PARAMETERS */
    var change_img_time = 4000;
    var transition_speed = 100;

    var simple_slideshow2 = $("#slideshow2"),
        listItems = simple_slideshow2.children('li'),
        listLen = listItems.length,
        i = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });
        };
    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);
});