import ItemCard from "./ItemCard.jsx";

function MainSection() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default MainSection;