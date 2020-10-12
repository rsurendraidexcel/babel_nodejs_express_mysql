import express from 'express';
const router = express.Router();
const userController = require('../controller/userController');
/*
router.get('/info',(req, res) => {
  res.send("This is Respose for the page");
});
router.get('/details',(req, res) => {
  res.send("user Details info");
});
router.get('/contact',(req, res) => {
  res.send("user contact form");
});
router.get('/community',(req, res) => {
  res.send("this user community page");
});
*/
router.get('/index',userController.index);
router.get('/index/:id',userController.getUserId);
router.post('/create',userController.create);
router.put('/edit',userController.edit);
router.put('/update',userController.update);
router.delete('/destroy',userController.destroy);
router.put('/store',userController.store);

export default router;