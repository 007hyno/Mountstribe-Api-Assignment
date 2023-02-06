import jwt from "jsonwebtoken"

export const verifyToken=(req, res, next) =>{
  const bearerHeader = req.headers["authorization"];
  if (!bearerHeader) {
     return res.status(401).json({ error: "No authorization header found" });
  }

  const bearer = bearerHeader.split(" ");
  const bearerToken = bearer[1];
  req.token = bearerToken;

  jwt.verify(req.token, "secretKey", (err, user) => {
     if (err) {
        return res.status(401).json({ error: "Invalid token" });
     }
     req.user = user;
     next();
  });
}
