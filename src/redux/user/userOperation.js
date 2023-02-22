import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/config";
import { authAction } from "../auth/authSlice";

import uploadUserAvatarToServer from "../../api/uploadUserAvatarToServer";

const updateUserAvatar = (image) => async (dispatch, getState) => {
  const auth = getAuth(app);
  try {
    const imageUrl = await uploadUserAvatarToServer(image);

    await updateProfile(auth.currentUser, { photoURL: imageUrl });

    const user = getState().auth;
    const payload = { ...user, userAvatar: imageUrl };

    dispatch(authAction.updateUserProfile(payload));
  } catch (error) {
    alert(error.message);
  }
};

const userOperations = {
  updateUserAvatar,
};

export default userOperations;
