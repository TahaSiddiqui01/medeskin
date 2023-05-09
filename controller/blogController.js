const Blog = require('../model/Blog')
const featuredImagePath = '/uploads/blogs/featured_image/'
const coverImagePath = '/uploads/blogs/cover_image/'


//create new blog
exports.create = (req, res) => {
    const body = req.body
    // console.log(req.files)

    // const uploadimage = uploadBlogImage.fields([{ name: 'image', maxCount: 1 }, { name: 'coverimage', maxCount: 1 }]);
    const data = {
        ...body,
        featured_image: featuredImagePath + req.files.image[0].originalname,
        cover_image: coverImagePath + req.files.coverimage[0].originalname,
    };
    const NewBlog = new Blog(data);
    NewBlog.save()
        .then(() => {
            res.send({
                message: 'Blog added successfully !!!'
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err || "Some error occurred while creating the Blog.",
            });
        });
}

//show all blogs
exports.findAll = (req, res) => {
    Blog.find().sort({ createdAt: 'desc' })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                error: err
            })
        })
}

//show all blogs
exports.findByCategory = (req, res) => {
    const category = {
        category: req.params.category
    }
    Blog.find(slug).sort({ createdAt: 'desc' })
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                error: err
            })
        })
}

//get single blog
exports.findOne = (req, res) => {
    // Blog.findById(req.params.BlogId)
    const slug = {
        slug: req.params.BlogId
    }
    Blog.findOne(slug)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Blog not found",
                });
            }
            res.send(data)
        }).catch((err) => {
            res.status(500).send({
                error: err || 'Error retrieving Blog'
            })
        })
}

//update blog
exports.update = (req, res) => {
    const blog = Blog.findById(req.params.BlogId);
    const slug = {
        slug: req.params.BlogId,
    }
    Blog.findOneAndUpdate(
            slug, {
                $set: req.body,
                featured_image: req.files.image ? featuredImagePath + req.files.image[0].originalname : blog.featured_image,
                cover_image: req.files.coverimage ? coverImagePath + req.files.coverimage[0].originalname : blog.cover_image,
            }
        )
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Blog not found ",
                });
            }
            res.send({
                message: 'Blog updated successfully',
                blog: data
            });
        })
        .catch((err) => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Blog not found",
                });
            }
            return res.status(500).send({
                message: "Error updating Blog",
            });
        });
}

// Delete a Blog
exports.delete = (req, res) => {
    Blog.findByIdAndRemove(req.params.BlogId)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    message: "Blog not found",
                });
            }
            res.send({ message: "Blog deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete Blog" || err,
            });
        });
};


// image upload with editor
exports.imageUpload = (req, res) => {
    console.log(req.files)
}


//show all blogs with category
exports.findByCategory = async (req, res) => {
    const category = req.params.category
    await Blog.find(
        {
        "$or": [
                {category : {$regex: category}},
            ]
        }
    )
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                error: err
            })
        })
}

//show all blogs with like query for search
exports.findByQuery = async (req, res) => {
    var query = req.params.query;

    await Blog.find(
        {
        "$or": [
                {title : {$regex: query}},
                {slug : {$regex: query}},
                {description : {$regex: query}},
                {content : {$regex: query}},
            ]
        }
    )
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            error: err
        })
    })
}