const apiKey = "a434549f98c255001c27169d";

async function convertCurrency(amount, fromCurrency, toCurrency) {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.result !== "success") {
      throw new Error(data["error-type"]);
    }
    
    const rate = data.conversion_rate;
    const convertedAmount = amount * rate;
    
    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    return convertedAmount;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example usage
convertCurrency(100, "USD", "EUR");
