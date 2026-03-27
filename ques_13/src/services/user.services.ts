import { CreateUserInput, User } from "../types/user.types";
import axios from 'axios';




export async function getUsers() {

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    return res.data;
}
