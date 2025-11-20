export function expectedScore(rA,rB){return 1/(1+10**((rB-rA)/400))}
export function updateElo(r,k,o,K=32){const e=expectedScore(r,k);return Math.round(r+K*(o-e))}
export function difficultyToRating(d){return d=='Easy'?700:d=='Medium'?1000:d=='Hard'?1300:1000}