import Image from "next/image";
const HeroImage = () => {
  return (
    <div>
      <Image
        src="/hero.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        className="w-1/2"
      />
    </div>
  );
};

export default HeroImage;
