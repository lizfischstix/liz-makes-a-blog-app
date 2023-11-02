const router = require('express').Router();
const { Article } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newArtical= await Article.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArtile);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const ArticleData = await Article.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(ArticleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
