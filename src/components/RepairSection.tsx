import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Search",
    title: "Диагностика",
    price: "Бесплатно при ремонте",
    items: [
      "Полная диагностика принтера или МФУ",
      "Определение причины неисправности",
      "Письменное заключение о состоянии",
      "Рекомендации по эксплуатации",
    ],
  },
  {
    icon: "Wrench",
    title: "Ремонт лазерных принтеров",
    price: "от 800 ₽",
    items: [
      "Замена фьюзерного блока",
      "Ремонт механизма подачи бумаги",
      "Чистка лазерного блока",
      "Замена роликов захвата и подачи",
    ],
  },
  {
    icon: "Droplets",
    title: "Ремонт струйных принтеров Epson",
    price: "от 600 ₽",
    items: [
      "Прочистка печатающей головки",
      "Замена абсорбера (памперса)",
      "Сброс счётчика чернил",
      "Ремонт каретки и механики подачи",
    ],
  },
  {
    icon: "Copy",
    title: "Обслуживание МФУ и копиров",
    price: "от 1000 ₽",
    items: [
      "Профилактическое ТО",
      "Ремонт АПД (автоподатчика документов)",
      "Ремонт сканирующего модуля",
      "Замена расходных материалов",
    ],
  },
];

const RepairSection = () => (
  <section id="repair" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="section-title mb-3">Диагностика и ремонт</h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          Ремонт принтеров, МФУ и копировальной техники любой сложности. Специализируемся на струйных принтерах Epson.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ backgroundColor: "hsl(var(--navy))" }}
            >
              <div className="flex items-center gap-3">
                <Icon name={service.icon} size={22} className="text-amber-400" />
                <h3 className="font-bold font-golos text-white">{service.title}</h3>
              </div>
              <span className="text-amber-400 text-sm font-semibold">{service.price}</span>
            </div>
            <ul className="px-6 py-5 space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle2" size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-8 text-white text-center"
        style={{
          background: "linear-gradient(135deg, hsl(217,65%,13%) 0%, hsl(215,55%,22%) 100%)",
        }}
      >
        <Icon name="AlertCircle" size={32} className="text-amber-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold font-golos mb-2">Не нашли свою неисправность?</h3>
        <p className="text-slate-300 mb-6 max-w-lg mx-auto">
          Опишите проблему — наш специалист бесплатно проконсультирует и назовёт стоимость ремонта
        </p>
        <a
          href="https://t.me/kartridzhspb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-gold"
        >
          <Icon name="MessageCircle" size={18} />
          Написать в Telegram
        </a>
      </div>
    </div>
  </section>
);

export default RepairSection;
