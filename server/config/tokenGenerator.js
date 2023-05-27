const JSON_WEB_TOKEN = require("jsonwebtoken")
const SECRET_KEY = "ClaveHospitalREG7ma"

export const autenticate = (req, res, next) => {
    JSON_WEB_TOKEN.verify(req.cookies.usertoken, SECRET_KEY, (err, payload) => {
        console.log("Cookie: ", payload)
        if (err) {
            res.status(401).json({ verify: false })
        } else {
            next()
        }
    })
}
export const isAdmin = (req, res, next) => {
    JSON_WEB_TOKEN.verify(req.cookies.usertoken, SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false })
        } else if (payload.rol !== "Admin") {
            res.status(401).json({ verified: false })
        } else {
            next()
        }
    })
}
export const isUser = (req, res, next) => {
    JSON_WEB_TOKEN.verify(req.cookies.usertoken, SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false })
        } else if (payload.rol !== "Usuario") {
            res.status(401).json({ verified: false })
        } else {
            next()
        }
    })
}