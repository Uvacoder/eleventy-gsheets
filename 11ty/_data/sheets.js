const axios = require('axios')
require('dotenv').config()

module.exports = async function() {
	let url = `https://spreadsheets.google.com/feeds/cells/${process.env.SHEETS_key}/1/public/full?alt=json`

	return axios.get(url)
		.then( res => console.log( res.data ) )
}