const mongoose = require('mongoose');

const postQuestSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    category: { type: String, required: true },
    deadline: { type: Date, required: true }, // Use Date type for deadlines
    amount: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to a user
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Pre-save middleware (example: validation or transformation)
postQuestSchema.pre('save', function (next) {
  if (!this.description || !this.category) {
    throw new Error('Description and Category are required!');
  }
  next();
});

// Methods (example: custom business logic)
postQuestSchema.methods.calculateRemainingDays = function () {
  const now = new Date();
  const diff = new Date(this.deadline) - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Days remaining
};

const PostQuest = mongoose.model('PostQuest', postQuestSchema);

module.exports = PostQuest;