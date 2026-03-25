import { CreateUserInput, User } from "../types/user.types";

let users: User[] = [];     //made an array to store the users
let id = 1;



export const createUser = (data: CreateUserInput) => {
  
    const {name , email} = data;    //extracted the valid fields from data
    if (!name || !email) {
    throw new Error("Name and email are required");
}

    const newUser:User  = {         //create a new user at every request
        id: id++,
        name: name,
        email:email
    };

    users.push(newUser);        //push new user to the array to kinda store it

    return newUser;             //return new created User
};

export const getUser = (id: number)=> {
    
    
        const user = users.find((item)=> item.id == id);

        console.log(user);
    return user;
    
}
