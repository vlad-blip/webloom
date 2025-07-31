import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignIn from "./sign-in";
import { auth } from "@/auth";

export async function Auth() {
  const session = await auth();

  return !session?.user ? (
    <SignIn />
  ) : (
    <Avatar>
      <AvatarImage src={session.user.image ?? ""} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
