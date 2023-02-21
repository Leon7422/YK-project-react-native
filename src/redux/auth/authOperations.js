import db from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { authSlice } from "./authSlice";

const authLogin =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.user.uid,
          nickName: user.user.displayName,
          userEmail: user?.user?.email,
        })
      );
      dispatch(authSlice.actions.authCurrentUser(true));
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
          userEmail: user?.user?.email,
        })
      );
      console.log(userSucces);
    } catch (error) {
      console.log(error);
    }
  };

const authLogout = () => async (dispatch, getState) => {
  const auth = getAuth();
  await signOut(auth);
  dispatch(authSlice.actions.authLogOut());
};

const authCurrentUser = () => async (dispatch, getState) => {
  const auth = getAuth();
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          nickName: user.displayName,
          userEmail: user?.email,
        })
      );
      dispatch(authSlice.actions.authCurrentUser(true));
    }
  });
};

const authOperations = {
  authLogin,
  authRegister,
  authLogout,
  authCurrentUser,
};

export default authOperations;
