const itemList = document.getElementById('itemList');
let itemCount = 10;  // Initial 10 items
let totalItems = itemCount;

// Function to create new list items
function createListItem(count) {
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    return li;
}

// Add initial list items
for (let i = 1; i <= itemCount; i++) {
    itemList.appendChild(createListItem(i));
}

// Infinite Scroll: Add more items when the user reaches the bottom
itemList.addEventListener('scroll', function() {
    if (itemList.scrollTop + itemList.clientHeight >= itemList.scrollHeight) {
        // User has scrolled to the bottom, add 2 more items
        for (let i = 1; i <= 2; i++) {
            totalItems++;
            itemList.appendChild(createListItem(totalItems));
        }
    }
});
