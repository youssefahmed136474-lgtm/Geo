// مصفوفة الدول (تقدر تزود)
const countryList = [
    { id: 1, name: "مصر" },
    { id: 2, name: "السعودية" },
    { id: 3, name: "أمريكا" },
    { id: 4, name: "ألمانيا" }
    // أضف أي عدد من الدول بنفس الشكل هنا
];

// مصفوفة أنواع المقارنة
const comparisonTypes = [
    { id: "population", label: "عدد السكان" },
    { id: "gdp", label: "الناتج المحلي" },
    { id: "area", label: "المساحة" },
    { id: "capital", label: "العاصمة" }
    // أضف أنواع أخرى لو حبيت
];

// توليد الدول تلقائياً في القوائم
function loadCountries() {
    const select1 = document.getElementById("country1");
    const select2 = document.getElementById("country2");

    countryList.forEach(country => {
        const option1 = document.createElement("option");
        option1.value = country.id;
        option1.textContent = country.name;

        const option2 = option1.cloneNode(true);

        select1.appendChild(option1);
        select2.appendChild(option2);
    });
}

// توليد أنواع المقارنة تلقائياً
function loadComparisonTypes() {
    const select = document.getElementById("comparisonType");

    comparisonTypes.forEach(type => {
        const option = document.createElement("option");
        option.value = type.id;
        option.textContent = type.label;

        select.appendChild(option);
    });
}

// تحميل القوائم عند بدء التشغيل
window.addEventListener("load", function() {
    loadCountries();
    loadComparisonTypes();
});

// زر المقارنة
document.getElementById("compareBtn").addEventListener("click", function () {
    const c1 = document.getElementById("country1").value;
    const c2 = document.getElementById("country2").value;
    const comparisonType = document.getElementById("comparisonType").value;
    const result = document.getElementById("result");

    if (!c1 || !c2) {
        result.innerHTML = "<p>من فضلك اختر دولتين.</p>";
        return;
    }

    if (c1 === c2) {
        result.innerHTML = "<p>لا يمكن مقارنة نفس الدولة.</p>";
        return;
    }

    const country1 = countries[c1];
    const country2 = countries[c2];

    let value1 = country1[comparisonType];
    let value2 = country2[comparisonType];

    result.innerHTML = `
        <div class="comparison">
            <div class="card">
                <h2>${country1.name}</h2>
                <p><strong>${comparisonType}:</strong> ${value1}</p>
            </div>

            <div class="card">
            
                <h2>${country2.name}</h2>
                <p><strong>${comparisonType}:</strong>