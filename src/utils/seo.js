export function setPageMeta({ title, description }) {
  document.title = title

  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute('content', description)
  }
}
