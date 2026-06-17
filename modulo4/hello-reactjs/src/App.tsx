// src/App.tsx

import ProductCard        from './components/ProductCard'
import ProductCatalogList from './components/ProductCatalogList'
import UserProfileCard from './components/UserProfileCard'


interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  category: string

}

const catalog: Product[] = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99, category: "Computación" },
  { id: 2, name: 'Monitor 27"',       price: 349.99, category: "Computación" },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true, category: "Computación" },
  { id: 4, name: 'Webcam HD',         price: 59.99, category: "Computación" },
  { id: 5, name: 'Hub USB-C', price: 39.99, category: "Computación" }
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>

      <ProductCard
        title="Bienvenido a la tienda"
        description="Encuentra los mejores accesorios para tu escritorio"
        price={1000}
        highlighted

      />

      <ProductCard title="Oferta del día" description="Webcam HD con 20% de descuento" />

      <ProductCard
        title="Novedades de la semana"
        description=""
        price={1000}
        highlighted

      />

      <ProductCatalogList
      title="Lista de Productos"
      products={catalog}
      />

      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />

      <UserProfileCard
        fullName="Luis Mora"
        email="luis@ejemplo.com"
        role="viewer"
        isActive={false}
        skills={['Figma', 'CSS']}
      />
    </main>

  )
}