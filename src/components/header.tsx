import { Auth } from "./auth";

export function Header() {
  return (
    <div className="flex justify-between px-10">
      <h6>webloom</h6>
      <Auth />
    </div>
  );
}
