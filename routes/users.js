import express from 'express' ;



import { Createuser, getuser, getusers, updateuser, deleteuser } from '../controllers/users.js';


const router = express.Router();


// all routes here are starting with /users
router.get('/', getuser);

router.post('/', Createuser

);
router.get('/:id', getusers
);
router.delete('/:id', deleteuser);

router.patch('/:id', updateuser);
export default router;