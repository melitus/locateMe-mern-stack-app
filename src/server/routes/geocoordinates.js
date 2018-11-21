
import { Router } from 'express';

// import halson from 'halson';
import dbConnect from '../../../persistence/mysql';
import schema from '../models/geocoordinates';
import errorMessages from '../utils/error.messages';

const db = schema(dbConnect())();
const georouter = new Router();

georouter.post('/geocoordinates', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.create(req.query);
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

georouter.get('/geocoordinates', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.findAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json({
    status: 'success',
    data: result,
    message: 'Retrieved ALL companies'
  });
});


georouter.get('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.find({ id: req.params.id });
    if (result) {
      res.status(200)
              .json({
                status: 'success',
                data: result,
                message: 'Retrieved ONE company'
              });
    } else {
      res.status(404).send('ID does not exist');
    }
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
});

georouter.put('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.upsert(req.query, { id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json(result);
});

georouter.delete('/address', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.removeAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          data: result,
          message: 'Removed  companies'
        });
});

georouter.delete('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.geocoordinates.remove({ id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} company`
        });
});

export default georouter;
