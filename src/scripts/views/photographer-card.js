// Create the photographer card view
export default function PhotographerCard(data) {
  // Create photographer card element
  const photographerCard = document.createElement('article')
  photographerCard.classList.add('photographer-card')
  photographerCard.id = data.id

  // Create photographer card link
  const photographerCardLink = document.createElement('a')
  photographerCardLink.classList.add('photographer-card__link')
  photographerCardLink.href = data.slug
  photographerCardLink.title = `Voir le profil de ${data.name}`

  // Create photographer card image wrapper
  const photographerCardImageWrapper = document.createElement('div')
  photographerCardImageWrapper.classList.add('photographer-card__image-wrapper')

  // Create photographer card image
  const photographerCardImage = document.createElement('img')
  photographerCardImage.classList.add('photographer-card__image')
  photographerCardImage.src = data.avatar
  photographerCardImage.alt = `Photo de ${data.name}`

  // Append photographer card image to wrapper
  photographerCardImageWrapper.append(photographerCardImage)

  // Create photographer card name
  const photographerCardName = document.createElement('h2')
  photographerCardName.classList.add('photographer-card__name')
  photographerCardName.textContent = data.name

  // Append photographer card image wrapper and name to link
  photographerCardLink.append(photographerCardImageWrapper, photographerCardName)

  // Create photographer card infos
  const photographerCardInfos = document.createElement('div')
  photographerCardInfos.classList.add('photographer-card__infos')

  // Create photographer card location
  const photographerCardLocation = document.createElement('p')
  photographerCardLocation.classList.add('photographer-card__location')
  photographerCardLocation.textContent = `${data.city}, ${data.country}`

  // Create photographer card tagline
  const photographerCardTagline = document.createElement('p')
  photographerCardTagline.classList.add('photographer-card__tagline')
  photographerCardTagline.textContent = data.tagline

  // Create photographer card price
  const photographerCardPrice = document.createElement('p')
  photographerCardPrice.classList.add('photographer-card__price')
  photographerCardPrice.textContent = `${data.price}€ / jour`

  // Append photographer card location, tagline and price to infos
  photographerCardInfos.append(
    photographerCardLocation,
    photographerCardTagline,
    photographerCardPrice
  )

  // Append photographer card link and infos to card
  photographerCard.append(photographerCardLink, photographerCardInfos)

  // Return photographer card
  return photographerCard
}
