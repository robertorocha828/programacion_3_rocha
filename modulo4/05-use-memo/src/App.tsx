// src/App.tsx

import PrimeSieve        from './components/PrimeSieve'
import FilteredCatalog   from './components/FilteredCatalog'
import MemoizedList from './components/MemoizedList'
import PaginatedFetch from './components/PaginatedFetch'
import ModalDemo from './components/ModalDemo'
import ThemeSelector from './components/ThemeSelector'
import PostList from './components/PostList'
// import OrderMetrics      from './components/OrderMetrics'
// import MultiTagFilter    from './components/MultiTagFilter'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  PrimeSieve       — useMemo para cálculo costoso (criba primos)  │
// │  2  FilteredCatalog  — dos useMemo encadenados: filtrar → ordenar   │
// │  3  OrderMetrics     — múltiples useMemo derivados de un filtro     │
// │  4  MultiTagFilter   — filtro AND por tags con conteos memoizados   │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 13

export default function App() {
  const content =
    PASO === 1 ? <PrimeSieve /> :
    PASO === 2 ? <FilteredCatalog /> :
    PASO === 3 ? <MemoizedList /> :
    PASO === 4 ? <MultiTagFilter /> :
    PASO === 8 ? <PaginatedFetch/>:
    PASO === 9 ? <ModalDemo/>:
    PASO === 11 ? <ThemeSelector/>:
    PASO === 13 ? <PostList/>:

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}