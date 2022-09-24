// Create the photographer aside view
export default function PhotographerAside(useData) {
  // Create a template
  const template = document.createElement('aside')

  // Add a class to the template
  template.classList.add('photographer-aside')

  // Create content for the template
  template.innerHTML = `
    <div class="photographer-aside__likes">
      <p class="photographer-aside__likes-count">10</p>
      <img
        src="/assets/svgs/heart-black.svg"
        alt="J'aimes"
        title="Total j'aimes"
        aria-label="Total j'aimes"
        class="photographer-aside__likes-icon"
      />
    </div>
    <p class="photographer-aside__price">
      ${useData.price}€ / jour
    </p>
  `

  // Return the template
  return template.outerHTML
}
