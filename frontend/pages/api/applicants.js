import { applicants } from '../../components/dummy';

export default async (req, res) => {
  if (req.method === 'GET') return res.status(200).json(applicants);
};

// else {
//   const result = await axios({
//     method: 'post',
//     url: `${process.env.NEXT_PUBLIC_BASE_URL}/postResume`,
//     data: req.body,
//     headers: {
//       'Content-Type': `multipart/form-data`,
//     },
//   });
//   return res.status(200).send(result.data);
// }
