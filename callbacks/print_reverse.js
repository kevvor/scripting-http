var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  var nospace = html.split(' ').join('');
  console.log(nospace.split('').reverse().join(''));
}

getHTML(requestOptions, printReverse);