const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #3730a3 100%)',
      padding: isMobile ? '16px' : '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '24px' : '32px'
    },
    title: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '12px',
      letterSpacing: '-0.025em'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#dbeafe',
      margin: 0,
      padding: isMobile ? '0 16px' : '0'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '12px' : '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      overflow: 'hidden'
    },
    cardHeader: {
      background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
      padding: isMobile ? '16px' : '24px',
      color: 'white'
    },
    cardTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '600',
      margin: 0
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      display: isMobile ? 'block' : 'table'
    },
    thead: {
      backgroundColor: '#f3f4f6',
      borderBottom: '1px solid #e5e7eb',
      display: isMobile ? 'none' : 'table-header-group'
    },
    th: {
      padding: isMobile ? '12px 16px' : '16px 32px',
      textAlign: 'left',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    thRight: {
      padding: isMobile ? '12px 16px' : '16px 32px',
      textAlign: 'right',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    tbody: {
      backgroundColor: 'white',
      display: isMobile ? 'block' : 'table-row-group'
    },
    tr: {
      borderBottom: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'table-row',
      marginBottom: isMobile ? '12px' : '0',
      borderRadius: isMobile ? '8px' : '0',
      overflow: isMobile ? 'hidden' : 'visible'
    },
    trHover: {
      backgroundColor: '#f9fafb',
      transform: isMobile ? 'none' : 'scale(1.01)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    trFirst: {
      background: 'linear-gradient(90deg, #fef3c7 0%, #fbbf24 10%, #fef3c7 100%)',
      borderLeft: isMobile ? 'none' : '4px solid #f59e0b',
      borderTop: isMobile ? '4px solid #f59e0b' : 'none'
    },
    trSecond: {
      background: 'linear-gradient(90deg, #f1f5f9 0%, #94a3b8 10%, #f1f5f9 100%)',
      borderLeft: isMobile ? 'none' : '4px solid #64748b',
      borderTop: isMobile ? '4px solid #64748b' : 'none'
    },
    trThird: {
      background: 'linear-gradient(90deg, #fed7aa 0%, #f97316 10%, #fed7aa 100%)',
      borderLeft: isMobile ? 'none' : '4px solid #ea580c',
      borderTop: isMobile ? '4px solid #ea580c' : 'none'
    },
    td: {
      padding: isMobile ? '12px 16px' : '24px 32px',
      verticalAlign: 'middle',
      display: isMobile ? 'block' : 'table-cell',
      borderBottom: isMobile ? '1px solid #f3f4f6' : 'none'
    },
    mobileLabel: {
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '4px',
      display: isMobile ? 'block' : 'none'
    },
    rankCell: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '6px' : '8px',
      justifyContent: 'flex-start'
    },
    rankBadge: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    topBadge: {
      padding: isMobile ? '2px 6px' : '4px 8px',
      borderRadius: '12px',
      fontSize: isMobile ? '0.65rem' : '0.75rem',
      fontWeight: '500',
      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white'
    },
    nameCell: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '12px' : '16px'
    },
    avatar: {
      width: isMobile ? '36px' : '40px',
      height: isMobile ? '36px' : '40px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: isMobile ? '1rem' : '1.125rem'
    },
    nameInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    },
    name: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      color: '#111827',
      margin: 0
    },
    position: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280',
      margin: 0
    },
    scoreCell: {
      textAlign: isMobile ? 'left' : 'right',
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'flex-start' : 'flex-end',
      gap: '2px'
    },
    score: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0
    },
    points: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280',
      margin: 0
    },
    footer: {
      backgroundColor: '#f9fafb',
      padding: isMobile ? '12px 16px' : '16px 24px',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '8px' : '0'
    },
    liveIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    pulse: {
      width: '8px',
      height: '8px',
      backgroundColor: '#10b981',
      borderRadius: '50%',
      animation: 'pulse 2s infinite'
    }}

export default styles;