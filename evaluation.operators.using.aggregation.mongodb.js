use("kec-crud");

//? Evaluation Operators using aggregate

//* $regex

//? incase we only know some portions of the data

// db.movies.aggregate([
//   {
//     $match: {
//       name: { $regex: "top model", $options: "i" },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {
//       summary: { $regex: "machine that spies", $options: "i" },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       summary: 1,
//     },
//   },
// ]);

// db.movies.find();

//* $expr
//? if there is no value to compare and you have to compare between two fields

//? find employees whose expense is greater than their income

// db.employee.find();
// db.employee.aggregate([
//   {
//     $match: {
//       $expr: { $gt: ["$expense", "$income"] },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       income: 1,
//       expense: 1,
//     },
//   },
// ]);
