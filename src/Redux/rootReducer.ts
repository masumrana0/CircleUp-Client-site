import authReducer from "./Slices/authSlice";
// import themeReducer from "./Slices/themeSlice";
import NavbarSlice from "./Slices/navbarSlice";
import utilitySlice from "./Slices/unitlitySlice";
import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  // themeSlice: themeReducer,
  navbarSlice: NavbarSlice,
  utilitySlice: utilitySlice,
};

export default rootReducer;
