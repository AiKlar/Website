import { useEffect } from "react";
import SkoleM8Header from "@/components/SkoleM8Header";

const SkoleM8 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Animation effect for sections
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.fadeInElement').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fadeInElement').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-aiklar-light">
      <SkoleM8Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-aiklar-dark py-24 mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-aiklar-dark/30 to-aiklar-dark" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-aiklar-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-aiklar-green/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SkoleM8</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Den digitale assistent der taler skolens sprog og understøtter elever, lærere og ledelse.
            </p>
          </div>
        </div>
      </section>
      
      <main className="pb-16">

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg font-medium">
                SkoleM8 er udviklet specifikt til danske skoler og efterskoler, så I kan få glæde af AI på en måde, der giver mening i jeres hverdag – både fagligt, socialt og ledelsesmæssigt.
              </p>
              
              <p>
                Vi ved, at mange skoler mangler konkrete redskaber til at bruge AI sikkert og meningsfuldt. Samtidig vokser kravene til dokumentation, trivsel og differentieret undervisning – og det er svært at nå det hele. Her kan SkoleM8 hjælpe.
              </p>
              
              <p>
                SkoleM8 er en digital assistent, der taler skolens sprog og er tæt integreret med jeres systemer. Den støtter eleverne i fagene, hjælper med struktur i hverdagen, reagerer på mistrivsel og fungerer som en virtuel kontaktlærer. For lærere sparer den tid og løfter kvaliteten i opgavehjælp og planlægning. For ledelsen skaber den overblik og dataindsigt.
              </p>
              
              <p>
                Alt sammen med fuld fokus på datasikkerhed og overholdelse af GDPR og kommende AI-forordninger.
              </p>
              
              <p>
                SkoleM8 er ikke bare teknologi – det er en hjælpende hånd, der forstår jeres hverdag og løfter både elever, lærere og skoleledelse.
              </p>
              
              <div className="bg-aiklar-blue/10 p-6 rounded-lg my-10 border border-aiklar-blue/20">
                <p className="text-center font-medium mb-4">SkoleM8 er i øjeblikket under udvikling</p>
                <p className="text-center">
                  Vi søger skoler, der vil være med til at udvikle SkoleM8 sammen med os. 
                  <a href="/#kontakt" className="text-aiklar-blue hover:underline ml-1">
                    Kontakt os for at høre mere.
                  </a>
                </p>
              </div>
              
              <h3 className="text-2xl font-bold mt-12">Tæt integreret med jeres skole</h3>
              <p>
                SkoleM8 er ikke en generisk chatbot. Den er skræddersyet til netop jeres skole og kan svare på spørgsmål om skemaer, regler, arrangementer, kostpolitik, retningslinjer, lærernes roller og meget mere. Den forstår skolens kultur og kontekst og kan derfor give relevante, præcise og værdifulde svar til både elever og lærere.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Understøtter eleverne i centrale skolefag</h3>
              <p>
                SkoleM8 er trænet til at støtte op om undervisningen matematik, dansk, samfundsfag m.fl. Den kan stille opklarende spørgsmål, forklare begreber, foreslå løsningsmetoder og inspirere – uden at levere færdige svar. På den måde fremmer- og understøtter den læring frem for at erstatte den.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Din faglige sparringspartner</h3>
              <p>
                SkoleM8 assisterer lærere og undervisere med effektivt at skabe lektionsplaner, opgaver og differentierede undervisningsforløb. Den sparrer på idéer, formulerer skriftligt materiale og giver inspiration til nye vinkler på undervisningen. Det frigør tid og styrker kvaliteten, så læreren kan fokusere på relationer og nærvær i klassen.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Afspejler dansk skolekultur i sprog og udtryk</h3>
              <p>
                SkoleM8 er ikke en tør og akademisk robot. Den taler et sprog, som både lærere og elever genkender og forstår, og den vejleder med respekt for skolelivets rytme og værdier. Det skaber tryghed, tillid og højere engagement hos brugerne.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Den digitale kontaktlærer</h3>
              <p>
                SkoleM8 fungerer som en digital kontaktlærer, der støtter eleverne med struktur, forudsigelighed og relevant information – før, under og efter skoledagen. Den hjælper med trivsel, spørgsmål og lektier, og giver lærere og ledelse indblik i elevernes behov.
              </p>
              
              <p>
                Når nye elever starter, er SkoleM8 klar som en digital introduktion til hverdagen. Den kan svare på alt fra praktiske spørgsmål til sociale spilleregler, og giver tryghed i overgangsperioden.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Datadrevet indsigt til fremtidens skole</h3>
              <p>
                SkoleM8 indsamler anonymiseret viden om, hvad der optager elever og lærere – hvilke spørgsmål der stilles, hvilke temaer der fylder, og hvor behovene opstår. Det giver skolens ledelse et unikt indblik i elevernes trivsel, tendenser og udfordringer i hverdagen. Med den indsigt bliver det lettere at handle proaktivt, prioritere rigtigt og udvikle skolen med afsæt i reelle behov.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Datasikkerhed & Lovgivning</h3>
              <p>
                SkoleM8 er udviklet med sikkerhed og gennemsigtighed som fundament. Alle svar og beslutninger logges automatisk, så de kan dokumenteres ved behov. Brugerne har mulighed for med ét klik at rapportere uhensigtsmæssige svar, og vi følger naturligvis op. Vi er åbne om, hvordan SkoleM8 fungerer – fra de AI-modeller vi benytter, til hvordan data behandles og opbevares. Platformen er hostet i EU og overholder både GDPR og de kommende krav i EU's AI-forordning. For at gøre det nemt at forstå teknikken bag, leverer vi en overskuelig grafik, som viser systemets opbygning og flow. SkoleM8 er kort sagt en sikker løsning – bygget til skoler, i tæt samarbejde med skoler.
              </p>
              
              <div className="my-10 flex justify-center">
                <a href="/" className="text-aiklar-blue hover:text-aiklar-blue-dark font-medium flex items-center">
                  ← Tilbage til forsiden
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SkoleM8;