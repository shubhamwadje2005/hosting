const { readBlogs, createBlogs, updateBlogs, deleteBlogs } = require("./blog.controller")

const router = require("express").Router()


//router.get("/", readBlogs) // METHOD => GET
// URL => http://localhost:5000/api/blog then call readblog

// router.post("/create", createblog) // METHOD => POST
// URL => http://localhost:5000/api/blog then call createBlog

// router.patch("/update/:bid", updateblog) // METHOD => PATCH
// URL => http://localhost:5000/api/blog then call updateblog

// router.delete("/delete/:bid", deleteblog) // METHOD => DELETE
// URL => http://localhost:5000/api/blog then call deleteblog

router
    .get("/", readBlogs)
    .post("/create", createBlogs)
    .patch("/update/:bid", updateBlogs)
    .delete("/delete/:bid", deleteBlogs)

module.exports = router