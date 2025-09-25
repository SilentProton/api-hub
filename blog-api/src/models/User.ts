import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updateAt: Date;
}

const UserSchema: Schema<IUser> = new Schema<IUser>({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    passwordHash: { type: String, required: true },
},
    { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>('User',UserSchema)

export default User;