const express = require('express');
const router = express.Router();
const Burger = require('../models/burger');


// Basic route
router.get('/', (req, res) => {
    Burger.getBurgers((data) => {
        var burgers = {
            burgers: data
        };
        res.render("index", burgers);
    })
});

// Update route
router.post('/api/update/:id', (req, res) => {
    Burger.devourBurger(req.params.id, (data) => {
        res.json(data);
    });
})

// New burger route
router.post('/api/newburger', (req, res) => {
    Burger.addNew(req.body.burgerName, false, function(data) {
        res.redirect('/');  
    });
});

module.exports = router;