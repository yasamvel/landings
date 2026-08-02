"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Cat,
  Coffee,
  Crown,
  EyeOff,
  Leaf,
  Loader2,
  Lock,
  MousePointerClick,
  Play,
  Sparkles,
  Star,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const revealCards = [
  { icon: "🥔", title: "Картошка", text: "Не то." },
  { icon: "🐈", title: "Котик", text: "Не то." },
  { icon: "🦆", title: "Утка", text: "Не то." },
  { icon: "🌵", title: "Кактус", text: "Не то." },
  { icon: "🍞", title: "Хлеб", text: "Не то." },
  { icon: "🧀", title: "Сыр", text: "Не то." },
  { icon: "☕", title: "Кофе", text: "Не то." }
];

const searches = [
  ["горячие девушки", "горячий чай"],
  ["большие...", "большие скидки"],
  ["милф", "милый филин"],
  ["xxx", "три крестика"],
  ["взрослый контент", "контент для взрослых людей, которые любят огород"]
];

const stats = [
  ["Разочаровано пользователей", 1284931],
  ["Найдено порно", 0],
  ["Картошек просмотрено", 3452112],
  ["Капибар", 923551],
  ["Котов", 7248192]
];

const reviews = [
  "Пришёл за одним. Остался ради картошки.",
  "Никогда ещё не был настолько культурно обманут.",
  "Жена довольна.",
  "10/10. Ни одного сюрприза."
];

const faq = [
  ["Есть ли здесь порно?", "Нет."],
  ["Совсем?", "Вообще."],
  ["Даже маленького?", "Нет."],
  ["А если долго искать?", "Появится картошка."],
  ["Почему?", "Потому что это neporno.site."]
];

const luckyItems = [
  ["🐈", "Котик посмотрел и ничего не подтвердил."],
  ["🥔", "Картошка высшего безопасного сорта."],
  ["🦆", "Утка сказала: кря, но культурно."],
  ["🌵", "Кактус колючий, сайт нет."],
  ["🦫", "Капибара одобрила ваш выбор."],
  ["☕", "Горячий чай. Вот и весь жар."],
  ["🍕", "Пицца без скрытых смыслов."],
  ["🍉", "Арбуз вошёл без регистрации."]
];

const randomToasts = ["+1 картошка", "Новый котик найден", "Капибара одобрила ваш выбор", "Порно снова не найдено"];
const consoleMessages = ["Не ищи.", "Тут пусто.", "Попробуй посмотреть на котиков.", "404 Porn Not Found", "Картошка загружается..."];

type Toast = { id: number; text: string };

function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={cn("relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}
    >
      {children}
    </motion.section>
  );
}

function CountUp({ value }: { value: number }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 90;
    const start = performance.now();

    const tick = () => {
      frame = Math.min(total, Math.floor(((performance.now() - start) / 1400) * total));
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setShown(Math.round(value * eased));
      if (frame < total) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{shown.toLocaleString("ru-RU")}</span>;
}

function BossMode({ onExit }: { onExit: () => void }) {
  const rows = Array.from({ length: 18 }, (_, i) => i + 1);
  const cols = ["A", "B", "C", "D", "E", "F", "G"];

  return (
    <main className="min-h-screen excel-grid p-3 text-slate-200">
      <div className="mb-3 flex items-center justify-between rounded bg-emerald-900/80 px-4 py-3">
        <div className="flex items-center gap-3 font-semibold">
          <BarChart3 className="h-5 w-5" />
          Финансовый отчёт Q3 - конфиденциально.xlsx
        </div>
        <Button variant="glass" size="default" onClick={onExit}>
          <X className="h-4 w-4" />
          Вернуться
        </Button>
      </div>
      <div className="overflow-hidden rounded border border-slate-600 bg-slate-950/85">
        <div className="grid grid-cols-[52px_repeat(7,minmax(130px,1fr))]">
          <div className="border-b border-r border-slate-600 bg-slate-800 p-2" />
          {cols.map((col) => (
            <div key={col} className="border-b border-r border-slate-600 bg-slate-800 p-2 text-center font-semibold">
              {col}
            </div>
          ))}
          {rows.map((row) => (
            <div className="contents" key={row}>
              <div className="border-b border-r border-slate-700 bg-slate-800 p-2 text-center">{row}</div>
              {cols.map((col, i) => (
                <div key={`${row}-${col}`} className="min-h-10 border-b border-r border-slate-700 p-2 text-sm">
                  {row === 1 && i === 0 ? "Актив" : row === 1 && i === 1 ? "План" : row === 1 && i === 2 ? "Факт" : ""}
                  {row > 1 && i < 3 ? `${((row + 3) * (i + 7) * 1942).toLocaleString("ru-RU")} ₽` : ""}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [lucky, setLucky] = useState(luckyItems[0]);
  const [adultLoading, setAdultLoading] = useState(false);
  const [adultDone, setAdultDone] = useState(false);
  const [bossMode, setBossMode] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const glowX = useTransform(springX, (v) => `${v}px`);
  const glowY = useTransform(springY, (v) => `${v}px`);

  const addToast = (text: string) => {
    const id = Date.now() + Math.random();
    setToasts((current) => [...current.slice(-3), { id, text }]);
    window.setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 3800);
  };

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F12") addToast("Даже в DevTools ничего интересного.");
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "u") {
        addToast("HTML уже признался: тут только картошка.");
      }
    };
    const consoleTimer = window.setInterval(() => {
      console.log(consoleMessages[Math.floor(Math.random() * consoleMessages.length)]);
    }, 4200);
    const toastTimer = window.setInterval(() => {
      addToast(randomToasts[Math.floor(Math.random() * randomToasts.length)]);
    }, 7800);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onKeyDown);
      window.clearInterval(consoleTimer);
      window.clearInterval(toastTimer);
    };
  }, [mouseX, mouseY]);

  const startAdultMode = () => {
    setAdultLoading(true);
    setAdultDone(false);
    window.setTimeout(() => setAdultDone(true), 5000);
  };

  const luckyCard = useMemo(() => lucky, [lucky]);

  if (bossMode) return <BossMode onExit={() => setBossMode(false)} />;

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-background text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[2] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
        style={{ left: glowX, top: glowY }}
      />

      <div className="fixed right-4 top-4 z-50">
        <Button variant="glass" onClick={() => setBossMode(true)} aria-label="Включить режим начальник рядом">
          <BriefcaseBusiness className="h-4 w-4" />
          <span className="hidden sm:inline">Начальник рядом</span>
        </Button>
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          className="absolute left-[-12%] top-[8%] h-80 w-80 rounded-full bg-accent/35 blur-3xl"
          animate={{ x: [0, 80, 10], y: [0, 40, -20], scale: [1, 1.18, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-secondary/35 blur-3xl"
          animate={{ x: [0, -90, -20], y: [0, 70, 10], scale: [1, 0.9, 1.14] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[18%] left-[30%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, 110, 30], y: [0, -60, 0], scale: [1, 1.25, 0.95] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <section className="relative z-10 flex min-h-screen items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
              <Lock className="h-4 w-4 text-accent" />
              Никакого контента 18+. Вообще.
            </div>
            <h1 className="text-gradient animate-shimmer text-[clamp(4.5rem,17vw,14rem)] font-black leading-[0.84] tracking-normal">
              НЕПОРНО
            </h1>
            <p className="mt-7 text-3xl font-semibold text-white sm:text-5xl">Вы ожидали совсем другое.</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Самый безопасный сайт, который можно открыть в общественном транспорте.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="neon" onClick={() => document.getElementById("content")?.scrollIntoView()}>
                <Play className="h-5 w-5 fill-current" />
                Посмотреть
              </Button>
              <Button size="lg" variant="glass" onClick={() => document.getElementById("content")?.scrollIntoView()}>
                😂 Разочароваться
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative min-h-[360px]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {["🥔", "🐈", "☕", "🦆", "🌵"].map((item, index) => (
              <motion.div
                key={item}
                className="absolute rounded-lg border border-white/12 bg-white/8 px-5 py-4 text-5xl shadow-glow backdrop-blur-xl"
                style={{ left: `${(index * 19) % 72}%`, top: `${12 + ((index * 23) % 62)}%` }}
                animate={{ y: [0, -22, 0], rotate: [0, index % 2 ? 5 : -5, 0] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <ArrowDown className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-white/50" />
      </section>

      <Section id="content">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Контент</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Выглядит подозрительно</h2>
          </div>
          <Button
            variant="glass"
            onClick={() => {
              const next = luckyItems[Math.floor(Math.random() * luckyItems.length)];
              setLucky(next);
              addToast(`${next[0]} ${next[1]}`);
            }}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            Мне повезёт
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {revealCards.map((card, index) => (
            <motion.button
              key={card.title}
              className="group min-h-56 rounded-lg border border-white/10 bg-white/[0.05] p-5 text-left backdrop-blur-xl transition hover:border-accent/60"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => addToast(`${card.icon} ${card.title}: ${card.text}`)}
            >
              <div className="flex items-center justify-between text-white/45">
                <EyeOff className="h-5 w-5" />
                <span className="text-xs uppercase tracking-[0.22em]">locked #{index + 1}</span>
              </div>
              <div className="mt-10 grid place-items-center">
                <span className="text-6xl blur-sm transition duration-300 group-hover:blur-0">{card.icon}</span>
                <h3 className="mt-6 text-2xl font-bold opacity-0 transition group-hover:opacity-100">{card.title}</h3>
                <p className="mt-2 text-white/60 opacity-0 transition group-hover:opacity-100">{card.text}</p>
              </div>
            </motion.button>
          ))}
        </div>
        <Card className="mt-5 flex items-center gap-4 p-5">
          <span className="text-5xl">{luckyCard[0]}</span>
          <p className="text-lg text-white/75">{luckyCard[1]}</p>
        </Card>
      </Section>

      <Section>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Популярные запросы</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Ожидание превращается</h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {searches.map(([from, to], index) => (
            <motion.div
              key={from}
              className="glass rounded-lg p-5"
              whileHover={{ rotateY: 8, y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <div className="text-sm text-white/45">ожидание</div>
              <div className="mt-2 min-h-14 text-xl font-semibold">{from}</div>
              <div className="my-5 h-px bg-gradient-to-r from-accent to-secondary" />
              <motion.div
                initial={{ opacity: 0.4, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="text-sm text-white/45"
              >
                реальность
              </motion.div>
              <div className="mt-2 text-xl font-bold text-accent">{to}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
                <Crown className="mr-2 h-4 w-4" />
                Очень премиально
              </div>
              <h2 className="text-4xl font-bold sm:text-6xl">NEPORNO Premium</h2>
              <ul className="mt-8 grid gap-3 text-lg text-white/72 sm:grid-cols-2">
                {["ещё меньше порно", "ещё больше котиков", "HD картошка", "эксклюзивные фотографии кабачков", "ежедневная капибара"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-6">
              <div className="text-white/45">Стоимость подписки</div>
              <div className="mt-3 flex items-end gap-4">
                <span className="text-3xl text-white/35 line-through">999 ₽</span>
                <span className="text-5xl font-black text-gradient">Бесплатно</span>
              </div>
              <Button className="mt-7 w-full" size="lg" variant="neon" onClick={() => addToast("Поздравляем! Ничего успешно получено.")}>
                Получить ничего
              </Button>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold sm:text-6xl">Статистика без стыда</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([label, value]) => (
            <Card key={label as string} className="p-5">
              <div className="text-3xl font-black text-gradient sm:text-4xl">
                <CountUp value={value as number} />
              </div>
              <div className="mt-3 text-sm leading-6 text-white/60">{label}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold sm:text-6xl">Отзывы</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <Card key={review} className="p-6">
              <div className="mb-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-white/78">"{review}"</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Честные ответы</h2>
          </div>
          <Card className="p-2 sm:p-6">
            <Accordion type="single" collapsible>
              {faq.map(([question, answer], index) => (
                <AccordionItem key={question} value={`item-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </Section>

      <Section className="pb-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">18+</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Большая красная кнопка</h2>
            <p className="mt-5 text-lg leading-8 text-white/65">Нажимать можно. Последствия максимально скучные.</p>
          </div>
          <Button size="lg" variant="neon" className="h-24 text-4xl" onClick={startAdultMode}>
            <MousePointerClick className="h-9 w-9" />
            18+
          </Button>
        </div>
      </Section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 text-center text-sm text-white/55">
        © 2026 neporno.site. Самый безопасный сайт в интернете. Никакого контента 18+. Только хорошее настроение.
      </footer>

      <div className="fixed bottom-4 right-4 z-[80] grid gap-3">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 24, y: 12 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-white/12 bg-black/80 px-4 py-3 text-sm shadow-glow backdrop-blur-xl"
          >
            {toast.text}
          </motion.div>
        ))}
      </div>

      {adultLoading && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/95 p-4">
          <Card className="w-full max-w-2xl p-6 text-center">
            {!adultDone ? (
              <>
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent" />
                <h2 className="mt-6 text-3xl font-bold">Ищем что-нибудь запрещённое...</h2>
                <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold">Поздравляем! Вы успешно ничего не нашли.</h2>
                <div className="relative mx-auto mt-6 aspect-square w-full max-w-md overflow-hidden rounded-lg border border-white/10">
                  <Image src="/potato.png" alt="Огромная безопасная фотография картошки" fill className="object-cover" priority />
                </div>
                <Button className="mt-6" variant="glass" onClick={() => setAdultLoading(false)}>
                  Закрыть картошку
                </Button>
              </>
            )}
          </Card>
        </div>
      )}
    </main>
  );
}
