import { Auth } from "./auth";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <div className="flex justify-between base-container">
      <h6>webloom</h6>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Auth />
      </div>
    </div>
  );
}
