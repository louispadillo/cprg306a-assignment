"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="text-sm font-medium text-blue-700 underline hover:text-blue-500"
        >
          ← Back to Home
        </Link>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Shopping List</h1>
          <p className="mt-2 text-sm text-slate-600">CPRG 306 · Week 9</p>

          {user ? (
            <div className="mt-8">
              <p className="text-slate-700">
                Welcome,{" "}
                <span className="font-semibold text-slate-900">
                  {user.displayName}
                </span>{" "}
                ({user.email})
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/week-9/shopping-list"
                  className="rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-blue-500"
                >
                  Go to Shopping List
                </Link>
                <button
                  type="button"
                  onClick={firebaseSignOut}
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-sm text-slate-600">
                Sign in to view and manage your shopping list.
              </p>
              <button
                type="button"
                onClick={gitHubSignIn}
                className="mt-6 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
              >
                Sign in with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
