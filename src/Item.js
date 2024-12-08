export const Item = ({ item, onDeleteItem, onCheckboxToggle }) => {
    return (
        <li>
            <input type='checkbox' value={item.packed} onChange={() => onCheckboxToggle(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
            <button style={{ fontSize: "4.5rem", color: "red" }} onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    );
};
