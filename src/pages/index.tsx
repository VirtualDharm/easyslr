import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Dashboard from "~/pages/Dashboard";
import UserProfile from "~/pages/UserProfile";
import ProjectSettings from "~/pages/ProjectSettings";
import ProjectTracking from "~/pages/ProjectTracking";
import TaskManagement from "~/pages/TaskManagement";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Project Management App</title>
        <meta name="description" content="Project Management App Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Dashboard />
        <UserProfile />
        <ProjectSettings />
        <ProjectTracking />
        <TaskManagement />
        <AuthShowcase />
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined,
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
