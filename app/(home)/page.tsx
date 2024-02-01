import { format } from "date-fns"
import Header from "../_components/header";
import { pt } from "date-fns/locale";
import Search from "./_components/search";

export default function Home() {
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
    </div>

  );
}
