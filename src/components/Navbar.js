import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Chip,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbLogout2 } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Appbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const logout = () => {
    localStorage.clear()
    router.push("/");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token == null || token?.trim() === "") {
        router.push("/");
      }
      if (token == null || token?.trim() === "") {
        router.push("/dashboard");
      }
    }
  }, [router]);


  return (
    <Navbar className="mx-auto max-w-screen-3xl px-4 py-2 rounded-none flex justify-center">
      <div className="flex items-center justify-between text-blue-gray-900 w-full max-w-screen-2xl">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 nunito"
        >
          Epic Coders
        </Typography>


        <div className="gap-2 flex">
        <Chip
          icon={
            <Avatar
              size="lg"
              variant="circular"
              className="h-full w-full"
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
          }
          value={
            <Typography
              variant="small"
              color="white"
              className="text-xs capitalize leading-none"
            >
              Tania Andrew
            </Typography>
          }
          size="lg"
          className="rounded-full hidden md:flex"
        />

          <Button
            variant="gradient"
            size="sm"
            className="nunito flex item-center gap-1"
            color="red"
            onClick={logout}
          >
            <TbLogout2 size={18} /> Log Out
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
