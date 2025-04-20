import express from 'express';
import cors from 'cors';
import postRoutes from './routes/blogs/blogs.routes'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', postRoutes);

export default app;