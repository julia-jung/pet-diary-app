import express from 'express';
import { petsRoute } from './routes';
import prisma from './prisma/client';
// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';

async function main() {
  const app = express();

  app.use(express.json());

  app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), '-', req.url);
    next();
  });

  app.use('/api/pets', petsRoute);

  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  // dayjs.extend(utc);
  // dayjs.extend(timezone);
  // dayjs.tz.setDefault('Asia/Seoul');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
