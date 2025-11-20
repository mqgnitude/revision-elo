const STORAGE_KEY='study_motivator_ratings_v1'
export function loadRatings(){try{const r=localStorage.getItem(STORAGE_KEY);return r?JSON.parse(r):{}}catch{return{}}}
export function saveRatings(r){localStorage.setItem(STORAGE_KEY,JSON.stringify(r))}
export function ensureSubject(r,s){if(!r[s])r[s]={current:800,history:[{ts:Date.now(),rating:800}]};return r}
export function applyNewRating(r,s,n){const c={...r};ensureSubject(c,s);c[s]={current:n,history:[...(c[s].history||[]),{ts:Date.now(),rating:n}]};saveRatings(c);return c}
