import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Hunter 求职自动化工具",
  description: "爬取职位数据 + LLM 智能打分 + Streamlit 交互看板，一套完整的 AI 辅助求职 pipeline。923 条职位数据，从 0 到可用产品单日完成，使用 Claude Code 辅助开发。",
  alternates: {
    canonical: "/projects/job-hunter",
  },
  openGraph: {
    title: "Job Hunter 求职自动化工具 | 万南天",
    description: "爬取职位数据 + LLM 智能打分 + Streamlit 交互看板，一套完整的 AI 辅助求职 pipeline。",
    url: "/projects/job-hunter",
  },
};
export default function JobHunterPortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "核心结果", href: "#kpi" },
    { label: "系统架构", href: "#methodology" },
    { label: "设计决策", href: "#findings" },
    { label: "关键代码", href: "#code-highlight" },
    { label: "项目价值", href: "#project-value" },
  ];

  const kpis = [
    { label: "单次抓取职位数", value: "923", note: "实习僧平台，数据分析方向" },
    { label: "平均匹配度", value: "59.6", note: "LLM 对全量 JD 的评分均值" },
    { label: "结构化输出字段", value: "4 个", note: "score / strengths / gaps / recommendation" },
    { label: "断点续跑", value: "每 10 条", note: "增量保存，中断后跳过已分析记录" },
    { label: "看板筛选维度", value: "3 维", note: "城市 × 匹配度区间 × 投递状态" },
    { label: "开发周期", value: "1 天", note: "Claude Code 辅助，从 0 到可用" },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "scraper · 数据采集",
      scope: "Playwright 浏览器自动化",
      desc: "Playwright 驱动 Chromium 抓取实习僧职位，列表页提取基础字段后逐条进入详情页解析工作内容与岗位要求。按链接去重实现增量抓取，随机延时降低被识别风险。单次抓取 923 条。",
    },
    {
      step: "02",
      title: "analyzer · LLM 打分",
      scope: "DeepSeek API + 结构化输出",
      desc: "把个人简历数据库（技能、项目、证书竞赛等核心信息）和每条 JD 拼成 prompt，调用 DeepSeek API 强制 JSON 输出四个字段：匹配度评分、优势、差距、一句话投递建议。每 10 条增量落盘，已分析记录自动跳过，支持中断续跑。",
    },
    {
      step: "03",
      title: "dashboard · 交互看板",
      scope: "Streamlit",
      desc: "Streamlit 看板呈现全量结果：顶部汇总指标（总职位数、已投递、约面数、平均匹配度），城市、匹配度区间、投递状态三维筛选，点击职位展开优势/差距详情，投递状态修改后直接写回数据文件。",
    },
  ];

  const findings = [
    "Prompt 设计：system prompt 中明确约定输出 JSON schema（score/strengths/gaps/recommendation），并配合 API 的 response_format=json_object 双保险，避免自然语言混入导致解析失败。",
    "鲁棒性设计：爬虫侧用选择器多级回退（CSS 选择器找不到卡片时降级为 JS 扫描职位链接向上找容器），分析侧单条失败不中断 pipeline——异常记录标记后继续，下次运行自动重试。",
    "增量与幂等：抓取按链接去重，分析每 10 条落盘、重跑跳过已有评分。900+ 条 × 每条 1 秒限速的长任务里，这两个设计让中断成本接近于零。",
    "工具选型：开发用 Claude Code（效率优先），批量打分用 DeepSeek API（900+ 次调用，成本优先），爬虫用 Playwright 而非 requests（目标站动态渲染，requests 拿不到完整 DOM）。按场景选型而不是一把梭。",
  ];

  const businessNote = {
    title: "实际使用效果",
    desc: "上线后筛选 JD 的方式从「逐条人工阅读」变成「按匹配度排序 + 读推荐语」，单批 900+ 条职位的初筛时间从数小时压缩到分钟级。LLM 给出的差距分析（gaps 字段）同时反向输出了技能补强清单。",
  };

  const codeHighlight = {
    title: "analyzer.py · LLM 结构化打分",
    description: "核心打分函数：把个人背景和 JD 拼成 prompt，强制 JSON 输出，解析为四个结构化字段。配合主循环的异常捕获与增量落盘，构成可中断、可续跑的批量分析 pipeline。",
    file: "analyzer.py",
    code: `SYSTEM_PROMPT = (
    "你是一个求职顾问，擅长分析候选人与职位的匹配程度。"
    "用户会提供个人背景和一条职位JD，请输出JSON格式分析，包含4个字段：\\n"
    "- score: 整数 0-100，匹配度评分\\n"
    "- strengths: 字符串，我有哪些符合该职位的经历/技能\\n"
    "- gaps: 字符串，JD要求但我目前缺乏的能力或经验\\n"
    "- recommendation: 字符串，一句话说明值不值得投递\\n"
    "只输出JSON，不要有其他内容。"
)

def call_api(profile, job_content, job_requirements, api_key):
    user_msg = (
        f"## 我的背景\\n{profile}\\n\\n"
        f"## 工作内容\\n{job_content}\\n\\n"
        f"## 岗位要求\\n{job_requirements}"
    )
    resp = requests.post(
        API_URL,
        headers={"Authorization": f"Bearer {api_key}",
                 "Content-Type": "application/json"},
        json={
            "model": MODEL,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_msg},
            ],
            # 强制 JSON 输出，避免自然语言混入导致解析失败
            "response_format": {"type": "json_object"},
            "max_tokens": 800,
        },
        timeout=30,
    )
    resp.raise_for_status()
    data = json.loads(resp.json()["choices"][0]["message"]["content"])
    return (
        int(data.get("score", 0)),
        str(data.get("strengths", "未获取")),
        str(data.get("gaps", "未获取")),
        str(data.get("recommendation", "未获取")),
    )`,
  };

  const dataDetails = [
    ["数据来源", "实习僧（shixiseng.com）数据分析方向实习职位，单次抓取 923 条"],
    ["抓取方式", "Playwright（Chromium），列表页 + 详情页两级抓取，链接去重增量"],
    ["核心字段", "岗位名、公司名、城市、薪资、工作内容、岗位要求、链接"],
    ["打分模型", "DeepSeek（deepseek-chat），response_format 强制 JSON 输出"],
    ["对照基准", "个人简历数据库（经历、技能、证书竞赛等核心竞争力信息）"],
    ["存储与看板", "Excel 作为数据层，Streamlit 看板支持筛选与投递状态写回"],
  ];

  const limitations = [
    "数据源目前稳定覆盖实习僧单一平台。猎聘已实现选择器回退与登录/验证码人工介入机制，但反爬限制下稳定性不足；牛客抓取尚未实现。多平台聚合是下一步迭代方向。",
    "LLM 评分未做一致性校准——同一条 JD 重复打分可能有数分波动，当前用途是初筛排序而非精确度量，对该场景够用。",
    "存储层使用 Excel 而非数据库，在千条量级下够用，但并发写入与历史版本管理能力有限。",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/public" className="text-sm font-semibold tracking-wide text-slate-900">← 返回作品集</a>
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
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">project · job hunter</div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Job Hunter 求职自动化工具</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">用工程手段解决自己的真实问题：Playwright 抓取职位数据，LLM 对照个人简历数据库逐条打分并给出投递建议，Streamlit 看板完成筛选与投递追踪。从 0 到可用产品单日完成。</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://wnt0801-job-hunter.streamlit.app/" target="_blank" rel="noreferrer"
                     className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">🚀
                    在线体验看板</a>
                  <a href="#findings"
                     className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">查看设计决策</a>
                  <a href="https://github.com/wnt0801/job-hunter" target="_blank" rel="noreferrer"
                     className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub</a>
                  <a href="#code-highlight"
                     className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">关键代码</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目定位</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">解决的问题</div>
                    <div className="mt-1 text-slate-600">求职初筛阶段逐条阅读 JD 效率极低，需要批量化、结构化的匹配度评估。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">技术栈</div>
                    <div className="mt-1 text-slate-600">Python（Playwright、pandas、requests）、DeepSeek API、Streamlit、Claude Code 辅助开发。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">架构</div>
                    <div className="mt-1 text-slate-600">scraper（采集）→ analyzer（LLM 打分）→ dashboard（看板）三段式 pipeline。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KPI ── */}
        <section id="kpi" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">key results</p>
              <h2 className="mt-2 text-2xl font-bold">核心结果一览</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">从数据规模、LLM 输出结构，到工程上的断点续跑与开发效率，快速定位关键数字。</p>
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

        {/* ── METHODOLOGY ── */}
        <section id="methodology" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">architecture</p>
              <h2 className="mt-2 text-2xl font-bold">三段式 pipeline</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">采集、分析、呈现三个模块解耦，各自可独立运行：scraper 只管把数据落盘，analyzer 只处理未评分记录，dashboard 只读结果并写回投递状态。</p>
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

        {/* ── FINDINGS ── */}
        <section id="findings" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">design decisions</p>
            <h3 className="mt-2 text-xl font-bold">关键设计决策</h3>
            <div className="mt-6 space-y-4">
              {findings.map((item, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl bg-slate-100 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{idx + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">{businessNote.title}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{businessNote.desc}</p>
            </div>
          </div>
        </section>

        {/* ── VISUALIZATION ── */}
        <section className="mx-auto max-w-6xl px-6 pb-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">dashboard</p>
            <h2 className="mt-2 text-2xl font-bold">求职追踪看板</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div
                className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">streamlit
              · app.py
            </div>
            <h3 className="text-lg font-bold">汇总指标 + 三维筛选 + 投递状态管理</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">顶部展示总职位数、已投递、约面数与平均匹配度；下方表格支持按城市、匹配度区间、投递状态筛选，每条记录附
              LLM 推荐语，投递状态修改后直接写回数据文件。</p>
            <img src="/images/job_hunter_dashboard.png" alt="求职追踪看板"
                 className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50"/>
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-600">可在线体验完整看板（脱敏抽样数据，88 条）</p>
              <a href="https://wnt0801-job-hunter.streamlit.app/" target="_blank" rel="noreferrer"
                 className="shrink-0 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">打开看板</a>
            </div>
          </div>
        </section>

        {/* ── CODE HIGHLIGHT ── */}
        <section id="code-highlight" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">code highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键代码片段</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">展示 LLM 打分的核心实现。完整三模块代码（scraper、analyzer、dashboard）见 GitHub 仓库。</p>
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

        {/* ── DATA + LIMITATIONS ── */}
        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">data</p>
              <h2 className="mt-2 text-xl font-bold">数据与技术细节</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {dataDetails.map(([k, v]) => (
                  <div key={k}><span className="font-semibold text-slate-900">{k}：</span>{v}</div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">limitations</p>
              <h2 className="mt-2 text-xl font-bold">局限性与迭代方向</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {limitations.map((l, i) => (
                  <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">{l}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECT VALUE ── */}
        <section id="project-value" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
            <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">与另外两个分析项目不同，本项目体现的是工程落地能力：识别真实痛点、设计三段式 pipeline、用 LLM 结构化输出解决非结构化文本的批量评估问题，并在浏览器自动化、异常处理、断点续跑等工程细节上做出取舍。AI 工具（Claude Code 开发 + DeepSeek 打分）按场景选型而非盲目堆砌，是数据分析师在 AI 时代工作方式的一个具体样本。</p>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801/job-hunter" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href="/public" className="transition hover:text-slate-900">回到作品集</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
