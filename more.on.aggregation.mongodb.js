use("kec-crud");

db.movies.find();

//?Find movies whose status is "Ended"

// db.movies.aggregate([
//   {
//     $match: {
//       status: "Ended",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       status: 1,
//     },
//   },
// ]);

// ?find movies whose rating is 9
// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": 9,
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose rating is greater than 7 and less than 9

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 7, $lt: 9 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// ?find movies whose genres is Thriller

// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Thriller",
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   },
// ]);

//? find movies whose status is Ended and runtime is 60
//? (show first 8 movies in descending order of id)

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ status: "Ended" }, { runtime: 60 }],
//     },
//   },
//   {
//     $sort: {
//       id: -1,
//     },
//   },
//   { $limit: 8 },
//   {
//     $project: {
//       id: 1,
//       _id: 0,
//       name: 1,
//       status: 1,
//       runtime: 1,
//     },
//   },
// ]);

// ?find movies whose weight is 75 and network country is Canada

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       weight: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

// ?find movies whose weight is 96 or runtime is 60

// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ weight: 96 }, { runtime: 60 }],
//     },
//   },
//   {
//     $limit: 5,
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       weight: 1,
//       runtime: 1,
//     },
//   },
// ]);

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8

//* alternative: (if various $or is being applied on same field than
//* it can be replaced by $in)

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
//     },
//   },
//   {
//     $sort: {
//       name: 1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// ? find movies whose genres includes 'Drama' , "Comedy" and "Action"
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy", "Action"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   },
// ]);

// ? find movies whose genre size is 3
//? list 8 movies in descending naming order
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $size: 3 },
//     },
//   },
//   {
//     $sort: {
//       name: -1,
//     },
//   },
//   { $limit: 8 },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       genres: 1,
//     },
//   },
// ]);

// ? find movies whose genres is neither "Thriller" nor "Action"
// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $nin: ["Action", "Thriller"] },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);
