import React, { useState, useEffect } from "react"

const Testes = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch("./gifts.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(res => setProduct(res.data))
  }, [])

  return (
    <div>
      <h1>Lista de linguagens</h1>
      <ul>
        {product.map(item => (
          <li key={item.id}>
            <p>
              <b>Nome:</b> {item.nome}
            </p>
            <p>
              <b>Criador:</b> {item.preco}
            </p>
            <p>
              <b>Ano de criação:</b> {item.link}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Testes
