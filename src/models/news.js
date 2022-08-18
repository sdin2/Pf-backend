const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	main_image: {
		type: String,
		required: true,
	},
	article_content: {
		type: Text,
		require: true,
	},
	short_description: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model('User', userSchema);
