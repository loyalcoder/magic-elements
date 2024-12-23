jQuery(function ($) {
    // CONFIG
    let visibilityIds = ['#counters_1', '#counters_2', '#counters_3', '#counters_4', '#counters_5', '#counters_6', '#counters_7', '#counters_8', '#counters_9', '#counters_10', '#counters_11', '#counters_12', '#counters_13', '#counters_14', '#counters_15',]; //must be an array, could have only one element
    let counterClass = '.counter';
    let defaultSpeed = 2000; //default value

    // END CONFIG

    //init if it becomes visible by scrolling
    $(window).on('scroll', function () {
        getVisibilityStatus();
    });

    //init if it's visible by page loading
    getVisibilityStatus();

    function getVisibilityStatus() {
        elValFromTop = [];
        let windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();

        visibilityIds.forEach(function (item, index) { //Call each class
            try { //avoid error if class not exist
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }
            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }

    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index); //add a class to recognize each counter
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }

    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }
})