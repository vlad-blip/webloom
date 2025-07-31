import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignIn from "./sign-in";
import { auth } from "@/auth";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "@/auth";
import { Separator } from "./ui/separator";

export async function Auth() {
  const session = await auth();

  return !session?.user ? (
    <SignIn />
  ) : (
    <Popover>
      <PopoverTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={session.user.image ?? ""} />
          <AvatarFallback>
            {session.user.name?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <p>{session.user.name}</p>
        <p className="opacity-50">{session.user.email}</p>
        <Separator className="my-2" />
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit" className="w-full">
            Logout
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
