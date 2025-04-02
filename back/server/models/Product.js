// back/server/models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price']
  },
  description: {
    type: String,
    required: [true, 'Please provide product description']
  },
  image: {
    type: String,
    required: [true, 'Please provide product image URL']
  },
  category: {
    type: String,
    required: [true, 'Please provide product category'],
    enum: ['powerbanks', 'batteries', 'spare-parts', 'components', 'fpv-drones', '3d-prints']
  },
  brand: {
    type: String,
    required: [true, 'Please provide product brand']
  },
  capacity: String,
  voltage: String,
  features: [String],
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Product', productSchema);
