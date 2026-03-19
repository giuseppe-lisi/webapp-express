function notFoundMiddleware(req, res) {
    res.status(500).json({ error: "Not Found", message: "Couldn't find page" });
}

module.exports = notFoundMiddleware;