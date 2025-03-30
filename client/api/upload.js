import connectDB from '../../utils/db';
import User from '../../models/User';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  await connectDB();
  const form = formidable({ uploadDir: './uploads', keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    const { uid } = fields;
    const filePath = files.resume.filepath;
    await User.findOneAndUpdate({ uid }, { resumePath: filePath });
    res.status(200).json({ message: 'Resume uploaded', path: filePath });
  });
}

