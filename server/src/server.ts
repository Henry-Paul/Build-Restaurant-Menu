import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/api/v1', (req, res) => {
  res.json({ message: 'API ready' });
});

app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
});
