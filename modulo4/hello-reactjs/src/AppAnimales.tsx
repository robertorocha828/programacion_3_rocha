// src/App.tsx

import AnimalesCard        from './components/AnimalesCard'
import AnimalesCatalogList from './components/AnimalesCatalogList'
import UserProfileCard from './components/UserProfileCard'


interface Animal {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  tipo: string
  edad: number

}

const catalog: Animal[] = [
  { id: 1, name: 'Pastor Aleman',tipo: "Canina", edad: 5,  price: 89.99,  },
  { id: 2, name: 'Siames', tipo: "Felina", edad: 3, price: 349.99,  },
  { id: 3, name: 'Loro', tipo: "Ave", edad: 2, price: 29.99, outOfStock: true },
  { id: 4, name: 'Pez Payaso', tipo: "pez", edad: 3, price: 59.99  },

]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>


      <AnimalesCatalogList
        title="Lista de Animales"
        products={catalog}
      />


    </main>

  )
}