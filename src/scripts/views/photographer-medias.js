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
  function SwitchMedia(media, className, controls = false) {
    // If media is an image
    if (media.image) {
      // Create image element
      const image = document.createElement('img')
      image.classList.add(className)
      image.src = media.src
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
      video.classList.add(className)
      video.src = media.src
      video.id = media.id
      video.controls = controls

      // Return video
      return video
    }
  }

  // Manage media card
  function MediaCard(media) {
    // Create media element
    const mediaElement = document.createElement('article')
    mediaElement.classList.add('media-card')
    mediaElement.dataset.id = media.id

    // Create media wrapper
    const mediaWrapper = document.createElement('div')
    mediaWrapper.classList.add('media-card__media-wrapper')
    mediaWrapper.title = media.title

    // Append media to media wrapper
    mediaWrapper.append(SwitchMedia(media, 'media-card__media'))

    // If media is a video
    if (media.video) {
      // Play the video when media wrapper is hovered or focused and stop it when it's not
      mediaWrapper.onmouseover = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onfocus = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onmouseout = () => mediaWrapper.querySelector('video').pause()
      mediaWrapper.onblur = () => mediaWrapper.querySelector('video').pause()
      mediaWrapper.querySelector('video').muted = true
    }

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

    // On click on media wrapper open lightbox and disable scroll
    mediaWrapper.onclick = () => {
      MediaLightbox(media)

      // Disable scroll
      document.body.style.overflow = 'hidden'
    }
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

  // Manage Lightbox
  function MediaLightbox(media) {
    // Create lightbox element
    const lightbox = document.createElement('div')
    lightbox.classList.add('medias-lightbox')

    // Create lightbox container
    const lightboxContainer = document.createElement('div')
    lightboxContainer.classList.add('medias-lightbox__container')

    // Create close button
    const closeButton = document.createElement('button')
    closeButton.classList.add('medias-lightbox__close')
    closeButton.title = 'Fermer la fenêtre'

    // Create close icon
    const closeIcon = document.createElement('img')
    closeIcon.classList.add('medias-lightbox__close-icon')
    closeIcon.src = 'assets/svgs/close-white.svg'
    closeIcon.alt = 'Fermer la fenêtre'

    // Append close icon to close button
    closeButton.append(closeIcon)

    // Create next button
    const nextButton = document.createElement('button')
    nextButton.classList.add('medias-lightbox__next')
    nextButton.title = 'Voir le média suivant'

    // Create next icon
    const nextIcon = document.createElement('img')
    nextIcon.classList.add('medias-lightbox__next-icon')
    nextIcon.src = 'assets/svgs/chevron-white.svg'
    nextIcon.alt = 'Voir le média suivant'

    // Append next icon to next button
    nextButton.append(nextIcon)

    // Create previous button
    const previousButton = document.createElement('button')
    previousButton.classList.add('medias-lightbox__previous')
    previousButton.title = 'Voir le média précédent'

    // Create previous icon
    const previousIcon = document.createElement('img')
    previousIcon.classList.add('medias-lightbox__previous-icon')
    previousIcon.src = 'assets/svgs/chevron-white.svg'
    previousIcon.alt = 'Voir le média précédent'

    // Append previous icon to previous button
    previousButton.append(previousIcon)

    // Create content
    const content = document.createElement('div')
    content.classList.add('medias-lightbox__content')

    // Create media wrapper
    const lightboxMediaWrapper = document.createElement('div')
    lightboxMediaWrapper.classList.add('medias-lightbox__media-wrapper')

    // Append media to media wrapper
    lightboxMediaWrapper.append(SwitchMedia(media, 'medias-lightbox__media', true))

    // Create media title
    const mediaTitle = document.createElement('h3')
    mediaTitle.classList.add('medias-lightbox__media-title')
    mediaTitle.textContent = media.title

    // Append media wrapper and media title to content
    content.append(lightboxMediaWrapper, mediaTitle)

    // Append close button, next button, previous button and content to lightbox container
    lightboxContainer.append(closeButton, previousButton, content, nextButton)

    // Append lightbox container to lightbox
    lightbox.append(lightboxContainer)

    // Append lightbox photographer medias
    photographerMedias.append(lightbox)

    // Close lightbox
    function CloseLightbox() {
      // Remove lightbox
      lightbox.remove()

      // Enable scroll
      document.body.style.overflow = 'auto'
    }

    // Close lightbox on click
    closeButton.onclick = CloseLightbox

    // Close lightbox on escape key
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        CloseLightbox()
      }
    })

    const mediasArray = data.mediasSort[photographerMediasGrid.dataset.sort]

    // Next media
    function NextMedia() {
      // Get current media index
      const currentMediaIndex = mediasArray.indexOf(media)

      // Get next media index
      const nextMediaIndex = currentMediaIndex + 1 < mediasArray.length ? currentMediaIndex + 1 : 0

      // Get next media
      const nextMedia = mediasArray[nextMediaIndex]

      // Update media
      media = nextMedia

      // Update media title
      mediaTitle.textContent = media.title

      // Update media wrapper
      lightboxMediaWrapper.innerHTML = ''
      lightboxMediaWrapper.append(SwitchMedia(media, 'medias-lightbox__media', true))
    }

    // Next media on click
    nextButton.onclick = NextMedia

    // Next media on right arrow key
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowRight') {
        NextMedia()
      }
    })

    // Previous media
    function PreviousMedia() {
      // Get current media index
      const currentMediaIndex = mediasArray.indexOf(media)

      // Get previous media index
      const previousMediaIndex =
        currentMediaIndex - 1 >= 0 ? currentMediaIndex - 1 : mediasArray.length - 1

      // Get previous media
      const previousMedia = mediasArray[previousMediaIndex]

      // Update media
      media = previousMedia

      // Update media title
      mediaTitle.textContent = media.title

      // Update media wrapper
      lightboxMediaWrapper.innerHTML = ''
      lightboxMediaWrapper.append(SwitchMedia(media, 'medias-lightbox__media', true))
    }

    // Previous media on click
    previousButton.onclick = PreviousMedia

    // Previous media on left arrow key
    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        PreviousMedia()
      }
    })
  }

  // Return photographer medias
  return photographerMedias
}
