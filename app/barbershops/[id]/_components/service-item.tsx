"use client";
import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop, Service } from "@prisma/client";
import { pt } from "date-fns/locale/pt";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { generateDayTimeList } from "../_helpers/hours";
import { format } from "date-fns";

interface ServiceItemProps {
  barbershop: Barbershop,
  service: Service,
  isAuthenticated: boolean
}


const ServiceItem = ({service, barbershop, isAuthenticated}: ServiceItemProps) => {
  
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [hour, setHour] = useState<string | undefined>();

  const handleBookingClick = () => {
    if (!isAuthenticated) {
      return signIn('google');
    }
  }

  const timeList = useMemo(() => {
    return date ? generateDayTimeList(date) : [];
  },[date]);

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  }

  const handleTimeClick = (time: string) => {
    setHour(time);
  }

  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex gap-4">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              className="rounded-lg"
              src={service.imageUrl}
              alt={service.name}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }} />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt",
                {
                  style: "currency",
                  currency: "CVE",
                }).format(Number(service.price))}</p>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="secondary" onClick={handleBookingClick}>
                    Reservar
                  </Button>
                </SheetTrigger>

                <SheetContent className="p-0">
                  <SheetHeader className="text-left px-5 py-6 border-b border-solid border-secondary">
                    <SheetTitle>Fazer Reserva</SheetTitle>
                  </SheetHeader>
                  
                  <div className="py-6">
                    <Calendar 
                      mode="single"
                      selected={date}
                      onSelect={handleDateClick}
                      className="rounded-md"
                      fromDate={new Date()}
                      locale={pt}
                      styles={{
                        head_cell: {
                          width: "100%",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                      }}
                    />
                  </div>

                  {date && (
                    <div className="px-5 py-6 flex overflow-x-auto border-y 
                      border-solid border-secondary [&::-webkit-scrollbar]:hidden">
                      {timeList.map(time => (
                        <Button key={time} variant={
                          hour === time ? "default" : "outline"
                          }
                          className="border rounded-full" onClick={() => handleTimeClick(time)}>
                          {time}
                        </Button>
                      ))}
                    </div>
                  )}

                  <div className="py-6 px-5 border-t border-solid border-secondary">
                    <Card>
                      <CardContent className="p-3 flex flex-col gap-3">
                        <div className="flex justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <h3>
                            {""}
                            {Intl.NumberFormat("pt", {
                              style: "currency",
                              currency: "CVE"
                            }).format(Number(service.price))}
                          </h3>
                        </div>

                        {date && (
                          <div className="flex justify-between">
                            <h3 className="text-gray-400">Data</h3>
                            <h4 className="text-sm">{format(date, "dd 'de' MMMM", {
                              locale: pt
                            })}</h4>
                          </div>
                        )}

                        {hour && (
                          <div className="flex justify-between">
                            <h3 className="text-gray-400">Horário</h3>
                            <h4 className="text-sm">{hour}</h4>
                          </div>
                        )}

                        
                        <div className="flex justify-between">
                          <h3 className="text-gray-400">Barbearia</h3>
                          <h4 className="text-sm">{barbershop?.name}</h4>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <SheetFooter className="px-5">
                    <Button disabled={!hour || !date }>
                      Confirmar reserva
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
              
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem;
