const getPosts = require('../services/getPosts');

const getAllPosts = async(req, res) => {
  const mockPosts = await getPosts();
  res.status(200).json(mockPosts);
}

module.exports = {
  getAllPosts,
}