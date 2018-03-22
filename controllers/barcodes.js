import Barcode from '../models/barcode';
import moment from 'moment';

export const index = (req, res, next) => {
  Barcode.find({}, (err, barcodes) => {
    return res.json(barcodes);
  });
};
