(function ($) {
    
    $('grid').imagesLoaded(function() {

        // filter items on button click
        $('.portfolio-filters').on('click', 'li', function() {
            let filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // init Isotope
        let $grid = $('.grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.portfolio-item',

            },
            itemSelector: '.portfolio-item'
        });

    });

    $('.choose-filter').on('click', function(event) {
        $(this).siblings('.filter-active').removeClass('filter-active');
        $(this).addClass('filter-active');
        event.preventDefault();
    });

})(jQuery);
