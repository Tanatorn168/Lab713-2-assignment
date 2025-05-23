import express, {Request, Response} from 'express';
import bookRoute from "./routes/bookRoute";
import multer from 'multer';
import { uploadFile } from './services/uploadFileService';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;
app.use('/books', bookRoute);
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
      try {
        const file = req.file;
        if (!file) {
          return res.status(400).send('No file uploaded.');
        }
    
        const bucket = process.env.SUPABASE_BUCKET_NAME;
        const filePath = process.env.UPLOAD_DIR;
        if (!bucket || !filePath) {
            return res.status(500).send('Bucket name or file path not configured.');
        }
        const ouputUrl = await uploadFile(bucket, filePath, file);
    
        res.status(200).send(ouputUrl);
      } catch (error) {
        res.status(500).send('Error uploading file.');
      }
    });

// Start Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});