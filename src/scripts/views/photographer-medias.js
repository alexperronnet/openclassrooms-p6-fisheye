// Create the photographer medias view
export default function PhotographerMedias(data) {
  // Create photographer medias element
  const photographerMedias = document.createElement('section')
  photographerMedias.classList.add('photographer-medias')

  // Switch between medias type
  function SwitchMedia(media) {
    // If media is an image
    if (media.image) {
      // Create image element
      const image = document.createElement('img')
      image.classList.add('photographer-media__image')
      image.src = media.image
      image.alt = media.title
      image.title = media.title
      image.loading = 'lazy'

      // Return image
      return image
    }

    // If media is a video
    if (media.video) {
      // Create video element
      const video = document.createElement('video')
      video.classList.add('photographer-media__video')
      video.src = media.video
      video.title = media.title

      // Return video
      return video
    }
  }

  // Map all medias
  data.medias.map(media => {
    // Create media element
    const mediaElement = document.createElement('article')
    mediaElement.classList.add('photographer-media')
    mediaElement.id = media.id

    // Create media wrapper
    const mediaWrapper = document.createElement('div')
    mediaWrapper.classList.add('photographer-media__media-wrapper')
    mediaWrapper.tabIndex = 0

    // If media is a video
    if (media.video) {
      // Play the video when media wrapper is hovered or focused and stop it when it's not
      mediaWrapper.onmouseover = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onmouseout = () => mediaWrapper.querySelector('video').pause()
      mediaWrapper.onfocus = () => mediaWrapper.querySelector('video').play()
      mediaWrapper.onblur = () => mediaWrapper.querySelector('video').pause()
    }

    // Append media to media wrapper
    mediaWrapper.append(SwitchMedia(media))

    // Create media infos
    const mediaInfo = document.createElement('div')
    mediaInfo.classList.add('photographer-media__infos')

    // Create media title
    const mediaTitle = document.createElement('h3')
    mediaTitle.classList.add('photographer-media__title')
    mediaTitle.textContent = media.title

    // Create media likes
    const mediaLikes = document.createElement('div')
    mediaLikes.classList.add('photographer-media__likes')

    // Create media likes count
    const mediaLikesCount = document.createElement('p')
    mediaLikesCount.classList.add('photographer-media__likes-count')
    mediaLikesCount.textContent = media.likes

    // Create media likes button
    const mediaLikesButton = document.createElement('button')
    mediaLikesButton.classList.add('photographer-media__likes-button')
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
    mediaLikesIcon.classList.add('photographer-media__likes-icon')
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
    photographerMedias.append(mediaElement)
  })

  // Return photographer medias
  return photographerMedias
}
