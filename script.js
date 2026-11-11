(() => {
  const grid = document.getElementById('challengeGrid');
  const search = document.getElementById('challengeSearch');
  const count = document.getElementById('resultCount');
  const filters = document.getElementById('filters');
  let active = 'all';

  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[ch]));

  function categories(c) {
    const s = (c.departments + ' ' + c.title + ' ' + c.summary).toLowerCase();
    const result = [];
    if (/energy|solar|feeder|dtr|electricity|grid|transformer|sap/.test(s)) result.push('energy');
    if (/agriculture|crop|farm|irrigation/.test(s)) result.push('agriculture');
    if (/health|food|anaemia|haemoglobin/.test(s)) result.push('health');
    if (/school|reading|education|hostel/.test(s)) result.push('education');
    if (/road|pothole|infrastructure|drone/.test(s)) result.push('infrastructure');
    if (/revenue|land|governance|lake/.test(s)) result.push('governance');
    return [...new Set(result)];
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const items = window.TISC_CHALLENGES.filter(c =>
      (active === 'all' || categories(c).includes(active)) &&
      (!q || [c.title,c.departments,c.summary,c.problem,c.solution,c.expected,c.impact]
        .join(' ').toLowerCase().includes(q))
    );
    count.textContent = `Showing ${items.length} of 18 challenges`;
    grid.innerHTML = items.length ? items.map(c => `
      <article class="challenge-full" id="challenge-${escapeHTML(c.id)}">
        <div class="challenge-full-hero">
          <img src="${escapeHTML(c.image)}" alt="Challenge ${escapeHTML(c.id)}: ${escapeHTML(c.title)}" loading="lazy"
               onerror="this.closest('.challenge-full-hero').classList.add('image-unavailable')">
          <span class="challenge-full-number">CHALLENGE ${escapeHTML(c.id)}</span>
        </div>
        <div class="challenge-full-body">
          <div class="challenge-full-department">${escapeHTML(c.departments)}</div>
          <h3>${escapeHTML(c.title)}</h3>
          <p class="challenge-full-summary">${escapeHTML(c.summary)}</p>
          <div class="challenge-full-impact"><strong>Impact</strong><p>${escapeHTML(c.impact)}</p></div>
          <div class="challenge-full-details">
            <section><h4>Problem Statement</h4><p>${escapeHTML(c.problem)}</p></section>
            <section><h4>Solution Sought</h4><p>${escapeHTML(c.solution)}</p></section>
            <section><h4>Expected Impact</h4><p>${escapeHTML(c.expected)}</p></section>
          </div>
          <a class="challenge-official-link" href="https://tisc.telangana.gov.in/#challenge-${escapeHTML(c.id)}" target="_blank" rel="noopener">View on official TISC website ↗</a>
        </div>
      </article>`).join('') :
      '<div class="no-results">No challenges match your search. Try another keyword or category.</div>';
  }

  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    active = button.dataset.filter;
    filters.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
    render();
  });
  search.addEventListener('input', render);
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  render();
})();