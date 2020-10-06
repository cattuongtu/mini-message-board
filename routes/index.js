const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", {
		title: "Mini Message Board",
		messages: messages,
	});
});

// "/new" route
router.get("/new", function (req, res, next) {
	res.render("form");
});

// POST
router.post("/new", function (req, res, next) {
	messages.push({
		text: req.body.messageText,
		user: req.body.messageUser,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
