import { CreateUserInput, User } from "../types/user.types";

let users: User[] = [{
    id:1,
    name: "Ritik",
    email: "ritik@gmail"
},
{
   id:2,
    name: "Ritik",
    email: "ritik2@gmail" 
},
{
   id:3,
    name: "Ritik",
    email: "ritik3@gmail" 
},
{
   id:4,
    name: "Meghna",
    email: "meghna2@gmail" 
},
{
   id:5,
    name: "Rohan",
    email: "rohan@gmail" 
},
{
   id:6,
    name: "Meghna",
    email: "meghna@gmail" 
},
{
   id:7,
    name: "Meghna",
    email: "megu@gmail" 
}]; 


let id = 7;



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

export const getUser = (q: string , limit:number)=> {
    
    let res = [];

        for(const user of users){

            if(user.name === q){
                res.push(user)
            }
            
        }


    
    return res.slice(0 , limit);
    
}
