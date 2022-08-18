const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
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
	deleteFlag: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('News', newsSchema);
