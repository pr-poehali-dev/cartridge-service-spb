import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-pattern diagonal-divider pt-24 pb-32 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-amber-400 text-[hsl(217,65%,13%)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Более 15 лет опыта
            </span>
            <span className="text-slate-300 text-sm">СПб и Ленинградская область</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-golos leading-tight mb-6">
            Заправка картриджей<br />
            и ремонт оргтехники
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-xl">
            Профессиональное обслуживание принтеров и МФУ. Выезд к вам в офис или заправка на месте. Гарантия качества.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("contacts")}
              className="btn-gold text-base py-3 px-8"
            >
              Вызвать мастера
            </button>
            <button
              onClick={() => scrollTo("price")}
              className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded font-semibold transition-colors"
            >
              Посмотреть прайс
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: "Clock", text: "Выезд за 2 часа" },
              { icon: "Shield", text: "Гарантия 3 месяца" },
              { icon: "MapPin", text: "Весь СПб и ЛО" },
              { icon: "Wrench", text: "Заправка на месте" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-slate-300">
                <Icon name={item.icon} size={16} className="text-amber-400" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;