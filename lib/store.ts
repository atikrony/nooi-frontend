import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  signupData: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  setSignupData: (data: Partial<AuthState["signupData"]>) => void;
  resetSignupData: () => void;
}

const initialSignupData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      signupData: initialSignupData,

      setSignupData: (data) =>
        set((state) => ({
          signupData: { ...state.signupData, ...data },
        })),

      resetSignupData: () => set({ signupData: initialSignupData }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => sessionStorage),
      // skipHydration prevents SSR crash (sessionStorage doesn't exist on server)
      // rehydrate() is called manually in the signup page useEffect
      skipHydration: true,
    },
  ),
);
