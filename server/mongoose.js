const mongoose = require("mongoose");

const connection = "mongodb://localhost/taskdb";

(async () => {
  const db = await mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
	console.log(db.connection.name)
})();
