import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: Service
}


const ServiceItem = ({service}: ServiceItemProps) => {
  return (
    <Card>
      <CardContent>
        <div>
          <Image src={service.imageUrl} alt={service.name} />
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem;
