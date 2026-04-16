import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // ஒரே ஈமெயிலில் இரண்டு பேர் பதிவு செய்ய முடியாது
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false, // புதிய பயனர் சேரும்போது அவர் தானாகவே 'User' ஆக இருப்பார்
    },
  },
  {
    timestamps: true, // இது தானாகவே எப்போது பயனர் உருவானார் என்ற நேரத்தைச் சேர்க்கும்
  }
);

const User = mongoose.model("User", userSchema);

export default User;