const { axios } = require('axios');
const express = require('express');
const router = express.Router();
const { Anwser, User } = require('../db.js');

router.post('/', async (req, res, next) => {
	const forum = req.body;
	try {
		const createComment = await Anwser.create({
			comment: forum.comment,
		});
		res.send('Comment posted!');
	} catch (error) {
		next(error);
	}
});

router.get('/', async (req, res, next) => {
	try {
		const forumData = await Anwser.findAll();
		res.send(forumData);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	const id = req.params.id;
	const allBody = req.body;
	try {
		let forumData = await Anwser.findByPk(id);
		await forumData.update({
			comment: allBody.comment,
			like: allBody.like,
			deleteFlag: allBody.deleteFlag,
		});
		res.json('Commentario editado correctamente');
	} catch (error) {
		next(error);
	}
});

module.exports = router;