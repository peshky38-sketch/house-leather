function ItemCard() {
  const data = [
    {
      description: "Women Men Orthopedic Clogs ,Arch Support Sandals, Slip On Shoes, Casual Comfort Footwear for Men and Women",
      amount: "4219",
      img: "https://m.media-amazon.com/images/I/81n3ULCePmL._AC_UL320_.jpg",
    },
    {
      description: "Under Armour Men's Training Shoes",
      amount: "7106",
      img: "https://m.media-amazon.com/images/I/41XNghIdXQL._AC_UL320_.jpg",
    },
    {
      description: "Women Loafers, Slip On Shoes, Casual Comfort Footwear for Women",
      amount: "4395",
      img: "https://m.media-amazon.com/images/I/81bMgsETneL._AC_UL320_.jpg",
    },
    {
      description: "Air Jordan MVP 92  Men's Shoes",
      amount: "10982",
      img: "https://m.media-amazon.com/images/I/71nfDNdTA3L._AC_UL320_.jpg",
    },
    {
      description: "Men's Duck Low Sneakers",
      amount: "13248",
      img: "https://m.media-amazon.com/images/I/61J6jXUA7YL._AC_UL320_.jpg",
    },
    {
      description: "Women Vomero 18.",
      amount: "18918",
      img: "https://m.media-amazon.com/images/I/71zhtHPqcdL._AC_UL320_.jpg",
    },
  ];

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
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img
            src={item.img}
            alt="Product"
            style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }}
          />
          <p style={{ margin: "0 0 8px", color: "#333" }}>{item.description}</p>
          <p style={{ margin: "0 0 12px", fontWeight: "bold" }}>Ksh {item.amount.toLocaleString()}</p>
          <button
            style={{
              padding: "10px 14px",
              backgroundColor: "#ff9900",
              color: "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
       

