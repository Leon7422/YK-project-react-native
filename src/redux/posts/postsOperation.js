import {
  addDoc,
  collection,
  getDocs,
  query,
  getCountFromServer,
  where,
  doc,
} from "firebase/firestore";
import app from "../../firebase/config";
import { getFirestore } from "firebase/firestore";
import dateFormatCreatorForComment from "../../helpers/dateFormatCreatorForComment";

import { postsAction } from "./postsSlice";

const getAllPosts = () => async (dispatch, getState) => {
  try {
    const db = getFirestore(app);
    const { userId } = getState().auth;

    const posts = await getDocs(collection(db, "posts"));

    const newPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, "comments")
      );
      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, "likes")
      );
      const countLikes = snapshotLikes.data().count;

      const q = query(
        collection(doc.ref, "likes"),
        where("authorId", "==", userId)
      );
      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updatePosts(payload));
  } catch (error) {
    alert(error.message);
  }
};

const getOwnPosts = () => async (dispatch, getState) => {
  try {
    const db = getFirestore(app);
    const { userId } = getState().auth;
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    const posts = await getDocs(q);

    const newPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, "comments")
      );
      const countComments = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, "likes")
      );
      const countLikes = snapshotLikes.data().count;

      const q = query(
        collection(doc.ref, "likes"),
        where("authorId", "==", userId)
      );
      const likes = await getDocs(q);

      return {
        ...doc.data(),
        id: doc.id,
        countComments,
        countLikes,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(postsAction.updateOwnPosts(payload));
  } catch (error) {
    alert(error.message);
  }
};

const uploadPostToServer = (post) => async (dispatch, getState) => {
  const db = getFirestore(app);
  await addDoc(collection(db, "posts"), {
    ...post,
  });

  dispatch(getAllPosts());
  dispatch(getOwnPosts());
};

const addCommentByPostID =
  (postId, commentData) => async (dispatch, getState) => {
    try {
      const db = getFirestore(app);

      const { nickName, userId, userAvatar } = getState().auth;

      const comment = {
        comment: commentData,
        authorName: nickName,
        authorId: userId,
        date: Date.now(),
        postId: postId,
        userAvatar: userAvatar,
      };

      const docRef = doc(db, "posts", postId);

      await addDoc(collection(docRef, "comments"), { ...comment });

      dispatch(getAllCommentsByPostId(postId));
    } catch (error) {
      alert(error.message);
    }
  };

const getAllCommentsByPostId = (postId) => async (dispatch, getState) => {
  try {
    const db = getFirestore(app);
    const docRef = doc(db, "posts", postId);

    const comments = await getDocs(collection(docRef, "comments"));

    const payload = comments.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      date: dateFormatCreatorForComment(doc.data().date),
      dateForSort: doc.data().date,
    }));

    dispatch(postsAction.updateCommentsToPost(payload));
  } catch (error) {
    alert(error.message);
  }
};

const postOperation = {
  getOwnPosts,
  getAllPosts,
  uploadPostToServer,
  addCommentByPostID,
  getAllCommentsByPostId,
};

export default postOperation;
