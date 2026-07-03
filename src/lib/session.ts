import { auth } from "@/auth";

export type SessionUser = { id: string; name: string | null; email: string | null; image: string | null };

/** A bejelentkezett felhasználó lekérése API route-okban. */
export async function getSessionUser(): Promise<SessionUser | null> {
  const session = await auth();
  const user = session?.user as (SessionUser & { id?: string }) | undefined;
  if (!user?.id) return null;
  return {
    id: user.id,
    name: user.name ?? null,
    email: user.email ?? null,
    image: user.image ?? null,
  };
}

/** Szűrő: saját (privát+megosztott) VAGY mások megosztott tartalmai. */
export function visibleToUser(userId: string | null, scope?: string | null) {
  if (scope === "mine" && userId) return { ownerId: userId };
  if (scope === "shared") return { visibility: "shared" };
  if (!userId) return { visibility: "shared" };
  return { OR: [{ visibility: "shared" }, { ownerId: userId }] };
}
