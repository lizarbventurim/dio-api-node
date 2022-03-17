import {Request, Response} from 'express';

class CreateUserController {
    handle(request:Request, response: Response){

        const name = request.body.name;

        return response.json({messagem: `Olá ${name}, bem vindo a API`});
    } 
    

}

export {CreateUserController}