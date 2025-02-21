// get      => find
// post     => create
// patch    => findByIDAndUpdate
// delete   => findByIDAndDelete

const blog = require("./blog")



exports.readBlogs = async (req, res) => {
    const result = await blog.find()
    res.json({ message: "blog fetch success", result })
}
exports.createBlogs = async (req, res) => {
    await blog.create(req.body) // DB opration
    res.status(201).json({ message: "blog create success" })
}
exports.updateBlogs = async (req, res) => {
    //                                            👇 dynamic  
    await blog.findByIdAndUpdate(req.params.bid, req.body)//DB opration
    res.json({ message: "blog update success" })
}
exports.deleteBlogs = async (req, res) => {
    await blog.findByIdAndDelete(req.params.bid) // DB opration
    res.json({ message: "blog delete success" })
}