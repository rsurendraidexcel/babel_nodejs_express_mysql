import express from 'express';
const router = express.Router();
router.get('/home', (req, res)=> {
  res.send ('This is home My name is surendra rai');
});

router.get('/contact',(req,res)=> {
  res.send('Contact us contact page');
});

router.get('/gallary',(req,res)=> {
  res.send('Gallary this Gallary file');
});

router.get('/service',(req,res)=> {
  res.send('this is Service File to page');
});

export default router;