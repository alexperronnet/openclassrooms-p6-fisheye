// Create the photographer medias view
export default function PhotographerMedias(data, filterMedias) {
  // Create photographer medias element
  const photographerMedias = document.createElement('section')
  photographerMedias.classList.add('photographer-medias')

  // Append filter medias
  photographerMedias.append(filterMedias)

  // Create photographer medias grid
  const photographerMediasGrid = document.createElement('div')
  photographerMediasGrid.classList.add('medias-grid')
  photographerMediasGrid.dataset.sort = 'popularity'

  // Switch between medias type
  function SwitchMedia(media) {
    // If media is an image
    if (media.image) {
      // Create image element
      const image = document.createElement('img')
      image.classList.add('media-card__media')
      image.src = media.image
      image.alt = media.title
      image.loading = 'lazy'
      image.id = media.id

      // Return image
      return image
    }

    // If media is a video
    if (media.video) {
      // Create video element
      const video = document.createElement('video')
      video.classList.add('media-card__media')
      video.src = media.video
      video.muted = true
      video.id = media.id

      // Return video
      return video
    }
  }

  // Manage media card
  function MediaCard(media) {
    // Create media element
    const mediaElement = document.createElement('article')
    mediaElement.classList.add('media-card')
    mediaElement.dataset.for = media.id

    // Create media wrapper
    const mediaWrapper = document.createElement('a')
    mediaWrapper.classList.add('media-card__media-wrapper')
    mediaWrapper.href = media.image || media.video
    mediaWrapper.title = media.title

    // If media is a video
    if (media.video) {
      // Play the video when media wrapper is hovered or focused and stop it when it's not
      mediaWrapper.onmouseover = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onfocus = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onmouseout = () => mediaWrapper.querySelector('video').pause()
      mediaWrapper.onblur = () => mediaWrapper.querySelector('video').pause()
    }

    // Append media to media wrapper
    mediaWrapper.append(SwitchMedia(media))

    // Create media infos
    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('media-card__infos')

    // Create media title
    const mediaTitle = document.createElement('h3')
    mediaTitle.classList.add('media-card__title')
    mediaTitle.textContent = media.title

    // Create media likes
    const mediaLikes = document.createElement('div')
    mediaLikes.classList.add('media-card__likes')

    // Create media likes count
    const mediaLikesCount = document.createElement('p')
    mediaLikesCount.classList.add('media-card__likes-count')
    mediaLikesCount.textContent = media.likes

    // Create media likes button
    const mediaLikesButton = document.createElement('button')
    mediaLikesButton.classList.add('media-card__likes-button')
    mediaLikesButton.title = "J'aime"

    // Add event listener to media likes button
    mediaLikesButton.addEventListener('click', () => {
      // Get the total likes count
      const totalLikesCount = document.querySelector('.photographer-aside__likes-count')

      // Add data-state attribute to media likes button
      mediaLikesButton.dataset.state =
        mediaLikesButton.dataset.state === 'liked' ? 'unliked' : 'liked'

      // If media likes button is liked
      mediaLikesButton.dataset.state === 'liked'
        ? mediaLikesCount.textContent++ & totalLikesCount.textContent++
        : mediaLikesCount.textContent-- & totalLikesCount.textContent--
    })

    // Add an animation to media likes button each time it's clicked
    mediaLikesButton.addEventListener('animationend', () => {
      mediaLikesButton.style.animation = ''
    })
    mediaLikesButton.addEventListener('click', () => {
      mediaLikesButton.style.animation = 'likes 150ms ease-in-out'
    })

    // Add animation on heart aside each time media likes button is animated
    mediaLikesButton.addEventListener('animationstart', () => {
      document.querySelector('.photographer-aside__likes-icon').style.animation =
        'likes 150ms ease-in-out'
    })
    mediaLikesButton.addEventListener('animationend', () => {
      document.querySelector('.photographer-aside__likes-icon').style.animation = ''
    })

    // Create media likes icon
    const mediaLikesIcon = document.createElement('img')
    mediaLikesIcon.classList.add('media-card__likes-icon')
    mediaLikesIcon.src = '/assets/svgs/heart-red.svg'
    mediaLikesIcon.alt = "J'aime"

    // Append media likes icon to media likes button
    mediaLikesButton.append(mediaLikesIcon)

    // Append media likes button and count to media likes
    mediaLikes.append(mediaLikesCount, mediaLikesButton)

    // Append media title and likes to media infos
    mediaInfo.append(mediaTitle, mediaLikes)

    // Append media wrapper and infos to media element
    mediaElement.append(mediaWrapper, mediaInfo)

    // Append media element to photographer medias
    photographerMediasGrid.append(mediaElement)
  }

  // Create media cards for each media and sort them by popularity by default
  data.mediasSort.popularity.forEach(media => MediaCard(media))

  // New observer for watch the media grid data-sort attribute changes and sort medias by corresponding value
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      // If media grid data-sort attribute changes
      if (mutation.attributeName === 'data-sort') {
        // Remove all media cards
        photographerMediasGrid.innerHTML = ''

        // Create media cards for each media and sort them by popularity
        if (photographerMediasGrid.dataset.sort === 'popularity') {
          // Sort medias by popularity
          data.mediasSort.popularity.forEach(media => MediaCard(media))
        }

        // Create media cards for each media and sort them by date
        if (photographerMediasGrid.dataset.sort === 'date') {
          // Sort medias by date
          data.mediasSort.date.forEach(media => MediaCard(media))
        }

        // Create media cards for each media and sort them by title
        if (photographerMediasGrid.dataset.sort === 'title') {
          // Sort medias by title
          data.mediasSort.title.forEach(media => MediaCard(media))
        }
      }
    })
  })

  // Observe media grid data-sort attribute changes
  observer.observe(photographerMediasGrid, { attributes: true })

  // Append photographer medias grid to photographer medias
  photographerMedias.append(photographerMediasGrid)

  // Return photographer medias
  return photographerMedias
}
