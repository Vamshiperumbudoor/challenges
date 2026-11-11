(() => {
  const grid = document.getElementById('challengeGrid');
  const search = document.getElementById('challengeSearch');
  const count = document.getElementById('resultCount');
  const filters = document.getElementById('filters');
  let active = 'all';
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function categories(c) {
    const s = (c.departments + ' ' + c.title + ' ' + c.summary).toLowerCase(), a = [];
    if (/energy|solar|feeder|dtr|electricity|grid|transformer|sap/.test(s)) a.push('energy');
    if (/agriculture|crop|farm|irrigation/.test(s)) a.push('agriculture');
    if (/health|food|anaemia|haemoglobin/.test(s)) a.push('health');
    if (/school|reading|education|hostel/.test(s)) a.push('education');
    if (/road|pothole|infrastructure|drone/.test(s)) a.push('infrastructure');
    if (/revenue|land|governance|lake/.test(s)) a.push('governance');
    return [...new Set(a)];
  }
  function render() {
    const q = search.value.trim().toLowerCase();
    const items = window.TISC_CHALLENGES.filter(c =>
      (active === 'all' || categories(c).includes(active)) &&
      (!q || [c.title,c.departments,c.summary,c.problem,c.solution,c.expected,c.impact].join(' ').toLowerCase().includes(q))
    );
    count.textContent = `Showing ${items.length} of 18 challenges`;
    grid.innerHTML = items.length ? items.map(c => `
      <article class="challenge-plain" id="challenge-${escapeHTML(c.id)}">
        <div class="challenge-plain-kicker">CHALLENGE ${escapeHTML(c.id)} <span>${escapeHTML(c.departments)}</span></div>
        <h3>${escapeHTML(c.title)}</h3>
        <figure class="challenge-plain-figure">
          <img src="${escapeHTML(c.image)}" alt="${escapeHTML(c.title)}" loading="lazy"
            onerror="this.closest('.challenge-plain-figure').classList.add('image-unavailable')">
        </figure>
        <p class="challenge-plain-summary">${escapeHTML(c.summary)}</p>
        <div class="challenge-plain-impact"><h4>Impact</h4><p>${escapeHTML(c.impact)}</p></div>
        <section class="challenge-plain-section"><h4>Problem Statement</h4><p>${escapeHTML(c.problem)}</p></section>
        <section class="challenge-plain-section"><h4>Solution Sought</h4><p>${escapeHTML(c.solution)}</p></section>
        <section class="challenge-plain-section challenge-plain-expected"><h4>Expected Impact</h4><p>${escapeHTML(c.expected)}</p></section>
        <a class="challenge-official-link" href="https://tisc.telangana.gov.in/#challenge-${escapeHTML(c.id)}" target="_blank" rel="noopener">Compare with official challenge ↗</a>
      </article>`).join('') : '<p class="no-results">No challenges match your search. Try another keyword or category.</p>';
  }
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    active = button.dataset.filter;
    filters.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
    render();
  });
  search.addEventListener('input', render);
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.main-nav');
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  render();
})();