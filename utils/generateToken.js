const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = (user, entity) => {
    return jwt.sign({
        id: user._id,
        entity: entity
    }, SECRET)
}