// Check if the user has entered a valid hex color

const isValidHex = (hex) => {
  if (!hex) {
    return false    
  } 
  const strippedHex = hex.replace('#', '')
  return strippedHex.length === 3 || strippedHex.length === 6

  // Remember to check if the hex input contains only numbers between (0 - 9) and letters between (a - f) 
}

const hexInput = document.getElementById('hexInput')

const inputColor = document.getElementById('inputColor')

const getInputColor = () => {
  const hex = hexInput.value
  if (!isValidHex(hex)) return

  const strippedHex = hex.replace('#', '')

  inputColor.style.backgroundColor = '#'+strippedHex

  console.log('done ok')
}

hexInput.addEventListener('keyup', getInputColor)