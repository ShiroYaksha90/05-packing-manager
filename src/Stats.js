export const Stats = ({ items }) => {
    if (!items.length) return (
        <footer className='stats'>
            <em>Start adding items 🚀</em>
        </footer>
    );

    const numItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const precentage = Math.round((packedItems / numItems) * 100);
    return (precentage === 100 ? <footer className='stats'>
        <em>Everything is packed and you are ready to go ✈️</em>
    </footer> : <footer className='stats'>
        <em>👜 You have {numItems} items on your list, and you already packed {packedItems} ({precentage}%)</em>
    </footer>);


};
