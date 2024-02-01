import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <div>
      <Card>
        <CardContent className="flex justify-between pl-5 pr-0 py-0">
          <div className="flex flex-col py-5 gap-3">
            <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
            <h2 className="font-bold">Corte de Cabelo</h2>
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" alt="Corte de Cabelo" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <h3 className="text-sm">Vintage Barber</h3>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-5">
            <p className="text-sm">fevereiro</p>
            <p className="text-2xl">28</p>
            <p className="text-sm">09:30</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingItem;
