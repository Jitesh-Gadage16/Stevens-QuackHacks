import connectDB from '../../../utils/db';
import User from '../../../models/User';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await connectDB();
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'User exists' });
  const uid = uuidv4();
  await User.create({ email, password, uid });
  res.status(200).json({ message: 'Registered', uid });
}
