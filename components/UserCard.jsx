import React from 'react';

const Card = ({ name, heading, description, index }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        marginLeft: index % 2 === 0 ? '0' : 'auto', // Align left for even, right for odd
        marginRight: index % 2 === 0 ? 'auto' : '0', // Align right for odd, left for even
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>
        {name}
      </h2>
      <p style={{ margin: '0.3rem 0', fontSize: '1rem', color: '#555' }}>
        <strong style={{ color: '##058a12' }}>Company:</strong> {heading}
      </p>
      <p style={{ margin: '0.3rem 0', fontSize: '1rem', color: '#555' }}>
        <strong style={{ color: '#0070f3' }}>Username:</strong> {description}
      </p>
    </div>
  );
};

const UserCard = ({ users }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Stack the cards vertically
        alignItems: 'center', // Center horizontally
        width: '90%',
        margin: '50px'
      }}
    >
      {users.map((user, index) => (
        <Card
          key={index}
          name={user.name}
          heading={user.heading}
          description={user.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default UserCard;
