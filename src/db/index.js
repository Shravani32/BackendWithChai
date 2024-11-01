const mongoose=require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MONGODB connection FAILED', error);
    process.exit(1); // Exit the application if connection fails
  }
};

module.exports={connectDB};
