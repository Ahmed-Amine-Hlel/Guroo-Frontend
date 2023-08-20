import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../core/src/domain/entities/User";
import { GurooAuthenticationService } from "../../core/src/adapters/realDependencies/GurooAuthenticationService";
import { UserMapper } from "../../core/src/adapters/realDependencies/mappers/UserMapper";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const userMapper = new UserMapper();
const gurooAuthenticationService = new GurooAuthenticationService(userMapper);

export const loginAsync = createAsyncThunk<User, string>(
  "auth/login",
  async (code: string) => {
    try {
      return await gurooAuthenticationService.googleAuth(code);
    } catch (error) {
      throw new Error(`Login failed: ${error}`);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    logOut: (state) => {
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("token", state.user.token);
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
        state.error = "Login failed";
        state.user = null;
      });
  },
});

export const { setUser, setLoading, setError, logOut } = authSlice.actions;

export default authSlice.reducer;
