import User from '../models/user.model';
import { connect } from '../mongodb/mongoose';

export const createOrUpdateUser = async (
    id: string, // Changed to lowercase 'string'
    firstName: string, // Changed to lowercase 'string'
    lastName: string, // Changed to lowercase 'string'
    imageUrl: string, // Changed to lowercase 'string'
    emailAddresses: string[], // Changed to lowercase 'string[]'
    username: string // Changed to lowercase 'string'
) => {
  try {
    await connect();

    // Handle email addresses correctly
    const email = emailAddresses.length > 0 ? emailAddresses[0] : '';

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          avatar: imageUrl,
          email: email, // Fixed: directly using the email string
          username: username,
        },
      },
      { new: true, upsert: true }
    );

    return user;
  } catch (error) {
    console.error('Error creating or updating user:', error);
  }
};

export const deleteUser = async (id: string) => { // Changed to lowercase 'string'
  try {
    await connect();

    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
