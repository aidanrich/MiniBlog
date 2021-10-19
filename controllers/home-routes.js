const router = require('express').Router();
// const { Model } = require('sequelize/types');
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

// Get all blog entries
router.get('/', withAuth, async (req, res) => {
 
    try {
        const blogData = await Blog.findAll();
        
        const blogAll = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {blogAll,
            logged_in: req.session.logged_in,
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/blog', withAuth, async (req, res) => {
  console.log("you've got mail")
  try {
      const blogData = await Blog.findAll({
          where: {
              user_id: req.session.user_id,
          }
      });

      const blogAll = blogData.map((blog) => blog.get({ plain: true }));
      // where is this going?
      res.render('blog', { blogAll, 
          logged_in: req.session.logged_in,
      });

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;