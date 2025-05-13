const accessKey = "8h6gTbBKmu0XeSEvgwQSFBvr47SEDm-_-ldXJFhOIgQ"; // <-- 🔁 replace with your Unsplash access key

const input = document.getElementById('search-input');
const searchBtn = document.querySelector('.search');
const imagesContainer = document.getElementById('images');

searchBtn.addEventListener('click', () => {
    const query = input.value.trim();

    if (!query) {
        alert('Please enter a search term.');
        return;
    }

    // Clearing old images
    imagesContainer.innerHTML = 'Loading...';

    // Fetching from Unsplash API
    fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&client_id=${accessKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("API request failed");
            }
            return response.json();
        })
        .then(data => {
            imagesContainer.innerHTML = ''; // Clearing loading text
            if (data.results.length === 0) {
                imagesContainer.innerHTML = '<p>No images found.</p>';
                return;
            }

            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = photo.alt_description || query;
                img.loading = 'lazy';
                img.id = 'image';
                imagesContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error(error);
            imagesContainer.innerHTML = '<p>Failed to load images.</p>';
        });
});

