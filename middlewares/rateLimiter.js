import  rateLimit from "express-rate-limit"

export const totalReqLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 7, // Testing limit 
    legacyHeaders: false,
    standardHeaders: true,
    keyGenerator: function(req) {
      return req.socket.remoteAddress;  //Ip of the user 
    },
    mesage: "Too many requests, please try again later"
  })

  export const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max:3,// Limit in integer
    legacyHeaders: false,
    standardHeaders: true,
    message: "Too many LogIn / SignIn requests, please try again later"
  })