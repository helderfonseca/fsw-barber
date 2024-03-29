"use client";
import { CalendarDaysIcon, HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

const SideMenu = () => {

  const handleCLickLogin = () => {
    signIn('google');
  }

  const { data } = useSession();

  return (
    <>
      <SheetHeader className="p-5 border-b border-solid border-secondary text-left">
        <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
      </SheetHeader>
        {data?.user ? (
            <div className="flex justify-between items-center px-5 py-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={data.user?.image ?? ""} />
                </Avatar>

                <h2 className="font-bold">{data.user?.name}</h2>
              </div>

              <Button variant="secondary" size="icon">
                <LogOutIcon onClick={() => signOut()} />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 px-5 py-6">
              <div className="flex items-center gap-2">
                <UserIcon size={32} />

                <h2 className="font-bold">Olá, faça seu login</h2>
              </div>

              <Button variant="secondary" size="icon" onClick={handleCLickLogin} className="w-full justify-start px-3">
                <LogInIcon className="mr-3" size={18} />
                Fazer Login
              </Button>
            </div>
          )}
          <div className="flex flex-col gap-3 px-5">
            <Button className="justify-start" variant="outline" asChild>
              <Link href='/'>
                <HomeIcon size={18} className="mr-2"/>
                Inicio
              </Link>
            </Button>

            {data?.user && (
              <Button className="justify-start" variant="outline" asChild>
                <Link href='/bookings'>
                  <CalendarDaysIcon size={18} className="mr-2"/>
                  Agendamentos
                </Link>
            </Button>
            )}
      </div>
    </>
  )
}

export default SideMenu
