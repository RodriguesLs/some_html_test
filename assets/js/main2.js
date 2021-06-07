let link = document.getElementById('test');

function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
	       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
				document.location = save.href; 
// window event not working here
			}else{
		        var evt = new MouseEvent('click', {
		            'view': window,
		            'bubbles': true,
		            'cancelable': false
		        });
		        save.dispatchEvent(evt);
		        (window.URL || window.webkitURL).revokeObjectURL(save.href);
			}	
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

link.addEventListener('click', (event) => {
    event.preventDefault();
    download_file('../img/publish3.png', 'some_name');
});

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

let print = document.getElementById('print')
print.addEventListener('click', e => {
    e.preventDefault();
    window.print();
})

let btn_full = document.getElementById('btn_fullscreen')
let btn_exit_full = document.getElementById('btn_exit_fullscreen')

btn_full.addEventListener('click', () => {
    let div = document.getElementById('id_div_fullscreen')
    div.requestFullscreen();
    div.style.backgroundColor = 'white';
    btn_full.style.display = 'none';
    btn_exit_full.style.display = 'block';
});

btn_exit_full.addEventListener('click', () => {
    document.exitFullscreen();
    btn_full.style.display = 'block';
    btn_exit_full.style.display = 'none';
});
