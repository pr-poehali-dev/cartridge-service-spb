import { useState } from "react";
import Icon from "@/components/ui/icon";

const priceData = [
  {
    category: "Заправка лазерных картриджей",
    items: [
      { name: "HP LaserJet (все серии)", model: "HP", price: "350–550 ₽" },
      { name: "Canon (LBP серии)", model: "Canon", price: "350–550 ₽" },
      { name: "Samsung (ML, SCX серии)", model: "Samsung", price: "350–500 ₽" },
      { name: "Xerox (Phaser, WorkCentre)", model: "Xerox", price: "400–650 ₽" },
      { name: "Brother (HL, DCP серии)", model: "Brother", price: "350–550 ₽" },
      { name: "Kyocera (FS, ECOSYS)", model: "Kyocera", price: "500–800 ₽" },
      { name: "Ricoh (SP, Aficio)", model: "Ricoh", price: "450–700 ₽" },
    ],
  },
  {
    category: "Заправка струйных картриджей",
    items: [
      { name: "Epson (все серии)", model: "Epson", price: "200–400 ₽" },
      { name: "Epson с СНПЧ — заправка системы", model: "Epson", price: "300–600 ₽" },
    ],
  },
  {
    category: "Ремонт принтеров",
    items: [
      { name: "Диагностика", model: "", price: "Бесплатно" },
      { name: "Ремонт механизма подачи", model: "", price: "от 800 ₽" },
      { name: "Замена фьюзера (печка)", model: "", price: "от 1500 ₽" },
      { name: "Чистка Epson (сброс памперса)", model: "Epson", price: "от 600 ₽" },
      { name: "Профилактическое ТО принтера", model: "", price: "от 700 ₽" },
      { name: "Ремонт МФУ / копира", model: "", price: "от 1000 ₽" },
      { name: "Выезд по Санкт-Петербургу", model: "", price: "300 ₽" },
      { name: "Выезд по Ленинградской области", model: "", price: "от 500 ₽" },
    ],
  },
];

const PriceSection = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const filtered = priceData[activeTab].items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase())
  );

  const allFiltered = search.trim()
    ? priceData.flatMap((cat) =>
        cat.items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.model.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => ({ ...item, category: cat.category }))
      )
    : null;

  return (
    <section id="price" className="py-20 bg-[hsl(var(--surface))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Прайс-лист</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Фиксированные цены без скрытых наценок. Найдите свою модель принтера или картриджа
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <div className="relative max-w-lg mx-auto">
              <Icon
                name="Search"
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Поиск по модели принтера или картриджа..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </div>

          {!search && (
            <div className="flex border-b border-slate-100">
              {priceData.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-3 px-4 text-sm font-semibold font-golos transition-colors text-center ${
                    activeTab === i
                      ? "text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                  style={
                    activeTab === i
                      ? { backgroundColor: "hsl(var(--navy))" }
                      : {}
                  }
                >
                  {cat.category}
                </button>
              ))}
            </div>
          )}

          <table className="w-full">
            <thead>
              <tr className="text-xs uppercase text-slate-400 border-b border-slate-100 bg-slate-50">
                <th className="text-left px-6 py-3">Услуга / Модель</th>
                {search && <th className="text-left px-6 py-3">Категория</th>}
                <th className="text-right px-6 py-3">Цена</th>
              </tr>
            </thead>
            <tbody>
              {(search && allFiltered ? allFiltered : filtered).map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-700">{item.name}</div>
                    {item.model && (
                      <div className="text-xs text-slate-400 mt-0.5">{item.model}</div>
                    )}
                  </td>
                  {"category" in item && search && (
                    <td className="px-6 py-4 text-xs text-slate-400">{(item as { category: string }).category}</td>
                  )}
                  <td className="px-6 py-4 text-right">
                    <span
                      className="font-bold font-golos text-sm"
                      style={{ color: "hsl(var(--navy))" }}
                    >
                      {item.price}
                    </span>
                  </td>
                </tr>
              ))}
              {search && allFiltered?.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-10 text-slate-400 text-sm">
                    Ничего не найдено. Уточните запрос или позвоните нам.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="p-4 bg-amber-50 border-t border-amber-100 flex items-center gap-3">
            <Icon name="Info" size={16} className="text-amber-600 flex-shrink-0" />
            <p className="text-xs text-amber-700">
              Точная стоимость определяется после диагностики. Выезд по СПб — 300 ₽, включается в стоимость работ при заказе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;