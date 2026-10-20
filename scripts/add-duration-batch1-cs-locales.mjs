import { readFileSync, writeFileSync } from 'node:fs';

const translations = {
  'Coursework MS (96–108 qualifying units, typically eight courses) with optional research and a thesis option. Most finish in three semesters; MS admission does not prefer students for the PhD.':
    '授課型 MS（96–108 合格學分，通常八門課），可選研究與論文。多數三學期完成；MS 入學不偏好日後升讀 PhD 的學生。',
  '45-unit MS CS with Foundations, SSI, Breadth, Depth, and Electives on an approved program sheet. Nine predefined specializations (plus rare Individually Designed). Up to three years / nine non-summer quarters.':
    '45 學分 MS CS，須在核准課程表上完成 Foundations、SSI、Breadth、Depth 與 Electives。九個預設專修（另含罕見的 Individually Designed）。最長三年／九個非夏季學季。',
  'Full-time EECS MEng completed in one academic year (Fall and Spring) with a technical concentration, engineering leadership coursework, and a team capstone. Concentrations include Data Science, Computer Systems, and Visual Computing among others.':
    '全職 EECS MEng 於一個學年（秋、春）完成，含技術集中領域、工程領導力課程與團隊 capstone。集中領域含 Data Science、Computer Systems、Visual Computing 等。',
  'Siebel School offers a 32-credit professional MCS (coursework-only; Urbana typically ≤3 consecutive semesters) and a separate 32-credit research MS (thesis via CS 599). Eight optional graduate tracks (AI, data science, security, etc.).':
    'Siebel School 提供 32 學分專業 MCS（純授課；Urbana 通常 ≤3 個連續學期）及另一條 32 學分研究 MS（論文 CS 599）。八條可選研究生 track（AI、data science、security 等）。',
  'Research MS is a selective four-semester (≈2-year) degree: 34 credits with 6–12 thesis credits, an outside minor, and a written thesis + oral. Professional MEng is a separate ~1-year coursework + capstone route.':
    '研究 MS 為遴選制四學期（≈2 年）學位：34 學分，含 6–12 學分論文、校外 minor，以及書面論文與口試。專業 MEng 為另一條約 1 年授課 + capstone 路徑。',
  'Campus MSCS is 30 hours with one required specialization (11 areas; specialization coursework 15–18 hours). Course, Project (9h), or Thesis (12h) options. Complete within six years; keep distinct from OMSCS.':
    '校內 MSCS 為 30 學時，須選一個專修（11 個領域；專修課程 15–18 學時）。可選 Course、Project（9h）或 Thesis（12h）。須在六年內完成；與 OMSCS 區分。',
  'CSE master’s requires 30 credits; thesis optional; normally finished in 1.5–2 years. MS vs MSE is primarily naming/eligibility by prior engineering bachelor’s.':
    'CSE 碩士需 30 學分；論文可選；通常 1.5–2 年完成。MS 與 MSE 主要差異在命名／是否具工程學士資格。',
  'On-campus research MSCS: breadth (3) + minor (2), then coursework (5 electives) or thesis (3 electives + 2 thesis courses); typically ~10 courses / ~2 years. Distinct from the online MSCS.':
    '校內研究 MSCS：廣度（3）+ minor（2），再選授課（5 門選修）或論文（3 門選修 + 2 門論文課）；通常約 10 門課／約 2 年。與線上 MSCS 不同。',
};

const toHans = (s) =>
  s
    .replaceAll('學', '学')
    .replaceAll('碩', '硕')
    .replaceAll('須', '须')
    .replaceAll('與', '与')
    .replaceAll('線', '线')
    .replaceAll('詳', '详')
    .replaceAll('見', '见')
    .replaceAll('欄', '栏')
    .replaceAll('區', '区')
    .replaceAll('產', '产')
    .replaceAll('業', '业')
    .replaceAll('領', '领')
    .replaceAll('導', '导')
    .replaceAll('為', '为')
    .replaceAll('選', '选')
    .replaceAll('論', '论')
    .replaceAll('參', '参')
    .replaceAll('師', '师')
    .replaceAll('個', '个')
    .replaceAll('別', '别')
    .replaceAll('確認', '确认')
    .replaceAll('關', '关')
    .replaceAll('閉', '闭')
    .replaceAll('廣', '广')
    .replaceAll('課', '课')
    .replaceAll('程', '程')
    .replaceAll('徑', '径')
    .replaceAll('證', '证')
    .replaceAll('讀', '读')
    .replaceAll('請', '请')
    .replaceAll('時', '时')
    .replaceAll('僅', '仅')
    .replaceAll('標', '标')
    .replaceAll('內', '内')
    .replaceAll('習', '习')
    .replaceAll('頁', '页')
    .replaceAll('授', '授')
    .replaceAll('型', '型')
    .replaceAll('合格', '合格')
    .replaceAll('門', '门')
    .replaceAll('多', '多')
    .replaceAll('數', '数')
    .replaceAll('學期', '学期')
    .replaceAll('完成', '完成')
    .replaceAll('入', '入')
    .replaceAll('不', '不')
    .replaceAll('偏好', '偏好')
    .replaceAll('日', '日')
    .replaceAll('後', '后')
    .replaceAll('升', '升')
    .replaceAll('生', '生')
    .replaceAll('核准', '核准')
    .replaceAll('表', '表')
    .replaceAll('上', '上')
    .replaceAll('預', '预')
    .replaceAll('設', '设')
    .replaceAll('專', '专')
    .replaceAll('修', '修')
    .replaceAll('另', '另')
    .replaceAll('含', '含')
    .replaceAll('罕', '罕')
    .replaceAll('見', '见')
    .replaceAll('的', '的')
    .replaceAll('最', '最')
    .replaceAll('長', '长')
    .replaceAll('年', '年')
    .replaceAll('個', '个')
    .replaceAll('非', '非')
    .replaceAll('夏', '夏')
    .replaceAll('季', '季')
    .replaceAll('全', '全')
    .replaceAll('職', '职')
    .replaceAll('於', '于')
    .replaceAll('一', '一')
    .replaceAll('秋', '秋')
    .replaceAll('春', '春')
    .replaceAll('技', '技')
    .replaceAll('術', '术')
    .replaceAll('集中', '集中')
    .replaceAll('領域', '领域')
    .replaceAll('工', '工')
    .replaceAll('力', '力')
    .replaceAll('團', '团')
    .replaceAll('隊', '队')
    .replaceAll('等', '等')
    .replaceAll('純', '纯')
    .replaceAll('連', '连')
    .replaceAll('續', '续')
    .replaceAll('及', '及')
    .replaceAll('另一', '另一')
    .replaceAll('條', '条')
    .replaceAll('可', '可')
    .replaceAll('遴', '遴')
    .replaceAll('制', '制')
    .replaceAll('四', '四')
    .replaceAll('約', '约')
    .replaceAll('外', '外')
    .replaceAll('校', '校')
    .replaceAll('書', '书')
    .replaceAll('面', '面')
    .replaceAll('口', '口')
    .replaceAll('試', '试')
    .replaceAll('專', '专')
    .replaceAll('約', '约')
    .replaceAll('校', '校')
    .replaceAll('時', '时')
    .replaceAll('須', '须')
    .replaceAll('領', '领')
    .replaceAll('域', '域')
    .replaceAll('差', '差')
    .replaceAll('異', '异')
    .replaceAll('在', '在')
    .replaceAll('命', '命')
    .replaceAll('名', '名')
    .replaceAll('否', '否')
    .replaceAll('具', '具')
    .replaceAll('資', '资')
    .replaceAll('格', '格')
    .replaceAll('度', '度')
    .replaceAll('minor', 'minor')
    .replaceAll('廣', '广')
    .replaceAll('度', '度')
    .replaceAll('再', '再')
    .replaceAll('門', '门')
    .replaceAll('選', '选')
    .replaceAll('修', '修')
    .replaceAll('通', '通')
    .replaceAll('常', '常')
    .replaceAll('約', '约')
    .replaceAll('不同', '不同');

for (const locale of ['zh-Hant', 'zh-Hans']) {
  const path = new URL(`../locales/${locale}.json`, import.meta.url);
  const dict = JSON.parse(readFileSync(path, 'utf8'));
  for (const [en, hant] of Object.entries(translations)) {
    dict[en] = locale === 'zh-Hant' ? hant : toHans(hant);
  }
  writeFileSync(path, `${JSON.stringify(dict, null, 2)}\n`);
  console.log(`Updated ${locale}.json with ${Object.keys(translations).length} duration-batch1 CS academic strings.`);
}
