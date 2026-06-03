import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", model: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const text =
      `📋 Новая заявка с сайта КартриджСервис\n\n` +
      `👤 Имя: ${form.name}\n` +
      `📞 Телефон: ${form.phone}\n` +
      `🖨 Модель: ${form.model || "не указана"}\n` +
      `💬 Комментарий: ${form.comment || "—"}`;

    const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
    const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
      });
    } catch {
      // silent
    }

    setLoading(false);
    setSent(true);
    setForm({ name: "", phone: "", model: "", comment: "" });
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Контакты</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Оставьте заявку — перезвоним в течение 15 минут или напишите нам напрямую
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Form */}
          <div className="bg-[hsl(var(--surface))] rounded-xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold font-golos mb-6" style={{ color: "hsl(var(--navy))" }}>
              Оставить заявку
            </h3>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle2" size={32} className="text-green-500" />
                </div>
                <h4 className="text-lg font-bold font-golos mb-2" style={{ color: "hsl(var(--navy))" }}>
                  Заявка отправлена!
                </h4>
                <p className="text-slate-500 text-sm mb-6">Мы перезвоним вам в течение 15 минут</p>
                <button onClick={() => setSent(false)} className="btn-primary text-sm py-2 px-6">
                  Оставить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">Ваше имя *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white"
                      style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">Телефон *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white"
                      style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Модель принтера</label>
                  <input
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    placeholder="Например: Epson L3100 или Canon LBP6030"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white"
                    style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Комментарий</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Опишите проблему или уточните услугу..."
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 bg-white resize-none"
                    style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <Icon name="Loader2" size={18} className="animate-spin" />
                  ) : (
                    <Icon name="Send" size={18} />
                  )}
                  {loading ? "Отправляем..." : "Отправить заявку"}
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Заявка придёт в наш Telegram — ответим быстрее
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[hsl(var(--surface))] rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold font-golos mb-5" style={{ color: "hsl(var(--navy))" }}>
                Наши контакты
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (965) 022-42-99", href: "tel:+79650224299" },
                  { icon: "MessageCircle", label: "Telegram", value: "@kartridzhspb", href: "https://t.me/kartridzhspb" },
                  { icon: "Mail", label: "Email", value: "info@kartridzh-spb.ru", href: "mailto:info@kartridzh-spb.ru" },
                  { icon: "MapPin", label: "Адрес офиса", value: "Мурино, Оборонная д. 2 корп. 3", href: null },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–19:00, Сб: 10:00–16:00", href: null },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "hsl(var(--navy))" }}
                    >
                      <Icon name={c.icon} size={16} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{c.label}</div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-semibold hover:underline"
                          style={{ color: "hsl(var(--navy))" }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold" style={{ color: "hsl(var(--navy))" }}>
                          {c.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://t.me/kartridzhspb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors bg-[#229ED9] text-white hover:bg-[#1a8cc0]"
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
              <a
                href="https://max.ru/kartridzhspb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors bg-[#0077FF] text-white hover:bg-[#005fcc]"
              >
                <Icon name="MessageSquare" size={18} />
                Написать в MAX
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
          <iframe
            title="Карта офиса КартриджСервис"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d30.315868!3d59.939095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378de8928571%3A0x9513dfafd654c47!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;