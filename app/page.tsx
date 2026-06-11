import Link from "next/link";

export default function HomePage() {
  const projects = [
    {
      slug: "olist",
      title: "Olist 电商分析",
      tagline: "全链路经营分析 + 取消风险建模，从 SQL 数据提取到 Logit 交互效应验证的完整分析链路",
      stack: ["SQL", "Python", "Power BI", "statsmodels"],
      role: "主项目 · 经营分析 + 因果建模",
      highlights: [
        "GMV R$ 1542 万，9.6 万订单，8 个 SQL 模块 + 6 张 Power BI 仪表板",,
        "78,126 条建模样本，三层证据链：Fisher OR=31.55 / Voucher OR=1.39 / 交互项 OR=1.09",
        "从描述性发现出发，逻辑回归控制混淆变量，交互项验证组合放大效应",
      ],
      kpis: [
        { value: "R$ 1542 万", label: "GMV" },
        { value: "9.6 万", label: "订单数" },
        { value: "78,126", label: "建模样本" },
        { value: "31.55", label: "Fisher OR" },
        { value: "1.39", label: "Voucher OR" },
        { value: "1.09", label: "交互项 OR" },
      ],
conclusion: "核心发现：高客单订单中 voucher 支付取消风险被显著放大，建议针对该组合优化支付引导策略。",
      github: "https://github.com/wnt0801/olist-ecommerce-analysis",
      cover: "/images/monthly_trend.png",
      coverAlt: "月度成交额与订单量",
    },
    {
      slug: "cookie-cats",
      title: "Cookie Cats A/B 测试分析",
      tagline: "9 万用户行为数据，频率派 + 贝叶斯双框架评估付费门位置对 7 日留存率的影响",
      stack: ["Python", "scipy", "Beta-Binomial"],
      role: "实验分析 · 双框架检验",
      highlights: [
        "90,189 用户，gate_30 vs gate_40 两组，含 SRM 分流合理性验证",
        "7 日留存频率派 p=0.0016，贝叶斯 P(gate_30 > gate_40)=99.92%，双框架结论一致",
        "效应量解释：行业 7 日留存基准约 15-18%，1% 量级提升具有业务意义",
      ],
      kpis: [
        { value: "9 万", label: "用户数" },
        { value: "2 组", label: "实验分组" },
        { value: "0.0016", label: "7日留存 p值" },
        { value: "99.92%", label: "贝叶斯概率" },
        { value: "双框架", label: "频率派+贝叶斯" },
        { value: "不上线", label: "建议结论" },
      ],
conclusion: "建议结论：维持 gate_30 方案，双框架一致支持，推迟付费门会显著损害 7 日留存。",
      github: "https://github.com/wnt0801/cookie-cats-ab-test",
      cover: "/images/cookie_cats_retention.png",
      coverAlt: "7 日留存率对比",
    },
      {
      slug: "job-hunter",
      title: "Job Hunter 求职自动化工具",
      tagline: "爬取职位数据 + LLM 智能打分 + Streamlit 交互看板，一套完整的 AI 辅助求职 pipeline",
      stack: ["Python", "LLM", "Streamlit", "Pandas"],
      role: "工程项目 · AI 工具落地",
      highlights: [
        "scraper 自动抓取职位列表，analyzer 调用 LLM 对每条 JD 评分并生成推荐理由",
        "923 条职位数据，按城市、匹配度区间、投递状态三维筛选",
        "从 0 到可用产品单日完成，使用 Claude Code 辅助开发全程",
      ],
      conclusion: "核心价值：把筛选 JD 的时间从数小时压缩到分钟级，LLM 打分替代人工逐条阅读。",
      kpis: [
        { value: "923", label: "抓取职位数" },
        { value: "3层", label: "筛选维度" },
        { value: "1天", label: "开发周期" },
        { value: "LLM", label: "智能打分" },
        { value: "自动化", label: "全流程" },
        { value: "Streamlit", label: "交互看板" },
      ],
      github: "https://github.com/wnt0801/job-hunter",
        demoUrl: "https://wnt0801-job-hunter.streamlit.app/",
      cover: "/images/job_hunter_dashboard.png",
      coverAlt: "求职追踪看板",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-wide text-slate-900">Wan Nantian</a>
          <nav className="hidden flex-wrap gap-5 md:flex">
            <a href="#projects" className="text-sm text-slate-600 transition hover:text-slate-900">项目作品</a>
            <a href="#about" className="text-sm text-slate-600 transition hover:text-slate-900">关于我</a>
            <a href="#contact" className="text-sm text-slate-600 transition hover:text-slate-900">联系方式</a>
            <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="text-sm text-slate-600 transition hover:text-slate-900">GitHub</a>
          </nav>
        </div>
      </header>

      <div id="top">
        <section className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">data analyst portfolio</div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">万南天<span className="block sm:inline sm:ml-3">· 数据分析作品集</span></h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">金融工程专业学生，聚焦业务数据分析。习惯从一个数字异常出发——voucher 支付取消率是信用卡的 25 倍，然后一路追到逻辑回归验证它不是混淆变量的假象。</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">当前共 3 个项目：1 个覆盖经营分析与风险建模的完整项目、1 个 A/B 实验分析项目、1 个 AI 辅助求职工具。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看项目</a>
              <a href="/resume.pdf" download="万南天_数据分析实习简历.pdf" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">下载简历 PDF</a>
              <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub 主页</a>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">projects</p>
            <h2 className="mt-2 text-2xl font-bold">项目作品</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">三个项目分别覆盖业务经营分析 + 因果建模、实验设计与双框架检验、AI 工程落地。点击进入详情页，含完整结论、方法与代码片段。</p>
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
                        <li key={i} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-400" /><span>{h}</span></li>
                      ))}
                    </ul>
                    {p.conclusion && (
                      <p className="mt-3 text-sm font-medium text-slate-700 border-l-2 border-slate-300 pl-3">{p.conclusion}</p>
                    )}

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
                       <Link href={`/projects/${p.slug}`} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white ...">进入项目详情</Link>
            {p.demoUrl && (
              <a href={p.demoUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">在线体验</a>
            )}
            <a href={p.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-...">GitHub</a>
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
                <p className="mt-5 text-sm leading-7 text-slate-600">金融工程专业 2028 届。求职方向为业务数据分析，对电商、金融场景下的指标拆解、用户分群与因果验证最感兴趣。目前持续通过项目打磨 SQL 与 Python 的分析能力，并尝试把描述性分析延伸到建模验证。近期探索 AI 工具在实际工作流中的落地应用，使用 Playwright + LLM API 构建了完整的求职自动化 pipeline。</p>
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
                    <div className="mt-1">Python、Pandas、statsmodels（Logit）、scipy（z-test、Fisher）</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">实验分析</div>
                    <div className="mt-1">A/B 测试、频率派检验、贝叶斯推断（Beta-Binomial）</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-700">可视化</div>
                    <div className="mt-1">Power BI、Matplotlib、Seaborn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">contact</p>
                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">寻找业务数据分析实习机会</h2>
                <p className="mt-5 text-base leading-8 text-slate-300">2028 届金融工程在读，求职方向业务数据分析。行业不限，一线城市优先。暑期（6–9 月）可全勤到岗，学期内可工作日远程协作。</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">如对作品集中任一项目感兴趣，或有合适的实习机会，欢迎通过下方任一方式联系。</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/resume.pdf" download="万南天_数据分析实习简历.pdf" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">📄 下载简历 PDF</a>
                  <a href="mailto:18179136406@163.com" className="rounded-2xl border border-slate-600 bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">✉️ 发送邮件</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-7">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">联系方式</div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl bg-slate-900 p-4">
                    <div className="text-lg">📧</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">邮箱</div>
                      <a href="mailto:18179136406@163.com" className="mt-1 block break-all text-sm font-medium text-white transition hover:text-slate-300">18179136406@163.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-slate-900 p-4">
                    <div className="text-lg">💬</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">微信</div>
                      <div className="mt-1 text-sm font-medium text-white">wnt0801</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-slate-900 p-4">
                    <div className="text-lg">💻</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-400">GitHub</div>  
                      <a href="https://github.com/wnt0801" target="_blank" rel="noreferrer" className="mt-1 block text-sm font-medium text-white transition hover:text-slate-300">github.com/wnt0801</a>
                    </div>
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
              <a href="mailto:18179136406@163.com" className="transition hover:text-slate-900">Email</a>
              <a href="#top" className="transition hover:text-slate-900">Back to top</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
