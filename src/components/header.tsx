import { Auth } from "./auth";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="flex justify-between px-10">
      <h6>webloom</h6>
      <ThemeToggle />
      <Auth />
    </div>
  );
}
