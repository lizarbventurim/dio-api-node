import {Request, Response} from 'express';
import {CreateUserService} from '../services/CreateUserService';

class CreateUserController {
    handle(request:Request, response: Response){
        const createUserService = new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;

        if(email.indexOf('@') === -1){
            return response.status(400).json({message: 'Invalid email'});
        }

        if(name.length === 0 || email.length === 0){
            return response.status(400).json({message: "Preencha todos os campos"});
        }

        const user = createUserService.execute({name, email});

        // return response.json({user,});
    } 
    

}

export {CreateUserController}