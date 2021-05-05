if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://betopinheiro1005:angstron1005@cluster0.gnwt9.mongodb.net/test"}
} else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}