import connectDB from '../../../utils/db';
import User from '../../../models/User';

export default async function handler(req, res) {
  await connectDB();
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });
  res.status(200).json({ message: 'Login success', uid: user.uid });
}
