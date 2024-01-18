const Capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

function formatPrice(price) {
  // Check if the input is a number
  if (typeof price !== "number") {
    throw new Error("Input must be a number");
  }

  // Use toLocaleString to format the number with commas
  const formattedPrice = price.toLocaleString("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

  return formattedPrice;
}

export { Capitalize, formatPrice };
