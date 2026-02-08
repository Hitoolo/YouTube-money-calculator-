// Function to format currency
const formatMoney = (num) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
};

// Main Calculator Logic
const initCalculator = () => {
    const viewsInput = document.getElementById('viewsInput');
    const viewsRange = document.getElementById('viewsRange');
    const rpmInput = document.getElementById('rpmInput');
    const rpmRange = document.getElementById('rpmRange');
    const modeSelect = document.getElementById('modeSelect');

    const totalEl = document.getElementById('totalResult');
    const adsEl = document.getElementById('adsResult');
    const sponsorEl = document.getElementById('sponsorResult');
    const insightEl = document.getElementById('motivationBox');

    const barLow = document.getElementById('barLow');
    const barAvg = document.getElementById('barAvg');
    const barHigh = document.getElementById('barHigh');

    let state = {
        views: 50000,
        rpm: 3.50,
        mode: 'long'
    };

    // Calculate Function
    const calculate = () => {
        // 1. Calculate Ads
        let viewsK = state.views / 1000;
        let adRevenue = viewsK * state.rpm;

        // 2. Calculate Sponsor (Estimate: $20 CPM for long, $2 for shorts)
        let sponsorCPM = state.mode === 'long' ? 20 : 2; 
        let sponsorRevenue = viewsK * sponsorCPM;

        // 3. Totals
        let total = adRevenue + sponsorRevenue;

        // 4. Update UI
        totalEl.textContent = formatMoney(total);
        adsEl.textContent = formatMoney(adRevenue);
        sponsorEl.textContent = formatMoney(sponsorRevenue);

        // 5. Update Chart Heights (Dynamic scaling)
        // We set the "High" scenario as the max height reference (120% of high)
        let highScenario = (viewsK * (state.rpm * 2)) + (sponsorRevenue * 1.5);
        let scale = highScenario * 1.1; 

        let lowH = ((adRevenue * 0.5) / scale) * 100;
        let avgH = (total / scale) * 100;
        let highH = (highScenario / scale) * 100;

        barLow.style.height = `${Math.max(lowH, 5)}%`;
        barAvg.style.height = `${Math.max(avgH, 5)}%`;
        barHigh.style.height = `${Math.max(highH, 5)}%`;

        // 6. Insights
        if(total < 500) insightEl.innerHTML = "💡 <strong>Start:</strong> Focus on consistency to get your first payout.";
        else if(total < 2000) insightEl.innerHTML = "🚀 <strong>Growth:</strong> You are earning a part-time income!";
        else insightEl.innerHTML = "👑 <strong>Pro:</strong> This is full-time income territory.";
    };

    // Event Listeners
    window.syncInput = (type, val) => {
        val = parseFloat(val);
        if(type === 'views') { state.views = val; viewsInput.value = val; }
        if(type === 'rpm') { state.rpm = val; rpmInput.value = val; }
        calculate();
    };

    window.syncRange = (type, val) => {
        val = parseFloat(val);
        if(type === 'views') { state.views = val; viewsRange.value = val; }
        if(type === 'rpm') { state.rpm = val; rpmRange.value = val; }
        calculate();
    };

    window.updateMode = () => {
        state.mode = modeSelect.value;
        if(state.mode === 'shorts') {
            state.rpm = 0.05;
            rpmInput.value = 0.05;
            rpmRange.value = 0.05;
            rpmRange.max = 0.5;
            rpmRange.step = 0.01;
        } else {
            state.rpm = 3.50;
            rpmInput.value = 3.50;
            rpmRange.value = 3.50;
            rpmRange.max = 50;
            rpmRange.step = 0.1;
        }
        calculate();
    };

    window.setPreset = (val) => {
        window.syncInput('rpm', val);
        window.syncRange('rpm', val);
    }

    // Initialize
    calculate();
};

// Only run if on the calculator page
if(document.getElementById('calculator-app')) {
    initCalculator();
                         }
