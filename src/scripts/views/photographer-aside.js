// Create photographer aside view
export default function PhotographerAside(data) {
  // Create photographer aside element
  const photographerAside = document.createElement('aside')
  photographerAside.classList.add('photographer-aside')

  // Create photographer aside likes
  const photographerAsideLikes = document.createElement('div')
  photographerAsideLikes.classList.add('photographer-aside__likes')

  // Create photographer aside likes count and add sum of likes to it
  const photographerAsideLikesCount = document.createElement('p')
  photographerAsideLikesCount.classList.add('photographer-aside__likes-count')
  photographerAsideLikesCount.textContent = data.medias.reduce((sum, media) => sum + media.likes, 0)

  // Create photographer aside likes icon
  const photographerAsideLikesIcon = document.createElement('img')
  photographerAsideLikesIcon.classList.add('photographer-aside__likes-icon')
  photographerAsideLikesIcon.src = '/assets/svgs/heart-black.svg'
  photographerAsideLikesIcon.alt = "J'aime"
  photographerAsideLikesIcon.title = 'Total des likes'

  // Append photographer aside likes count and icon to likes
  photographerAsideLikes.append(photographerAsideLikesIcon, photographerAsideLikesCount)

  // Create photographer aside price
  const photographerAsidePrice = document.createElement('p')
  photographerAsidePrice.classList.add('photographer-aside__price')
  photographerAsidePrice.textContent = data.price + '€ / jour'

  // Append photographer aside likes and price to aside
  photographerAside.append(photographerAsideLikes, photographerAsidePrice)

  return photographerAside
}
