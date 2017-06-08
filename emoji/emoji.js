$(function () {

    var socket = io( document.location.origin );
    var $emojiContainer = $('.emoji-container');
    var emojiCssPrefix = 'emoji-container emoji-container--';

    socket.on( 'neutral', function () {
        $emojiContainer[ 0 ].className = emojiCssPrefix +'neutral';
    } );

    socket.on( 'angry', function () {
        $emojiContainer[ 0 ].className = emojiCssPrefix +'angry';
    } );


    console.log('whooptiedoo');
});