// Create web server
//========================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController");

// Handle request
router.get('/', commentController.getAllComments);
router.post('/create', commentController.createComment);
router.delete('/:id/delete', commentController.deleteComment);

const app = express();

// Use router for comment routes
app.use('/comments', router);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
