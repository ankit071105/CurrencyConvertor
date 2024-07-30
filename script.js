const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 74.34, JPY: 109.57, AUD: 1.36, CAD: 1.25, CHF: 0.91, CNY: 6.48 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87.38, JPY: 129.53, AUD: 1.60, CAD: 1.47, CHF: 1.07, CNY: 7.63 },
    GBP: { USD: 1.33, EUR: 1.13, GBP: 1, INR: 99.64, JPY: 147.34, AUD: 1.82, CAD: 1.68, CHF: 1.22, CNY: 8.66 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1, JPY: 1.48, AUD: 0.018, CAD: 0.017, CHF: 0.012, CNY: 0.087 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.67, JPY: 1, AUD: 0.012, CAD: 0.011, CHF: 0.0083, CNY: 0.059 },
    AUD: { USD: 0.74, EUR: 0.62, GBP: 0.55, INR: 54.59, JPY: 81.20, AUD: 1, CAD: 0.92, CHF: 0.67, CNY: 4.93 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, INR: 59.48, JPY: 88.50, AUD: 1.09, CAD: 1, CHF: 0.73, CNY: 5.36 },
    CHF: { USD: 1.10, EUR: 0.94, GBP: 0.82, INR: 81.40, JPY: 120.91, AUD: 1.48, CAD: 1.37, CHF: 1, CNY: 7.33 },
    CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, INR: 11.11, JPY: 16.50, AUD: 0.20, CAD: 0.19, CHF: 0.14, CNY: 1 }
};

const currencyData = {
    USD: { symbol: '$', country: 'United States' },
    EUR: { symbol: '€', country: 'Eurozone' },
    GBP: { symbol: '£', country: 'United Kingdom' },
    INR: { symbol: '₹', country: 'India' },
    JPY: { symbol: '¥', country: 'Japan' },
    AUD: { symbol: 'A$', country: 'Australia' },
    CAD: { symbol: 'C$', country: 'Canada' },
    CHF: { symbol: 'CHF', country: 'Switzerland' },
    CNY: { symbol: '¥', country: 'China' }
};

document.addEventListener('DOMContentLoaded', () => {
    populateCurrencyOptions();
    document.getElementById('convertButton').addEventListener('click', convertCurrency);
});

function populateCurrencyOptions() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');

    for (const currency in exchangeRates) {
        const optionFrom = document.createElement('option');
        optionFrom.value = currency;
        optionFrom.textContent = `${currency} (${currencyData[currency].country})`;
        fromCurrencySelect.appendChild(optionFrom);

        const optionTo = document.createElement('option');
        optionTo.value = currency;
        optionTo.textContent = `${currency} (${currencyData[currency].country})`;
        toCurrencySelect.appendChild(optionTo);
    }
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || fromCurrency === '' || toCurrency === '') {
        alert('Please fill in all fields');
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;
    const symbol = currencyData[toCurrency].symbol;

    document.getElementById('result').textContent = `${symbol}${result.toFixed(2)}`;
}
