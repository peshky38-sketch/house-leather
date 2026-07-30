function ItemCard() {
  const description =
    "NEW Nike Dunk Low Rose Whisper Women's Size 8 DD1503-118 White/Rose.";

  const amount = 18458;

  return (
    <div
      style={{
        width: "280px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        margin: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={"https://i.ebayimg.com/images/g/vc8AAOSwuDhkHiLr/s-l1600.webp"}
        alt="Nike Dunk"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          marginBottom: "15px",
        }}
      />

      <h3
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Nike Dunk Low
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#333",
          minHeight: "60px",
        }}
      >
        {description}
      </p>

      <h2
        style={{
          color: "#B12704",
          margin: "10px 0",
        }}
      >
        KES {amount.toLocaleString()}
      </h2>

      <button
        style={{
          width: "100%",
          backgroundColor: "#FFD814",
          border: "1px solid #FCD200",
          borderRadius: "20px",
          padding: "10px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;
       

