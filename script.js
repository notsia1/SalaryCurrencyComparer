const professionSelect = document.getElementById('profession');
const countrySelect = document.getElementById('country');
const userSalaryInput = document.getElementById('userSalary');
const resultBox = document.getElementById('result');
const resultText = document.getElementById('resultText');
const routeTo = document.getElementById('routeTo');
const stampWrap = document.getElementById('stampWrap');
let chart;

for (const [key, p] of Object.entries(DATA.professions)) {
  professionSelect.innerHTML += `<option value="${key}">${p.label}</option>`;
}
for (const [key, c] of Object.entries(DATA.countries)) {
  countrySelect.innerHTML += `<option value="${key}">${c.flag} ${c.label}</option>`;
}

function renderFlaps(containerId, text, prevText) {
  const container = document.getElementById(containerId);
  const chars = text.split('');
  const prevChars = (prevText || '').split('');

  if (container.children.length !== chars.length) {
    container.innerHTML = '';
    chars.forEach(ch => {
      const el = document.createElement('div');
      el.className = ch === ' ' ? 'flap sep' : 'flap';
      el.innerHTML = `<span class="digit">${ch}</span>`;
      container.appendChild(el);
    });
    return;
  }

  chars.forEach((ch, i) => {
    const el = container.children[i];
    const digitSpan = el.querySelector('.digit');
    if (prevChars[i] !== ch) {
      el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip');
      setTimeout(() => { digitSpan.textContent = ch; }, 60);
    } else {
      digitSpan.textContent = ch;
    }
  });
}

let rates = null;
let lastLeft = '', lastRight = '';

async function loadRates() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/TRY');
    const data = await res.json();
    rates = data.rates;
  } catch (e) {
    rates = { USD: 0.023, EUR: 0.021, GBP: 0.018, AED: 0.085 };
  }
  calculate();
}

function fmt(n) { return Math.round(n).toLocaleString('tr-TR'); }

function calculate() {
  if (!rates) return;
  const profKey = professionSelect.value;
  const countryKey = countrySelect.value;
  const prof = DATA.professions[profKey];
  const country = DATA.countries[countryKey];

  routeTo.textContent = `${country.flag} ${country.label.toUpperCase()}`;

  const userMonthlyTL = parseFloat(userSalaryInput.value) || prof.tl_monthly;
  const userAnnualTL = userMonthlyTL * 12;
  const userAnnualForeign = userAnnualTL * rates[country.currency];
  const countryAvgForeign = prof[countryKey];
  const diffPct = ((userAnnualForeign - countryAvgForeign) / countryAvgForeign) * 100;
  const cur = country.currency;

  document.getElementById('flapLabelLeft').textContent = `Senin maaşın (${cur})`;
  document.getElementById('flapLabelRight').textContent = `${country.label} ort. (${cur})`;

  const leftStr = fmt(userAnnualForeign);
  const rightStr = fmt(countryAvgForeign);
  renderFlaps('flapLeft', leftStr, lastLeft);
  renderFlaps('flapRight', rightStr, lastRight);
  lastLeft = leftStr; lastRight = rightStr;

  const isPositive = diffPct >= 0;
  stampWrap.innerHTML = `<span class="stamp ${isPositive ? 'pos' : 'neg'}">${isPositive ? '↑ KAZANÇLI' : '↓ KAYIPTA'} · %${fmt(Math.abs(diffPct))}</span>`;

  resultText.innerHTML = `
    <strong>${prof.label}</strong> mesleğinde Türkiye'de yıllık <strong>${fmt(userAnnualTL)} TL</strong> kazanıyorsun.
    Kur bazında bu, yaklaşık <strong>${leftStr} ${cur}</strong> eder.
    ${country.flag} ${country.label}'daki aynı meslek ortalaması ise <strong>${rightStr} ${cur}</strong> —
    yani oradaki ortalamadan ${isPositive ? 'daha fazla' : 'daha az'} kazanıyorsun (yaşam maliyeti farkı hariç, sadece kur bazında).
  `;

  resultBox.classList.add('show');

  const ctx = document.getElementById('chart');
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Senin maaşın', `${country.label} ort.`],
      datasets: [{ data: [userAnnualForeign, countryAvgForeign], backgroundColor: ['#f2a83d', '#3a4150'], borderRadius: 4, barThickness: 46 }]
    },
    options: {
      animation: { duration: 500, easing: 'easeOutQuart' },
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { color: '#6b7280', font: { family: 'IBM Plex Mono', size: 10 } }, grid: { color: '#242a33' } },
        x: { ticks: { color: '#c7cdd6', font: { family: 'IBM Plex Mono', size: 11 } }, grid: { display: false } }
      }
    }
  });
}

professionSelect.addEventListener('change', calculate);
countrySelect.addEventListener('change', calculate);
userSalaryInput.addEventListener('input', calculate);

loadRates();
