import { dictionaries } from './translations.js';
export const locales = ['en','zh-Hant','zh-Hans'];
const escapeRE = s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const keys = Object.keys(dictionaries['zh-Hant']).sort((a,b)=>b.length-a.length);
const pattern = new RegExp(keys.map(k=>`${/^[a-z]/i.test(k)?'(?<![A-Za-z])':''}${escapeRE(k)}${/[a-z]$/i.test(k)?'(?![A-Za-z])':''}`).join('|'),'g');
export function resolveLocale(search, saved) {
 const requested = new URLSearchParams(search).get('lang');
 return locales.includes(requested) ? requested : locales.includes(saved) ? saved : 'en';
}
export function awardTypeBadgeLabel(awardType, locale = 'en') {
  if (awardType === 'loan') return translate('Loan', locale);
  return null;
}
export function translate(text, locale = 'en') {
 if(locale==='en' || !dictionaries[locale]) return String(text);
 const value=String(text);
 if (dictionaries[locale][value]) return dictionaries[locale][value];
 const dynamic = value
   .replace(/(\d+) of (\d+) entries/g,'$1 / $2 項資料')
   .replace(/Page (\d+) of (\d+)/g,'第 $1 頁，共 $2 頁')
   .replace(/(\d+) PROGRAMS? SELECTED/g,'已選擇 $1 項課程')
   .replace(/(\d+) programs? selected for comparison/g,'已選擇 $1 項課程進行比較');
 const result=dynamic.replace(pattern,match=>dictionaries[locale][match]);
 return locale==='zh-Hans' ? result.replaceAll('項','项').replaceAll('資料','资料').replaceAll('頁','页').replaceAll('選擇','选择').replaceAll('課程','课程').replaceAll('進行','进行').replaceAll('比較','比较') : result;
}
export function localizedSearch(items, query, locale) {
 const q=query.trim().toLocaleLowerCase();
 return items.filter(p=>{
  const original=`${p.university} ${p.short} ${p.degree} ${p.area} ${p.kind} ${p.orientation} ${p.academic}`;
  return [original,translate(original,'zh-Hant'),translate(original,'zh-Hans')].some(s=>s.toLocaleLowerCase().includes(q));
 });
}
export function initLanguage() {
 let saved;try{saved=localStorage.getItem('fieldnotes-language');}catch{}
 let language=resolveLocale(location.search,saved);
 const originalText=new WeakMap(),originalAttributes=new WeakMap();
 const select=document.querySelector('#language');
 const observer=new MutationObserver(()=>apply());
 function watch(){observer.observe(document.body,{subtree:true,childList:true,characterData:true});}
 function apply(){
  observer.disconnect();
  document.documentElement.lang=language;
  select.value=language;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
   if(node.parentElement.closest('script,style,[translate="no"],#language'))continue;
   const previous=originalText.get(node);
   const original=previous&&node.nodeValue===previous.output?previous.input:node.nodeValue;
   const output=translate(original,language);
   originalText.set(node,{input:original,output});
   if(node.nodeValue!==output)node.nodeValue=output;
  }
  for(const el of document.querySelectorAll('[placeholder],[aria-label],[title]')){
   if(el.closest('[translate="no"]'))continue;
   const saved=originalAttributes.get(el)||{};
   for(const attribute of ['placeholder','aria-label','title']){
    if(!el.hasAttribute(attribute))continue;
    const old=saved[attribute],value=el.getAttribute(attribute);
    const input=old&&old.output===value?old.input:value;
    const output=translate(input,language);saved[attribute]={input,output};el.setAttribute(attribute,output);
   }
   originalAttributes.set(el,saved);
  }
  const title=document.querySelector('[data-nav].active')?.textContent.trim().replace(/\s+\d+$/,'')||'Fieldnotes';
  document.title=`${title} — Fieldnotes`;
  document.querySelector('#original-language-note').hidden=language==='en';
  watch();
 }
 function setLanguage(value){
  language=locales.includes(value)?value:'en';
  try{localStorage.setItem('fieldnotes-language',language);}catch{}
  const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);
  apply();document.dispatchEvent(new CustomEvent('languagechange',{detail:language}));
 }
 select.addEventListener('change',()=>setLanguage(select.value));
 window.addEventListener('popstate',()=>{language=resolveLocale(location.search,language);apply();});
 apply();
 return {get locale(){return language;},apply};
}
