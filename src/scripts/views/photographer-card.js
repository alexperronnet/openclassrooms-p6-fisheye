// Create the photographer card view
export default function PhotographerCard(useData) {
  // Create a template
  const template = document.createElement('article')

  // Add a class to the template
  template.classList.add('photographer-card')

  // Add an id to the template
  template.id = useData.id

  // Create content for the template
  template.innerHTML = `
    <a
      href="/${useData.slug}"
      class="photographer-card__link"
      title="Voir le profil de ${useData.name}"
      aria-label="Voir le profil de ${useData.name}"
    >
      <div class="photographer-card__image-wrapper">
        <img
          class="photographer-card__image"
          src="${useData.avatar}"
          alt="${useData.name} avatar"
        />
      </div>
      <h2 class="photographer-card__name">${useData.name}</h2>
    </a>
    <div class="photographer-card__infos">
      <p class="photographer-card__location">${useData.city}, ${useData.country}</p>
      <p class="photographer-card__tagline">${useData.tagline}</p>
      <p class="photographer-card__price">${useData.price}€/jour</p>
    </div>
  `

  // Return the template content
  return template.outerHTML
}
