const wrapper = document.querySelector(".wrapper")

let isDragging = false
let startY = 0
let scrollStart = 0

wrapper.addEventListener("mousedown", (e) => {
  isDragging = true
  startY = e.pageY
  scrollStart = wrapper.scrollTop
  wrapper.style.cursor = "grabbing"
})

wrapper.addEventListener("mousemove", (e) => {
  if (!isDragging) return

  const distance = startY - e.pageY
  wrapper.scrollTop = scrollStart + distance
})

wrapper.addEventListener("mouseup", () => {
  isDragging = false
  wrapper.style.cursor = "default"
})

wrapper.addEventListener("mouseleave", () => {
  isDragging = false
})
