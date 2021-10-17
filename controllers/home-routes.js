const router = require('express').Router();
const { Model } = require('sequelize/types');
const { Blog } = require('../models');

// Get all blog entries
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        
        const blogAll = blogData.map((blog) => blog.get({ plain: true }));
        res.render('all', {blogAll});
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

module.exports = router;