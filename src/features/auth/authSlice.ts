// features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadUserFromStorage } from "../../utils/main-utils";
// types.d.ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
  prime: boolean;
  image?: string;
  imageName?: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
  creationDate?: Date;
}

// Define a type for the slice state
interface AuthState {
  user: User | null;
  tokens: Tokens | null;
}

const persistedUser = loadUserFromStorage();
// Define the initial state using that type
const initialState: AuthState = {
  user: persistedUser || null,
  tokens: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; tokens: Tokens }>
    ) => {
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
    },
    logout: (state) => {
      state.user = null;
      state.tokens = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
