const axios = require('axios')
require('dotenv').config()

const url = `https://spreadsheets.google.com/feeds/cells/${process.env.SHEETS_key}/1/public/full?alt=json`

module.exports = async () => axios.get(url).then( 
	res => res.data.feed.entry.map( 
		ea => ea.content["$t"]
	)
) 