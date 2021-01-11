const fetch = require('node-fetch')

module.exports = function() {
	console.log('howdy');

	let url = 'https://spreadsheets.google.com/feeds/cells/1X9l9gS_fYxs897qrx2LXAY0WYSlvvU8uNyBf1gZzqWU/1/public/full?alt=json'

	fetch(url)
	.then( res => res.json() )
	.then( json => console.log( json.feed.entry ) )
}