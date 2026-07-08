import './Leaderboard.css'

const Leaderboard = ({ scores }) => {
  if (!scores || scores.length === 0) return null

  return (
    <div className="leaderboard">
      <h3 className="leaderboard-title">Mejores puntajes</h3>
      <ol className="leaderboard-list">
        {scores.map((score, index) => (
          <li key={index} className="leaderboard-item">
            {score} puntos
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Leaderboard
