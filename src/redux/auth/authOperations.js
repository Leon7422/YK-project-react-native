import db from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authLogin = () => async (dispatch, getState) => {};
const authRegister =
  ({ email, password, nick }) =>
  async (dispatch, getState) => {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
const authLogout = () => async (dispatch, getState) => {};

const authOperations = {
  authLogin,
  authRegister,
  authLogout,
};

export default authOperations;
