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
