import dbConnect from '../../../utils/dbConnect';
import Climb from '../../../models/Climb';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const climbs = await Climb.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: climbs });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const climb = await Climb.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: climb });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
