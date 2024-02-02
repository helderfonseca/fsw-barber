
import { db } from '@/app/_lib/prisma'
import ServiceItem from './_components/service-item';
import BarbershopInfo from './_components/barbershop-info';

interface BarbershopDetailsPageProps {
  params: {
    id?: string
  }
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

  if (!params.id) {
    // TODO: redirect to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  })

  if (!barbershop) {
    // TODO: redirect to home page
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />
      {barbershop?.services?.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  )
}

export default BarbershopDetailsPage;
