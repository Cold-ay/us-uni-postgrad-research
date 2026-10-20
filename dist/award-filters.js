/** HK/TW eligibility filter helpers (scholarship library). */
export function awardEligibilityMatch(s, field, filter) {
  if (filter === 'All') return true;
  const v = s[field];
  return v === filter || (v === undefined && filter === 'unclear');
}

/**
 * When only one of HK/TW filters is set, it must match (AND with "All" on the other).
 * When both are set, match if either dimension matches (OR) so dual "yes" is a union, not intersection.
 */
export function awardHkTwFilterMatch(s, hkFilter, twFilter) {
  const hkActive = hkFilter !== 'All';
  const twActive = twFilter !== 'All';
  if (!hkActive && !twActive) return true;
  const hkMatch = awardEligibilityMatch(s, 'hkEligible', hkFilter);
  const twMatch = awardEligibilityMatch(s, 'twEligible', twFilter);
  if (hkActive && twActive) return hkMatch || twMatch;
  return hkMatch && twMatch;
}
