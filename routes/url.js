import express from 'express'
import {shorturl,analytics} from '../controllers/url.js'


 const router=express.Router();

router.post('/',shorturl)
router.get('/analytics/:shortId',analytics)

 export default router;