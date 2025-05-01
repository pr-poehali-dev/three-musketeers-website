
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const Navbar = () => {
  return (
    <nav className="bg-musketeer-blue text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Icon name="Swords" className="text-musketeer-gold" size={28} />
          <span className="font-playfair text-xl font-bold">Три мушкетера</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-musketeer-gold transition-colors">
            Главная

            Главная
          </Link>
          <Link to="/#characters" className="hover:text-musketeer-gold transition-colors">
            Персонажи
          </Link>
          <Link to="/#about" className="hover:text-musketeer-gold transition-colors">
            О романе
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
