"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import GoBack from "../go-back";

export default function Page() {
    // user is null when nobody is signed in
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    return (
        <main className="pb-6">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex justify-center">
                <div className="w-[500px] bg-white p-8 rounded-3xl border border-dark-600">
                    {!user && (
                        <div className="flex flex-col gap-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-center tracking-tighter text-dark-900">Sign In</h2>
                                <p className="text-center tracking-tighter text-dark-700">Sign in with GitHub to view your shopping list.</p>
                            </div>
                            <button
                                onClick={handleSignIn}
                                className="w-full p-4 rounded-2xl font-medium tracking-tighter text-white bg-dark-900 hover:bg-blue-500 enabled:active:scale-95 transition-transform duration-100"
                            >
                                Sign in with GitHub
                            </button>
                        </div>
                    )}

                    {user && (
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row items-center gap-4">
                                {user.photoURL && (
                                    <img src={user.photoURL} alt={user.displayName || "Profile picture"} className="w-14 h-14 rounded-full border border-dark-600" />
                                )}
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tighter text-dark-900">
                                        Welcome, {user.displayName || "friend"}
                                    </h2>
                                    <p className="tracking-tighter text-dark-700">{user.email}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link
                                    href="/week-9/shopping-list"
                                    className="w-full p-4 rounded-2xl font-medium text-center tracking-tighter text-white bg-dark-900 hover:bg-blue-500 active:scale-95 transition-transform duration-100"
                                >
                                    Go to Shopping List
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="w-full p-4 rounded-2xl font-medium tracking-tighter text-dark-900 bg-white border border-dark-600 hover:border-blue-500 enabled:active:scale-95 transition-transform duration-100"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center pt-6">
                <GoBack />
            </div>
        </main>
    );
}
