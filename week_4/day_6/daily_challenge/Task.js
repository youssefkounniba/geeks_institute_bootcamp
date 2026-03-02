await Task.create({
  description: "This should fail"
});
// ValidationError: Task validation failed: description: Path `description` is required.
await Task.create({
  title: "Invalid Status Test",
  status: "in-progress"
});// ValidationError: Task validation failed: status: `in-progress` is not a
//  valid enum value for path `status`.
await Task.find();
// [ { _id: 5f8d0d55b54764421b7156c1,
//     title: 'First Task',
//     description: 'This is the first task',
//     status: 'pending',
//     createdAt: 2020-10-18T12:00:00.000Z,
//     updatedAt: 2020-10-18T12:00:00.000Z,
//     __v: 0 } ]

await Task.findByIdAndUpdate(
  taskId,
  { status: 'completed' },
  { runValidators: true, new: true }
);
