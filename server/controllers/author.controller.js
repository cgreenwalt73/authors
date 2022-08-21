const Author = require('../models/author.model');

module.exports.addAuthor = (req, res) => {
    Author.create(req.body)
    .then(author => res.json(author))
    .catch(err => res.json(err));
}

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json({ authors: allAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
            .then((author) => res.json(author))
            .catch((err) => res.json(err));
    }

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
            .then((updatedAuthor) => res.json(updatedAuthor))
            .catch((err) => res.json(err));
    }

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
            .then((confirmDelete) => res.json(confirmDelete))
            .catch((err) => res.json(err));
    }