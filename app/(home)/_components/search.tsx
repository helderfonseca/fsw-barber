import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center space-x-2"> 
      <Input type="text" placeholder="Procura uma barbearia..." />
      <Button variant="default">
        <SearchIcon size={20} />
      </Button>
    </div>
  )
}

export default Search;
