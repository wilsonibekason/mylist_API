import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    error instanceof Error && error.message;
  }
};

export { connectDatabase };
