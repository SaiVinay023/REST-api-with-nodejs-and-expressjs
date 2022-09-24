import { v4 as uuidv4 } from 'uuid';
 
let users = [
    
];
 export const Createuser = (req,res)=>{
    
   

    const user = req.body;

    

    


    users.push({ ...user, id: uuidv4()});
    res.send(`User with name ${user.Lastname} added to the database`);


    
}

export const getuser = (req,res) => {
    
    res.send(users);
    
}

export const getusers = (req,res)=> {
    const { id } = req.params;
const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteuser = (req,res) => {

    const {id} = req.params;

    users = users.filter((user) => user.id != id);

    res.send ('user with the id ${id} deleted');
}
export const updateuser = (req,res) => {
    const { id } = req.params;

    const{ firstname, lastname, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstname) {
        user.firstname = firstname;
    }

    if(lastname) {
        user.lastname = lastname;
    } 
    if(age){
        user.age = age;
    }

    res.send(' user with id ${id} has been updated');
}