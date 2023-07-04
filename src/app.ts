import { browser } from "$app/env";
import { goto } from "$app/navigation";
import { session } from "$app/stores";
import { authenticateUser } from "./lib/auth";

if (browser) {
  authenticateUser().then((user) => {
    if (user) {
      session.set({ user });
    } else {
      goto("/login");
    }
  });
}
