import Icon from "@/components/ui/icon";

const stats = [
  { value: "15+", label: "лет опыта" },
  { value: "2500+", label: "клиентов" },
  { value: "50+", label: "моделей принтеров" },
  { value: "1 мес", label: "гарантия" },
];

const advantages = [
  {
    icon: "Home",
    title: "Выезд на место",
    desc: "Мастер приедет к вам в офис или домой. Заправка и мелкий ремонт прямо на месте без вывоза техники.",
  },
  {
    icon: "Award",
    title: "Сертифицированные мастера",
    desc: "Специалисты с опытом более 15 лет. Работаем с лазерными и струйными принтерами, МФУ, копирами.",
  },
  {
    icon: "Zap",
    title: "Быстро и качественно",
    desc: "Выезд в течение 2 часов по Санкт-Петербургу. Срочная заправка без очереди.",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия на работы",
    desc: "Даём гарантию 1 месяц на все виды работ. Используем только качественные расходные материалы.",
  },
  {
    icon: "Banknote",
    title: "Честные цены",
    desc: "Стоимость работ фиксирована и не меняется. Никаких скрытых доплат после выполнения заказа.",
  },
  {
    icon: "MapPin",
    title: "Весь СПб и ЛО",
    desc: "Работаем по всему Санкт-Петербургу и Ленинградской области. Корпоративное обслуживание организаций.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="section-title mb-3">О компании</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Профессиональный сервис заправки картриджей и ремонта оргтехники в Санкт-Петербурге с 2009 года
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 bg-[hsl(var(--surface))] rounded-lg border border-slate-100">
            <div className="text-4xl font-bold font-golos mb-1" style={{ color: "hsl(var(--navy))" }}>
              {s.value}
            </div>
            <div className="text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((item) => (
          <div key={item.title} className="card-service animate-fade-in">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "hsl(var(--navy))" }}
              >
                <Icon name={item.icon} size={20} className="text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold font-golos mb-1" style={{ color: "hsl(var(--navy))" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;