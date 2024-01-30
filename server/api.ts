import express from 'express';
import prisma from './prisma/client';

const api = express.Router();

/* Pets */
// get all pets
api.get('/api/pets', async (req, res) => {
  const pets = await prisma.pets.findMany();
  // res.status(500).json({ message: 'Failed to fetch Pets' });
  res.json(pets);
});

// get a pet details
api.get('/api/pets/:id', async (req, res) => {
  const pet = await prisma.pets.findUnique({
    where: { id: +req.params.id },
  });
  if (!pet) {
    res.status(404).json({ message: `No Pet found with an ID of ${req.params.id}` });
  }
  res.json(pet);
});

// create a pet
api.post('/api/pets', async (req, res) => {
  const user = await prisma.pets.create({
    data: { ...req.body },
  });

  res.json(user);
});
// update a pet
api.put('/api/pets/:id', async (req, res) => {
  const user = await prisma.pets.update({
    data: { ...req.body },
    where: { id: +req.params.id },
  });

  res.json(user);
});
// delete a pet
api.delete('/api/pets/:id', async (req, res) => {
  await prisma.pets.delete({
    where: { id: +req.params.id },
  });

  res.json(true);
});

/* Vet Visits */
// get vet visits list
// get a vet visit detail
// create a vet visit
// update a vet visit
// delete a vet visit

/* Scheddules */
// get schedules ahead
// create a schedule
// update a schedule
// delete a schedule

/* Tasks */
// get tasks
// create a task
// update a task
// delete a task

export default api;
