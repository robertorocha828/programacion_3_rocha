// src/components/FruitList.tsx

interface Fruit {
  name: string
  emoji: string
  calories: number
  inSeason?: boolean
}

interface FruitListProps {
  fruits: Fruit[]
  title?: string
  inSeason?: boolean
}

export default function FruitList({ fruits, title = 'Frutas',  }: FruitListProps) {
  if (fruits.length === 0) {
    return <p style={{ color: '#ffffff' }}>No hay frutas en la lista.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit) => (
          <li
            key={fruit.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{fruit.name}{fruit.emoji}{fruit.inSeason && '🌟 '}</span>
            <span style={{ color: '#f3f3f3', fontSize: 13 }}>{fruit.calories} kcal</span>
          </li>
        ))}
      </ul>
    </div>
  )
}