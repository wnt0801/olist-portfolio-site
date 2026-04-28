import Link from "next/link";

export default function HomePage() {
  const projects = [
    {
      slug: "olist",
      title: "Olist 电商经营分析",
      tagline: "从总览 KPI 到地区、支付、分期的全链路经营分析",
      stack: ["SQL", "Power BI", "Python"],
      role: "主项目 · 业务分析与可视化",
      highlights: [
        "GMV 1542 万,9.6 万订单,覆盖 27 个州的经营画像",
        "8 个 SQL 模块 + 6 个 KPI + 6 张 Power BI 仪表板",
        "区分 customer_id 与 customer_unique_id 等口径细节",
      ],
      kpis: [
        { value: "9.6 万", label: "订单数" },
        { value: "9.3 万", label: "买家数" },
        { value: "1542 万", label: "GMV" },
        { value: "159.86", label: "客单价" },
        { value: "12.50", label: "配送天数" },
        { value: "1.26%", label: "失败率" },
      ],
      github: "https://github.com/wnt0801/olist-ecommerce-analysis",
      cover: "/images/state_analysis.png",
      coverAlt: "各州成交 Top 10",
    },
    {
      slug: "olist-cancellation",
      title: "Olist 取消风险建模",
      tagline: "从描述性发现 到 逻辑回归验证支付方式与金额的交互效应",
      stack: ["SQL", "scikit-learn", "Python"],
      role: "延伸建模 · 描述统计 到 因果验证",
      highlights: [
        "78,126 条订单,逻辑回归 + 交互项,处理 149:1 类不平衡",
        "Voucher OR=1.39,金额 OR=1.15,交互项 OR=1.09",
        "高金额 + Voucher 的组合放大效应在控制变量后仍显著",
      ],
      kpis: [
        { value: "78,126", label: "样本量" },
        { value: "149:1", label: "类不平衡" },
        { value: "31.55", label: "Fisher OR" },
        { value: "1.39", label: "Voucher OR" },
        { value: "1.15", label: "金额 OR" },
        { value: "1.09", label: "交互项 OR" },
      ],
      github: "https://github.com/wnt0801/olist-cancellation-risk-analysis",
      cover: "/images/odds_ratio.png",
      coverAlt: "Odds Ratio 可视化",
    },
    {
      slug: "a-stock",
      title: "A 股申万行业轮动规律",
      tagline: "27 个行业 × 4 年数据,量化不同市场环境下的超额收益结构",
      stack: ["AkShare", "Pandas", "Seaborn"],
      role: "学习项目 · 量化分析入门",
      highlights: [
        "申万一级 27 个行业,2021-2024 共 938 个交易日",
        "上涨期 / 震荡期 / 下跌期分类,胜率 + 超额收益双指标",
        "反常识发现:消费类下跌期表现并不优于市场",
      ],
      kpis: [
        { value: "27", label: "行业数" },
        { value: "938", label: "交易日" },
        { value: "4 年", label: "时间窗口" },
        { value: "95", label: "上涨期" },
        { value: "709", label: "震荡期" },
        { value: "134", label: "下跌期" },
      ],
      github: "https://github.com/wnt0801/a-stock-industry-rotation",
      cover: "/images/heatmap_winrate.png",
      coverAlt: "超额收益热力图",
    },
  ];

  // 注意:JSX 里直接写"," 中间会被解析坑,所以中文逗号通过常量注入
  const C = "，";
  const COLON = "：";

  // 把上面字符串里的英文 , 和 : 替换成中文
  const fix = (s: string) => s.replace(/,/g, C).replace(/:/g, COLON);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-wide text-slate-900">Wan Nantian</a>
          <nav className="hidden flex-wrap gap-5 md:flex">
            <a href="#projects" className="text-sm text-slate-600 transition hover:text-slate-900">项目作品</a>
            <a href="#about" className="text-sm text-slate-600 transition hover:text-slate-900">关于我</a>
            <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="text-sm text-slate-600 transition hover:text-slate-900">GitHub</a>
          </nav>
        </div>
      </header>

      <div id="top">
        <section className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">data analyst portfolio</div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">万南天<span className="block sm:inline sm:ml-3">· 数据分析作品集</span></h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">金融工程专业学生，聚焦业务数据分析方向。围绕 SQL、Python 与 Power BI，持续打磨从业务问题拆解、指标口径定义到可视化表达的完整分析能力。</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">当前共 3 个项目：1 个完整经营分析、1 个延伸建模分析、1 个量化方向的学习项目。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看项目</a>
              <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub 主页</a>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">projects</p>
            <h2 className="mt-2 text-2xl font-bold">项目作品</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">三个项目按业务分析、建模延伸、量化探索的顺序排列。点击进入对应详情页，含完整结论、方法与代码片段。</p>
          </div>

          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7">
                <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                  <div>
                    <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{p.role}</div>
                    <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{p.tagline}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{s}</span>
                      ))}
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-400" /><span>{fix(h)}</span></li>
                      ))}
                    </ul>

                    {p.kpis && (
                      <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
                        {p.kpis.map((k) => (
                          <div key={k.label} className="rounded-xl bg-slate-50 px-2 py-3 text-center">
                            <div className="text-sm font-bold text-slate-900 sm:text-base">{k.value}</div>
                            <div className="mt-1 text-[10px] text-slate-500 sm:text-xs">{k.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link href={`/projects/${p.slug}`} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">进入项目详情</Link>
                      <a href={p.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub</a>
                    </div>
                  </div>

                  {p.cover ? (
                    <img src={p.cover} alt={p.coverAlt} className="w-full rounded-2xl border border-slate-200 bg-slate-50" />
                  ) : (
                    <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">{p.coverAlt}（待补封面图）</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">about</p>
                <h2 className="mt-2 text-2xl font-bold">关于我</h2>
                <p className="mt-5 text-sm leading-7 text-slate-600">金融工程专业大二在读。求职方向为业务数据分析，对电商、金融场景下的指标拆解、用户分群与因果验证最感兴趣。目前持续通过项目打磨 SQL 与 Python 的分析能力，并尝试把描述性分析延伸到建模验证。</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">作品集中所有项目均已开源。如对项目细节、SQL 写法或建模思路有兴趣，欢迎前往 GitHub 直接查看完整代码。</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <div className="text-sm font-semibold text-slate-900">技术栈</div>
                <div className="mt-4 grid gap-4 text-sm text-slate-600">
                  <div>
                    <div className="font-medium text-slate-700">数据提取</div>
                    <div className="mt-1">SQL（MySQL）、CTE、窗口函数、多表 JOIN</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">分析与建模</div>
                    <div className="mt-1">Python、Pandas、scikit-learn（Logistic Regression）</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">可视化</div>
                    <div className="mt-1">Power BI、Matplotlib、Seaborn</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">数据来源</div>
                    <div className="mt-1">Kaggle 公开数据集、AkShare 金融数据接口</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href="#top" className="transition hover:text-slate-900">Back to top</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
