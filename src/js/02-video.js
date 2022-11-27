import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
        const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });


player.on('timeupdate',throttle(onTimeUpdate,1000))


function onTimeUpdate(data){
    console.log('Percentage watched: ' + data.percent, `Duration watched:` + data.duration, `Seconds watched:` + data.seconds);
    if (data.percent == 0.1) {
        console.log('10% of video watched');
    }
    localStorage.setItem('videoplayer-current-time', data.seconds);
  
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


