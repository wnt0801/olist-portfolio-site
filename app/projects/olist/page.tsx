export default function OlistProjectPortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "经营分析", href: "#phase1" },
    { label: "Power BI", href: "#dashboard" },
    { label: "SQL 模块", href: "#sql-directory" },
    { label: "取消风险建模", href: "#phase2" },
    { label: "建模结论", href: "#findings" },
    { label: "项目价值", href: "#project-value" },
  ];

  const kpis = [
    { label: "成交总额（GMV）", value: "1542 万", note: "BRL 15,422,461.77" },
    { label: "有效订单量", value: "9.6 万", note: "96,477" },
    { label: "平均客单价", value: "159.9", note: "BRL/单" },
    { label: "去重买家数", value: "9.3 万", note: "93,358" },
    { label: "终态失败率", value: "1.26%", note: "终态失败订单占比" },
    { label: "平均配送天数", value: "12.5 天", note: "下单到送达" },
  ];

  const findings1 = [
    "平台成交规模在 2017 年进入明显爬坡期，2017-11 至 2018-05 进入高位运行区间。其中 2017-11 成交总额达到 115.35 万，为样本期单月峰值；2018-03 至 2018-05 连续三个月保持在 112 万左右，说明平台在后期已形成较稳定的高交易体量。",
    "区域表现呈现出明显的规模核心区 + 高客单外围区结构。SP 以 577.03 万成交总额和 4.05 万有效订单绝对领先，但客单价仅 142.48，明显低于 PA、PB、AL 等低订单量高客单价州，说明头部州主要靠订单规模驱动，部分长尾州则更依赖单笔金额支撑。",
    "支付与分期结构揭示出较清晰的消费分层：credit_card 贡献 1210.11 万成交总额，占主导地位；而信用卡订单中，单期平均订单金额仅 95.92，2-5 期提升至 147.33，6-10 期进一步升至 301.74，10 期以上达到 359.40，表明高金额订单明显更依赖中高分期完成支付。",
    "整体订单完成质量较稳，终态失败率仅 1.26%，但履约效率存在显著区域差异。SP 平均配送天数仅 8.7 天，而 RR、AP、AM 等州已达到 29.34、27.18、26.36 天，说明平台在全国扩展后，远距离与低密度区域的物流效率明显弱于核心市场。",
  ];

  const metrics = [
    ["GMV", "已妥投订单对应支付金额之和"],
    ["有效订单量", "去重后的有效订单数"],
    ["平均客单价", "成交总额 / 有效订单量"],
    ["去重买家数", "去重后的真实买家数量"],
    ["终态失败率", "终态失败订单数 / 全量订单数"],
    ["平均配送天数", "已妥投订单从下单到送达的平均耗时"],
  ];

  const sqlDirectory = [
    { id: "sql-01", file: "01_data_audit.sql", name: "数据审计", desc: "用于完成数据预览、时间窗口确认、订单状态分布检查，以及州维度订单量与终态失败率摸底。" },
    { id: "sql-02", file: "02_sales_performance.sql", name: "销售表现", desc: "用于输出核心经营指标、月度经营趋势，并补充支付方式与信用卡分期结构分析。" },
    { id: "sql-03", file: "03_dimension_deep_dive.sql", name: "维度深挖", desc: "用于完成区域分析、履约分析，以及三表合并后的区域经营质量对比。" },
    { id: "sql-11", file: "11_summary_kpi.sql", name: "首页总览指标", desc: "用于生成 summary_kpi 页的一行总览数据，包含成交总额、有效订单量、客单价、买家数、终态失败率与平均配送天数。" },
    { id: "sql-12", file: "12_monthly_business_trend.sql", name: "月度经营趋势", desc: "用于生成月度趋势页数据，按月份输出成交总额、有效订单量与客单价。" },
    { id: "sql-13", file: "13_state_performance.sql", name: "州维度表现", desc: "用于生成州表现页数据，综合输出客户州的成交、订单、客单价、终态失败率与配送时长。" },
    { id: "sql-14", file: "14_payment_type_analysis.sql", name: "支付方式分析", desc: "用于生成支付方式页数据，比较不同支付方式下的订单量、成交总额与客单价。" },
    { id: "sql-15", file: "15_installment_analysis.sql", name: "分期结构分析", desc: "用于生成分期分析页数据，比较不同信用卡分期档位下的订单数与平均订单金额。" },
  ];

  const dashboardCards = [
    { title: "KPI 总览页", text: "展示成交总额、有效订单量、平均客单价、去重买家数、终态失败率与平均配送天数，用于快速判断平台整体规模、订单质量与履约效率。当前首页指标显示：成交总额约 R$ 1542 万，终态失败率仅 1.26%，平均配送天数为 12.5 天。", badge: "summary_kpi", image: "/images/dashboard_overview.png" },
    { title: "月度成交额与订单量", text: "按月展示成交总额与有效订单量变化，用于识别平台增长阶段与波动区间。结果显示 2017-11 为单月成交峰值，2018-03 至 2018-05 维持高位运行，说明后期交易规模趋于稳定。", badge: "monthly_trend", image: "/images/monthly_trend.png" },
    { title: "月度客单价趋势", text: "展示主业务阶段的月度客单价变化，用于观察订单质量与价格结构是否稳定，并辅助判断成交规模波动是由订单量还是单价主导。", badge: "monthly_aov", image: "/images/monthly_aov.png" },
    { title: "各州成交总额 Top 10", text: "展示成交总额排名前 10 的州，用于识别核心贡献地区与区域集中度。结合州维度表现可见，SP、RJ、MG 是最主要的交易贡献区域。", badge: "state_analysis", image: "/images/state_analysis.png" },
    { title: "支付方式成交总额", text: "展示不同支付方式对应的成交总额，用于识别主导支付方式及支付结构差异。结果显示 credit_card 是最核心的支付路径。", badge: "payment_analysis", image: "/images/payment_analysis.png" },
    { title: "分期档位分析", text: "展示不同分期档位下的订单数与平均订单金额，用于观察信用卡分期结构与高金额订单特征。结果显示平均订单金额随分期数上升而显著抬升。", badge: "installment_analysis", image: "/images/installment_analysis.png" },
  ];

  const sqlHighlights = [
    {
      id: "sql-11",
      title: "11_summary_kpi.sql · 首页总览指标",
      description: "通过交易、买家、终态失败率与配送天数四组指标，汇总成 summary_kpi 页的一行结果。",
      file: "11_summary_kpi.sql",
      code: `with payment_agg as (\n    select\n        order_id,\n        sum(payment_value) as payment_value\n    from olist_order_payments_dataset\n    group by order_id\n),\n\n     trade_kpi as (\n         select\n             round(sum(p.payment_value), 2) as gmv,\n             count(distinct o.order_id) as valid_order_cnt,\n             round(sum(p.payment_value) / count(distinct o.order_id), 2) as aov\n         from olist_orders_dataset o\n                  join payment_agg p on o.order_id = p.order_id\n         where o.order_status = 'delivered'\n     ),\n\n     customer_kpi as (\n         select count(distinct c.customer_unique_id) as unique_customer_cnt\n         from olist_orders_dataset o\n                  join olist_customers_dataset c on o.customer_id = c.customer_id\n         where o.order_status = 'delivered'\n     ),\n\n     fail_kpi as (\n         select round(sum(order_status in ('canceled', 'unavailable')) / count(*) * 100, 2) as fail_rate_pct\n         from olist_orders_dataset\n         where order_status in ('delivered', 'canceled', 'unavailable')\n     ),\n\n     delivery_kpi as (\n         select round(avg(datediff(order_delivered_customer_date, order_purchase_timestamp)), 2) as avg_delivery_days\n         from olist_orders_dataset\n         where order_status = 'delivered'\n           and order_delivered_customer_date is not null\n           and order_purchase_timestamp is not null\n     )\n\nselect\n    t.gmv as '成交总额',\n    t.valid_order_cnt as '有效订单量',\n    t.aov as '客单价',\n    c.unique_customer_cnt as '去重买家数',\n    f.fail_rate_pct as '终态失败率',\n    d.avg_delivery_days as '平均配送天数'\nfrom trade_kpi t\n         cross join customer_kpi c\n         cross join fail_kpi f\n         cross join delivery_kpi d;`,
    },
  ];

  const modelKpis = [
    { label: "分析样本量", value: "78,126", note: "仅保留 voucher + credit_card" },
    { label: "类不平衡比", value: "149 : 1", note: "未取消 77,606 vs 取消 520" },
    { label: "Fisher OR（300+ 区间）", value: "31.55", note: "p < 0.000001" },
    { label: "Voucher 独立效应", value: "OR = 1.39", note: "控制金额后仍显著" },
    { label: "金额独立效应", value: "OR = 1.15", note: "控制支付方式后仍显著" },
    { label: "交互项放大效应", value: "OR = 1.09", note: "高金额 × Voucher 组合" },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "Fisher 精确检验",
      scope: "300+ 区间，纯单一支付口径",
      desc: "高价区间 Voucher 样本仅 75 条，大样本卡方近似不再可靠，改用 Fisher 精确检验避免假设失效。直接比较两种支付方式的取消率差异，回答信号是否存在。",
    },
    {
      step: "02",
      title: "基础逻辑回归",
      scope: "全量 78,126 条订单",
      desc: "特征：is_voucher、payment_value。在全量数据上估计两者各自的独立效应，回答控制金额后 Voucher 效应是否仍显著，排除 Voucher 取消率高仅因金额高的混淆假设。",
    },
    {
      step: "03",
      title: "交互项逻辑回归",
      scope: "新增 voucher × payment_value",
      desc: "用交互项捕捉高金额 + Voucher 是否存在超出单独效应的组合放大。statsmodels Logit 拟合，输出系数、p 值、95% CI，并用 AIC 对比基础模型判断是否为有效信息。",
    },
  ];

  const findings2 = [
    "Fisher 精确检验：300+ 区间 Voucher 取消率 20.00%（15/75），信用卡仅 0.79%（65/8268），Odds Ratio 31.55，p < 0.000001。差异不可能由抽样波动解释，高价区间确实存在 Voucher 异常风险。",
    "基础逻辑回归：在全量数据上控制金额后，Voucher 支付本身仍独立提升取消概率约 39%（OR=1.39，95% CI [1.33, 1.45]），金额每升高一个标准差额外提升约 15%（OR=1.15）。两个效应都不被对方解释掉，排除混淆假设。",
    "交互项逻辑回归：voucher × payment_value 交互项 OR=1.09，95% CI [1.06, 1.13]，p < 0.0001。模型 AIC 从 6083 降至 6049，加入交互项是有效信息而非噪声。在 Voucher 用户中，金额对取消率的放大作用比信用卡用户更强，组合风险并非简单叠加。",
    "三层互相印证：高价区间的极端差异（Fisher OR=31.55）在全量数据上被分解为支付方式独立效应、金额独立效应、组合放大效应三个分量，且都在统计上显著。从描述性发现到因果验证的链路完整闭合。",
  ];

  const challenges2 = [
    "样本不平衡严重（149 : 1），交叉表分析改用 Fisher 精确检验，回归模型通过显著性检验与置信区间评估稳健性，避免直接套用准确率指标误判模型表现。",
    "300+ 区间纯 Voucher 样本仅 75 条，大样本卡方检验的近似条件不成立，改用 Fisher 精确检验，结论稳健但置信区间偏宽，已在局限性中明确标注。",
    "区分混淆效应与真实效应：描述性统计无法回答 Voucher 取消率高是否仅因金额高，引入逻辑回归控制变量后才能分离两者的独立贡献。",
    "区分简单叠加与组合放大：通过对比基础模型与交互项模型的 AIC 差异（6083 → 6049）以及交互项的显著性，确认组合效应不是噪声。",
  ];

  const businessActions = [
    { title: "干预时机明确", desc: "66% 的取消发生在下单后 1 小时内，属于即时反悔型风险，干预窗口集中。建议对 300+ 纯 Voucher 订单增加支付后确认环节。" },
    { title: "可量化收益", desc: "若将 Voucher 取消率降至信用卡同水平，预计可减少 72 单取消，挽回 GMV 约 19,658 元。风险组合特征明确、可干预、损失可量化。" },
    { title: "适合优先治理", desc: "该组合在描述性、Fisher 检验、回归三层证据上均显著，干预方案具体且收益可估，适合作为优先治理对象。" },
  ];

  const codeHighlight = {
    title: "interaction_logit.py · 交互项逻辑回归",
    description: "用 statsmodels Logit 拟合含交互项的逻辑回归，输出 OR 与 95% 置信区间。交互项的显著性是验证高金额 + Voucher 组合放大效应的关键。",
    file: "01_modeling.py",
    code: `# 第六部分：交互项逻辑回归
features_inter = ['is_voucher', 'payment_value', 'voucher_x_value']

scaler_inter = StandardScaler()
X_inter = scaler_inter.fit_transform(df[features_inter])
X_inter = sm.add_constant(X_inter)

model_inter = sm.Logit(y, X_inter).fit(disp=0)

# 提取 OR 与 95% CI
print("Odds Ratio（交互项模型）：")
pvals_inter = model_inter.pvalues.values[1:]
for name, coef, (lo, hi), p in zip(
        features_inter,
        model_inter.params[1:],
        model_inter.conf_int().iloc[1:].values,
        pvals_inter
):
    print(f"  {name:20s}  OR={np.exp(coef):.4f}  "
          f"95%CI=[{np.exp(lo):.4f}, {np.exp(hi):.4f}]  "
          f"p={p:.4f}")

# 输出：
#   is_voucher       OR=1.30  95%CI=[1.23, 1.37]  p<0.0001
#   payment_value    OR=1.10  95%CI=[1.05, 1.16]  p<0.0001
#   voucher_x_value  OR=1.09  95%CI=[1.06, 1.13]  p<0.0001
# AIC: 6083 → 6049（基础模型 vs 交互项模型）`,
  };

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

        {/* ── HERO ── */}
        <section id="overview" className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">project · olist</div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Olist 电商分析</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">从经营全貌到取消风险建模的两阶段分析。SQL 完成多表关联与指标提取，Power BI 完成可视化，统计建模验证支付方式与金额的交互效应。</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#phase1" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看分析</a>
                  <a href="https://github.com/wnt0801/olist-ecommerce-analysis" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub · 经营分析</a>
                  <a href="https://github.com/wnt0801/olist-cancellation-risk-analysis" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub · 取消建模</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目结构</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">第一阶段 · 经营分析</div>
                    <div className="mt-1 text-slate-600">SQL（MySQL）、Python（Pandas、Matplotlib）、Power BI。全链路指标拆解与可视化。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">第二阶段 · 取消风险建模</div>
                    <div className="mt-1 text-slate-600">Python（statsmodels、scipy）。Fisher 精确检验 + Logit 回归，验证支付方式与金额的交互效应。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">数据来源</div>
                    <div className="mt-1 text-slate-600">Olist 巴西电商公开数据集（Kaggle），9.6 万订单。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PHASE 1 DIVIDER
        ══════════════════════════════════════ */}
        <div id="phase1" className="border-y border-slate-300 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center gap-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Phase 01</span>
            <span className="text-lg font-bold text-white">电商经营分析</span>
            <span className="text-sm text-slate-400">SQL · Power BI · Python</span>
          </div>
        </div>

        {/* ── KPI ── */}
        <section id="kpi" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">summary_kpi</p>
              <h2 className="mt-2 text-2xl font-bold">核心指标总览</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">首页用于快速判断平台经营表现，按规模到订单到单价到用户到质量到履约的顺序展示关键指标。</p>
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

        {/* ── FINDINGS 1 ── */}
        <section className="mx-auto max-w-6xl px-6 pb-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold">核心经营结论</h3>
            <div className="mt-6 space-y-4">
              {findings1.map((item, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl bg-slate-100 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{idx + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DASHBOARD ── */}
        <section id="dashboard" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">dashboard</p>
              <h2 className="mt-2 text-2xl font-bold">Power BI 仪表板展示</h2>
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

        {/* ── METRICS + CHALLENGES 1 ── */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">metrics</p>
              <h2 className="mt-2 text-2xl font-bold">指标口径说明</h2>
              <div className="mt-6 space-y-4">
                {metrics.map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-slate-100 p-4">
                    <div className="text-sm font-semibold">{k}</div>
                    <div className="mt-1 text-sm text-slate-600">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">challenge</p>
              <h2 className="mt-2 text-2xl font-bold">项目难点与处理</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl bg-slate-100 p-4">理清订单表、支付表和客户表之间的关联关系，保证 SQL 提取结果与 Power BI 展示口径保持一致。</div>
                <div className="rounded-2xl bg-slate-100 p-4">区分 customer_id 与 customer_unique_id 的业务含义，避免把订单级客户键误用为真实用户级标识。</div>
                <div className="rounded-2xl bg-slate-100 p-4">在配送时长分析中识别极端偏长订单，并结合业务语境决定是否保留，从而兼顾数据真实性与分析解释性。</div>
                <div className="rounded-2xl bg-slate-100 p-4">强化先定口径再做图的分析流程，避免出现 SQL 与可视化结果前后不一致的问题。</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SQL DIRECTORY ── */}
        <section id="sql-directory" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">sql directory</p>
              <h2 className="mt-2 text-2xl font-bold">SQL 模块目录</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">按 GitHub 中的实际 SQL 文件拆分展示用途与入口。完整代码放在 GitHub 仓库中。</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {sqlDirectory.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{item.file}</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">{item.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SQL HIGHLIGHT ── */}
        <section className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">sql highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键 SQL 示例</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">网页中只展开 1 段最能体现项目能力的重点 SQL，其余文件保留在 GitHub 仓库中。</p>
            </div>
            <div className="space-y-6">
              {sqlHighlights.map((block) => (
                <div key={block.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold">{block.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{block.description}</p>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{block.file}</div>
                  </div>
                  <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-xs leading-6 text-slate-100"><code>{block.code}</code></pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            PHASE 2 DIVIDER
        ══════════════════════════════════════ */}
        <div id="phase2" className="border-y border-slate-300 bg-slate-900">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center gap-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Phase 02</span>
            <span className="text-lg font-bold text-white">取消风险建模</span>
            <span className="text-sm text-slate-400">Fisher 精确检验 · Logit 回归 · 交互项验证</span>
          </div>
        </div>

        {/* ── MODEL KPI ── */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">model results</p>
              <h2 className="mt-2 text-2xl font-bold">核心建模结果</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">三层分析的核心数字一览：从样本规模、类别不平衡，到 Fisher 检验、独立效应、交互项放大效应。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {modelKpis.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-3 text-3xl font-bold tracking-tight">{item.value}</div>
                <div className="mt-2 text-sm text-slate-500">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODOLOGY ── */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">methodology</p>
              <h2 className="mt-2 text-2xl font-bold">三层分析路径</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">不同精度的问题用不同方法回答。三层依次回答信号是否存在、控制变量后是否仍显著、组合是否产生超线性放大。</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {methodologySteps.map((s) => (
                <div key={s.step} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">step {s.step}</div>
                  <div className="mt-3 text-xl font-bold text-slate-900">{s.title}</div>
                  <div className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">{s.scope}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINDINGS 2 ── */}
        <section id="findings" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">findings</p>
            <h3 className="mt-2 text-xl font-bold">三层分析的核心结论</h3>
            <div className="mt-6 space-y-4">
              {findings2.map((item, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl bg-slate-100 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{idx + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OR VISUALIZATION ── */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">visualization</p>
              <h2 className="mt-2 text-2xl font-bold">交互项模型 Odds Ratio</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">展示三个特征的 OR 及 95% 置信区间。voucher × payment_value 交互项橙色高亮，红色虚线为 OR=1 的 baseline。三个 OR 均显著大于 1，且交互项不被两个独立效应吸收。</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">odds_ratio.png</div>
              <img src="/images/odds_ratio.png" alt="Odds Ratio with 95% CI" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50" />
              <p className="mt-5 text-sm leading-7 text-slate-600">交互项 OR=1.09 看似不大，但需要结合两点理解：一是已经控制了 Voucher 与金额的独立效应，交互项捕捉的是两者之外的额外放大；二是 AIC 从 6083 降至 6049 说明加入交互项是有效信息而非噪声。换言之，高金额 + Voucher 的风险组合不是两者风险的简单叠加。</p>
            </div>
          </div>
        </section>

        {/* ── CODE HIGHLIGHT ── */}
        <section id="code-highlight" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">code highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键代码片段</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">网页中只展开 1 段最能体现项目能力的建模代码，完整三层分析代码保留在 GitHub 仓库中。</p>
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

        {/* ── CHALLENGES 2 + BUSINESS ACTIONS ── */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">challenge</p>
              <h2 className="mt-2 text-2xl font-bold">建模难点与处理</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                {challenges2.map((c, i) => (
                  <div key={i} className="rounded-2xl bg-slate-100 p-4">{c}</div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">business action</p>
              <h2 className="mt-2 text-2xl font-bold">业务建议</h2>
              <div className="mt-6 space-y-4">
                {businessActions.map((b) => (
                  <div key={b.title} className="rounded-2xl bg-slate-100 p-4">
                    <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                    <div className="mt-1 text-sm leading-7 text-slate-600">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DATA + LIMITATIONS ── */}
        <section className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">data</p>
                <h2 className="mt-2 text-xl font-bold">数据与样本</h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  <div><span className="font-semibold text-slate-900">数据来源：</span>Brazilian E-Commerce Public Dataset by Olist（Kaggle）</div>
                  <div><span className="font-semibold text-slate-900">核心表：</span>olist_orders_dataset、olist_order_payments_dataset</div>
                  <div><span className="font-semibold text-slate-900">分析样本：</span>78,126 条订单（仅保留 voucher 与 credit_card）</div>
                  <div><span className="font-semibold text-slate-900">目标变量：</span>is_canceled（取消=1，未取消=0）</div>
                  <div><span className="font-semibold text-slate-900">样本分布：</span>未取消 77,606 条，取消 520 条（约 149 : 1）</div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">limitations</p>
                <h2 className="mt-2 text-xl font-bold">局限性</h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">300+ 区间纯 Voucher 订单仅 75 条，Fisher 检验结论反映强信号但置信区间较宽，需更大样本进一步验证。</div>
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">回归模型未引入买家、卖家、品类等控制变量，部分效应可能被未观测因素吸收。</div>
                  <div className="rounded-2xl bg-white p-4 border border-slate-200">数据为 2016–2018 年巴西市场，结论的外部效度需谨慎推广。</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECT VALUE ── */}
        <section id="project-value" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
            <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">本项目覆盖了从业务问题拆解、SQL 多表关联与指标提取、Power BI 可视化展示，到描述性发现驱动建模、混淆假设识别与控制、交互项验证组合效应的完整分析链路。两个阶段构成从"经营全貌"到"因果验证"的闭环，重点体现数据口径意识、统计方法选择能力与建模结论解释能力。</p>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801/olist-ecommerce-analysis" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub · 经营分析</a>
              <a href="https://github.com/wnt0801/olist-cancellation-risk-analysis" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub · 取消建模</a>
              <a href="/" className="transition hover:text-slate-900">回到作品集</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
