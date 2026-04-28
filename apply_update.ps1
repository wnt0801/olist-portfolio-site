# 纭繚鍦ㄤ粨搴撴牴鐩綍鎵ц
Set-Location "C:\Users\Lenovo\olist-portfolio"

$page = @'
import Image from "next/image";

const navItems = [
  { label: "椤圭洰姒傝", href: "#overview" },
  { label: "鏍稿績鎸囨爣", href: "#kpis" },
  { label: "鍏抽敭娲炲療", href: "#insights" },
  { label: "浠〃鐩?, href: "#dashboards" },
  { label: "SQL鐩綍", href: "#sql" },
  { label: "姹傝亴浠峰€?, href: "#value" },
  { label: "鑱旂郴", href: "#contact" },
];

const kpis = [
  { label: "鎴愪氦鎬婚锛圙MV锛?, value: "15,422,461.77", note: "宸插畬鎴愯鍗曟敮浠橀噾棰? },
  { label: "鏈夋晥璁㈠崟閲?, value: "96,477", note: "delivered 璁㈠崟鏁? },
  { label: "骞冲潎瀹㈠崟浠?, value: "159.9", note: "GMV / 鏈夋晥璁㈠崟" },
  { label: "鍘婚噸涔板鏁?, value: "93,358", note: "customer_unique_id" },
  { label: "缁堟€佸け璐ョ巼", value: "1.26%", note: "canceled + unavailable" },
  { label: "骞冲潎閰嶉€佹椂闀?, value: "12.5 澶?, note: "涓嬪崟鍒伴€佽揪骞冲潎鑰楁椂" },
];

const insights = [
  "鎴愪氦瑙勬ā鍦?2017-11 鑷?2018-05 杩涘叆楂樹綅鍖洪棿锛屾湀搴︾粡钀ヨ〃鐜版洿绋冲畾锛屽叿澶囧彲澶嶇洏澧為暱鑺傚銆?,
  "鍖哄煙鍛堢幇鈥滃ご閮ㄥ窞闈犺妯°€侀暱灏惧窞闈犲鍗曗€濈殑鍙岃建缁撴瀯锛岄€傚悎鍋氬樊寮傚寲鎶曟斁绛栫暐銆?,
  "淇＄敤鍗″湪鏀粯缁撴瀯涓崰涓诲锛岄珮閲戦璁㈠崟瀵逛腑楂樺垎鏈熶緷璧栨槑鏄撅紝鍙仈鍔ㄩ鎺у垎灞傜瓥鐣ャ€?,
  "鏁翠綋澶辫触鐜囦綆锛屼絾杩滆窛绂?浣庡瘑搴﹀窞閰嶉€佹椂闀挎樉钁楀亸楂橈紝灞ョ害鏁堢巼鏄牳蹇冧紭鍖栨姄鎵嬨€?,
];

const dashboards = [
  {
    title: "缁忚惀鎬昏 Dashboard",
    image: "/images/dashboard_overview.png",
    desc: "绠＄悊灞傞椤碉細鎬昏 GMV銆佽鍗曘€佸鍗曚环銆佷拱瀹惰妯°€佸け璐ョ巼銆侀厤閫佹晥鐜囥€?,
  },
  {
    title: "鏈堝害瓒嬪娍鍒嗘瀽",
    image: "/images/monthly_trend.png",
    desc: "灞曠ず GMV / 璁㈠崟閲?/ AOV 鐨勬湀搴﹀彉鍖栵紝鐢ㄤ簬澧為暱鑺傚鍒ゆ柇涓庡紓甯稿畾浣嶃€?,
  },
  {
    title: "鏈堝害瀹㈠崟浠峰垎鏋?,
    image: "/images/monthly_aov.png",
    desc: "瀹氫綅瀹㈠崟浠锋尝鍔ㄦ潵婧愶紝杈呭姪鍒ゆ柇缁撴瀯鍙樺寲鎴栨椿鍔ㄥ奖鍝嶃€?,
  },
  {
    title: "宸炵淮搴︾粡钀ヨ〃鐜?,
    image: "/images/state_analysis.png",
    desc: "姣旇緝鍚勫窞鎴愪氦銆佽鍗曘€佸鍗曘€佸け璐ョ巼銆侀厤閫佹椂闀匡紝鏀寔鍖哄煙绛栫暐鍒跺畾銆?,
  },
  {
    title: "鏀粯鏂瑰紡鍒嗘瀽",
    image: "/images/payment_analysis.png",
    desc: "瀵规瘮鏀粯鏂瑰紡涓嬬殑瑙勬ā鍜屽鍗曪紝杈呭姪鏀粯绛栫暐涓庨鎺ф矡閫氥€?,
  },
  {
    title: "鍒嗘湡缁撴瀯鍒嗘瀽",
    image: "/images/installment_analysis.png",
    desc: "鍒嗘瀽涓嶅悓鍒嗘湡妗ｄ綅璁㈠崟閲戦宸紓锛岃瘑鍒珮閲戦浜ゆ槗鍋忓ソ銆?,
  },
];

const sqlModules = [
  ["01_data_audit.sql", "鏁版嵁瀹¤", "鏁版嵁棰勮銆佹椂闂寸獥鍙ｇ‘璁ゃ€佽鍗曠姸鎬佸垎甯?],
  ["02_sales_performance.sql", "閿€鍞〃鐜?, "鏍稿績缁忚惀鎸囨爣銆佹湀搴﹁秼鍔裤€佹敮浠樼粨鏋?],
  ["03_dimension_deep_dive.sql", "缁村害娣辨寲", "鍖哄煙鍒嗘瀽銆佸饱绾﹀垎鏋愩€佸琛ㄧ粡钀ヨ川閲忓姣?],
  ["11_summary_kpi.sql", "棣栭〉鎸囨爣", "鐢熸垚鎬昏 KPI锛欸MV/璁㈠崟/AOV/涔板/澶辫触鐜?閰嶉€?],
  ["12_monthly_business_trend.sql", "鏈堝害瓒嬪娍", "杈撳嚭鏈堝害鎴愪氦銆佽鍗曘€佸鍗曚环"],
  ["13_state_performance.sql", "鍖哄煙琛ㄧ幇", "杈撳嚭宸炵淮搴︽垚浜ゃ€佸け璐ョ巼銆侀厤閫佸ぉ鏁?],
  ["14_payment_type_analysis.sql", "鏀粯鍒嗘瀽", "杈撳嚭鏀粯鏂瑰紡瑙勬ā銆佹垚浜や笌瀹㈠崟"],
  ["15_installment_analysis.sql", "鍒嗘湡鍒嗘瀽", "杈撳嚭鍒嗘湡妗ｄ綅璁㈠崟鏁颁笌骞冲潎閲戦"],
];

const projectValues = [
  {
    title: "涓氬姟浠峰€?,
    points: [
      "缁欏嚭鍖哄煙浼樺厛绾э細澶撮儴宸炰繚瑙勬ā銆侀暱灏惧窞鎻愬鍗曘€?,
      "璇嗗埆灞ョ害鐭澘鍖哄煙锛屾敮鎸佺墿娴佷笌瀹㈡湇璧勬簮浼樺寲銆?,
      "娌夋穩鏈堝害澶嶇洏妯℃澘锛屽府鍔╃鐞嗗眰鍥哄畾鑺傚鐪嬬粡钀ャ€?,
    ],
  },
  {
    title: "鍒嗘瀽浠峰€?,
    points: [
      "褰㈡垚绔埌绔垎鏋愰棴鐜細闂瀹氫箟 鈫?鎸囨爣浣撶郴 鈫?SQL 鈫?BI銆?,
      "寤虹珛鍙鐢?SQL 妯″潡锛屽悗缁」鐩彲蹇€熻縼绉诲鐢ㄣ€?,
      "璁╃粨璁哄彲楠岃瘉锛氭瘡鏉℃礊瀵熼兘瀵瑰簲鍙墽琛屽姩浣溿€?,
    ],
  },
  {
    title: "姹傝亴浠峰€?,
    points: [
      "灞曠ず瀹屾暣鏁版嵁鍒嗘瀽鑳藉姏锛屼笉鍙槸鍙鍖栥€?,
      "绐佸嚭鈥滃晢涓氬喅绛栨敮鎸佲€濊€岄潪鈥滃彧浼氬仛鍥锯€濄€?,
      "鍙洿鎺ョ敤浜庨潰璇曡杩伴」鐩叏娴佺▼涓庣粨鏋溿€?,
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#overview" className="text-sm font-semibold tracking-wide text-cyan-200">
            WANNANTIAN 路 DATA PORTFOLIO
          </a>
          <nav className="hidden items-center gap-4 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="overview" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-6 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
            瀹屾暣鐗堟眰鑱屼富椤?路 鏁版嵁鍒嗘瀽椤圭洰闆?
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            杩欐槸涓€涓兘缁?HR 鐪嬫噦銆?
            <br className="hidden md:block" />
            涔熻兘璁╀笟鍔¤礋璐ｄ汉鐪嬪嚭浠峰€肩殑椤圭洰涓婚〉銆?
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
            浣犲ソ锛屾垜鏄?Wannantian銆傝繖涓〉闈㈠畬鏁村睍绀烘垜鐨勬暟鎹垎鏋愰」鐩細鍖呭惈鎸囨爣瀹氫箟銆佷笟鍔℃礊瀵熴€丅I 浠〃鐩樸€丼QL 妯″潡鍜屼笟鍔′环鍊艰緭鍑猴紝鏂逛究浣犲揩閫熷垽鏂垜鐨勫疄鎴樿兘鍔涗笌宀椾綅鍖归厤搴︺€?
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#dashboards" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              鐪嬩华琛ㄧ洏灞曠ず
            </a>
            <a href="#sql" className="rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white">
              鐪?SQL 鐩綍
            </a>
          </div>
        </div>
      </section>

      <section id="kpis" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">鏍稿績鎸囨爣鎬昏</h2>
          <span className="text-sm text-slate-400">鏁版嵁鍙ｅ緞娓呮櫚鍙鐩?/span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kpis.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm text-slate-300">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-xs text-slate-400">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">鍏抽敭涓氬姟娲炲療</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {insights.map((insight) => (
              <article key={insight} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <p className="text-sm leading-relaxed text-slate-300">{insight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dashboards" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Power BI 浠〃鐩樺睍绀?/h2>
          <span className="text-sm text-slate-400">6 涓〉闈㈠畬鏁磋鐩栧垎鏋愰摼璺?/span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {dashboards.map((board) => (
            <article key={board.title} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
              <Image
                src={board.image}
                alt={board.title}
                width={960}
                height={540}
                className="h-auto w-full border-b border-white/10"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{board.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{board.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="sql" className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
          <h2 className="text-2xl font-semibold md:text-3xl">SQL 妯″潡鐩綍</h2>
          <p className="mt-3 text-sm text-slate-300">姣忎釜妯″潡閮藉搴斾竴涓笟鍔￠棶棰橈紝鏀寔澶嶇敤鍜岄潰璇曡瑙ｃ€?/p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5 text-left text-slate-300">
                <tr>
                  <th className="px-4 py-3">鏂囦欢</th>
                  <th className="px-4 py-3">妯″潡</th>
                  <th className="px-4 py-3">鐢ㄩ€?/th>
                </tr>
              </thead>
              <tbody>
                {sqlModules.map(([file, module, usage]) => (
                  <tr key={file} className="border-t border-white/10 text-slate-200">
                    <td className="px-4 py-3 font-mono text-xs">{file}</td>
                    <td className="px-4 py-3">{module}</td>
                    <td className="px-4 py-3 text-slate-300">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="value" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">杩欎釜椤圭洰瀵瑰矖浣嶇殑浠峰€?/h2>
          <span className="text-sm text-slate-400">涓嶄粎鏈夌粨鏋滐紝涔熸湁鏂规硶鍜屽鐢ㄦ€?/span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projectValues.map((block) => (
            <article key={block.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="text-lg font-semibold text-cyan-200">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center md:px-10">
          <div>
            <p className="text-lg font-semibold">娆㈣繋鑱旂郴鎴戞矡閫氬矖浣嶄笌椤圭洰缁嗚妭銆?/p>
            <p className="mt-1 text-sm text-slate-400">閭锛歨ello@wannantian.com 路 鍩熷悕锛歸annantian.com</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:hello@wannantian.com" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
              鍙戦€侀偖浠?
            </a>
            <a
              href="https://www.wannantian.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-200"
            >
              璁块棶绾夸笂涓婚〉
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
'@

$layout = @'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wannantian | 鏁版嵁鍒嗘瀽甯堜釜浜轰富椤?,
  description:
    "Wannantian 瀹屾暣鐗堟暟鎹垎鏋愬笀姹傝亴涓婚〉锛屽寘鍚」鐩綔鍝侀泦銆佸垎鏋愭柟娉曡銆佹妧鑳芥爤涓庤仈绯绘柟寮忋€?,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
'@

$globals = @'
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans:
    "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Segoe UI", Arial,
    Helvetica, sans-serif;
  --font-mono: "JetBrains Mono", "Consolas", "Courier New", monospace;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family:
    "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Segoe UI", Arial,
    Helvetica, sans-serif;
}
'@

Set-Content -Path ".\app\page.tsx" -Value $page -Encoding UTF8
Set-Content -Path ".\app\layout.tsx" -Value $layout -Encoding UTF8
Set-Content -Path ".\app\globals.css" -Value $globals -Encoding UTF8


npm install
npm run dev
