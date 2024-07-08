use("kec-crud");

//? Create "person" collection
// db.person.insertMany([
//   { firstName: "Rohan", lastName: "Bhandari", address: "Sydney" },
//   { firstName: "Rohil", lastName: "Khadka", address: "Udaypur" },
//   { firstName: "Enish", lastName: "Shrestha", address: "Kathmandu" },
// ]);

//? Create "vehicle" collection (with id from person table as ownerId)

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb313c0e5c0cddeb847cc"),
//   },

//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb313c0e5c0cddeb847cd"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2024,
//     ownerId: ObjectId("668bb313c0e5c0cddeb847ce"),
//   },
// ]);

//* $lookup
//? to query between collections

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" }, //? $first refers to the first object inside ownerDetails array
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//       _id: 0,
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Rohan",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle", //? always check in compass
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       ownerFullName: { $concat: ["$firstName", " ", "$lastName"] },
//       vehicleModel: { $arrayElemAt: ["$vehicleDetails.model", 0] }, //? $arrayElemAt can be used as replacement of $first (here 0 refers to the first element of array)
//       vehicleBrand: { $first: "$vehicleDetails.brand" },
//       _id: 0,
//     },
//   },
//   {
//     $project: {
//       ownerFullName: 1,
//       vehicleName: { $concat: ["$vehicleBrand", " ", "$vehicleModel"] },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "Tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb313c0e5c0cddeb847ce"),
// });

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       localField: "_id",
//       from: "vehicle",
//       foreignField: "ownerId",
//       as: "vehicleData",
//     },
//   },
//   {
//     $project: {
//       ownerFullName: { $concat: ["$firstName", " ", "$lastName"] },
//       firstVehicleModel: { $first: "$vehicleData.model" },
//       firstVehicleBrand: { $first: "$vehicleData.brand" },
//       secondVehicleModel: { $last: "$vehicleData.model" },
//       secondVehicleBrand: { $last: "$vehicleData.brand" },
//     },
//   },
//   {
//     $project: {
//       ownerFullName: 1,
//       firstVehicleName: {
//         $concat: ["$firstVehicleBrand", " ", "$firstVehicleModel"],
//       },
//       secondVehicleName: {
//         $concat: ["$secondVehicleBrand", " ", "$secondVehicleModel"],
//       },
//       _id: 0,
//     },
//   },
// ]);
