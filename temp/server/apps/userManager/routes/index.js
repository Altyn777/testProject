import express from 'express';

import UserController from '../controllers/UserController';
const router = express.Router();


router.get('/api/user/', UserController.getAll);
router.get('/api/user/:id', UserController.getByID);
router.delete('/api/user/:id', UserController.deleteByID);
router.put('/api/user/:id', UserController.updateByID);


module.exports = router;
