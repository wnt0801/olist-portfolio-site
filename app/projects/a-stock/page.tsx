export default function AStockProjectPortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "项目背景", href: "#kpi" },
    { label: "方法论", href: "#methodology" },
    { label: "核心发现", href: "#analysis" },
    { label: "可视化", href: "#dashboard" },
    { label: "关键代码", href: "#code-highlight" },
    { label: "学习计划", href: "#learning" },
  ];

  const kpis = [
    { label: "申万一级行业", value: "27", note: "覆盖 A 股全行业" },
    { label: "交易日样本", value: "938", note: "2021-01 至 2024-12" },
    { label: "上涨期 / 震荡期 / 下跌期", value: "95 / 709 / 134", note: "按沪深 300 滚动收益分类" },
    { label: "市场环境阈值", value: "± 5%", note: "20 日滚动收益" },
    { label: "数据来源", value: "AkShare", note: "申万一级行业指数日线" },
    { label: "时间窗口", value: "4 年", note: "覆盖完整牛熊周期" },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "数据获取",
      tag: "AkShare",
      desc: "通过 AkShare 拉取沪深 300 与申万一级 27 个行业指数日线数据，覆盖 2021-2024 年共 938 个交易日。沪深 300 作为基准，申万行业作为分析对象。",
    },
    {
      step: "02",
      title: "市场环境分类",
      tag: "20 日滚动",
      desc: "用沪深 300 的 20 日滚动收益作为分类信号：> 5% 标记为上涨期，< -5% 为下跌期，其余为震荡期。这一步把每个交易日打上环境标签，是后续分组分析的前提。",
    },
    {
      step: "03",
      title: "超额收益计算",
      tag: "行业 - 基准",
      desc: "超额收益 = 行业日涨跌幅 - 沪深 300 日涨跌幅。这个指标剥离市场整体走势，回答的是行业相对于市场的强弱，而不是行业自身涨跌。",
    },
    {
      step: "04",
      title: "分组聚合",
      tag: "groupby + agg",
      desc: "按 行业 × 市场环境 双维度分组，输出三个核心指标：平均超额收益（弹性）、胜率（持续性）、样本数（稳健性）。三个指标互补，单独看任一个都会失真。",
    },
  ];

  const findings = [
    {
      type: "成长类",
      tag: "上涨期高弹性",
      title: "上涨期弹性最大，但回撤同样放大",
      detail: "计算机、电气设备、电子在上涨期日均超额收益分别为 +0.47%、+0.33%、+0.29%，胜率达 61%、60%、59%。但下跌期超额收益转负，β 值高、涨跌均放大，适合趋势明确的上涨期持有。",
    },
    {
      type: "防御类",
      tag: "下跌期最稳",
      title: "银行是最纯粹的防御行业",
      detail: "银行上涨期胜率仅 0.39（27 个行业最低），下跌期胜率 0.60（最高），与市场走势呈明显负相关。2021-2024 累计收益虽跑输大盘，但在 2022 年熊市中相对抗跌，具备典型防御配置价值。",
    },
    {
      type: "反常识",
      tag: "传统认知偏差",
      title: "消费类并非天然防御",
      detail: "食品饮料下跌期日均超额收益 -0.23%、胜率仅 0.40，是下跌期表现最差的行业之一。这与消费等于防御的传统认知相悖。原因可能在于 2021 年白酒高估值叠加消费降级预期，估值杀跌主导了行情，基本面逻辑让位于资金面逻辑。",
    },
    {
      type: "周期类",
      tag: "胜率高但弹性低",
      title: "胜在持续性而非弹性",
      detail: "化工在上涨期胜率 0.64（最高），但单日超额收益中位数低于成长类。2021 年碳中和行情驱动周期类累计涨幅一度超 40%，随后随大宗商品周期回落震荡下行。",
    },
  ];

  const dashboardCards = [
    {
      title: "超额收益热力图",
      text: "27 个行业 × 3 种市场环境的平均日超额收益矩阵。颜色越红表示该行业在该环境下相对市场越强，越蓝表示越弱。能直观看到成长类在上涨期、银行在下跌期的红色区块。",
      badge: "heatmap_alpha",
      image: "/images/heatmap_alpha.png",
    },
    {
      title: "胜率热力图",
      text: "同样的双维度分组，但指标换成胜率（超额收益 > 0 的天数占比）。与超额收益热力图对照看，能区分胜在弹性的行业与胜在持续性的行业。",
      badge: "heatmap_winrate",
      image: "/images/heatmap_winrate.png",
    },
  ];

  const codeHighlight = {
    title: "alpha_aggregation.py · 行业 × 市场环境双维度聚合",
    description: "把日度数据按行业和市场环境分组，输出平均超额收益、胜率、样本数三个指标。这是整个分析的核心一步，把日级波动压缩成业务层面的结构化结论。",
    file: "01_data_fetch.ipynb",
    code: `# 把沪深300日涨跌幅合并进来，用于计算超额收益
df_hs300_ret = df_hs300[['日期', '日涨跌幅']].rename(
    columns={'日涨跌幅': '沪深300涨跌幅'}
)
df_merged = pd.merge(df_merged, df_hs300_ret, on='日期', how='inner')

# 超额收益 = 行业日涨跌幅 - 沪深300日涨跌幅
df_merged['超额收益'] = df_merged['日涨跌幅'] - df_merged['沪深300涨跌幅']

# 按 行业 × 市场环境 双维度分组聚合
df_alpha = df_merged.groupby(['行业名称', '市场环境']).agg(
    平均超额收益=('超额收益', 'mean'),
    胜率=('超额收益', lambda x: (x > 0).mean()),
    样本数=('超额收益', 'count')
).round(4).reset_index()

# 输出：27 个行业 × 3 种环境 = 81 条分组记录
# 三个指标互补：
#   平均超额收益 → 弹性
#   胜率         → 持续性
#   样本数       → 稳健性参考`,
  };

  const learningNotes = [
    { topic: "超额收益", q: "为什么用算术收益而不是对数收益？超额收益 vs 阿尔法的概念区别？" },
    { topic: "市场环境分类", q: "为什么选 20 日滚动窗口？换 10 日 / 60 日会有什么变化？± 5% 阈值如何确定？" },
    { topic: "胜率 vs 平均超额收益", q: "为什么两个指标都要看？哪个更能反映行业适合在某环境配置？" },
    { topic: "代码实现", q: "pct_change() 与 rolling() 在做什么？groupby + agg 的完整数据流？" },
  ];

  const futureDirections = [
    "稳健性验证：扩展时间范围至 2015 年至今，检验消费类不防御的结论是否仅是 2021-2024 的特殊现象",
    "风险调整指标：加入夏普比率、最大回撤、信息比率等，而不只是看绝对超额收益",
    "行业自动分组：用 K-means 或层次聚类对行业无监督分组，对比与人工分类的差异",
    "环境分类优化：测试不同滚动窗口（10/20/60 日）与阈值（±3% / ±5% / ±8%）对结论的影响",
    "拓展至个股层面：从行业指数下沉到行业内龙头股，观察行业 β 与个股 α 的分离效应",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold tracking-wide text-slate-900">← 返回作品集</a>
          <nav className="hidden flex-wrap gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top">
        <section id="overview" className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">project · a-stock industry rotation</div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">A 股申万行业轮动规律</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">基于申万一级行业指数，量化分析 27 个行业在 2021-2024 年不同市场环境下的超额收益规律。试图回答一个具体问题：在不同的市场环境下，该买哪类行业、避开哪类行业？</p>

                <div className="mt-6 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-sm font-semibold text-amber-900">📚 项目性质说明</div>
                  <p className="mt-2 text-sm leading-7 text-amber-900">本项目的代码与分析框架由 AI 协助构建，作为我学习量化数据分析流程的实践材料。当前展示的是项目的完整流程与结论，每一步背后的原理与代码逻辑正在逐步深入理解，学习笔记会在下方持续补充。</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#analysis" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看核心发现</a>
                  <a href="https://github.com/wnt0801/a-stock-industry-rotation" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub</a>
                  <a href="#dashboard" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">可视化结果</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目定位</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">分析重点</div>
                    <div className="mt-1 text-slate-600">行业轮动、超额收益、市场环境分类、量化分析入门。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">技术栈</div>
                    <div className="mt-1 text-slate-600">AkShare、Pandas、Seaborn、Matplotlib。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">学习目标</div>
                    <div className="mt-1 text-slate-600">熟悉量化分析的完整流程：数据获取、特征工程、分组聚合、可视化。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kpi" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">project scope</p>
              <h2 className="mt-2 text-2xl font-bold">项目背景数字</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">先把项目的样本规模、时间范围、市场环境分布讲清楚，后续所有结论都建立在这套数据基础之上。</p>
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

        <section id="methodology" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">methodology</p>
              <h2 className="mt-2 text-2xl font-bold">分析流程四步</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">从原始数据到结构化结论的完整链路。每一步对应一个明确的分析目的，组合起来才是行业轮动分析。</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {methodologySteps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">step {s.step}</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">{s.title}</div>
                  <div className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{s.tag}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="analysis" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">findings</p>
            <h2 className="mt-2 text-2xl font-bold">四条核心发现</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">按行业类型分组，每条发现都对应特定环境下的策略含义。第三条反常识发现是这个项目最值得展开的部分。</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {findings.map((f, idx) => (
              <div key={idx} className={`rounded-3xl border p-6 shadow-sm ${f.type === "反常识" ? "border-orange-200 bg-orange-50" : "border-slate-200 bg-white"}`}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${f.type === "反常识" ? "bg-orange-200 text-orange-900" : "bg-slate-900 text-white"}`}>{f.type}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${f.type === "反常识" ? "bg-orange-100 text-orange-800" : "bg-slate-100 text-slate-600"}`}>{f.tag}</span>
                </div>
                <h3 className={`text-lg font-bold ${f.type === "反常识" ? "text-orange-900" : "text-slate-900"}`}>{f.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${f.type === "反常识" ? "text-orange-900" : "text-slate-600"}`}>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="dashboard" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">visualization</p>
              <h2 className="mt-2 text-2xl font-bold">行业 × 环境双维度热力图</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">超额收益与胜率两张图对照看：前者反映弹性强弱，后者反映持续性。两者结合才能区分行业在不同环境下的真实表现。</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {dashboardCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{card.badge}</div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                  <img src={card.image} alt={card.title} className="mt-6 w-full rounded-2xl border border-slate-200 bg-slate-50" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="code-highlight" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">code highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键代码片段</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">网页中只展开 1 段最能体现分析能力的核心代码：把日度数据按 行业 × 市场环境 双维度聚合。完整 notebook 保留在 GitHub 仓库中。</p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">{codeHighlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{codeHighlight.description}</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{codeHighlight.file}</div>
              </div>
              <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-xs leading-6 text-slate-100"><code>{codeHighlight.code}</code></pre>
            </div>
          </div>
        </section>

        <section id="learning" className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">learning notes</p>
              <h2 className="mt-2 text-2xl font-bold">理解笔记 · 待深入</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">这些是我目前还没完全吃透的概念，按主题分类，会随学习进度持续更新。</p>
              <div className="mt-6 space-y-3">
                {learningNotes.map((n) => (
                  <div key={n.topic} className="rounded-2xl bg-slate-100 p-4">
                    <div className="text-sm font-semibold text-slate-900">{n.topic}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">{n.q}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">future work</p>
              <h2 className="mt-2 text-2xl font-bold">可能的深入方向</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">这个课题可以进一步展开的方向，作为后续选课题的参考清单，会根据学习进度选择性深入。</p>
              <div className="mt-6 space-y-3">
                {futureDirections.map((d, i) => (
                  <div key={i} className="flex gap-3 rounded-2xl bg-slate-100 p-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">{i + 1}</div>
                    <div className="text-sm leading-6 text-slate-700">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
              <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">本项目是我学习量化数据分析流程的实践材料，覆盖从数据获取、市场环境特征工程、超额收益计算到双维度分组聚合的完整链路。重点不在于产出多少创新结论，而在于熟悉一套可复用的分析框架，并对学习过程保持诚实记录。后续会按理解笔记和深入方向逐步补全自己对每一步原理的掌握。</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801/a-stock-industry-rotation" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href="/" className="transition hover:text-slate-900">回到作品集</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
