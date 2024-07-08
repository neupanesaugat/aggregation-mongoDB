use("kec-crud");

//? aggregation => powerful query tool (just like find)
//? uses pipeline stage

//* $match
//* $project

// db.movies.aggregate({
//   $match: {
//     name: "Glee",
//   },
// });

// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

//? find movies whose genres is "Crime" or network country is "United States"

// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",
//     },
//   },
// ]);

//? find movies whose genre includes both "Drama and "Comedy"
//? and project "name" and "genre" field

// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

//* $sort => arranges the data either in ascending or in descending order
//? 1 => ascending sort
//? -1 => descending sort

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.insertOne({
//   id: 249,
//   name: "Prison Break",
// });

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: -1,
//       name: 1, //? compound sort (sorting for two fields with same values (eg:id))
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: 1, //? preference is given first to the numbers then only alphabetical order (in case of ascending)
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: -1, //? preference is given first to the small letters then only capital letter order (in case of descending)
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

//* $limit => number of documents to be returned

// db.movies.insertOne({ id: 17, name: "Money Heist" });

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       _id: 0,
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

//? find 5 movies whose rating is greater than 8
//?  and id is sorted in ascending order

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $limit: 5 },
//   {
//     $project: {
//       averageRating: "$rating.average",
//       name: 1,
//       _id: 0,
//       id: 1,
//     },
//   }
// ]);

//* $skip

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $skip: 5 },
//   { $limit: 2 },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       id: 1,
//     },
//   },
// ]);

//? $skip (in pagination)

// let page = 2;
// let limit = 10;
// let skip = (page - 1) * limit; //? Skip's formula for pagination

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   { $skip: skip },
//   { $limit: limit },
//   {
//     $project: {
//       name: 1,
//       _id: 0,
//       id: 1,
//     },
//   },
// ]);
