export default function PortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "核心指标", href: "#kpi" },
    { label: "分析过程", href: "#analysis" },
    { label: "Power BI 展示", href: "#dashboard" },
    { label: "SQL 模块", href: "#sql-directory" },
    { label: "项目价值", href: "#project-value" },
  ];

  const kpis = [
    { label: "成交总额（GMV）", value: "1542 万", note: "15,422,461.77" },
    { label: "有效订单量", value: "9.6 万", note: "96,477" },
    { label: "平均客单价", value: "159.9", note: "元/单" },
    { label: "去重买家数", value: "9.3 万", note: "93,358" },
    { label: "终态失败率", value: "1.26%", note: "终态失败订单占比" },
    { label: "平均配送天数", value: "12.5 天", note: "下单到送达" },
  ];

  const findings = [
    "平台整体交易规模较稳定，2017-11 至 2018-05 为主要增长与高位运行阶段，其中 2017-11 为单月成交峰值。",
    "核心成交主要集中在 sp、rj、mg 等州，区域分布存在明显集中度，说明头部州对整体 GMV 贡献较高。",
    "信用卡是最核心的支付方式，在支付结构中占主导地位，适合围绕信用卡用户行为做进一步经营分析。",
    "随着分期数增加，平均订单金额明显上升，说明高分期订单与高客单价存在较强关联。",
    "平台整体终态失败率较低，平均配送时长约 12.5 天，说明履约质量总体稳定，但仍有优化空间。",
  ];

  const dashboardCards = [
    {
      title: "KPI 总览页",
      text: "展示成交总额、有效订单量、平均客单价、去重买家数、终态失败率与平均配送天数，用于快速判断平台整体规模、订单质量与履约效率。",
      badge: "summary_kpi",
      image: "/images/dashboard_overview.png",
    },
    {
      title: "月度成交额与订单量",
      text: "按月展示成交总额与有效订单量变化，用于识别平台增长阶段与波动区间，观察业务规模的时间演变。",
      badge: "monthly_trend",
      image: "/images/monthly_trend.png",
    },
    {
      title: "月度客单价趋势",
      text: "展示主业务阶段的月度客单价变化，用于观察订单质量与价格结构是否稳定，并辅助判断规模波动来源。",
      badge: "monthly_aov",
      image: "/images/monthly_aov.png",
    },
    {
      title: "各州成交总额 top 10",
      text: "展示成交总额排名前 10 的州，用于识别核心贡献地区与区域集中度，辅助理解地区经营差异。",
      badge: "state_analysis",
      image: "/images/state_analysis.png",
    },
    {
      title: "支付方式成交总额",
      text: "展示不同支付方式对应的成交总额，用于识别主导支付方式及支付结构差异。",
      badge: "payment_analysis",
      image: "/images/payment_analysis.png",
    },
    {
      title: "分期档位分析",
      text: "展示不同分期档位下的订单数与平均订单金额，用于观察信用卡分期结构与高金额订单特征。",
      badge: "installment_analysis",
      image: "/images/installment_analysis.png",
    },
  ];

  const sqlModules = [
    {
      name: "01_kpi_summary.sql",
      desc: "提取首页 KPI 指标，包括 GMV、有效订单量、客单价、去重买家数、终态失败率与平均配送天数。",
    },
    {
      name: "02_monthly_trend.sql",
      desc: "按月统计成交总额与订单量，用于识别业务增长阶段和波动周期。",
    },
    {
      name: "03_state_analysis.sql",
      desc: "按州统计成交表现与订单情况，用于识别核心区域与地区差异。",
    },
    {
      name: "04_payment_analysis.sql",
      desc: "分析支付方式与分期行为，用于理解支付结构和高客单价订单特征。",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-wide text-slate-900">
            Wan Nantian
          </a>
          <nav className="hidden flex-wrap gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top">
        <section id="overview" className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">
                  data analyst portfolio
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  万南天 · 数据分析作品集
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  金融工程专业学生，聚焦 sql、python 与 power bi 的数据分析项目实践，关注业务问题拆解、指标口径定义、经营分析与可视化表达。
                </p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  当前展示项目为 olist 电商经营分析，后续将继续补充银行营销转化分析与更多数据分析作品。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#dashboard"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                  >
                    查看项目展示
                  </a>
                  <a
                    href="https://github.com/wnt0801/olist-ecommerce-analysis"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    GitHub
                  </a>
                  <a
                    href="#sql-directory"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    SQL 模块
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  current project
                </div>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">olist 电商经营分析</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  基于 olist 电商公开数据集，使用 sql 提取核心指标，使用 python 与 power bi
                  完成可视化展示，并形成可用于简历与面试讲解的项目作品。
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-500">tech stack</div>
                    <div className="mt-2 text-sm font-medium text-slate-900">
                      sql · python · power bi
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-500">focus</div>
                    <div className="mt-2 text-sm font-medium text-slate-900">
                      经营分析 · 指标拆解 · 可视化表达
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kpi" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                summary_kpi
              </p>
              <h2 className="mt-2 text-2xl font-bold">核心指标总览</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              首页用于快速判断平台经营表现，按“规模 → 订单 → 单价 → 用户 → 质量 → 履约”的顺序展示关键指标。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {kpis.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-3 text-3xl font-bold tracking-tight">{item.value}</div>
                <div className="mt-2 text-sm text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="analysis" className="mx-auto max-w-6xl px-6 pb-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">项目核心结论</h3>
              <div className="mt-6 space-y-4">
                {findings.map((item, idx) => (
                  <div key={idx} className="flex gap-4 rounded-2xl bg-slate-100 p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      {idx + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold">项目概览</h3>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                <p>
                  本项目围绕销售总览、月度趋势、地区表现、支付方式和分期行为展开分析，重点回答平台交易规模、区域差异、支付结构与履约效率几个核心问题。
                </p>
                <p>
                  在实现路径上，先用 SQL 完成数据审计、指标提取与维度分析，再使用 Python 与 Power BI
                  做可视化展示，最后整理为可用于 GitHub 展示、简历补充与面试讲解的项目作品。
                </p>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="font-semibold">项目结构</div>
                  <ul className="mt-2 space-y-2 text-slate-600">
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">pbix/</code>：Power BI 项目文件</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">sql/</code>：数据审计、指标提取与分析查询</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">images/</code>：项目截图与可视化图片</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">README.md</code>：项目概览与核心结论</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">power bi dashboard</p>
            <h2 className="mt-2 text-2xl font-bold">可视化展示</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              下列看板用于展示项目主要分析结果，包含总览 KPI、趋势分析、地区表现与支付结构等核心模块。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {dashboardCards.map((card) => (
              <div key={card.badge} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img src={card.image} alt={card.title} className="h-auto w-full border-b border-slate-200" />
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {card.badge}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sql-directory" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">sql directory</p>
            <h2 className="mt-2 text-2xl font-bold">SQL 模块</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              项目中的 SQL 主要负责数据审计、指标提取和维度分析。网页中展示模块说明，完整查询代码放在 GitHub 仓库中查看。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {sqlModules.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-mono text-sm text-slate-900">{item.name}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/wnt0801/olist-ecommerce-analysis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              去 GitHub 查看完整 SQL
            </a>
          </div>
        </section>

        <section id="project-value" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
                <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  本项目完整覆盖了从业务问题拆解、SQL 数据提取、指标口径定义，到 Python / Power BI
                  可视化展示与项目包装的分析流程，重点体现数据口径意识、业务指标解释能力与项目表达能力。
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">5</div>
                  <div className="mt-1 text-sm text-slate-300">核心分析模块</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">6</div>
                  <div className="mt-1 text-sm text-slate-300">首页 KPI 指标</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">SQL</div>
                  <div className="mt-1 text-sm text-slate-300">指标提取与分析主线</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">BI</div>
                  <div className="mt-1 text-sm text-slate-300">可视化表达与项目展示</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 text-sm leading-7 text-slate-300">
              <div className="rounded-2xl bg-white/10 p-4">
                如果后续使用 Vercel、GitHub Pages 或 Netlify 部署该页面，可直接将部署后的公开网址放在项目经历下方，配合 GitHub 链接形成“展示页 + 代码仓库”双入口。
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                面试讲解时可按“业务背景 → KPI 总览 → 趋势分析 → 地区差异 → 支付结构 → 业务建议”的顺序展开，减少叙述跳跃感。
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}