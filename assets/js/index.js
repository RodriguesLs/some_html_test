function hasGetUserMedia() {
    // Note: Opera builds are unprefixed.
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
}
    
if (hasGetUserMedia()) {
    // Good to go!

    navigator.getUserMedia({audio:true}, 
        function(stream) {
            alert('we can access mic');
        },
        function(e) {
            alert('Error capturing audio.');
        }
        );
} else {
    alert('getUserMedia() is not supported in your browser');
}
