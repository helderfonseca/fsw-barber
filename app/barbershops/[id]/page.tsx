
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

      <div className='flex flex-col px-5 py-6 gap-4'>
        {barbershop?.services?.map((service: any) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopDetailsPage;
