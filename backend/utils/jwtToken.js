
const sendToken = (user,statusCode,res) =>{
    const token = user.createJWTToken();

    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 *60 *1000
        ),
        httpOnly : true,
        SameSite:  process.env.NODE_ENV === "Development" ? "Lax" : "None",
        Secure : process.env.NODE_ENV === "Development" ? false : true,
    }

    res.status(statusCode).cookie("token", token, options).json({
        success : true,
        user,
        token
    })
}
module.exports = sendToken