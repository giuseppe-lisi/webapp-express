function errHandlerMiddleware(err, req, res, next) {
    res.status(500).json({ error: err.name, messaggio: err.message });
}

module.exports = errHandlerMiddleware;