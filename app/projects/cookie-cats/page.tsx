export default function CookieCatsPortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "核心结果", href: "#kpi" },
    { label: "实验设计", href: "#methodology" },
    { label: "分析结论", href: "#findings" },
    { label: "关键代码", href: "#code-highlight" },
    { label: "项目价值", href: "#project-value" },
  ];

  const kpis = [
    { label: "实验用户总量", value: "90,189", note: "gate_30: 44,700 / gate_40: 45,489" },
    { label: "1 日留存（gate_30）", value: "44.82%", note: "对照组次日留存率" },
    { label: "7 日留存（gate_30）", value: "19.02%", note: "对照组第 7 日留存率" },
    { label: "7 日留存 p 值", value: "0.0016", note: "双比例 z-test，显著" },
    { label: "贝叶斯概率", value: "99.92%", note: "P(gate_30 > gate_40)，7 日留存" },
    { label: "SRM 检验", value: "p = 0.0086", note: "大样本放大随机误差，判断为正常" },
  ];

  const methodologySteps = [
    {
      step: "01",
      title: "SRM 检验",
      scope: "实验设计合理性验证",
      desc: "期望分组比例 1:1，实际偏差 0.89%。卡方检验 p=0.0086 虽统计显著，但属于大样本（9 万）放大微小随机误差，并非分流故障信号。同等偏差在 1000 人样本下不会触发显著性，实验结论有效。",
    },
    {
      step: "02",
      title: "频率派检验",
      scope: "双比例 z-test",
      desc: "对 1 日留存和 7 日留存分别做双比例 z-test，输出 p 值与 95% 置信区间。7 日留存 p=0.0016，CI 下限 0.31%，在行业留存基准（约 15-18%）下具有业务意义。1 日留存 p=0.0744，CI 跨零，方向不明。",
    },
    {
      step: "03",
      title: "贝叶斯验证",
      scope: "Beta-Binomial + Monte Carlo",
      desc: "Beta(1,1) 均匀无信息先验，对两组各采样 100,000 次逐次比较。7 日留存 P(gate_30 > gate_40)=0.9992，1 日留存 P=0.9627。两套框架方向完全一致，结论置信度高。",
    },
  ];

  const findings = [
    "1 日留存：频率派 p=0.0744，95% CI [-0.0006, 0.0124] 跨零，未达统计显著；贝叶斯 P(gate_30 > gate_40)=0.9627，方向倾向 gate_30 但不确定性较高。两套框架均无法对 1 日留存给出明确结论。",
    "7 日留存：频率派 p=0.0016，95% CI [0.0031, 0.0133]，gate_30 显著优于 gate_40；贝叶斯 P(gate_30 > gate_40)=0.9992。两套框架方向完全一致，7 日留存差异稳健可信。",
    "效应量解读：CI 下限 0.31%，在行业 7 日留存基准约 15-18% 的背景下，1% 量级的提升具有实际业务意义。p 值确认显著性，CI 给出效应量范围，两者回答不同维度的问题。",
    "业务建议：不上线 gate_40。7 日留存在两套框架下均指向 gate_30 更优，1 日留存无正向信号，gate_40 无任何优势证据。在变现数据缺失的情况下，这是保守但有据可查的判断。",
  ];

  const businessNote = {
    title: "数据局限与补充建议",
    desc: `本次分析不含变现数据。若产品团队认为"玩更多关卡 → 更多付费"，建议补充以下指标后再决策：各分组 ARPU（每用户平均收入）、两组 sum_gamerounds 分布差异、付费转化率对比。在变现数据缺失的情况下，仅凭留存结论建议不上线。`,
  };

  const codeHighlight = {
    title: "bayesian_analysis.py · Beta-Binomial 贝叶斯验证",
    description: "用 Beta 共轭先验对两组留存率建模，100,000 次 Monte Carlo 采样计算 gate_30 胜出概率。贝叶斯框架不依赖 p 值阈值，直接给出概率形式的结论。",
    file: "04_bayesian.py",
    code: `import numpy as np
from scipy import stats

# 从数据中提取成功次数与失败次数
# gate_30 7日留存
s30 = retention_7_gate30.sum()   # 成功（留存）
f30 = len(retention_7_gate30) - s30  # 失败（流失）

# gate_40 7日留存
s40 = retention_7_gate40.sum()
f40 = len(retention_7_gate40) - s40

# Beta 共轭先验：Beta(1, 1) 均匀无信息先验
# Posterior 更新：Beta(1 + 成功, 1 + 失败)
post_gate30 = stats.beta(1 + s30, 1 + f30)
post_gate40 = stats.beta(1 + s40, 1 + f40)

# Monte Carlo 采样：各采样 100,000 次
np.random.seed(42)
n_samples = 100_000
samples_30 = post_gate30.rvs(n_samples)
samples_40 = post_gate40.rvs(n_samples)

# 计算 gate_30 胜出概率
prob_30_wins = (samples_30 > samples_40).mean()

print(f"P(gate_30 > gate_40) | 7日留存 = {prob_30_wins:.4f}")
# 输出：P(gate_30 > gate_40) | 7日留存 = 0.9992`,
  };

  const dataDetails = [
    ["数据来源", "Cookie Cats 手游公开数据集（Kaggle）"],
    ["实验背景", "付费门从第 30 关（对照组）移至第 40 关（实验组）"],
    ["样本量", "90,189 用户（gate_30: 44,700 / gate_40: 45,489）"],
    ["核心字段", "userid、version、sum_gamerounds、retention_1、retention_7"],
    ["异常值处理", "sum_gamerounds 最大值 49,854（14 天内），可视化时过滤 95 分位以上，统计检验不删除"],
  ];

  const limitations = [
    "实验不含变现数据（ARPU、付费转化率），无法评估 gate_40 对收入的潜在影响，结论局限于留存维度。",
    "SRM 检验 p=0.0086 存在轻微分组不均衡，虽判断为大样本放大随机误差，但在严格实验环境下仍需复查分流机制。",
    "数据仅覆盖 14 天行为，长期留存与生命周期价值无法评估。",
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

        {/* ── HERO ── */}
        <section id="overview" className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">project · cookie cats</div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Cookie Cats A/B 测试分析</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">评估手游付费门位置变动对用户留存的影响。频率派双比例 z-test 确认显著性，贝叶斯 Beta-Binomial 提供概率形式的结论，两套框架交叉验证。</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#findings" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看核心结论</a>
                  <a href="https://github.com/wnt0801/cookie-cats-ab-test" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub</a>
                  <a href="#code-highlight" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">关键代码</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目定位</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">分析重点</div>
                    <div className="mt-1 text-slate-600">实验设计验证、双框架假设检验、效应量解读与业务建议。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">技术栈</div>
                    <div className="mt-1 text-slate-600">Python（pandas、scipy、matplotlib、seaborn）、Beta-Binomial、Monte Carlo。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">数据来源</div>
                    <div className="mt-1 text-slate-600">Cookie Cats 手游公开数据集（Kaggle），90,189 用户。</div>
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
            <p className="max-w-2xl text-sm leading-6 text-slate-600">从样本规模、留存率数字，到 p 值、贝叶斯概率、SRM 验证，快速定位关键数字。</p>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">methodology</p>
              <h2 className="mt-2 text-2xl font-bold">三步分析路径</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">先验证实验设计的合理性，再用频率派检验给出显著性结论，最后用贝叶斯框架交叉验证，给出直觉友好的概率形式结论。</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">findings</p>
            <h3 className="mt-2 text-xl font-bold">分析结论</h3>
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">visualization</p>
            <h2 className="mt-2 text-2xl font-bold">核心可视化</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">retention_compare</div>
              <h3 className="text-lg font-bold">1 日 / 7 日留存率对比</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">gate_30 在 1 日和 7 日留存上均高于 gate_40。7 日留存差距（0.1902 vs 0.1820）在频率派和贝叶斯框架下均显著，是最终建议的主要依据。</p>
              <img src="/images/cookie_cats_retention.png" alt="留存率对比" className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">bayesian · retention_1</div>
                <h3 className="text-lg font-bold">1 日留存后验分布</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">两组后验分布重叠较多，P(gate_30 &gt; gate_40)=0.9627，与频率派 p=0.0744 方向一致但置信度不足，1 日留存结论不确定。</p>
                <img src="/images/cookie_cats_bayesian_1.png" alt="1日留存贝叶斯后验" className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50" />
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">bayesian · retention_7</div>
                <h3 className="text-lg font-bold">7 日留存后验分布</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">两组后验分布几乎完全分离，P(gate_30 &gt; gate_40)=0.9992，与频率派 p=0.0016 完全印证，7 日留存结论高度可信。</p>
                <img src="/images/cookie_cats_bayesian_7.png" alt="7日留存贝叶斯后验" className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50" />
              </div>
            </div>
          </div>
        </section>
        {/* ── CODE HIGHLIGHT ── */}
        <section id="code-highlight" className="border-y bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">code highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键代码片段</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">展示贝叶斯分析的核心实现。完整四步分析代码（EDA、SRM、频率派、贝叶斯）保留在 GitHub 仓库中。</p>
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
              <h2 className="mt-2 text-xl font-bold">数据与实验设计</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {dataDetails.map(([k, v]) => (
                  <div key={k}><span className="font-semibold text-slate-900">{k}：</span>{v}</div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">limitations</p>
              <h2 className="mt-2 text-xl font-bold">局限性</h2>
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
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">本项目覆盖了实验设计合理性验证（SRM）、频率派假设检验（双比例 z-test）、贝叶斯推断（Beta-Binomial + Monte Carlo）的完整 A/B 测试分析流程，重点体现实验分析思维、双框架结论交叉验证能力，以及效应量解读与业务建议的落地意识。</p>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801/cookie-cats-ab-test" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href="/" className="transition hover:text-slate-900">回到作品集</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
