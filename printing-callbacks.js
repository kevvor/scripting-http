var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

  https.get(options, function (response) {

    var buffer = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      callback(buffer);
    });

  });

}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);