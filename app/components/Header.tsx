"use client";

import Link from "next/link";
import { getUserCS } from "firebase-nextjs/client/auth";
import { LogoutButton } from "firebase-nextjs/client/components";

export default function Header() {
  const { currentUser } = getUserCS();
  return (
    <header className="w-full py-4 px-6 bg-slate-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Meu App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {currentUser ? (
              <>
                <li>
                  <Link href="/" className="hover:underline">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/table" className="hover:underline">
                    Tabela
                  </Link>
                </li>
                <li>
                  <LogoutButton>
                    <button> Log Out </button>
                  </LogoutButton>
                </li>
              </>
            ) : (
              <li>
                <h1>LOGO</h1>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
