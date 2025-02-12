let urchin = d => {
  if (!Array.isArray(d)) return () => [];
  let v = d.map(s => (typeof s === 'string' ? s.toLowerCase() : ''));
  let f = (s, q) => {
    for (let i = 0, j = 0; i < s.length && j < q.length; i++) 
      if (s[i] === q[j] && ++j === q.length) return true;
    return false;
  };
  return q => d.filter((_, i) => f(v[i], (q + '').toLowerCase()));
};

export default urchin;
