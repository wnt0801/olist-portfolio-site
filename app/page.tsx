const highlightMetrics = [
  { label: "项目数量", value: "8+", desc: "覆盖经营分析、用户增长、A/B 实验与预测建模" },
  { label: "核心技能", value: "SQL · Python · Power BI", desc: "可独立完成数据清洗、建模、可视化与业务沟通" },
  { label: "业务经验", value: "电商 / 增长 / 运营", desc: "擅长把复杂分析转成可执行的增长动作" },
];

const projects = [
  {
    title: "电商全链路经营分析（Olist）",
    tag: "Business Analytics",
    summary:
      "构建从订单、支付、履约到地区经营的完整指标体系，定位高价值市场与履约瓶颈，并输出可落地优化建议。",
    impact: ["搭建 GMV、AOV、复购、失败率监控口径", "识别高潜区域与高客单人群", "支持运营侧制定促活和物流优化策略"],
  },
  {
    title: "用户留存与分层增长模型",
    tag: "Growth Analytics",
    summary:
      "基于用户生命周期与行为路径构建分层模型，拆解流失节点并设计分群触达策略。",
    impact: ["搭建 Cohort 留存分析看板", "输出高风险流失用户预警规则", "提出分群激活策略与触达节奏建议"],
  },
  {
    title: "营销活动效果评估与归因",
    tag: "Experiment & Attribution",
    summary:
      "设计活动前后评估框架，联合渠道、转化与复购指标评估投放质量，提升预算使用效率。",
    impact: ["建立活动 ROI 与回收周期模型", "量化渠道质量差异并指导预算迁移", "形成可复用的活动复盘模板"],
  },
];

const skills = [
  "SQL（复杂查询 / 指标建模 / 数据质量审计）",
  "Python（Pandas / 可视化 / 统计分析）",
  "Power BI（业务驾驶舱 / 管理层汇报看板）",
  "A/B Test（实验设计 / 显著性检验）",
  "业务沟通（洞察叙事 / 跨团队协作）",
  "英文文档阅读与结构化汇报",
];

const workflow = [
  {
    title: "01 业务问题定义",
    desc: "先对齐业务目标与成功标准，避免“做了很多分析但回答不了核心问题”。",
  },
  {
    title: "02 指标与数据建模",
    desc: "梳理事实表与维度表，建立可复用指标口径，确保结论可验证、可追踪。",
  },
  {
    title: "03 洞察提炼与策略建议",
    desc: "不止给出图表，更输出“优先级 + 收益 + 成本 + 风险”的行动清单。",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-18 pt-16 md:px-10 md:pt-24">
          <p className="mb-4 inline-flex items-center rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-1 text-xs tracking-[0.18em] text-sky-200 uppercase">
            Wannantian · Data Analyst Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-6xl md:leading-[1.15]">
            用数据讲清业务增长，
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              让决策更快、更准、更可执行
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
            你好，我是万南天。专注于电商与增长方向的数据分析，擅长从复杂数据中提炼关键洞察，并把分析结论转化为落地策略。
            这个页面可作为 <span className="font-semibold text-white">www.wannantian.com</span> 的首页版本，用于求职展示与 HR 快速浏览。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              查看项目亮点
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
            >
              联系我（简历 / 面试）
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-2 grid max-w-6xl gap-4 px-6 pb-14 md:grid-cols-3 md:px-10">
        {highlightMetrics.map((item) => (
          <article key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-sm text-slate-300">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
          </article>
        ))}
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">Selected Work</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">核心项目展示</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">每个项目都包含“业务目标、分析路径、关键洞察、落地建议”四个部分，适合面试中快速展开。</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-sky-500/60"
            >
              <p className="text-xs tracking-[0.14em] text-sky-300 uppercase">{project.tag}</p>
              <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{project.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {project.impact.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-14">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">Methodology</p>
          <h2 className="mt-3 text-2xl font-semibold">我的分析工作流</h2>
          <div className="mt-6 space-y-5">
            {workflow.map((step) => (
              <div key={step.title} className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
                <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7">
          <p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">Capabilities</p>
          <h2 className="mt-3 text-2xl font-semibold">工具与能力</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            {skills.map((skill) => (
              <li key={skill} className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                {skill}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-3xl border border-sky-300/20 bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-indigo-500/10 p-8 md:flex md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-cyan-200 uppercase">Open to Opportunity</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">正在寻找数据分析相关岗位</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              可投递方向：数据分析师 / 商业分析 / 增长分析。欢迎通过邮箱或 LinkedIn 联系，我可以提供完整项目文档、SQL 脚本和可交互看板演示。
            </p>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-200 md:mt-0 md:text-right">
            <p>域名：www.wannantian.com</p>
            <p>邮箱：wannantian@example.com</p>
            <p>城市：United States · Remote Friendly</p>
          </div>
        </div>
      </section>
    </main>
  );
}
