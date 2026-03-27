export default function OlistProjectPortfolioPage() {
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
    "平台成交规模在 2017 年进入明显爬坡期，2017-11 至 2018-05 进入高位运行区间。其中 2017-11 成交总额达到 115.35 万，为样本期单月峰值；2018-03 至 2018-05 连续三个月保持在 112 万左右，说明平台在后期已形成较稳定的高交易体量。",
    "区域表现呈现出明显的“规模核心区 + 高客单外围区”结构。SP 以 577.03 万成交总额和 4.05 万有效订单绝对领先，但客单价仅 142.48，明显低于 PA、PB、AL 等低订单量高客单价州，说明头部州主要靠订单规模驱动，部分长尾州则更依赖单笔金额支撑。",
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
    {
      id: "sql-01",
      file: "01_data_audit.sql",
      name: "数据审计",
      desc: "用于完成数据预览、时间窗口确认、订单状态分布检查，以及州维度订单量与终态失败率摸底。",
    },
    {
      id: "sql-02",
      file: "02_sales_performance.sql",
      name: "销售表现",
      desc: "用于输出核心经营指标、月度经营趋势，并补充支付方式与信用卡分期结构分析。",
    },
    {
      id: "sql-03",
      file: "03_dimension_deep_dive.sql",
      name: "维度深挖",
      desc: "用于完成区域分析、履约分析，以及三表合并后的区域经营质量对比。",
    },
    {
      id: "sql-11",
      file: "11_summary_kpi.sql",
      name: "首页总览指标",
      desc: "用于生成 summary_kpi 页的一行总览数据，包含成交总额、有效订单量、客单价、买家数、终态失败率与平均配送天数。",
    },
    {
      id: "sql-12",
      file: "12_monthly_business_trend.sql",
      name: "月度经营趋势",
      desc: "用于生成月度趋势页数据，按月份输出成交总额、有效订单量与客单价。",
    },
    {
      id: "sql-13",
      file: "13_state_performance.sql",
      name: "州维度表现",
      desc: "用于生成州表现页数据，综合输出客户州的成交、订单、客单价、终态失败率与配送时长。",
    },
    {
      id: "sql-14",
      file: "14_payment_type_analysis.sql",
      name: "支付方式分析",
      desc: "用于生成支付方式页数据，比较不同支付方式下的订单量、成交总额与客单价。",
    },
    {
      id: "sql-15",
      file: "15_installment_analysis.sql",
      name: "分期结构分析",
      desc: "用于生成分期分析页数据，比较不同信用卡分期档位下的订单数与平均订单金额。",
    },
  ];

  const sqlHighlights = [
    {
      id: "sql-11",
      title: "11_summary_kpi.sql · 首页总览指标",
      description: "通过交易、买家、终态失败率与配送天数四组指标，汇总成 summary_kpi 页的一行结果。",
      file: "11_summary_kpi.sql",
      code: `with payment_agg as (
    select
        order_id,
        sum(payment_value) as payment_value
    from olist_order_payments_dataset
    group by order_id
),

     trade_kpi as (
         select
             round(sum(p.payment_value), 2) as gmv,
             count(distinct o.order_id) as valid_order_cnt,
             round(sum(p.payment_value) / count(distinct o.order_id), 2) as aov
         from olist_orders_dataset o
                  join payment_agg p
                       on o.order_id = p.order_id
         where o.order_status = 'delivered'
     ),

     customer_kpi as (
         select
             count(distinct c.customer_unique_id) as unique_customer_cnt
         from olist_orders_dataset o
                  join olist_customers_dataset c
                       on o.customer_id = c.customer_id
         where o.order_status = 'delivered'
     ),

     fail_kpi as (
         select
             round(
                     sum(order_status in ('canceled', 'unavailable')) / count(*) * 100,
                     2
             ) as fail_rate_pct
         from olist_orders_dataset
         where order_status in ('delivered', 'canceled', 'unavailable')
     ),

     delivery_kpi as (
         select
             round(avg(datediff(order_delivered_customer_date, order_purchase_timestamp)), 2) as avg_delivery_days
         from olist_orders_dataset
         where order_status = 'delivered'
           and order_delivered_customer_date is not null
           and order_purchase_timestamp is not null
     )

select
    t.gmv as '成交总额',
    t.valid_order_cnt as '有效订单量',
    t.aov as '客单价',
    c.unique_customer_cnt as '去重买家数',
    f.fail_rate_pct as '终态失败率(%)',
    d.avg_delivery_days as '平均配送天数(天)'
from trade_kpi t
         cross join customer_kpi c
         cross join fail_kpi f
         cross join delivery_kpi d;`,
    },
    {
      id: "sql-13",
      title: "13_state_performance.sql · 州维度表现",
      description: "分别计算州维度交易、终态失败率与配送天数，再合并成地区页总表。",
      file: "13_state_performance.sql",
      code: `with payment_agg as (
    select
        order_id,
        sum(payment_value) as payment_value
    from olist_order_payments_dataset
    group by order_id
),

     state_trade as (
         select
             c.customer_state,
             round(sum(p.payment_value), 2) as gmv,
             count(distinct o.order_id) as valid_order_cnt,
             round(sum(p.payment_value) / count(distinct o.order_id), 2) as aov
         from olist_orders_dataset o
                  join payment_agg p
                       on o.order_id = p.order_id
                  join olist_customers_dataset c
                       on o.customer_id = c.customer_id
         where o.order_status = 'delivered'
         group by c.customer_state
     ),

     state_fail as (
         select
             c.customer_state,
             round(
                     sum(o.order_status in ('canceled', 'unavailable')) / count(*) * 100,
                     2
             ) as fail_rate_pct
         from olist_orders_dataset o
                  join olist_customers_dataset c
                       on o.customer_id = c.customer_id
         where o.order_status in ('delivered', 'canceled', 'unavailable')
         group by c.customer_state
     ),

     state_delivery as (
         select
             c.customer_state,
             round(avg(datediff(o.order_delivered_customer_date, o.order_purchase_timestamp)), 2) as avg_delivery_days
         from olist_orders_dataset o
                  join olist_customers_dataset c
                       on o.customer_id = c.customer_id
         where o.order_status = 'delivered'
           and o.order_delivered_customer_date is not null
           and o.order_purchase_timestamp is not null
         group by c.customer_state
     )

select
    t.customer_state as '客户州',
    t.gmv as '成交总额',
    t.valid_order_cnt as '有效订单量',
    t.aov as '客单价',
    f.fail_rate_pct as '终态失败率(%)',
    d.avg_delivery_days as '平均配送天数(天)'
from state_trade t
         join state_fail f
              on t.customer_state = f.customer_state
         join state_delivery d
              on t.customer_state = d.customer_state
order by t.gmv desc;`,
    },
    {
      id: "sql-15",
      title: "15_installment_analysis.sql · 分期结构分析",
      description: "先聚合信用卡订单，再按分期档位输出订单数与平均订单金额。",
      file: "15_installment_analysis.sql",
      code: `with credit_card_order as (
    select
        p.order_id,
        max(p.payment_installments) as payment_installments,
        sum(p.payment_value) as order_payment_value
    from olist_order_payments_dataset p
             join olist_orders_dataset o
                  on p.order_id = o.order_id
    where p.payment_type = 'credit_card'
      and o.order_status = 'delivered'
    group by p.order_id
),
     installment_base as (
         select
             case
                 when payment_installments = 1 then '1. 单期'
                 when payment_installments between 2 and 5 then '2. 低分期（2-5期）'
                 when payment_installments between 6 and 10 then '3. 中分期（6-10期）'
                 when payment_installments > 10 then '4. 高分期（10期以上）'
                 else '未知'
                 end as installment_group,
             order_payment_value
         from credit_card_order
     )
select
    installment_group as '分期档位',
    count(*) as '订单数',
    round(avg(order_payment_value), 2) as '平均订单金额'
from installment_base
 group by installment_group
order by installment_group;`,
    },
  ];

  const dashboardCards = [
    {
      title: "KPI 总览页",
      text: "展示成交总额、有效订单量、平均客单价、去重买家数、终态失败率与平均配送天数，用于快速判断平台整体规模、订单质量与履约效率。当前首页指标显示：成交总额约 1542 万，终态失败率仅 1.26%，平均配送天数为 12.5 天。",
      badge: "summary_kpi",
      image: "/images/dashboard_overview.png",
    },
    {
      title: "月度成交额与订单量",
      text: "按月展示成交总额与有效订单量变化，用于识别平台增长阶段与波动区间。结果显示 2017-11 为单月成交峰值，2018-03 至 2018-05 维持高位运行，说明后期交易规模趋于稳定。",
      badge: "monthly_trend",
      image: "/images/monthly_trend.png",
    },
    {
      title: "月度客单价趋势",
      text: "展示主业务阶段的月度客单价变化，用于观察订单质量与价格结构是否稳定，并辅助判断成交规模波动是由订单量还是单价主导。",
      badge: "monthly_aov",
      image: "/images/monthly_aov.png",
    },
    {
      title: "各州成交总额 Top 10",
      text: "展示成交总额排名前 10 的州，用于识别核心贡献地区与区域集中度。结合州维度表现可见，SP、RJ、MG 是最主要的交易贡献区域。",
      badge: "state_analysis",
      image: "/images/state_analysis.png",
    },
    {
      title: "支付方式成交总额",
      text: "展示不同支付方式对应的成交总额，用于识别主导支付方式及支付结构差异。结果显示 credit_card 是最核心的支付路径。",
      badge: "payment_analysis",
      image: "/images/payment_analysis.png",
    },
    {
      title: "分期档位分析",
      text: "展示不同分期档位下的订单数与平均订单金额，用于观察信用卡分期结构与高金额订单特征。结果显示平均订单金额随分期数上升而显著抬升。",
      badge: "installment_analysis",
      image: "/images/installment_analysis.png",
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
              <a key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">
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
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">万南天 · 数据分析作品集</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  金融工程专业学生，聚焦 SQL、Python 与 Power BI 的数据分析项目实践，关注业务问题拆解、指标口径定义、经营分析与可视化表达。
                </p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500">
                  当前展示项目为 Olist 电商经营分析，后续将继续补充银行营销转化分析与更多数据分析作品。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/wnt0801/olist-ecommerce-analysis"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                  >
                    查看 GitHub 仓库
                  </a>
                  <a
                    href="#dashboard"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    查看 Power BI 展示
                  </a>
                  <a
                    href="#sql-directory"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    查看 SQL 模块
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目定位</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">当前项目</div>
                    <div className="mt-1 text-slate-600">
                      Olist 电商经营分析，围绕总览 KPI、月度趋势、地区表现、支付方式与分期行为展开。
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">技术栈</div>
                    <div className="mt-1 text-slate-600">
                      SQL（MySQL）、Python（Pandas、Matplotlib）、Power BI、GitHub、Markdown。
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">作品集方向</div>
                    <div className="mt-1 text-slate-600">
                      以数据分析岗位为导向，持续补充更多经营分析、转化分析与 BI 可视化项目。
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">summary_kpi</p>
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
                  在实现路径上，先用 SQL 完成数据审计、指标提取与维度分析，再使用 Python 与 Power BI 做可视化展示，最后整理为可用于 GitHub 展示、简历补充与面试讲解的项目作品。
                </p>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="font-semibold">项目结构</div>
                  <ul className="mt-2 space-y-2 text-slate-600">
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">pbix/</code>：Power BI 项目文件</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">sql/</code>：数据审计、指标提取与分析查询</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">images/</code>：项目截图与可视化图片</li>
                    <li>• <code className="rounded bg-white px-1 py-0.5 text-xs">README.md</code>：项目说明文档</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">dashboard</p>
                <h2 className="mt-2 text-2xl font-bold">Power BI 仪表板展示</h2>
              </div>
              <a href="#top" className="text-sm text-slate-500 transition hover:text-slate-900">
                返回顶部
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {dashboardCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {card.badge}
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="mt-6 w-full rounded-2xl border border-slate-200 bg-slate-50"
                    />
                  ) : (
                    <div className="mt-6 flex h-52 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
                      在这里替换为你的报表截图
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <div className="rounded-2xl bg-slate-100 p-4">
                  理清订单表、支付表和客户表之间的关联关系，保证 SQL 提取结果与 Power BI 展示口径保持一致。
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  区分 <code className="rounded bg-white px-1 py-0.5 text-xs">customer_id</code> 与{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-xs">customer_unique_id</code>{" "}
                  的业务含义，避免把订单级客户键误用为真实用户级标识。
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  在配送时长分析中识别极端偏长订单，并结合业务语境决定是否保留，从而兼顾数据真实性与分析解释性。
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  强化“先定口径，再做图”的分析流程，避免出现 SQL 与可视化结果前后不一致的问题。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sql-directory" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">sql directory</p>
                <h2 className="mt-2 text-2xl font-bold">SQL 模块目录</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                这里按 GitHub 中的实际 SQL 文件拆分展示用途与入口。目录卡片可直接跳转到下方对应代码块，网页负责说明阅读路径，完整代码建议继续放在 GitHub 仓库中。
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {sqlDirectory.map((item) => (
                <a
                  key={item.id}
                  href={`#code-${item.id}`}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{item.file}</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">{item.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  <div className="mt-4 text-sm font-medium text-slate-900">跳转查看</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="sql" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">sql</p>
              <h2 className="mt-2 text-2xl font-bold">关键 SQL 分析过程</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                SQL 文件分为两层：01-03 用于数据审计、销售表现与维度深挖，11-15 用于为 Power BI 页面提取总览、趋势、地区、支付和分期分析数据。网页中只展开 3 段最能体现项目能力的重点 SQL，其余文件通过目录和说明展示，完整代码保留在 GitHub 仓库中。
              </p>
            </div>

            <div className="space-y-4">
              {sqlDirectory.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                      <div className="mt-1 text-sm text-slate-600">
                        {item.file} · {item.desc}
                      </div>
                    </div>
                    <a href="#top" className="text-sm text-slate-500 transition hover:text-slate-900">
                      返回顶部
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-6">
              {sqlHighlights.map((block) => (
                <div
                  id={`code-${block.id}`}
                  key={block.title}
                  className="rounded-3xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold">{block.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{block.description}</p>
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {block.file}
                    </div>
                  </div>
                  <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-xs leading-6 text-slate-100">
                    <code>{block.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">business suggestion</p>
              <h2 className="mt-2 text-2xl font-bold">业务建议</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <div className="rounded-2xl bg-slate-100 p-4">
                  针对 SP、RJ、MG 等核心贡献州，优先建立成交总额、订单量、终态失败率和配送天数的联动监控机制，因为核心州的小幅波动会显著影响整体盘面表现。
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  对于以订单规模驱动的核心州，应重点关注履约稳定性与商家服务质量；对于客单价较高但配送天数偏长的州，可进一步排查物流效率与履约体验问题。
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  针对信用卡主导的支付结构，可结合支付转化率、手续费成本与异常支付特征评估优化空间；针对分期客群，可继续结合订单金额与地区差异做更细分层。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="project-value" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
                <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                  本项目完整覆盖了从业务问题拆解、SQL 数据提取、指标口径定义，到 Python / Power BI 可视化展示与项目包装的分析流程，重点体现数据口径意识、业务指标解释能力与项目表达能力。
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
                  <div className="text-2xl font-bold">8</div>
                  <div className="mt-1 text-sm text-slate-300">SQL 模块目录</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">3</div>
                  <div className="mt-1 text-sm text-slate-300">主要数据表</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}