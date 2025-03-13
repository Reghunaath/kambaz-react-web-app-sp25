import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments.push(newEnrollment);
    },
    deleteEnrollment: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
