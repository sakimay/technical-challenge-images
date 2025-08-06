export const fetchPhotos = async ({ page = 1, limit = 10 } = {}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_per_page=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch photos')
        }
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Error fetching photos:', error)
        throw error
    }
}
