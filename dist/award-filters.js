import { catalogIdArea, isCatalogProgramId, PROGRAM_AREAS } from './areas.js';

/** Regional eligibility filter helpers (scholarship library). */
export function awardEligibilityMatch(s, field, filter) {
  if (filter === 'All') return true;
  const v = s[field];
  return v === filter || (v === undefined && filter === 'unclear');
}

/**
 * When one regional filter is set, it must match (others at All pass through).
 * When two or more of HK/TW/PRC are set, match if any active dimension matches (OR union).
 */
export function awardRegionFilterMatch(s, hkFilter, twFilter, prcFilter = 'All') {
  const dims = [
    ['hkEligible', hkFilter],
    ['twEligible', twFilter],
    ['prcEligible', prcFilter],
  ];
  const active = dims.filter(([, f]) => f !== 'All');
  if (!active.length) return true;
  if (active.length === 1) {
    const [field, f] = active[0];
    return awardEligibilityMatch(s, field, f);
  }
  return active.some(([field, f]) => awardEligibilityMatch(s, field, f));
}

/** @deprecated Use awardRegionFilterMatch; kept for tests and backward compatibility. */
export function awardHkTwFilterMatch(s, hkFilter, twFilter) {
  return awardRegionFilterMatch(s, hkFilter, twFilter, 'All');
}

/** True when scope is a single catalog program id (any degree family). */
export function isProgramScopedAward(scope) {
  return isCatalogProgramId(scope);
}

/** Degree family for a program-scoped award, or null for multi / non-catalog scopes. */
export function awardScopeProgramArea(scope) {
  return catalogIdArea(scope);
}

/** Whether an award scope string references at least one catalog id in the given program area. */
export function awardScopeMatchesArea(scope, area) {
  if (!scope || !area) return false;
  const tokens = String(scope).split(/[,;]+/).map(t => t.trim()).filter(Boolean);
  if (!tokens.length) return false;
  return tokens.some(t => catalogIdArea(t) === area);
}

export { PROGRAM_AREAS };
