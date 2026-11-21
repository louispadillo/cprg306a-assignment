import { AuthContextProvider } from "./_utils/auth-context";

// wraps every page inside week-9 so they can all use the useUserAuth hook
export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
