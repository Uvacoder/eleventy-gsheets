const fetch = require('node-fetch')

let key = '1X9l9gS_fYxs897qrx2LXAY0WYSlvvU8uNyBf1gZzqWU'

module.exports = function() {
	let url = `https://spreadsheets.google.com/feeds/cells/${key}/1/public/full?alt=json`

	fetch(url)
	.then( res => res.json() )
	.then( json => console.log( json.feed.entry ) )
}