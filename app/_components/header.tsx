"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarDaysIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {

  const handleCLickLogin = async () => {
    await signIn('google');
  }

  const { data } = useSession();

  return (
    <Card>

      <CardContent className="py-6 px-5 flex justify-between items-center" >
        <Image src="/logo.png" alt="FSW Barber" width={130} height={22} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="p-5 border-b border-solid border-secondary text-left">
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            {data?.user ? (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 px-5 py-6">
                      <Avatar>
                        <AvatarImage src={data.user?.image ?? ""} />
                      </Avatar>

                      <h2 className="font-bold">{data.user?.name}</h2>
                    </div>

                    <Button variant="secondary" size="icon">
                      <LogOutIcon onClick={()=>signOut()} />
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 px-5 py-6">
                    <div className="flex items-center gap-2">
                      <UserIcon size={32} />

                      <h2 className="font-bold">Olá, faça seu login</h2>
                    </div>

                    <Button variant="secondary" size="icon" className="w-full justify-start px-3">
                      <LogInIcon onClick={handleCLickLogin} className="mr-3" size={18} />
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
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header;
