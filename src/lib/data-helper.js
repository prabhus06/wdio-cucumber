module.exports = {
	getID: function () {
		let randomNumber = Math.floor(Math.random() * 100 + 1)
		return `ID_${new Data().getTime().toString()}${randomNumber}`
	},
}
