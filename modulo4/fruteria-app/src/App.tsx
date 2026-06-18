// src/App.tsx

import WelcomeBanner from './components/WelcomeBanner'
import UserGreeting from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import VehiculosTable      from './components/VehiculosTable'



// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 11

const fruits = [
  { name: 'Manzana', emoji: '🍎', inSeason: true, calories: 52 },
  { name: 'Banana', emoji: '🍌', inSeason: true, calories: 89 },
  { name: 'Naranja', emoji: '🍊', inSeason: true, calories: 47 },
  { name: 'Kiwi', emoji: '🥝', inSeason: true,calories: 61 },
  { name: 'Durazno', emoji: '🍑', inSeason: true, calories: 54 },
  { name: 'Sandia', emoji: '🍉', inSeason: true, calories: 15 },

]




const catalog = [
  { id: 1, name: 'Teclado mecánico', price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD', price: 59.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner subtitle='Programadores Estrellas'/> :
    PASO === 2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" width={120} height={40} />
        <ColoredBox color="#22c55e" label="Success" borderRadius ={30} />
        <ColoredBox color="#e00"    borderRadius ={60} />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={false} userName="Carlos" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas"  /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="EUR" />
        <PriceTag amount={99.99} currency="EUR" discountPercent={50} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" label="En revisión" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={new Date().getFullYear()}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'IVA', value: '$15.20' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :

    PASO === 11 ? (
      <VehiculosTable
        title="Resumen del pedido de Vehiculos"
        rows={[
          { label: 'Marca',  value: 'Chevrolet' },
          { label: 'Modelo',     value: 'D-Max' },
          { label: 'Precio', value: '$25.000' },
          { label: 'IVA', value: '$250' },
          { label: 'Total',     value: '$25.250', highlight: true },
        ]}
      />
    ) :

      <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}

    </main>
  )
}