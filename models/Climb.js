import mongoose from 'mongoose';

const ClimbSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sent: {
    type: Boolean,
    required: false,
  },
  grade: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
});

export default mongoose.models.Climb || mongoose.model('Climb', ClimbSchema);
