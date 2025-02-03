import jwt from 'jsonwebtoken';

const jwtAuth = async function(req,res,next){
    let token = req.headers['authorization'];

    if(!token){
        res.status(401).send('Unauthorized');
    }

    try{
        let payload = jwt.verify(token,process.env.JWT_SECRET);
        req.doctorId = payload.doctorId;
    }catch(err){
        console.log(err);
    }

    next();
}

export default jwtAuth;