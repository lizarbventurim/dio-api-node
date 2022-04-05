interface IUsuals {
    name: string;
    email: string;
}

class CreateUserService {
    execute({ name, email }:IUsuals){
        const data = [];

        data.push({name, email});

        return data;

    }
}

export { CreateUserService };