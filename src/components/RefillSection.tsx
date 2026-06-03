import Icon from "@/components/ui/icon";

const steps = [
  { num: "01", title: "Звонок или заявка", desc: "Оставьте заявку на сайте или позвоните нам. Уточним модель принтера и договоримся о времени." },
  { num: "02", title: "Выезд мастера", desc: "Мастер приедет к вам в течение 2 часов по Санкт-Петербургу. Берём всё необходимое с собой." },
  { num: "03", title: "Заправка на месте", desc: "Профессиональная заправка картриджа прямо у вас в офисе. Займёт 15–30 минут." },
  { num: "04", title: "Проверка и гарантия", desc: "Проводим тестовую печать, убеждаемся в качестве. Выдаём гарантию на 3 месяца." },
];

const brands = [
  "HP", "Canon", "Epson", "Samsung", "Xerox", "Brother", "Kyocera", "Ricoh", "OKI", "Panasonic",
];

const RefillSection = () => (
  <section id="refill" className="py-20 bg-[hsl(var(--surface))]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="section-title mb-3">Заправка картриджей</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Заправляем лазерные и струйные картриджи всех популярных брендов. Выезд к вам на место или в наш офис
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((step) => (
          <div key={step.num} className="relative bg-white rounded-lg p-6 border border-slate-100 shadow-sm">
            <div
              className="text-5xl font-bold font-golos mb-4 opacity-10 absolute top-4 right-4"
              style={{ color: "hsl(var(--navy))" }}
            >
              {step.num}
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white mb-4"
              style={{ backgroundColor: "hsl(var(--navy))" }}
            >
              {step.num}
            </div>
            <h3 className="font-bold font-golos mb-2" style={{ color: "hsl(var(--navy))" }}>
              {step.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Icon name="Printer" size={24} className="text-amber-500" />
          <h3 className="text-xl font-bold font-golos" style={{ color: "hsl(var(--navy))" }}>
            Работаем с картриджами
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 mb-8">
          {brands.map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 rounded-full text-sm font-semibold border-2"
              style={{
                borderColor: "hsl(var(--navy))",
                color: "hsl(var(--navy))",
                backgroundColor: "hsl(var(--surface))",
              }}
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "Droplets", title: "Струйные картриджи", desc: "Epson, Canon, HP — все цвета и форматы" },
            { icon: "Layers", title: "Лазерные картриджи", desc: "Черно-белые и цветные, любого объёма" },
            { icon: "RefreshCw", title: "Перезаправка", desc: "Многократная заправка с промывкой головки" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 rounded-lg bg-[hsl(var(--surface))]">
              <Icon name={item.icon} size={20} className="mt-0.5" style={{ color: "hsl(var(--accent))" } as React.CSSProperties} />
              <div>
                <div className="font-semibold text-sm font-golos" style={{ color: "hsl(var(--navy))" }}>{item.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RefillSection;
