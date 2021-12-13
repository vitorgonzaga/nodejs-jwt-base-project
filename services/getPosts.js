const { Post } = require('../models');

module.exports = async () => {
  const mockPosts = await Post.findAll({ attributes: { exclude: 'id' } });
  return({ mockPosts })
};