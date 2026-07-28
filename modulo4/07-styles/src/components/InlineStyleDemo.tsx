// src/components/InlineStyleDemo.tsx

import type { CSSProperties } from 'react'

export default function InlineStyleDemo() {
  // CSSProperties tipa el objeto — TypeScript detecta errores al escribir
  const card: CSSProperties = {
    border:       '1px solid var(--border)',
    background:   'var(--card)',
    borderRadius: 10,
    padding:      16,
  }

  const card2: CSSProperties = {
    border:       '1px solid var(--border)',
    background:   'skyblue',
    borderRadius: 10,
    padding:      16,
  }



  const title: CSSProperties = {
    margin:     '0 0 8px 0',
    color:      'var(--accent)',
    fontWeight: 800,
  }

  const title2: CSSProperties = {
    margin:     '0 0 8px 0',
    color:      'red',
    fontWeight: 800,
  }

  return (
    <><div style={card}>
          <h3 style={title}>Inline styles</h3>
          <p style={{ margin: 0, color: 'var(--muted)' }}>
              Estilos como objetos JS dentro del componente. Útil para valores dinámicos
              pero sin soporte de pseudo-clases (<code>:hover</code>) ni media queries.
          </p>
          
      </div><div style={card2}>
              <h3 style={title2}>TypeScript</h3>
              <p style={{ margin: 0, color: 'var(--muted)' }}>
                  TypeScript es un lenguaje de programación de 
                  código abierto desarrollado por Microsoft. 
                  (<em><strong></strong></em>) ni media queries.
              </p>
          </div></>
  )
}