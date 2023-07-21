import { configureStore } from "@reduxjs/toolkit";
import navSidebarSliceReducer from "../features/navSidebarSlice";
import accountOptionReducer from "../features/accountOptionSlice"
import optionSelectedReducer from "../features/optionSelectedSlice";
import notificationReducer from "../features/notificationSlice";
import signUpReducer from "../features/signUpSlice";
import signInReducer from "../features/SignInSlice";
import adminNavOptionReducer from "../features/adminNavOptionSlice";
import adminNavbarSidebarReducer from "../features/adminNavbarSidebarSlice";
import adminAddStateReducer from "../features/adminAddStateSlice";
import adminAddCityReducer from "../features/adminAddCitySlice";
import adminAddUserReducer from "../features/adminAddUserSlice";
import adminStatesReducer from "../features/adminStatesSlice";
import adminCitiesReducer from "../features/adminCitiesSlice";
import adminUsersReducer from "../features/adminUsersSlice";
import authReducer from "../features/authSlice";
import searchReducer from "../features/searchSlice";
import roleReducer from "../features/roleSlice";
import statesReducer from "../features/statesSlice";
import citiesReducer from "../features/citiesSlice";
import mainFrameSidebarReducer from "../features/mainFrameSidebarSlice";
import dataFrameReducer from "../features/dataFrameSlice";
import postReducer from "../features/postSlice";

export const store = configureStore({
    reducer: {
        navSidebar: navSidebarSliceReducer,
        accountOption: accountOptionReducer,
        optionSelected: optionSelectedReducer,
        notification: notificationReducer,
        signUp: signUpReducer,
        signIn: signInReducer,
        adminNavOption: adminNavOptionReducer,
        adminNavbarSidebar: adminNavbarSidebarReducer,
        adminAddState: adminAddStateReducer,
        adminAddCity: adminAddCityReducer,
        adminAddUser: adminAddUserReducer,
        adminStates: adminStatesReducer,
        adminCities: adminCitiesReducer,
        adminUsers: adminUsersReducer,
        auth: authReducer,
        search: searchReducer,
        role: roleReducer,
        states: statesReducer,
        cities: citiesReducer,
        mainFrameSidebar: mainFrameSidebarReducer,
        dataFrame: dataFrameReducer,
        post: postReducer
    }
})