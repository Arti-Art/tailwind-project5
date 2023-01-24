const themeToggleBtn = document.querySelector('#theme-toggle')
const darkIcon = document.querySelector('#theme-toggle-dark-icon')
const lightIcon = document.querySelector('#theme-toggle-light-icon')
const rootEl = document.documentElement

// On Page Load
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setMode('dark')
} else {
  setMode('light')
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', () => {
  if (rootEl.classList.contains('dark')) {
    setMode('light')
  } else {
    setMode('dark')
  }
})

function setMode(value) {
  if (value === 'dark') {
    lightIcon.classList.remove('hidden') // display "switch to Light Mode"
    darkIcon.classList.add('hidden')
    document.documentElement.classList.add('dark') // add .dark to html
    localStorage.setItem('color-theme', 'dark')
  } else {
    darkIcon.classList.remove('hidden')
    lightIcon.classList.add('hidden')
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}
