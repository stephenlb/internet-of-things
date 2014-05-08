(function(){

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Main
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var circle_left_title  = PUBNUB.$('hero-circle-left-title')
,   circle_left        = PUBNUB.$('hero-circle-left')
,   circle_right_title = PUBNUB.$('hero-circle-right-title')
,   circle_right       = PUBNUB.$('hero-circle-right')
,   iot_device_list    = PUBNUB.$('iot-device-list');

switch_text( circle_right_title, fade_out_and_back, 'Embedded' );
switch_text( circle_right, fade_out_and_back, '<span class="glyphicon glyphicon-qrcode"></span>' );

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Circle Rotate Functions
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function switch_text( node, animation, text ) {
    animation( node, 1.0 );
    update_text( node, text, 0.5 );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Animations
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function fade_out_and_back( node, duration ) {
    animate( node, [
        { 'd' : duration * 0.10, 'opacity' : 1.0 },
        { 'd' : duration * 0.30, 'opacity' : 0.0 },
        { 'd' : duration * 0.30, 'opacity' : 0.0 },
        { 'd' : duration * 0.10, 'opacity' : 1.0 }
    ] );
}
function fade_out_and_back( node, duration ) {
    animate( node, [
        { 'd' : duration * 0.10, 'opacity' : 1.0 },
        { 'd' : duration * 0.30, 'opacity' : 0.0 },
        { 'd' : duration * 0.30, 'opacity' : 0.0 },
        { 'd' : duration * 0.10, 'opacity' : 1.0 }
    ] );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Utilities
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
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

})();
