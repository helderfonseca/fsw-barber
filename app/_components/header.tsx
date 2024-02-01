import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>

      <CardContent className="py-6 px-5 flex justify-between items-center" >
        <Image src="/logo.png" alt="FSW Barber" width={130} height={22} />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header;
