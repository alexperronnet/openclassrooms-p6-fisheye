// Create the photographer medias view
export default function PhotographerMedias(useData) {
  // Create a template
  const template = document.createElement('section')

  // Add a class to the template
  template.classList.add('photographer-medias')

  // Switch between the medias type
  function SwitchMedia(media) {
    // If the media type is image
    if (media.image) {
      return `
        <img
          src="${media.image}"
          alt="${media.title}"
          title="${media.title}"
          aria-label="${media.title}"
          loading="lazy"
          class="photographer-media__image"
        />
      `
    }

    // If the media type is video
    if (media.video) {
      return `
        <video
          src="${media.video}"
          alt="${media.title}"
          title="${media.title}"
          aria-label="${media.title}"
          loading="lazy"
          onmouseover="this.play()"
          onmouseout="this.pause()"
          class="photographer-media__video"
        />
      `
    }
  }

  // Create content for the template
  template.innerHTML = `
    ${
      // Add the photographer medias
      useData.medias
        .map(
          media => `
            <article class="photographer-media" id="${media.id}">
              <div class="photographer-media__media-wrapper" tabindex="0">
                ${
                  // Add the media
                  SwitchMedia(media)
                }
              </div>
              <div class="photographer-media__infos">
                <h3 class="photographer-media__title">${media.title}</h3>
                <div class="photographer-media__likes">
                  <p class="photographer-media__likes-count">${media.likes}</p>
                  <button
                    class="photographer-media__likes-button"
                    title="J'aime"
                    aria-label="J'aime"
                  >
                    <img
                      src="/assets/svgs/heart-red.svg"
                      alt="J'aime"
                      title="J'aime"
                      aria-label="J'aime"
                      class="photographer-media__likes-icon"
                    />
                </div>
              </div>
            </article>
          `
        )
        .join('')
    }
  `

  // Return the template content
  return template.outerHTML
}
