// Create the photographer header view
export default function PhotographerHeader(useData) {
  // Create a template
  const template = document.createElement('section')

  // Add a class to the template
  template.classList.add('photographer-header')

  // Create content for the template
  template.innerHTML = `
    <div class="photographer-header__text">
      <h1 class="photographer-header__name">${useData.name}</h1>
      <div class="photographer-header__infos">
        <p class="photographer-header__location">${useData.city}, ${useData.country}</p>
        <p class="photographer-header__tagline">${useData.tagline}</p>
      </div>
    </div>
    <button
      class="photographer-header__contact"
      title="Contacter ${useData.name}"
      aria-label="Contacter ${useData.name}"
    >
      Contactez-moi
    </button>
    <div class="photographer-header__image-wrapper">
      <img
        class="photographer-header__image"
        src="${useData.avatar}"
        alt="${useData.name} avatar"
      />
    </div>
  `

  // Return the template content
  return template.outerHTML
}
