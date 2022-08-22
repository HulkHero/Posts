const jwt = require('jsonwebtoken');

const HttpError = require('./http-error');

const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
   
   // res.locals.user=rek.params.id
   //const hello= req.headers
    const token = req.headers.authorization.split(" ")[0]; 
    
   
    // Authorization: 'Bearer TOKEN'
   //const token=req.body.token;
  
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
   // req.userData = { userId: decodedToken.userId };
   
    next(); 
  } catch (err) {
    const error = new HttpError('Authentication failedf!', 401);
    return next(error);
  }
};
exports.auth=auth;
