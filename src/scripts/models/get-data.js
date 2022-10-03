// Import data source
import dataSource from '@data/photographers.json'

// Get all medias
export default function GetData() {
  // Get the photographer data
  const photographerData = dataSource.photographers

  // Get the media data
  const mediaData = dataSource.media

  // Loop through the photographer data
  photographerData.forEach(photographer => {
    // Assign medias to corresponding photographer
    photographer.medias = mediaData.filter(media => media.photographerId === photographer.id)

    // Create a slug for each photographer
    photographer.slug = photographer.name.toLowerCase().replace(/ /g, '-')

    // Get photographer avatar by replacing the extension
    photographer.avatar = `/assets/avatars/${photographer.portrait.replace('.jpg', '.webp')}`

    // Loop through the photographer medias
    photographer.medias.forEach(media => {
      // Filter medias by type
      if (media.image) {
        // get the media image by replacing the extension
        media.src = `/assets/medias/${photographer.id}/images/${media.image.replace(
          '.jpg',
          '.webp'
        )}`
      } else if (media.video) {
        // get the media video
        media.src = `/assets/medias/${photographer.id}/videos/${media.video}`
      }
    })

    // Sort medias
    photographer.mediasSort = {
      popularity: [...photographer.medias].sort((a, b) => {
        return b.likes - a.likes
      }),
      date: [...photographer.medias].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      }),
      title: [...photographer.medias].sort((a, b) => {
        return a.title.localeCompare(b.title)
      })
    }
  })

  return photographerData
}
