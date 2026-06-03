import { useState } from "react";
import Icon from "@/components/ui/icon";

type PriceItem = {
  brand: string;
  printer: string;
  cartridge: string;
  price: string;
  color?: "C" | "M" | "Y" | "K" | null;
};

type PriceCategory = {
  category: string;
  columns: string[];
  items: PriceItem[];
};

function detectColor(name: string): "C" | "M" | "Y" | "K" | null {
  const n = name.toUpperCase();
  if (n.endsWith("C") || n.endsWith("-C")) return "C";
  if (n.endsWith("M") || n.endsWith("-M")) return "M";
  if (n.endsWith("Y") || n.endsWith("-Y")) return "Y";
  if (n.endsWith("K") || n.endsWith("-K")) return "K";
  return null;
}

const colorStyle: Record<string, { bg: string; text: string; badge: string }> = {
  C: { bg: "bg-cyan-50", text: "text-cyan-800", badge: "bg-cyan-100 text-cyan-700" },
  M: { bg: "bg-pink-50", text: "text-pink-800", badge: "bg-pink-100 text-pink-700" },
  Y: { bg: "bg-yellow-50", text: "text-yellow-800", badge: "bg-yellow-100 text-yellow-700" },
  K: { bg: "", text: "", badge: "" },
};

const kyoceraItems: PriceItem[] = [
  { brand: "Kyocera Mita", printer: "P7040cdn", cartridge: "TK-5160K", price: "4 800 ₽" },
  { brand: "Kyocera Mita", printer: "P7040cdn", cartridge: "TK-5160C", price: "3 100 ₽" },
  { brand: "Kyocera Mita", printer: "P7040cdn", cartridge: "TK-5160M", price: "3 100 ₽" },
  { brand: "Kyocera Mita", printer: "P7040cdn", cartridge: "TK-5160Y", price: "3 100 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2551ci", cartridge: "TK-8325M", price: "3 000 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2551ci", cartridge: "TK-8325C", price: "3 000 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2551ci", cartridge: "TK-8325Y", price: "3 000 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2551ci", cartridge: "TK-8325K", price: "3 450 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P4040DN", cartridge: "TK-7300", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-6970DN", cartridge: "TK-450", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 4002i/5002i/6002i", cartridge: "TK-6325", price: "4 900 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M6035cidn/M6535cidn/P6035cdn", cartridge: "TK-5150M", price: "2 250 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M6035cidn/M6535cidn/P6035cdn", cartridge: "TK-5150Y", price: "2 250 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M6035cidn/M6535cidn/P6035cdn", cartridge: "TK-5150C", price: "2 250 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M6035cidn/M6535cidn/P6035cdn", cartridge: "TK-5150K", price: "2 250 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P3260dn/M3860idn/M3860idnf", cartridge: "TK-3200", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M3145idn/M3645idn", cartridge: "TK-3060", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6235cdn/M6235cidn/M6635cidn", cartridge: "TK-5280K", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6235cdn/M6235cidn/M6635cidn", cartridge: "TK-5280C", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6235cdn/M6235cidn/M6635cidn", cartridge: "TK-5280M", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6235cdn/M6235cidn/M6635cidn", cartridge: "TK-5280Y", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 4550ci/4551ci/5550ci/5551ci", cartridge: "TK-8505Y", price: "4 150 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 4550ci/4551ci/5550ci/5551ci", cartridge: "TK-8505C", price: "4 150 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 4550ci/4551ci/5550ci/5551ci", cartridge: "TK-8505M", price: "4 150 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 4550ci/4551ci/5550ci/5551ci", cartridge: "TK-8505K", price: "5 450 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3500/3501i/4500i/4501i/5500i/5501i", cartridge: "TK-6305", price: "4 200 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3252ci/3253ci", cartridge: "TK-8335C", price: "3 450 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3252ci/3253ci", cartridge: "TK-8335K", price: "4 400 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3252ci/3253ci", cartridge: "TK-8335M", price: "3 450 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3252ci/3253ci", cartridge: "TK-8335Y", price: "2 450 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3212i", cartridge: "TK-7125", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3050ci/3051ci/3550ci/3551c", cartridge: "TK-8305M", price: "4 100 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3050ci/3051ci/3550ci/3551c", cartridge: "TK-8305Y", price: "4 100 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3050ci/3051ci/3550ci/3551c", cartridge: "TK-8305K", price: "4 950 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3050ci/3051ci/3550ci/3551c", cartridge: "TK-8305C", price: "4 100 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2552ci/2553ci", cartridge: "TK-8345M", price: "3 250 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2552ci/2553ci", cartridge: "TK-8345C", price: "3 250 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2552ci/2553ci", cartridge: "TK-8345K", price: "4 000 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2552ci/2553ci", cartridge: "TK-8345Y", price: "3 250 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2550ci", cartridge: "TK-8315M", price: "2 650 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2550ci", cartridge: "TK-8315Y", price: "2 650 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2550ci", cartridge: "TK-8315K", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 2550ci", cartridge: "TK-8315C", price: "2 650 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 250/250ci/300ci", cartridge: "TK-865M", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 250/250ci/300ci", cartridge: "TK-865Y", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 250/250ci/300ci", cartridge: "TK-865K", price: "3 050 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 250/250ci/300ci", cartridge: "TK-865C", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 1800/1801/2200/2201", cartridge: "TK-4105", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "P6035/P6130/M6030/M6530", cartridge: "TK-5140K", price: "2 250 ₽" },
  { brand: "Kyocera Mita", printer: "P6035/P6130/M6030/M6530", cartridge: "TK-5140Y", price: "2 050 ₽" },
  { brand: "Kyocera Mita", printer: "P6035/P6130/M6030/M6530", cartridge: "TK-5140M", price: "2 050 ₽" },
  { brand: "Kyocera Mita", printer: "P6035/P6130/M6030/M6530", cartridge: "TK-5140C", price: "2 050 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C5150/P6021", cartridge: "TK-580Y", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C5150/P6021", cartridge: "TK-580M", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C5150/P6021", cartridge: "TK-580C", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C5150/P6021", cartridge: "TK-580K", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C2026/FS-2126/FS-2526/FS-2626/FS-5250/M6026/P6026", cartridge: "TK-590K", price: "2 500 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C2026/FS-2126/FS-2526/FS-2626/FS-5250/M6026/P6026", cartridge: "TK-590M", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C2026/FS-2126/FS-2526/FS-2626/FS-5250/M6026/P6026", cartridge: "TK-590Y", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C2026/FS-2126/FS-2526/FS-2626/FS-5250/M6026/P6026", cartridge: "TK-590C", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "FS-4100", cartridge: "TK-3110", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6230/M6230/M6630", cartridge: "TK-5270M", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6230/M6230/M6630", cartridge: "TK-5270Y", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6230/M6230/M6630", cartridge: "TK-5270C", price: "2 300 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P6230/M6230/M6630", cartridge: "TK-5270K", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5026cdn/cdw/M5526cdn/cdw", cartridge: "TK-5240M", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5026cdn/cdw/M5526cdn/cdw", cartridge: "TK-5240Y", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5026cdn/cdw/M5526cdn/cdw", cartridge: "TK-5240C", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5026cdn/cdw/M5526cdn/cdw", cartridge: "TK-5240K", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5220M", price: "1 600 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5220Y", price: "1 600 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5220K", price: "1 600 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5230M", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5230Y", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5230C", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P5021cdw/cdn/M5521cdw", cartridge: "TK-5230K", price: "1 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M8124cidn/M8130cidn/M8132cidn", cartridge: "TK-8115C", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M8124cidn/M8130cidn/M8132cidn", cartridge: "TK-8115K", price: "2 500 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M8124cidn/M8130cidn/M8132cidn", cartridge: "TK-8115M", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M8124cidn/M8130cidn/M8132cidn", cartridge: "TK-8115Y", price: "2 400 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M2040/M2540/M2640", cartridge: "TK-1170", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "КМ-1620/КМ-1635/КМ-1650/КМ-2020/КМ-2050", cartridge: "TK-410", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 3510i/3511i", cartridge: "TK-7205", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 300i", cartridge: "TK-685", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "TASKalfa 180/181/220/221", cartridge: "TK-435", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "P2335d/dn/dw/M2235dn/M2735dn/M2835dw", cartridge: "TK-1200", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "P2235dn/P2235dw/M2135dn/M2635dn/M2735dw", cartridge: "TK-1150", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "P2040", cartridge: "TK-1160", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "KM-2530/3530/3035/4035/5035", cartridge: "370AB000", price: "4 850 ₽" },
  { brand: "Kyocera Mita", printer: "KM-1505/KM-1510/KM-1810", cartridge: "37029010", price: "1 500 ₽" },
  { brand: "Kyocera Mita", printer: "KM-1500/FS-1020/FS-1118", cartridge: "TK-100", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C8525/FS-C8520/FS-C8030/FS-C8025/FS-C8020", cartridge: "TK-895C", price: "2 500 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C8525/FS-C8520/FS-C8030/FS-C8025/FS-C8020", cartridge: "TK-895K", price: "3 100 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C8525/FS-C8520/FS-C8030/FS-C8025/FS-C8020", cartridge: "TK-895Y", price: "2 500 ₽" },
  { brand: "Kyocera Mita", printer: "FS-C8525/FS-C8520/FS-C8030/FS-C8025/FS-C8020", cartridge: "TK-895M", price: "2 500 ₽" },
  { brand: "Kyocera Mita", printer: "FS-9130DN/FS-9530D", cartridge: "TK-710", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-6030MFP/6025/6530MFP/6525MFP", cartridge: "TK-475", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-4200/FS-4300/Ecosys M3550", cartridge: "TK-3130", price: "2 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-3920/FS-3040/FS-3140/FS-3540/FS-3640", cartridge: "TK-350", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-2100/4100/Ecosys M3040dn/3540dn", cartridge: "TK-3100", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1500/FS-1320/FS-1370/FS-2135/P2135", cartridge: "TK-170", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1120D/FS-1320D/ECOSYS P2035D/P2135D", cartridge: "TK-160", price: "1 100 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1110/1024/1124", cartridge: "TK-1100", price: "1 100 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1060/FS-1025/FS-1125", cartridge: "TK-1120", price: "1 100 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1040/FS-1020MFP/FS-1120MFP", cartridge: "TK-1110", price: "1 100 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1035/FS-1135/Ecosys M2035/M2535", cartridge: "TK-1140", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1030MFP/1130MFP/ECOSYS M2030dn/M2530dn", cartridge: "TK-1130", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "FS-1028/FS-1128/FS-1300/FS-1350", cartridge: "TK-130", price: "1 250 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P3055dn/P3155dn/P3060dn/P3260dn", cartridge: "TK-3190", price: "2 650 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P3050dn/P3055dn/P3060dn/P3150dn/P3260d", cartridge: "TK-3170", price: "1 900 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys P3045dn/P3050dn/P3055dn/P3060dn/M3145dn/M3645dh/М3655Idn", cartridge: "TK-3160", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M4125idn/M4132idn", cartridge: "TK-6115", price: "1 850 ₽" },
  { brand: "Kyocera Mita", printer: "Ecosys M3040idn/M3540idn", cartridge: "TK-3150", price: "1 850 ₽" },
].map((item) => ({ ...item, color: detectColor(item.cartridge) }));

const priceData: PriceCategory[] = [
  {
    category: "Заправка лазерных картриджей",
    columns: ["Бренд", "Наименование картриджа", "Цена"],
    items: kyoceraItems,
  },
  {
    category: "Заправка струйных картриджей",
    columns: ["Услуга / Модель", "Цена"],
    items: [
      { brand: "Epson", cartridge: "Epson (все серии)", price: "200–400 ₽" },
      { brand: "Epson", cartridge: "Epson с СНПЧ — заправка системы", price: "300–600 ₽" },
    ],
  },
  {
    category: "Ремонт принтеров",
    columns: ["Услуга", "Цена"],
    items: [
      { brand: "", cartridge: "Диагностика", price: "Бесплатно" },
      { brand: "", cartridge: "Ремонт механизма подачи", price: "от 800 ₽" },
      { brand: "", cartridge: "Замена фьюзера (печка)", price: "от 1 500 ₽" },
      { brand: "Epson", cartridge: "Чистка Epson (сброс памперса)", price: "от 600 ₽" },
      { brand: "", cartridge: "Профилактическое ТО принтера", price: "от 700 ₽" },
      { brand: "", cartridge: "Ремонт МФУ / копира", price: "от 1 000 ₽" },
      { brand: "", cartridge: "Выезд по Санкт-Петербургу", price: "300 ₽" },
      { brand: "", cartridge: "Выезд по Ленинградской области", price: "от 500 ₽" },
    ],
  },
];

const colorLabel: Record<string, string> = { C: "Cyan", M: "Magenta", Y: "Yellow", K: "Black" };

const PriceSection = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const currentItems = priceData[activeTab].items;

  const filtered = currentItems.filter(
    (item) =>
      item.cartridge.toLowerCase().includes(search.toLowerCase()) ||
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.printer.toLowerCase().includes(search.toLowerCase())
  );

  const allFiltered = search.trim()
    ? priceData.flatMap((cat) =>
        cat.items
          .filter(
            (item) =>
              item.cartridge.toLowerCase().includes(search.toLowerCase()) ||
              item.brand.toLowerCase().includes(search.toLowerCase()) ||
              item.printer.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => ({ ...item, category: cat.category }))
      )
    : null;

  const displayItems = search && allFiltered ? allFiltered : filtered;
  const isLaser = !search && activeTab === 0;

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
          {/* Search */}
          <div className="p-4 border-b border-slate-100">
            <div className="relative max-w-lg mx-auto">
              <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Поиск по наименованию картриджа или бренду..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ "--tw-ring-color": "hsl(var(--navy))" } as React.CSSProperties}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          {!search && (
            <div className="flex border-b border-slate-100 overflow-x-auto">
              {priceData.map((cat, i) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 min-w-max py-3 px-4 text-sm font-semibold font-golos transition-colors text-center whitespace-nowrap ${
                    activeTab === i ? "text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                  style={activeTab === i ? { backgroundColor: "hsl(var(--navy))" } : {}}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          )}

          {/* Color legend for laser tab */}
          {isLaser && (
            <div className="flex flex-wrap gap-3 px-6 py-3 bg-slate-50 border-b border-slate-100 text-xs">
              <span className="text-slate-500 font-medium self-center">Подсветка цвета:</span>
              {(["C", "M", "Y"] as const).map((c) => (
                <span key={c} className={`px-2 py-0.5 rounded-full font-semibold ${colorStyle[c].badge}`}>
                  {colorLabel[c]}
                </span>
              ))}
              <span className="px-2 py-0.5 rounded-full font-semibold bg-slate-200 text-slate-600">Black</span>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs uppercase text-slate-400 border-b border-slate-100 bg-slate-50">
                  {isLaser ? (
                    <>
                      <th className="text-left px-4 py-3 w-64">Принтер</th>
                      <th className="text-left px-4 py-3">Наименование картриджа</th>
                      <th className="text-right px-4 py-3 w-32">Цена</th>
                    </>
                  ) : (
                    <>
                      <th className="text-left px-6 py-3">Услуга / Модель</th>
                      {search && <th className="text-left px-6 py-3">Категория</th>}
                      <th className="text-right px-6 py-3 w-32">Цена</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {displayItems.map((item, i) => {
                  const col = item.color;
                  const isColored = col && col !== "K";
                  const rowBg = isColored && isLaser ? colorStyle[col].bg : "";
                  return (
                    <tr key={i} className={`border-b border-slate-50 hover:brightness-95 transition-all ${rowBg}`}>
                      {isLaser ? (
                        <>
                          <td className="px-4 py-2.5">
                            <span className="text-xs text-slate-600">{item.printer}</span>
                          </td>
                          <td className="px-4 py-2.5">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-slate-700">
                                Картридж {item.brand} {item.cartridge}
                              </span>
                              {col && (
                                <span
                                  className={`text-xs px-1.5 py-0.5 rounded font-bold ${
                                    col === "K"
                                      ? "bg-slate-200 text-slate-600"
                                      : colorStyle[col].badge
                                  }`}
                                >
                                  {colorLabel[col]}
                                </span>
                              )}
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-3">
                            <div className="text-sm font-medium text-slate-700">{item.cartridge}</div>
                            {item.brand && <div className="text-xs text-slate-400 mt-0.5">{item.brand}</div>}
                          </td>
                          {"category" in item && search && (
                            <td className="px-6 py-3 text-xs text-slate-400">
                              {(item as PriceItem & { category: string }).category}
                            </td>
                          )}
                        </>
                      )}
                      <td className="px-4 py-2.5 text-right">
                        <span className="font-bold font-golos text-sm" style={{ color: "hsl(var(--navy))" }}>
                          {item.price}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {displayItems.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-10 text-slate-400 text-sm">
                      Ничего не найдено. Уточните запрос или позвоните нам.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

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