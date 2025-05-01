
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MusketeerCard from "@/components/MusketeerCard";


const Index = () => {
  const musketeers = [
    {
      name: "Д'Артаньян",
      image: "https://images.unsplash.com/photo-1589182337358-2cb63099261c?q=80&w=800&auto=format&fit=crop",
      description: "Молодой гасконец, приехавший в Париж, чтобы стать мушкетером. Храбрый, импульсивный и благородный юноша, который становится верным другом трёх мушкетеров.",
      quote: "Д'Артаньяны никогда не отступают!",
      color: "red" as const
    },
    {
      name: "Атос",
      image: "https://images.unsplash.com/photo-1601576892122-a87b13f3c1c0?q=80&w=800&auto=format&fit=crop",
      description: "Самый старший из трех мушкетеров, граф де Ла Фер. Благородный, сдержанный, с таинственным прошлым. Обладает аристократическими манерами и высокими моральными принципами.",
      quote: "Если мы умрем, то умрем с честью, как подобает дворянам.",
      color: "blue" as const
    },
    {
      name: "Портос",
      image: "https://images.unsplash.com/photo-1592743263126-bb241ee76ac7?q=80&w=800&auto=format&fit=crop",
      description: "Самый сильный из трех мушкетеров. Веселый, любящий хорошо одеваться и поесть. Хвастливый, но добродушный и преданный друзьям.",
      quote: "Сражаюсь я просто: бью, пока не упадут.",
      color: "gold" as const
    },
    {
      name: "Арамис",
      image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5913?q=80&w=800&auto=format&fit=crop",
      description: "Самый утонченный и образованный из трех мушкетеров. Бывший аббат, который стал мушкетером из-за несчастной любви. Галантный, хитроумный и романтичный.",
      quote: "У меня есть привычка убивать тех, кто меня оскорбляет.",
      color: "green" as const
    }
  ];


  return (
    <div className="min-h-screen bg-musketeer-cream">
      <Navbar />
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <h2 id="characters" className="font-playfair text-3xl font-bold text-center mb-2">Главные герои</h2>

      <div className="container mx-auto px-4 py-12">
        <h2 className="font-playfair text-3xl font-bold text-center mb-2">Главные герои</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Познакомьтесь с легендарными персонажами романа Александра Дюма, чьи приключения и дружба стали символом отваги и чести
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {musketeers.map((musketeer) => (
            <MusketeerCard 
              key={musketeer.name}
              name={musketeer.name}
              image={musketeer.image}
              description={musketeer.description}
              quote={musketeer.quote}
              color={musketeer.color}
            />
          ))}
        </div>

        <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="font-playfair text-2xl font-bold mb-4">О романе</h3>
          <p className="text-gray-700 mb-4">
            «Три мушкетёра» — историко-приключенческий роман Александра Дюма-отца, впервые опубликованный в 1844 году. 
            Действие романа происходит во Франции и Англии в 1625—1628 годах.
          </p>
          <p className="text-gray-700">
            Роман повествует о приключениях молодого гасконца д'Артаньяна, приехавшего в Париж, чтобы стать мушкетёром, 
            и трёх его друзей-мушкетёров Атоса, Портоса и Арамиса. 
            Д'Артаньян и три мушкетёра борются со злом, используя остроумие и отвагу.
          </p>
        </div>
      </div>
      
      <footer className="bg-musketeer-blue text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Три мушкетера • Александр Дюма</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
