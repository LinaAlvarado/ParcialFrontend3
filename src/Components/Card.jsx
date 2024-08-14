import React from 'react'

const Card = ({info}) => {
  return (
    <div className='card'>
      ¡Gracias por dejarnos tu sugerencia {info.name}! Amamos el sabor de {info.flavor} 🍦
    </div>
  )
}

export default Card
