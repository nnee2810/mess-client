export function scrollToBottom(id: string) {
  const element = document.getElementById(id)
  if (element)
    element.scroll({
      top: element.scrollHeight,
    })
}

export function hasScroll(id: string) {
  const element = document.getElementById(id)
  if (element && element.scrollHeight > element.clientHeight) return true
  return false
}
