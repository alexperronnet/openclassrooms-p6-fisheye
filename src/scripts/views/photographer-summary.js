// Create the photographer summary view
export default function PhotographerSummary(useData) {
  // Create photographer summary element
  const photographerSummary = document.createElement('section')
  photographerSummary.classList.add('photographer-summary')

  // Create photographer summary text
  const photographerSummaryText = document.createElement('div')
  photographerSummaryText.classList.add('photographer-summary__text')

  // Create photographer summary name
  const photographerSummaryName = document.createElement('h1')
  photographerSummaryName.classList.add('photographer-summary__name')
  photographerSummaryName.textContent = useData.name

  // Create photographer summary infos
  const photographerSummaryInfos = document.createElement('div')
  photographerSummaryInfos.classList.add('photographer-summary__infos')

  // Create photographer summary location
  const photographerSummaryLocation = document.createElement('p')
  photographerSummaryLocation.classList.add('photographer-summary__location')
  photographerSummaryLocation.textContent = `${useData.city}, ${useData.country}`

  // Create photographer summary tagline
  const photographerSummaryTagline = document.createElement('p')
  photographerSummaryTagline.classList.add('photographer-summary__tagline')
  photographerSummaryTagline.textContent = useData.tagline

  // Append photographer summary location and tagline to infos
  photographerSummaryInfos.append(photographerSummaryLocation, photographerSummaryTagline)

  // Append photographer summary name and infos to text
  photographerSummaryText.append(photographerSummaryName, photographerSummaryInfos)

  // Create photographer summary button
  const photographerSummaryButton = document.createElement('button')
  photographerSummaryButton.classList.add('photographer-summary__contact')
  photographerSummaryButton.title = `Contacter ${useData.name}`
  photographerSummaryButton.textContent = 'Contactez-moi'

  // Create photographer summary image wrapper
  const photographerSummaryImageWrapper = document.createElement('div')
  photographerSummaryImageWrapper.classList.add('photographer-summary__image-wrapper')

  // Create photographer summary image
  const photographerSummaryImage = document.createElement('img')
  photographerSummaryImage.classList.add('photographer-summary__image')
  photographerSummaryImage.src = useData.avatar
  photographerSummaryImage.alt = `Photo de ${useData.name}`

  // Append photographer summary image to wrapper
  photographerSummaryImageWrapper.append(photographerSummaryImage)

  // Append photographer summary text, button and image wrapper to summary
  photographerSummary.append(
    photographerSummaryText,
    photographerSummaryButton,
    photographerSummaryImageWrapper
  )

  return photographerSummary
}
