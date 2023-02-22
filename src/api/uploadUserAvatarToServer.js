import { nanoid } from "nanoid";
import app from "../firebase/config";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function uploadUserAvatarToServer(userAvatar) {
  try {
    const storage = getStorage(app);
    const res = await fetch(userAvatar);
    const file = await res.blob();

    const uniqueID = nanoid();
    const storageRef = ref(storage, `userAvatar/avatar_${uniqueID}`);

    await uploadBytes(storageRef, file);

    const userAvatarUrl = await getDownloadURL(storageRef);

    return userAvatarUrl;
  } catch (error) {
    alert(error.message);
  }
}
