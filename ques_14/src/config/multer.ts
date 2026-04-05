import multer from "multer";
import path from "path";
import fs from 'fs';

//first we define the path of the folder
const uploadPath = path.join(process.cwd() , "uploads");

//check if the folder exists
if(!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath , {recursive: true});
}

//configure storage
const storage = multer.diskStorage({
    destination: (req , file , cb) => {
        cb(null , uploadPath);
    },

    filename: (req , file , cb)=> {
        cb(null , file.originalname);
    }
})

export const upload = multer({storage});

