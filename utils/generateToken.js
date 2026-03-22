const jwt = require("jsonwebtoken");

module.exports = (user, entity) => {
    return jwt.sign({
        id: user._id,
        entity: entity
    }, process.env.SECRET);
}