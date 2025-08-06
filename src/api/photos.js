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

        if( data && Array.isArray(data) ) {
            // mapeamos y sustituimos las ur'ls de las imágenes
            data.forEach(photo => {
                photo.url = `https://picsum.photos/seed/${photo.id}/600/400`
                photo.thumbnailUrl = `https://picsum.photos/seed/${photo.id}/150/100`
            })
            return data
        }

        throw new Error('Invalid data format')
    } catch (error) {
        console.error('Error fetching photos:', error)
        throw error
    }
}
