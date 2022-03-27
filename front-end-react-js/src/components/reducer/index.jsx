import thunk from "redux-thunk";

import axios from "axios";
import {
  createSlice,
  createStore,
  combineReducers,
  createAsyncThunk,
  applyMiddleware,
} from "@reduxjs/toolkit";

//base ur

const urlAPi = "http://127.0.0.1:8000/shoping/";
//createAsyncThunk get data from api 
 
//#region get 


export const todoapis = createAsyncThunk(
  "Api/todoapis",
  async (args, thankAPI) => {
    const { RejectWithValue } = thankAPI;
    try {
      return await axios(urlAPi).then((res) => {
        const data = res.data;
        console.log(data);
        return data;
      });
    } catch (error) {
      return RejectWithValue(error.message);
    }
  }
);
//#endregion

//createAsyncThunk post data from api
//#region post
export const postdata = createAsyncThunk(
  "Api/postdata",
  async (addData, thankAPI) => {
    const { RejectWithValue } = thankAPI;
    try {
      await axios
        .post(urlAPi, addData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return RejectWithValue(error.message);
    }
  }
);
//#endregion

//createAsyncThunk delte
//#region
export const deleteitem = createAsyncThunk(
  "Api/deleteitem",
  async (id, thankAPI) => {
    const { RejectWithValue } = thankAPI;
    try {
      axios.delete(`http://127.0.0.1:8000/shoping/${id}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
    } catch (error) {
      return RejectWithValue(error.message);
    }
  }
);
//#endregion


//createAsyncThunk update
//#region
export const updateItem = createAsyncThunk(
  "Api/updateItem",
  async ([allupdate, id], thankAPI) => {
    const { RejectWithValue } = thankAPI;
    try {
      await axios({
        method: "PUT",
        url: `http://localhost:8000/shopingupdate/${id}`,
        data: allupdate,
      })
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      return RejectWithValue(error.message);
    }
  }
);
//#endregion


//create slice all method post get put delete
const apiSlice = createSlice({
  name: "Api",
  initialState: { books: [], isloading: false, error: true },
  extraReducers: {
  //#region get 
    [todoapis.pending]: (state, action) => {
      state.isloading = true;
      state.error = true;
    },
    [todoapis.fulfilled]: (state, action) => {
      state.isloading = false;
      state.books = action.payload;
    },
    [todoapis.rejected]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;

      console.log(action);
    },
    //#endregion 

    //#region post
    [postdata.pending]: (state, action) => {
      state.isloading = true;
      state.error = true;
    },
    [postdata.fulfilled]: (state, action) => {
      state.isloading = false;
      state.books.push(action.payload);
    },
    [postdata.rejected]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;

      console.log(action);
    },
    //#endregion post

  //#region delete
 
    [deleteitem.pending]: (state, action) => {
      state.isloading = true;
      state.error = true;
    },
    [deleteitem.fulfilled]: (state, action) => {
      state.isloading = false;
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
    [deleteitem.rejected]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;

      console.log(action);
    },
    //#endregion delete



    //#region  update
    updateItem: (state, action) => {
      state.books = action.payload;
    },
    //#endregion
  },
});

//combineReducers object all data pass  in stote 
const allData = combineReducers({
  apiSlice: apiSlice.reducer,
});

export const Store = createStore(allData, applyMiddleware(thunk));
