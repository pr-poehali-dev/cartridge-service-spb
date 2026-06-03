import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "hsl(var(--navy-dark))" }} className="text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Printer" size={22} className="text-amber-400" />
              <div>
                <div className="font-bold font-golos">КартриджСервис</div>
                <div className="text-xs text-slate-400">СПб и Ленинградская обл.</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Профессиональная заправка картриджей и ремонт оргтехники с 2009 года. Выезд на место. Гарантия.
            </p>
          </div>

          <div>
            <h4 className="font-bold font-golos mb-4 text-amber-400">Навигация</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "О компании" },
                { id: "refill", label: "Заправка картриджей" },
                { id: "repair", label: "Диагностика и ремонт" },
                { id: "price", label: "Прайс-лист" },
                { id: "contacts", label: "Контакты" },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-golos mb-4 text-amber-400">Связаться с нами</h4>
            <div className="space-y-3">
              <a href="tel:+79650224299" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Icon name="Phone" size={14} className="text-amber-400" />
                +7 (965) 022-42-99
              </a>
              <a href="https://t.me/kartridzhspb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Icon name="Send" size={14} className="text-amber-400" />
                @kartridzhspb (Telegram)
              </a>
              <a href="mailto:info@kartridzh-spb.ru" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <Icon name="Mail" size={14} className="text-amber-400" />
                info@kartridzh-spb.ru
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Icon name="Clock" size={14} className="text-amber-400" />
                Пн–Пт: 9:00–19:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} КартриджСервис. Все права защищены.
          </p>
          <p className="text-xs text-slate-500">
            Заправка картриджей и ремонт оргтехники в Санкт-Петербурге
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;