import dbConnect from '../../../utils/dbConnect';
import Climb from '../../../models/Climb';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const climb = await Climb.findById(id);
        if (!climb) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: climb });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const climb = await Climb.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!climb) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: climb });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedClimb = await Climb.deleteOne({ _id: id });
        if (!deletedClimb) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
