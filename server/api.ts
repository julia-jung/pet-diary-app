import express from 'express';
import prisma from './prisma/client';

const api = express.Router();

/* Pets */
// get a pet info
api.get('/api/pets/:id', async (req, res) => {
  // console.log(req);
  const pet = await prisma.pets.findUnique({
    where: { id: +req.params.id },
  });
  if (!pet) {
    res.status(404).json({ message: `No Pet found with an ID of ${req.params.id}` });
  }
  res.json(pet);
});
// create a pet
// update a pet
// delete a pet

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
