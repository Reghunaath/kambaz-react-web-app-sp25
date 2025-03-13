import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import courseReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./Courses/Enrollment/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentReducer,
    courseReducer,
    enrollmentReducer,
  },
});
export default store;
