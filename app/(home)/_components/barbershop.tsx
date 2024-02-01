import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarberShopItemProps {
  barbershop: Barbershop;
}


const BarbershopItem = ({ barbershop }: BarberShopItemProps) => {
  return (
      <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
        <CardContent className="px-1 py-0">
          <div className="w-full h-[167px] relative">
            <Badge variant="secondary" className="opacity-90 flex gap-1 items-center absolute z-50 top-2 left-2">
              <StarIcon size={12} className="fill-primary text-primary"/>
              <span className="text-xs">5.0</span>
            </Badge>
            <Image
              src={barbershop.imageUrl}
              alt={barbershop.name}
              fill
              style={{
                objectFit: "cover"
              }}
              className="rounded-2xl"
            />
          </div>

          <div className="px-2 pb-2">
            <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
            <Button variant="secondary" className="w-full mt-3">Reservar</Button>
          </div>
        </CardContent>
      </Card>
  )
}

export default BarbershopItem
