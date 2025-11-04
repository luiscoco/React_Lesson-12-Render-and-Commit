import React, { useEffect, useState } from 'react'

// --- Image Component (Pure Render Example) ---
function Image({ src, alt }) {
  console.log(`[Render] Image: ${alt}`)
  return <img src={src} alt={alt} className="thumb" />
}

// --- Gallery Component (Nested Render Example) ---
function Gallery() {
  console.log('[Render] Gallery')
  return (
    <section className="card">
      <h2>Inspiring Sculptures</h2>
      <div className="row">
        <Image src="https://i.imgur.com/ZF6s192.jpg" alt="Sculpture 1" />
        <Image src="https://i.imgur.com/8Km9tLL.jpg" alt="Sculpture 2" />
        <Image src="https://i.imgur.com/YZBzYSe.jpg" alt="Sculpture 3" />
      </div>
    </section>
  )
}

// --- Clock Component (Prop Update Example) ---
function Clock({ time }) {
  console.log('[Render] Clock')
  return (
    <section className="card">
      <h2>Clock (prop-driven)</h2>
      <h3>{time.toLocaleTimeString()}</h3>
      <input placeholder="Type something..." />
      <p className="hint">Notice the input keeps its value across commits.</p>
    </section>
  )
}

// --- Counter Component (State Update Example) ---
function Counter() {
  const [count, setCount] = useState(0)
  console.log('[Render] Counter')
  return (
    <section className="card">
      <h2>Counter (state-driven)</h2>
      <button className="btn" onClick={() => setCount(c => c + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </section>
  )
}

export default function App() {
  const [time, setTime] = useState(new Date())
  console.log('[Render] App')

  useEffect(() => {
    console.log('[Commit] App mounted')
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="container">
      <header>
        <h1>React Render & Commit Demo</h1>
        <p className="subtle">
          Explore the lifecycle: <strong>Trigger → Render → Commit → Paint</strong>
        </p>
      </header>
      <div className="grid">
        <Counter />
        <Clock time={time} />
        <Gallery />
      </div>
      <footer>
        <p className="subtle">
          Open the browser console to see <code>[Render]</code> and <code>[Commit]</code> logs.
        </p>
      </footer>
    </main>
  )
}
