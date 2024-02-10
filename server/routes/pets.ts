import express from 'express';
import { unlinkSync } from 'fs';
import { resolve, join } from 'path';
import multer from 'multer';

import prisma from '../prisma/client';

const petsRouter = express.Router();

const storage = multer.diskStorage({
  destination: 'public/assets/images/',
  filename: function (req, file, cb) {
    cb(null, req.params.id + '_' + Date.now() + '.' + file.originalname.split('.').slice(-1));
  },
});
const upload = multer({ storage });

petsRouter.get('/', async (req, res) => {
  const pets = await prisma.pets.findMany();
  // res.status(500).json({ message: 'Failed to fetch Pets' });
  res.json(pets);
});

petsRouter.get('/:id', async (req, res) => {
  const pet = await prisma.pets.findUnique({
    where: { id: +req.params.id },
  });
  if (!pet) {
    res.status(404).json({ message: `No Pet found with an ID of ${req.params.id}` });
  }
  res.json(pet);
});

petsRouter.post('/', async (req, res) => {
  const pet = await prisma.pets.create({
    data: { ...req.body },
  });

  res.json(pet);
});

petsRouter.post('/:id/image', upload.single('file'), async (req, res) => {
  const image = req.file;

  console.log(image);
  if (image) {
    const pet = await prisma.pets.update({
      data: { image: image.filename },
      where: { id: +req.params.id },
    });
    res.json(pet.image);
  }
});

petsRouter.put('/:id', async (req, res) => {
  const user = await prisma.pets.update({
    data: { ...req.body },
    where: { id: +req.params.id },
  });

  res.json(user);
});

petsRouter.delete('/:id', async (req, res) => {
  await prisma.pets.delete({
    where: { id: +req.params.id },
  });

  res.json(true);
});

petsRouter.delete('/:id/image', async (req, res) => {
  const pet = await prisma.pets.findUnique({
    where: { id: +req.params.id },
  });
  if (!pet) {
    res.status(404).json({ message: `No Pet found with an ID of ${req.params.id}` });
  } else if (pet.image) {
    const path = resolve(process.cwd(), 'public/assets/images');
    unlinkSync(join(path, pet.image));

    await prisma.pets.update({
      data: { image: null },
      where: { id: +req.params.id },
    });
    res.json(true);
  }
});

export default petsRouter;
