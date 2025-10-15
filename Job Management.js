const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: { type: String, enum: ['Applied', 'Interview', 'Offer', 'Rejected'] },
  dateApplied: Date,
  notes: String,
  userId: mongoose.Schema.Types.ObjectId
});
