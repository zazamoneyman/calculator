function calculateQuote() {
    let homeSize = document.getElementById("homeSize").value;
    let commercialWindow = document.getElementById("commercialWindow").checked;
    let windowOutside = document.getElementById("windowOutside").checked;
    let windowInsideOutside = document.getElementById("windowInsideOutside").checked;
    let gutterCleaning = document.getElementById("gutterCleaning").checked;
    let postConstruction = document.getElementById("postConstruction").checked;
    let total = 0;
    let estimateMessage = "";

    // Handle On-Site Estimates
    if (commercialWindow) estimateMessage += "Commercial Window Cleaning: Estimate given onsite.\n";
    if (postConstruction) estimateMessage += "Post-Construction Cleaning: Estimate given onsite.\n";

    // Apply Residential Window Cleaning Pricing
    if (windowOutside) total += homeSize * 0.07;
    if (windowInsideOutside) total += homeSize * 0.13;

    // Gutter Cleaning Pricing with Discount Rule
    if (gutterCleaning) {
        total += homeSize * 0.07;
        if (windowOutside || windowInsideOutside) {
            total -= 150; // Apply discount
        }
    }

    // Apply minimum price rule
    if (total > 0 && total < 150) {
        total = 150;
    }

    let quoteText = total > 0 ? `Estimated Price: $${total.toFixed(2)}` : "Estimated Price: Contact us for a quote";
    document.getElementById("quote").innerText = estimateMessage + "\n" + quoteText;
}
