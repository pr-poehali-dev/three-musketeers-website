
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MusketeerCardProps {
  name: string;
  image: string;
  description: string;
  quote: string;
  color: "blue" | "red" | "gold" | "green";
  className?: string;
}

const colorVariants = {
  blue: "border-musketeer-blue hover:shadow-[0_0_15px_rgba(26,59,110,0.5)]",
  red: "border-musketeer-red hover:shadow-[0_0_15px_rgba(210,39,48,0.5)]",
  gold: "border-musketeer-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]",
  green: "border-green-600 hover:shadow-[0_0_15px_rgba(22,163,74,0.5)]",
};

const MusketeerCard = ({ name, image, description, quote, color, className }: MusketeerCardProps) => {
  return (
    <Card 
      className={cn(
        "border-2 transition-all duration-300 hover:-translate-y-2", 
        colorVariants[color],
        className
      )}
    >
      <CardHeader className="text-center pb-0">
        <div className="mx-auto h-48 w-48 overflow-hidden rounded-full mb-4 border-2 border-gray-200">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500" 
          />
        </div>
        <CardTitle className="font-playfair text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-700">{description}</p>
        <div className="mt-4 bg-gray-50 p-3 rounded-md italic border-l-4 border-gray-300">
          <CardDescription className="text-sm not-italic font-medium">Цитата:</CardDescription>
          <p className="text-sm mt-1">"{quote}"</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusketeerCard;
