// Create the photographer card view
export default function PhotographerCard(useData) {
  // Create an article element
  const article = document.createElement('article')

  // Add a class to the article element
  article.classList.add('photographer-card')

  // Add an id to the article element
  article.id = useData.id

  // Add the photographer card content
  article.innerHTML = `
    <a
      href="/${useData.slug}"
      class="photographer-card__link"
      title="Voir le profil de ${useData.name}"
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
  return article.outerHTML
}
