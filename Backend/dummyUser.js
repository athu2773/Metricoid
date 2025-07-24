const { default: mongoose } = require("mongoose");
const userModel = require("./models/user.model");

mongoose
  .connect(
    "mongodb+srv://lms_db:2khARTDSooAMxxTZ@cluster0.9ftnnen.mongodb.net/Metricoid"
  )
  .then(async () => {
    console.log("Database Connected");

    await userModel.deleteMany();

    const dummyUsers = [
      {
        name: "Atharva Sawant",
        email: "Atharva@gmail.com",
        phone: "9766632773",
        company: "Metricoid",
        address: "ambernath",
        website: "Atharva.io",
        avatar:
          "https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg",
      },
      {
        name: "Purva Sawant",
        email: "pura@gmail.com",
        phone: "97666332773",
        company: "Metricoid",
        address: "ambernath",
        website: "pua.io",
        avatar:
          "https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg",
      },
      {
        name: "kaita Sawant",
        email: "kai@gmail.com",
        phone: "9566327373",
        company: "Metricoid",
        address: "ambernath",
        website: "kaita.io",
        avatar:
          "https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg",
      },
    ];
    await userModel.insertMany(dummyUsers);
    console.log("Dummy uses inseted");
    process.exit();
  })
  .catch((err) => console.log(err));
