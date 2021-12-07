const { Post } = require('../models');

module.exports = async (_req, res) => {
  const posts = await Post.findAll();
  res.status(200).json(posts);
};
