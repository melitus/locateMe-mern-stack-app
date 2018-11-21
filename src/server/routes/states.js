import { Router } from 'express';

// import halson from 'halson';
import dbConnect from '../../../persistence/mysql';
import schema from '../models/states';
import errorMessages from '../utils/error.messages';

const db = schema(dbConnect())();
const statesrouter = new Router();

statesrouter.post('/states', async (req, res) => {
  let result;
  try {
    result = await db.states.create(req.params.GUID, req.query);
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          data: result,
          message: 'Successfully inserted one company'
        });
});

statesrouter.get('/states', async (req, res) => {
  let result;
  try {
    result = await db.states.findAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json({
    status: 'success',
    data: result,
    message: 'Retrieved ALL states'
  });
});


statesrouter.get('/states/:id', async (req, res) => {
  let result;
  try {
    result = await db.states.find({ id: req.params.id });
    if (result) {
      res.status(200)
              .json({
                status: 'success',
                data: result,
                message: 'Retrieved ONE state'
              });
    } else {
      res.status(404).send('ID does not exist');
    }
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
});

statesrouter.put('/states/:id', async (req, res) => {
  let result;
  try {
    result = await db.states.upsert(req.query, { id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json(result);
});

statesrouter.delete('/states', async (req, res) => {
  let result;
  try {
    result = await db.states.removeAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          data: result,
          message: 'Removed  states'
        });
});

statesrouter.delete('/states/:id', async (req, res) => {
  let result;
  try {
    result = await db.states.remove({ id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} states`
        });
});

export default statesrouter;
