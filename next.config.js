const uri ="https://assets.stickpng.com/"
const allowedImageWordPressDomain = new URL(uri).hostname
  
module.exports = {
  images: {
    domains: [ allowedImageWordPressDomain, 'https://assets.stickpng.com/'],
  },
}
