let selectedType = "";

function nextSlide(n) {
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });
    document.getElementById("slide" + n).classList.add("active");
}

function selectType(type) {
    selectedType = type;
    nextSlide(3);
}

function orderPerfume() {
    let fragrance = document.getElementById("fragrance").value;
    let intensity = document.getElementById("intensity").value;
    let size = document.getElementById("size").value;

    document.getElementById("orderDetails").innerHTML =
        `For: ${selectedType} <br>
         Fragrance: ${fragrance} <br>
         Intensity: ${intensity} <br>
         Size: ${size}`;

    nextSlide(4);
}
function restartOrder() {
    selectedType = "";
    document.getElementById("fragrance").value = "";
    document.getElementById("intensity").value = "";
    document.getElementById("size").value = "50ml";
    nextSlide(1);
}
function orderPerfume() {
    let fragrance = document.getElementById("fragrance").value;
    let intensity = document.getElementById("intensity").value;
    let size = document.getElementById("size").value;

    let price = 0;

    // Size price
    if (size === "30ml") price = 499;
    else if (size === "50ml") price = 799;
    else if (size === "100ml") price = 1299;

    // Intensity price
    if (intensity.includes("Medium")) price += 100;
    else if (intensity.includes("Strong")) price += 200;

    // Type price
    if (selectedType === "Men" || selectedType === "Women") price += 50;
    else if (selectedType === "Adult") price += 100;

    document.getElementById("orderDetails").innerHTML =
        `Perfume For: ${selectedType}<br>
         Fragrance: ${fragrance}<br>
         Intensity: ${intensity}<br>
         Size: ${size}<br><br>
         <b>Total Price: ₹${price}</b>`;

    nextSlide(4);
}
