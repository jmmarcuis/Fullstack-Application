const crypto = require('crypto');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PastorialSchema = new Schema({
  userIPHash: String,
  userIP: String,
  name: String,
  date: Date,
  pastorialText: String,
  readStatus: { type: Boolean, default: false }, // Default value is set to false (unread)
}, { timestamps: true });

PastorialSchema.pre('save', function (next) {
   if (this.userIP) {
     const ipString = String(this.userIP);
     const hashedIP = crypto.createHash('sha256').update(ipString).digest('hex');
    this.userIPHash = hashedIP;
  }
  next();
});

const pastorialModel = mongoose.model('Pastorial', PastorialSchema);

module.exports = pastorialModel;
