
import { userLoginService, userRegisterService } from '../01-services/users.services.js';


export const userRegisterController = async (req, res) => {
    try {
        
        const newUserData = req.body
        const newUser = await userRegisterService(newUserData)
      
          res.json(newUser)
      
    } catch (error) {
      console.log(error);
    }
  }

  export const userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userLoginService(req.body)
        if(user){
            req.session.email = user.email;
        req.session.password = user.password;
        }

        res.json(user)
    } catch (error) {
      console.log(error);
    }
}