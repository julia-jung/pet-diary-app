import express from 'express';
import api from './api';
import prisma from './prisma/client';

async function main() {
  const app = express();

  app.use(express.json());

  app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), '-', req.url);
    next();
  });

  app.use(api);

  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
