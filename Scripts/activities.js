"use strict";

function showActivities() {
    const selectedCategory = document.getElementById('activityTypesSelect').value;
    const categories = ['artsCrafts', 'adventure', 'museumsCulture'];
    categories.forEach(category => {
        const categoryDiv = document.getElementById(category);
        if (category === selectedCategory) {
            categoryDiv.classList.remove('hidden');
        } else {
            categoryDiv.classList.add('hidden');
        }
    });
}