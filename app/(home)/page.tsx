import { format } from "date-fns"
import Header from "../_components/header";
import { pt } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop";
import { Key } from "react";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      <div className="py-6 px-5 flex flex-col gap-1">
          <h2 className="text-xl font-bold">
              Olá, Helder!
          </h2>
          <p className="text-sm">
              {format(new Date(), "EEEE',' dd 'de' MMMM", {
                locale: pt
              })} 
          </p> 
      </div>

      <div className="px-5 py-0">
        <Search />
      </div>

      <div className="mt-9 px-5">
        <h3 className="text-xs mb-3 uppercase text-gray-500 font-bold">Agendamentos</h3>
        <BookingItem />
      </div>

      <div className="mt-9">
          <h3 className="text-xs px-5 mb-3 uppercase text-gray-500 font-bold">Recomendados</h3>
          
          <div className="flex gap-4 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {barbershops.map((barbershop: { id: any; }) => (
                <BarbershopItem key={barbershop.id} barbershop={barbershop} />
              ))}
          </div>
      </div>
    </div>

  );
}
