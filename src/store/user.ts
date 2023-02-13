import { User } from "modules/users/interfaces/user"
import { create } from "zustand"

export enum AuthState {
  LOADING,
  SUCCESS,
  FAIL,
}

interface UserState {
  state: AuthState
  user: User | null
  setUser(user: User): void
  clearUser(): void
}

export const useUserStore = create<UserState>((set) => ({
  state: AuthState.LOADING,
  user: null,
  setUser: (user: User) =>
    set({
      state: AuthState.SUCCESS,
      user,
    }),
  clearUser: () =>
    set({
      state: AuthState.FAIL,
      user: null,
    }),
}))
