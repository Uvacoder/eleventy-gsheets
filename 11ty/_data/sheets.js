const fetch = require('node-fetch')
require('dotenv').config()

module.exports = function() {
	let url = `https://spreadsheets.google.com/feeds/cells/${process.env.SHEETS_key}/1/public/full?alt=json`

	fetch(url)
	.then( res => res.json() )
	.then( json => console.log( json.feed.entry ) )
}