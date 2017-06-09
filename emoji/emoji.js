$(function () {

    var socket = io( document.location.origin );
    var $emojiContainer = $('.emoji-container');
    var emojiCssPrefix = 'emoji-container emoji-container--';

    var allSounds = new Sounds( [
        'audio/attention.mp3',
        'audio/surprised.mp3',
        'audio/sad.mp3',
        'audio/angry.mp3',
        'audio/hope.mp3',
        'audio/excitement.mp3',
        'audio/happy.mp3'
    ] );


    ['hide', 'neutral', 'attention', 'surprised',
    'sad','angry', 'hope', 'excitement', 'happy', 'shy', 'lookleft', 'lookright'
    ].forEach( function ( emotion ) {

        socket.on( emotion, function () {
            $emojiContainer[ 0 ].className = emojiCssPrefix + emotion;

            if ( allSounds.has( 'audio/'+ emotion +'.mp3' ) ) {
                allSounds.play( 'audio/'+ emotion +'.mp3' );
            }
        } );

    });

});