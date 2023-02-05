const ratingItemsList = document.querySelectorAll('.star_rating_item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item => 
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
    
        item.parentNode.dataset.totalValue = itemValue;
    })
);