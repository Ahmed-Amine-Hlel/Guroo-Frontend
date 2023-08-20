import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setLoading, setUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { LogInViewModel } from "../../modules/onbording/viewModels/LogInViewModel";

const logInViewModel = new LogInViewModel();

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (code: string) => {
    const dispatch = useDispatch();

    try {
      dispatch(setLoading(true));
      const user = await logInViewModel.googleAuth(code);
      dispatch(setUser(user));
      dispatch(setError(null));
      return user;
    } catch (error) {
      dispatch(setError("Login failed"));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }
);

//
// export const logout = createAsyncThunk<void, void>(
//     'auth/logout',
//     async (_, {dispatch}) => {
//         try {
//             dispatch(setLoading(true));
//             await authUseCase.logout();
//             dispatch(setUser(null));
//             dispatch(setError(null));
//         } catch (error) {
//             dispatch(setError('Logout failed'));
//             throw error;
//         } finally {
//             dispatch(setLoading(false));
//         }
//     }
// );
