import { useEffect } from "react";
import SkoleM8Header from "@/components/SkoleM8Header";
import ContactSection from "@/components/ContactSection";

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
      <section className="relative min-h-[20vh] flex items-center bg-aiklar-dark py-24 mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-aiklar-dark/30 to-aiklar-dark" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-aiklar-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-aiklar-green/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">SkoleM8</h1>
                <p className="text-xl md:text-2xl text-white/80">
                  Den digitale assistent der taler skolens sprog og understøtter elever, lærere og ledelse.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="relative w-full max-w-lg mx-auto">
                  <img 
                    src="/skolem8_dialog1.png" 
                    alt="SkoleM8 Dialog Interface" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            </div>
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
                  <a href="#kontakt-skolem8" className="text-aiklar-blue hover:underline ml-1">
                    Kontakt os for at høre mere.
                  </a>
                </p>
              </div>
              
              <h3 className="text-2xl font-bold mt-12">Tæt integreret med jeres skole</h3>
              <p>
                SkoleM8 er ikke en generisk chatbot. Den er skræddersyet til netop jeres skole og kan svare på spørgsmål om skemaer, regler, arrangementer, kostpolitik, retningslinjer, lærernes roller og meget mere. Den forstår skolens kultur og kontekst og kan derfor give relevante, præcise og værdifulde svar til både elever og lærere.
              </p>
              
              <div className="my-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="md:w-1/2">
                  <img 
                    src="/integreretillustration.png" 
                    alt="SkoleM8 integration illustration" 
                    className="rounded-lg shadow-md max-w-full w-auto h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Skemaoplysninger</h4>
                      <p className="text-sm text-aiklar-dark/80">Integreret med skolens skema og kalender i øvrigt, så den ved hvornår der er undervisning, møder og arrangementer</p>
                    </div>
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Kender jeres skole</h4>
                      <p className="text-sm text-aiklar-dark/80">SkoleM8 kender jeres regler, kultur, traditioner og værdier ved at integrere med jeres dokumenter m.v.</p>
                    </div>
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Personligt tilpasset</h4>
                      <p className="text-sm text-aiklar-dark/80">Tilpasset brugeren, ved hvad der er relevant information og kontekst</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mt-8">Understøtter eleverne i centrale skolefag</h3>
              <p>
                SkoleM8 er trænet til at støtte op om undervisningen matematik, dansk, samfundsfag m.fl. Den kan stille opklarende spørgsmål, forklare begreber, foreslå løsningsmetoder og inspirere – uden at levere færdige svar. På den måde fremmer- og understøtter den læring frem for at erstatte den.
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

              <h3 className="text-2xl font-bold mt-8">Din faglige sparringspartner</h3>
              <p>
                SkoleM8 assisterer lærere og undervisere med effektivt at skabe lektionsplaner, opgaver og differentierede undervisningsforløb. Den sparrer på idéer, formulerer skriftligt materiale og giver inspiration til nye vinkler på undervisningen. Det frigør tid og styrker kvaliteten, så læreren kan fokusere på relationer og nærvær i klassen.
              </p>
              
              <div className="my-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="md:w-1/2">
                  <img 
                    src="/fagligillustration.png" 
                    alt="SkoleM8 som faglig sparringspartner" 
                    className="rounded-lg shadow-md max-w-full w-auto h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="space-y-4">
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Effektiv planlægning</h4>
                      <p className="text-sm text-aiklar-dark/80">Hjælper med at skabe undervisningsplaner, materialer og opgaver tilpasset forskellige niveauer</p>
                    </div>
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Kreativ inspiration</h4>
                      <p className="text-sm text-aiklar-dark/80">Giver idéer til nye vinkler på undervisningen og forslag til engagerende aktiviteter</p>
                    </div>
                    <div className="p-3 bg-aiklar-blue/5 rounded-lg border border-aiklar-blue/10">
                      <h4 className="font-semibold text-aiklar-dark">Tidsbesparende</h4>
                      <p className="text-sm text-aiklar-dark/80">Frigør tid til relationsarbejde ved at håndtere rutineopgaver og administrative spørgsmål</p>
                    </div>
                  </div>
                </div>
              </div>

              
              <h3 className="text-2xl font-bold mt-8">Datadrevet indsigt til fremtidens skole</h3>
              <p>
                SkoleM8 indsamler anonymiseret viden om, hvad der optager elever og lærere – hvilke spørgsmål der stilles, hvilke temaer der fylder, og hvor behovene opstår. Det giver skolens ledelse et unikt indblik i elevernes trivsel, tendenser og udfordringer i hverdagen. Med den indsigt bliver det lettere at handle proaktivt, prioritere rigtigt og udvikle skolen med afsæt i reelle behov.
              </p>
              
              <h3 className="text-2xl font-bold mt-8">Datasikkerhed & Lovgivning</h3>
              <p>
                SkoleM8 er udviklet med sikkerhed og gennemsigtighed som fundament. Alle svar og beslutninger logges automatisk, så de kan dokumenteres ved behov. Brugerne har mulighed for med ét klik at rapportere uhensigtsmæssige svar, og vi følger naturligvis op. Vi er åbne om, hvordan SkoleM8 fungerer – fra de AI-modeller vi benytter, til hvordan data behandles og opbevares. Platformen er hostet i EU og overholder både GDPR og de kommende krav i EU's AI-forordning. For at gøre det nemt at forstå teknikken bag, leverer vi en overskuelig grafik, som viser systemets opbygning og flow. SkoleM8 er kort sagt en sikker løsning – bygget til skoler, i tæt samarbejde med skoler.
              </p>
              
            </div>
          </div>
        </section>

        {/* Kontaktformular sektion */}
        <section id="kontakt-skolem8" className="py-12 bg-aiklar-blue/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Kontakt os om SkoleM8</h2>
            
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="text-xl font-semibold mb-4">Interesseret i at vide mere?</h3>
                  <p className="mb-4">
                    Er du interesseret i at høre mere om, hvordan SkoleM8 kan understøtte jeres skole? 
                    Eller vil du gerne have adgang til en demo for at se, hvordan løsningen fungerer i praksis?
                  </p>
                  <p className="mb-4">
                    Udfyld formularen til højre, så kontakter vi dig for at fortælle mere om mulighederne.
                  </p>
                  <p className="mb-4">
                    Vi søger skoler, der vil være med til at udvikle og teste SkoleM8, så kontakt os også gerne, 
                    hvis I kunne være interesserede i et pilotprojekt.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center mb-3">
                      <svg className="w-5 h-5 text-aiklar-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>info@aiklar.dk</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-aiklar-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>20 20 59 58</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="bg-white p-6 rounded-lg shadow-md">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Anti-bot felt, skjules med CSS */}
                  <p hidden>
                    <label>Don't fill this out: <input name="bot-field" /></label>
                  </p>

                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Navn:<br />
                      <input type="text" name="name" required className="w-full p-2 mt-1 border border-gray-300 rounded-md" />
                    </label>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block mb-2 font-medium">Email:<br />
                      <input type="email" name="email" required className="w-full p-2 mt-1 border border-gray-300 rounded-md" />
                    </label>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Besked:<br />
                      <textarea name="message" required className="w-full p-2 mt-1 border border-gray-300 rounded-md h-32" />
                    </label>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full bg-aiklar-blue hover:bg-aiklar-blue-dark text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Tilbage til forsiden link */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <a href="/" className="text-aiklar-blue hover:text-aiklar-blue-dark font-medium flex items-center">
                ← Tilbage til forsiden
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactSection />
    </div>
  );
};

export default SkoleM8;