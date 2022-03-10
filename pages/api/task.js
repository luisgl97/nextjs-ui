// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import TaskSchema from "../../models/Task";
// export default function handler(req, res) {
//   // res.status(200).json({ name: 'John Doe' })

//   //POST api/task

//   const { method } = req;
//   switch (method) {
//     case "POST":
//       try {
//         const task = new TaskSchema(req.body);
//         await task.save();

//       } catch (error) {
//         return res
//         .status(400)
//         .json({ success: false, error: "Falla de servidor" });
//       }
//     default:
//       return res
//         .status(500)
//         .json({ success: false, error: "Falla de servidor" });
//   }
// }
