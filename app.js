const button = document.querySelectorAll('button')
const audio = document.querySelector('audio')
const body = document.querySelector('body')

button.forEach(button => {
  button.addEventListener('click', (event) => {
  audio.src = `./sounds/${event.currentTarget.getAttribute('value')}.wav`
  audio.play()
  body.appendChild(audio)
  })
})
