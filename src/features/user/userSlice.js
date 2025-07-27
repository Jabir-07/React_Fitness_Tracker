import { createSlice } from "@reduxjs/toolkit";
import Bmi from "../../Components/Bmi";

const initialState = {
  userName: "",
  cat: "", // 🔸 Add this line
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setCat: (state, action) => {
      state.cat = action.payload; // 🔸 New reducer
    },
  },
});

export const { setUserName, setCat } = userSlice.actions; // 🔸 Export setCat
export default userSlice.reducer;
