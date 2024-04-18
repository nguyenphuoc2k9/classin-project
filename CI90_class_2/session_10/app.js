import {v2 as cloudinary} from 'cloudinary';
import express from "express"
import multer from 'multer';
cloudinary.config({ 
  cloud_name: 'deivlgs7p', 
  api_key: '885737281755855', 
  api_secret: 'K7vpFXvNq1TWuebCqiq7UpNGXEY' 
});
const app = express()

app.use(app.json())
app.get("")