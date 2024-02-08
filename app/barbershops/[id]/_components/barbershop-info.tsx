"use client";
import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop
}

const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {

  const router = useRouter();
  const handleBackHome = () => {
    router.replace('/');
  }

  return (
      <div>
      <div className='h-[250px] w-full relative'>
        <Button onClick={handleBackHome} variant="outline" size="icon" className='absolute top-4 left-4 z-50'>
          <ChevronLeftIcon size={18} />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className='absolute top-4 right-4 z-50'>
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
        
        <Image 
          src={barbershop.imageUrl}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          alt={barbershop.name} 
          className='opacity-75 max-w-full'/>
      </div>
      <div className='px-5 pt-3 pb-6 border-b border-solid border-secondary'>
        <h1 className='text-xl font-bold'>{barbershop.name}</h1>
        <div className='flex items-center gap-2 mt-2'>
          <MapPinIcon size={18} className='fill-primary stroke-primary'/>
          <p className='text-sm'>{barbershop.address}</p>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <StarIcon size={18} className='fill-primary stroke-primary'/>
          <p className='text-sm'>5.0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  )
}

export default BarbershopInfo;
