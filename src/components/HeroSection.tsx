
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-r from-musketeer-blue via-musketeer-dark to-musketeer-blue text-white py-16 md:py-24",
        className
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <Icon name="Swords" className="text-musketeer-gold" size={36} />
          <Icon name="Shield" className="text-musketeer-red ml-3" size={36} />
        </div>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
          Три мушкетера
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-6">
          Захватывающий роман Александра Дюма о приключениях, дружбе, чести и отваге в эпоху правления Людовика XIII
        </p>
        <div className="font-playfair italic text-musketeer-gold text-xl md:text-2xl">
          "Один за всех и все за одного!"
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
