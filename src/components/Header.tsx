import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "refill", label: "Заправка" },
  { id: "repair", label: "Диагностика и ремонт" },
  { id: "price", label: "Прайс" },
  { id: "contacts", label: "Контакты" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(217,65%,13%)] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors">
            <Icon name="Printer" size={24} className="text-amber-400" />
            <div className="text-left">
              <div className="font-bold text-base leading-tight font-golos">КартриджСервис</div>
              <div className="text-xs text-slate-300 leading-tight">СПб и Ленинградская обл.</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="nav-link px-3 py-2"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+79650224299" className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors">
              <Icon name="Phone" size={16} className="text-amber-400" />
              <span className="font-semibold text-sm">+7 (965) 022-42-99</span>
            </a>
            <button
              onClick={() => scrollTo("contacts")}
              className="btn-gold text-sm py-2 px-4"
            >
              Оставить заявку
            </button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[hsl(217,65%,10%)] border-t border-slate-700 px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left py-2 px-3 text-slate-200 hover:text-white hover:bg-slate-700 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <a href="tel:+79650224299" className="flex items-center gap-2 text-white py-2">
            <Icon name="Phone" size={16} className="text-amber-400" />
            <span className="font-semibold">+7 (965) 022-42-99</span>
          </a>
          <button
            onClick={() => scrollTo("contacts")}
            className="btn-gold w-full mt-2 text-sm py-2"
          >
            Оставить заявку
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;