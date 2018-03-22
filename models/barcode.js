import mongoose, { Schema } from 'mongoose';

// Define barcode schema

var barCode = new Schema({
  product_name: String,
  upc: String,
});

// Export Mongoose model
export default mongoose.model('barcode', barCode);
