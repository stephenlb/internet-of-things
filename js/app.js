(function(){

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Main Header Section
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var circle_left_title  = PUBNUB.$('hero-circle-left-title')
,   circle_left        = PUBNUB.$('hero-circle-left')
,   circle_right_title = PUBNUB.$('hero-circle-right-title')
,   circle_right       = PUBNUB.$('hero-circle-right')
,   whirly_container   = PUBNUB.$('iot-whirly-container')
,   iot_whirly_list    = children(PUBNUB.$('iot-whirly-list'))
,   iot_device_list    = children(PUBNUB.$('iot-device-list'));

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Rotate Right Circle
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
setInterval( function() {
    var title_text  = next(iot_device_list).innerHTML
    ,   circle_text = next(iot_device_list).innerHTML;

    switch_text( circle_right_title, fade_outflip, circle_text, 1.5 );
    switch_text( circle_right,       fade_outflip, title_text,  1.0  );
}, 2000 );

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Circle Rotate Functions
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function switch_text( node, animation, text, duration ) {
    animation( node, duration );
    update_text( node, text, duration * 0.5 );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Whirly Hero Icons
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
PUBNUB.each( iot_whirly_list, function( _, node ) {
    if (!node.nodeType) return;
    add_whirly(node);
} );
function add_whirly(node) {
    setInterval( function() {
        animate( node, [ gen_whirly_state( node, 200.0 ) ] );
    }, 50000 );

    animate( node, [
        gen_whirly_state( node, 0.001 ),
        gen_whirly_state( node, 200.0 )
    ] );
    whirly_container.appendChild(node);
}
function gen_whirly_state( node, duration ) {
    return {
        'position'  : 'absolute',
        'd'         : duration,
        'opacity'   : rnd(    1, 10   ) / 100,
        'ty'        : rnd(  -50, 550  ),
        'tx'        : rnd( -500, 2800 ),
        's'         : rnd(   20, 100  ) / 100
    };
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Animations
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function fade_outflip( node, duration ) {
    animate( node, [
        { d:duration * 0.10, opacity:1.0, ty:  0, s:1.0, rx:0  },
        { d:duration * 0.30, opacity:0.0, ty:-20, s:0.7, rx:30, tx: -40 },
        { d:duration * 0.20, opacity:0.0, ty:-90, s:1.0, rx:90 },
        { d:duration * 0.20, opacity:1.0, ty:  0, s:1.0, rx:0  }
    ] );
}
function fade_out_and_back( node, duration ) {
    animate( node, [
        { d:duration * 0.10, opacity:1.0 },
        { d:duration * 0.30, opacity:0.0 },
        { d:duration * 0.30, opacity:0.0 },
        { d:duration * 0.10, opacity:1.0 }
    ] );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Utilities
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function next(arry) {
    arry.current = arry.current || 0;
    return arry[arry.current++] || (function() {
        arry.current = 0;
        return next(arry);
    })();
}
function children(node) {
    return node.getElementsByTagName('div');
}
function update_text( node, text, delay ) {
    setTimeout( function() { node.innerHTML = text }, (delay || 0) * 1000 );
}
function set_class( node, classname ) {
    node.className = classname;
    PUBNUB.attr( node, 'class', classname );
}
function get_class(node) {
    return PUBNUB.attr( node, 'class' ) || node.className;
}
function add_class( node, classname ) {
    var oldclass = get_class(node)
    ,   newclass = oldclass + ' ' + classname;

    set_class(newclass);
}
function remove_class( node, classname ) {
    var oldclass = get_class(node)
    ,   newclass = PUBNUB.grep( oldclass.split(' '), function(aclass) {
        return classname != aclass;
    } ).join(' ');

    set_class(newclass);
}
function rnd( start, end ) {
    return Math.floor(Math.random()*end + start);
}

})();
