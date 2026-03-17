import app from './app'; 

const port = 3000;

//start the server

app.listen(port , ()=> { 
    console.log(`Server running on port ${port}`);
});