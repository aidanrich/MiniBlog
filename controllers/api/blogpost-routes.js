const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/blog/:user_id', withAuth, async (req, res) => {
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

// router.get('/blogsolo/:id', async (req, res) => {
//     console.log("get id 1?")
//     try {
//       const categoryData = await Blog.findByPk(req.params.id);
  
//       if (!categoryData) {
//         res.status(404).json({ message: 'No Blog found with that id!' });
//         return;
//       }
  
//       res.render('blogsolo', categoryData )
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.post('/', withAuth, async (req, res) => {
    console.log("hit")
    try {
        const newPost = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        console.log(newPost)
        res.json(newPost)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
