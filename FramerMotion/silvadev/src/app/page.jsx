import Button from "@/components/Button";
import Services from "@/components/services/Services";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-full ">
        {/* Image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>
        {/* Text */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center">
          <h1 className="textH1Header">
            aorem ipsum dolor, sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            magni, sunt rem atque illum quo cumque ullam nobis ducimus nihil
            pariatur voluptatum porro minus?
          </p>
          <div className="flex max-sm:justify-center gap-4 w-full">
            <Button styles="btnLight" onClick={null}>
              Gauti pasiūlymą
            </Button>
            <Button styles="btnDark" onClick={null}>
              Gauti pasiūlymą
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-40">
        <div>
          <h2 className="textH2Header">
            Patyrę dizaineriai ir programuotojai, nekantraujantys paversti Jūsų
            idėjas realybe
          </h2>
          <div className="flex max-lg:flex-col items-center justify-center gap-8">
            <div className="lg:w-1/2">
              <p>
                Profesinė internetinių svetainių kūrimo patirtis yra daugiau nei
                10 metų, todėl šioje srityje neesame naujokai. Pradedant nuo
                paprastų internetinių svetainių, baigiant sudėtingomis
                integracijomis apipintų el.parduotuvių. Nuo paprasto valdymo iki
                pilnai automatizuoto proceso. Mūsų pagrindinis tikslas, jog
                svetainė veiktų sklandžiai, būtų patogi ne tik galutiniams
                vartotojams, bet ir tinklapio administratoriui. Darbams
                suteikiama vienerių metų garantija. Taip pat visuomet
                konsultuojame klientą - visais su tinklapiu susijusiais
                klausimais. Sukūrę svetainę nepadedame taško, dirbame, bei
                konsultuojame klientus ir toliau.
              </p>
            </div>
            <div className="lg:w-1/2">
              lorem Lrem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
              Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            </div>
          </div>
        </div>

        <div className="mt-40">
          <Services />
        </div>
      </div>
    </>
  );
};

export default Homepage;
