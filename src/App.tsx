import React, { useState, useEffect } from 'react';
import styles from './styles';

interface Participant {
  name: string;
  score: number;
}

const initialParticipants: Participant[] = [
  { name: 'Alice', score: 100 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 80 },
];

const App: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>(initialParticipants);

  // i use this to update scores randomly
  const updateScores = () => {
    setParticipants((prev) =>
      [...prev]
        .map((participant) => ({
          ...participant,
          score: participant.score + Math.floor(Math.random() * 16) - 5,
        }))
        //i also sorted the scores so that higher scores can come first
        .sort((a, b) => b.score - a.score)
    );
  };

  // here i updates every 2 secondss
  useEffect(() => {
    const interval = setInterval(updateScores, 2000);
    return () => clearInterval(interval);
  }, []);

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  
  

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h1 style={styles.title}>Live Leaderboard</h1>
          <p style={styles.subtitle}>
            Updates every 2 seconds • {participants.length} participants
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Current Rankings</h2>
          </div>

          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Rank</th>
                <th style={styles.th}>Participant</th>
                <th style={styles.thRight}>Score</th>
              </tr>
            </thead>
            <tbody style={styles.tbody}>
              {participants.map((participant, index) => {
                const rank = index + 1;
                let rowStyle = { ...styles.tr };
                
                if (rank === 1) rowStyle = { ...rowStyle, ...styles.trFirst };
                else if (rank === 2) rowStyle = { ...rowStyle, ...styles.trSecond };
                else if (rank === 3) rowStyle = { ...rowStyle, ...styles.trThird };

                return (
                  <tr
                    key={participant.name}
                    style={rowStyle}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.trHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, rowStyle);
                    }}
                  >
                    <td style={styles.td}>
                      <div style={styles.mobileLabel}>Rank</div>
                      <div style={styles.rankCell}>
                        <span style={styles.rankBadge}>
                          {getRankBadge(rank)}
                        </span>
                        {rank <= 3 && (
                          <div style={styles.topBadge}>
                            TOP 3
                          </div>
                        )}
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.mobileLabel}>Participant</div>
                      <div style={styles.nameCell}>
                        <div style={styles.avatar}>
                          {participant.name.charAt(0)}
                        </div>
                        <div style={styles.nameInfo}>
                          <div style={styles.name}>{participant.name}</div>
                          <div style={styles.position}>Position #{rank}</div>
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.mobileLabel}>Score</div>
                      <div style={styles.scoreCell}>
                        <span style={styles.score}>{participant.score}</span>
                        <span style={styles.points}>points</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={styles.footer}>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <div style={styles.liveIndicator}>
              <div style={styles.pulse}></div>
              Live updates active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;