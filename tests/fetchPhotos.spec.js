import { fetchPhotos } from '@/api/photos.js'

describe('fetchPhotos', () => {
  it('returns the correct number of photos with required fields', async () => {
    const limit = 35
    const page = 1

    const photos = await fetchPhotos({ page, limit })

    expect(Array.isArray(photos)).toBe(true)
    expect(photos.length).toBe(limit)

    const photo = photos[0]
    expect(photo).toHaveProperty('id')
    expect(photo).toHaveProperty('title')
    expect(photo).toHaveProperty('url')
    expect(photo).toHaveProperty('thumbnailUrl')
  })
})
