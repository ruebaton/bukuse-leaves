//-------------- AUDIO

var audio = document.getElementById('player');
var aligner = new AudioAligner(document.getElementById('readbox'), audio);

// load text, start
function loadLocal(osis) {

    var textUrl = 'books/text/' + osis + '.js',
        audioUrl = 'books/audio/' + osis + '.ogg',
        timingUrl = 'books/audio/' + osis + '.timings.json';

    jQuery.ajax({
        url: textUrl,
        //async: false, 
        dataType: 'script',
        beforeSend: function( xhr ) { //
          xhr.overrideMimeType( "application/json; charset=utf-8" ); //
        }, //
        contentType: 'application/json; charset=utf-8', //
        success: function(tdata) {
            var numrhmd = '';
            for (var i = 0; i < rhmd; ++i) {
                numrhmd += window["rhmd" + i];
            }

            document.getElementById('readbox').innerHTML = JSON.stringify(numrhmd);

            // start aligner
            aligner.align(audioUrl, timingUrl);
        }
    });
}

loadLocal('book1');