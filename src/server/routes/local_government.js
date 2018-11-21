
import { Router } from 'express';

// import halson from 'halson';
import dbConnect from '../../../persistence/mysql';
import schema from '../models/local_government';
import errorMessages from '../utils/error.messages';

const db = schema(dbConnect())();
const lgarouter = new Router();

lgarouter.post('/local_government', async (req, res) => {
  let result;
  try {
    result = await db.lga.create(req.params.GUID, req.query);
  } catch (e) {
    res.send(e);
  }
  res.status(200)
        .json({
          status: 'success',
          data: result,
          message: 'Successfully inserted one company'
        });
});

lgarouter.get('/local_government', async (req, res) => {
  let result;
  try {
    result = await db.lga.findAll();
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json({
    status: 'success',
    data: result,
    message: 'Retrieved ALL companies'
  });
});


lgarouter.get('/local_government/:id', async (req, res) => {
  let result;
  try {
    result = await db.lga.find({ id: req.params.id });
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

lgarouter.put('/local_government/:id', async (req, res) => {
  let result;
  try {
    result = await db.lga.upsert(req.query, { id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200).json(result);
});

lgarouter.delete('/local_government', async (req, res) => {
  let result;
  try {
    result = await db.lga.removeAll();
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

lgarouter.delete('/local_government/:id', async (req, res) => {
  let result;
  try {
    result = await db.lga.remove({ id: req.params.id });
  } catch (e) {
    res.status(404).send(errorMessages.USER_NOT_FOUND);
  }
  res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} company`
        });
});

export default lgarouter;
