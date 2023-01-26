import { GET_USER, GET_DATA } from "./ActionType";
import firebase from "../../services/firebase";
import { database } from "../../services/firebase";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = (await database.collection("items").get()).docs;

    const data = querySnapshot.map((el) => {
      return {
        ...el.data(),
        docId: el.id,
      };
    });
    dispatch(getData(data));
  } catch (err) {
    dispatch(getData([]));
  }
};

const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export { fetchData, getData };
