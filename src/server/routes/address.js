
import { Router } from 'express';

// import halson from 'halson';
import dbConnect from '../../../persistence/mysql';
import schema from '../models/address';
import errorMessages from '../utils/error.messages';

const db = schema(dbConnect())();
const addressrouter = new Router();

addressrouter.post('/address', async (req, res) => {
  let result;
  try {
    result = await db.addresses.create(req.params.GUID, req.query);
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

addressrouter.get('/address', async (req, res) => {
  let result;
  try {
    result = await db.addresses.findAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json({
    status: 'success',
    data: result,
    message: 'Retrieved ALL companies'
  });
});


addressrouter.get('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.addresses.find({ id: req.params.id });
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

addressrouter.put('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.addresses.upsert(req.query, { id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json(result);
});

addressrouter.delete('/address', async (req, res) => {
  let result;
  try {
    result = await db.addresses.removeAll();
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

addressrouter.delete('/address/:id', async (req, res) => {
  let result;
  try {
    result = await db.addresses.remove({ id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} company`
        });
});

export default addressrouter;
