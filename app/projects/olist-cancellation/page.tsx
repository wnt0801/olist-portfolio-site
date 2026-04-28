export default function OlistCancellationPortfolioPage() {
  const navItems = [
    { label: "项目概览", href: "#overview" },
    { label: "核心结果", href: "#kpi" },
    { label: "方法论", href: "#methodology" },
    { label: "三层结论", href: "#analysis" },
    { label: "关键代码", href: "#code-highlight" },
    { label: "项目价值", href: "#project-value" },
  ];

  const kpis = [
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

  const findings = [
    "Fisher 精确检验：300+ 区间 Voucher 取消率 20.00%（15/75），信用卡仅 0.79%（65/8268），Odds Ratio 31.55，p < 0.000001。差异不可能由抽样波动解释，高价区间确实存在 Voucher 异常风险。",
    "基础逻辑回归：在全量数据上控制金额后，Voucher 支付本身仍独立提升取消概率约 39%（OR=1.39，95% CI [1.33, 1.45]），金额每升高一个标准差额外提升约 15%（OR=1.15）。两个效应都不被对方解释掉，排除混淆假设。",
    "交互项逻辑回归：voucher × payment_value 交互项 OR=1.09，95% CI [1.06, 1.13]，p < 0.0001。模型 AIC 从 6083 降至 6049，加入交互项是有效信息而非噪声。在 Voucher 用户中，金额对取消率的放大作用比信用卡用户更强，组合风险并非简单叠加。",
    "三层互相印证：高价区间的极端差异（Fisher OR=31.55）在全量数据上被分解为支付方式独立效应、金额独立效应、组合放大效应三个分量，且都在统计上显著。从描述性发现到因果验证的链路完整闭合。",
  ];

  const challenges = [
    "样本不平衡严重（149 : 1），交叉表分析改用 Fisher 精确检验，回归模型通过显著性检验与置信区间评估稳健性，避免直接套用准确率指标误判模型表现。",
    "300+ 区间纯 Voucher 样本仅 75 条，大样本卡方检验的近似条件不成立，改用 Fisher 精确检验，结论稳健但置信区间偏宽，已在局限性中明确标注。",
    "区分混淆效应与真实效应：描述性统计无法回答 Voucher 取消率高是否仅因金额高，引入逻辑回归控制变量后才能分离两者的独立贡献。",
    "区分简单叠加与组合放大：通过对比基础模型与交互项模型的 AIC 差异（6083 → 6049）以及交互项的显著性，确认组合效应不是噪声。",
  ];

  const businessActions = [
    {
      title: "干预时机明确",
      desc: "66% 的取消发生在下单后 1 小时内，属于即时反悔型风险，干预窗口集中。建议对 300+ 纯 Voucher 订单增加支付后确认环节。",
    },
    {
      title: "可量化收益",
      desc: "若将 Voucher 取消率降至信用卡同水平，预计可减少 72 单取消，挽回 GMV 约 19,658 元。风险组合特征明确、可干预、损失可量化。",
    },
    {
      title: "适合优先治理",
      desc: "该组合在描述性、Fisher 检验、回归三层证据上均显著，干预方案具体且收益可估，适合作为优先治理对象。",
    },
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
        <section id="overview" className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-600">project · olist cancellation modeling</div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Olist 取消风险建模</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">从描述性发现 到 逻辑回归验证支付方式与金额的交互效应。Fisher 精确检验确认信号，全量回归排除混淆，交互项验证组合放大效应。</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#analysis" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90">查看核心结论</a>
                  <a href="https://github.com/wnt0801/olist-cancellation-risk-analysis" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">GitHub</a>
                  <a href="#code-highlight" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">关键代码</a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">项目定位</p>
                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">分析重点</div>
                    <div className="mt-1 text-slate-600">建模验证、混淆控制、交互效应识别。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">技术栈</div>
                    <div className="mt-1 text-slate-600">SQL（CTE、ROW_NUMBER、JOIN）、Python（statsmodels、scipy、scikit-learn）。</div>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <div className="font-semibold">与主项目关系</div>
                    <div className="mt-1 text-slate-600">Olist 经营分析项目的延伸建模。描述性发现 → 因果验证。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kpi" className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">model results</p>
              <h2 className="mt-2 text-2xl font-bold">核心建模结果</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">三层分析的核心数字一览：从样本规模、类别不平衡，到 Fisher 检验、独立效应、交互项放大效应。</p>
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

        <section id="analysis" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">findings</p>
            <h3 className="mt-2 text-xl font-bold">三层分析的核心结论</h3>
            <div className="mt-6 space-y-4">
              {findings.map((item, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl bg-slate-100 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{idx + 1}</div>
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        <section id="code-highlight" className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">code highlight</p>
              <h2 className="mt-2 text-2xl font-bold">关键代码片段</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">网页中只展开 1 段最能体现项目能力的建模代码，完整 notebook 与三层分析代码保留在 GitHub 仓库中。</p>
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

        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">challenge</p>
              <h2 className="mt-2 text-2xl font-bold">项目难点与处理</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                {challenges.map((c, i) => (
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

        <section id="project-value" className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-[28px] border border-slate-200 bg-slate-900 px-8 py-10 text-white shadow-sm">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">project value</p>
              <h2 className="mt-3 text-3xl font-bold">项目价值</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">本项目完整覆盖了从描述性发现、混淆假设识别、检验方法选择，到逻辑回归控制变量、交互项验证组合效应的因果建模流程，重点体现统计方法选择能力、混淆控制意识与建模结论解释能力，是 Olist 经营分析项目从描述统计走向因果验证的延伸闭环。</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Wan Nantian</div>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/wnt0801/olist-cancellation-risk-analysis" target="_blank" rel="noreferrer" className="transition hover:text-slate-900">GitHub</a>
              <a href="/" className="transition hover:text-slate-900">回到作品集</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
