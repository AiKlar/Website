import { useEffect, useRef } from 'react';

type Feature = { label: string; available?: boolean };
type CategoryColorKey = 'purple' | 'blue' | 'green' | 'orange' | 'red' | 'pink';
type FeatureCategory = { name: string; features: Feature[]; color: CategoryColorKey };

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatureItem = ({ label, available = true, itemBgClass }: Feature & { itemBgClass?: string }) => (
  <li className={`flex items-start gap-3 py-2 px-3 rounded-md border ${itemBgClass ?? ''}`}>
    <span
      className={
        `mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-inset ` +
        (available
          ? 'bg-aiklar-green/10 text-aiklar-green ring-aiklar-green/30'
          : 'bg-red-100 text-red-500 ring-red-200')
      }
    >
      {available ? <CheckIcon /> : <CrossIcon />}
    </span>
    <span className={available ? 'text-sm text-aiklar-dark/90' : 'text-sm text-aiklar-dark/60 line-through'}>
      {label}
    </span>
  </li>
);

const categoryStyles: Record<CategoryColorKey, { headerBg: string; itemBg: string }> = {
  purple: { headerBg: 'bg-purple-500', itemBg: 'bg-purple-50 border-purple-200' },
  blue: { headerBg: 'bg-blue-500', itemBg: 'bg-blue-50 border-blue-200' },
  green: { headerBg: 'bg-emerald-500', itemBg: 'bg-emerald-50 border-emerald-200' },
  orange: { headerBg: 'bg-orange-500', itemBg: 'bg-orange-50 border-orange-200' },
  red: { headerBg: 'bg-rose-500', itemBg: 'bg-rose-50 border-rose-200' },
  pink: { headerBg: 'bg-pink-500', itemBg: 'bg-pink-50 border-pink-200' }
};

const featureCategories: FeatureCategory[] = [
  {
    name: 'Sikkerhed',
    color: 'blue',
    features: [
      { label: 'AI til input/output‑validering for sikkerhed', available: true },
      { label: 'Politik‑styret adgang og logging', available: true },
      { label: 'Hostet i EU', available: true }
    ]
  },
  {
    name: 'Arkitektur',
    color: 'green',
    features: [
      { label: 'Konfigurerbar platform', available: true },
      { label: 'Multi tenant', available: true },
      { label: 'Dynamisk RAG til kontekstuel information', available: true },
      { label: 'MCP Server så AI‑agenter kan udføre opgaver', available: true },
      { label: 'Lokal eller ekstern AI model', available: true }
    ]
  },
  {
    name: 'UX/UI',
    color: 'orange',
    features: [
      { label: 'Interaktive brugergrænseflader til optimal AI‑interaktion', available: true },
      { label: 'Konfigurerbare brugergrænseflader', available: true },
      { label: 'Dynamisk tilpasning efter AI‑respons', available: true }
    ]
  },
  {
    name: 'Udvikling & Drift',
    color: 'pink',
    features: [
      { label: 'Let og god test og debugging', available: true },
      { label: 'Udviklet i Danmark', available: true }
    ]
  }
];

const OfferingsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section id="platform" ref={sectionRef} className="py-24 px-6 bg-aiklar-light">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 section-heading">
          AiKlar Platformen
        </h2>
        {/* Callout text (no box) */}
        <p className="mb-8 text-center text-aiklar-dark/90">
          <strong>AiKlar Platformen</strong> er for offentlige institutioner og virksomheder, der vil lave deres egen AI‑løsning og har brug for et sikkert og stærkt fundament at bygge på, der samtidig leverer ud-af-æsken funktioner som gør det let og hurtigt at lave AI løsninger med mennesket i føresædet.
        </p>

        {/* Arkitektur */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-aiklar-green/10">
          <div className="md:flex md:items-start md:gap-8">
            <div className="md:w-7/12">
              <h3 className="text-xl font-semibold text-aiklar-dark mb-4">Arkitektur og anvendelse</h3>
              <p className="text-aiklar-dark/80 mb-4">
                Platformen er microservice‑baseret med moderne, interaktive brugergrænseflader og fleksible
                integrationsmuligheder til både lokale og eksterne AI‑modeller. Den kan tilpasses domænet – fra
                SkoleMate, der hjælper lærere med at skabe den bedste skole og læring, til offentlige løsninger,
                der skaber overblik og struktur for bedre borgerservice.
              </p>
              <p className="text-aiklar-dark/80 mb-4">
                Vi prioriterer gennemsigtighed, sikkerhed og styrbarhed: kontekstuel viden via dynamisk RAG,
                politik‑styret adgang og logging samt værktøjer, der gør udvikling, test og debugging effektiv.
              </p>
              <p className="text-aiklar-dark/80">
                Fokus er konsekvent: at gøre det let at skabe optimal interaktion mellem menneske og maskine – trygt,
                effektivt og med mennesket i føresædet.
              </p>
            </div>
            <div className="md:w-5/12 mt-6 md:mt-0">
              <img
                src="/AiKlarPlatformGrafik.png"
                alt="Diagram over AiKlar Platform Core, lag og integrationer"
                className="w-full h-auto rounded-lg border border-aiklar-green/10 shadow mt-4"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Kategoriserede features i tabel/kolonne layout */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-aiklar-dark mb-3">Features fordelt på kategorier</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featureCategories.map((category) => {
              const style = categoryStyles[category.color];
              return (
                <div key={category.name} className="rounded-2xl overflow-hidden border border-aiklar-green/10 shadow-lg">
                  <div className={`${style.headerBg} px-4 py-3 text-white font-semibold`}>{category.name}</div>
                  <div className="p-4 bg-white">
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <FeatureItem
                          key={feature.label}
                          label={feature.label}
                          available={feature.available}
                          itemBgClass={`${style.itemBg}`}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
