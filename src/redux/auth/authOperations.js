import db from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { authSlice } from "./authSlice";

const authLogin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

const authRegister =
  ({ email, password, nick }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: nick,
      });
      const userSucces = auth.currentUser;
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: userSucces.uid,
          nickName: userSucces.displayName,
        })
      );
      console.log(userSucces);
    } catch (error) {
      console.log(error);
    }
  };

const authLogout = () => async (dispatch, getState) => {};
const authCurrentUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => setUser(user));
};

const authOperations = {
  authLogin,
  authRegister,
  authLogout,
  authCurrentUser,
};

export default authOperations;
