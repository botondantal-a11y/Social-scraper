import { auth, signOut } from "@/auth";

export default async function UserMenu() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 12,
        right: 16,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "6px 10px",
        borderRadius: 999,
        border: "1px solid rgba(128,128,128,0.3)",
        background: "rgba(20,20,25,0.75)",
        backdropFilter: "blur(8px)",
        color: "#eee",
        fontSize: "0.85rem",
      }}
    >
      {session.user.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={session.user.image}
          alt=""
          referrerPolicy="no-referrer"
          style={{ width: 26, height: 26, borderRadius: "50%" }}
        />
      )}
      <span style={{ maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {session.user.name || session.user.email}
      </span>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button
          type="submit"
          title="Kijelentkezés"
          style={{
            border: "none",
            background: "transparent",
            color: "#f87171",
            cursor: "pointer",
            fontSize: "0.85rem",
            padding: 0,
          }}
        >
          Kilépés
        </button>
      </form>
    </div>
  );
}
