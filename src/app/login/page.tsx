import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  const { callbackUrl } = await searchParams;
  if (session?.user) redirect(callbackUrl || "/");

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          padding: "2.5rem",
          borderRadius: 16,
          border: "1px solid rgba(128,128,128,0.25)",
          textAlign: "center",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      >
        <img src="/logo.png" alt="OmniScrape" style={{ width: 64, height: 64, margin: "0 auto 1rem", objectFit: "contain" }} />
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>OmniScrape</h1>
        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Jelentkezz be a folytatáshoz. Saját profilodba menthetsz tartalmakat,
          vagy megoszthatod őket a közösben.
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: callbackUrl || "/" });
          }}
        >
          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: 8,
              border: "1px solid rgba(128,128,128,0.35)",
              background: "#fff",
              color: "#333",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            Bejelentkezés Google-fiókkal
          </button>
        </form>
      </div>
    </div>
  );
}
