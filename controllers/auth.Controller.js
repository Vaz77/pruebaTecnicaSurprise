const { User, Role} = require ('../models')
const jwt = require('jsonwebtoken');
const authController = {};



authController.register = (req, res) => {
    let.boy = req.body;
    const newPassword = bcrypt.hashSync(body.password, 10);

    try {
    const newUser = user.create({
        username : body.userName,
        email: body.email,
        password: newPassword,
    })
return res.json ({
    message: "Usuario creado",
    data: newUser
});
} catch (error) {
    console.error(error)
}
};












module.exports = authController