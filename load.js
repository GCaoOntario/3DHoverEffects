Modernizr.load({
    test: Modernizr.csstransforms3d && Modernizr.csstransitions,
    yep : ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js','https://cdn.jsdelivr.net/gh/tutsnut/3DImageHover/js/jquery.hoverfold.js'],
    nope: 'css/fallback.css',
    callback : function( url, result, key ) {
            
        if( url === 'https://cdn.jsdelivr.net/gh/tutsnut/3DImageHover/js/jquery.hoverfold.js' ) {
            $( '#grid' ).hoverfold();
        }

    }
});