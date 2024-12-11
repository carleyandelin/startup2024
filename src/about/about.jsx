import React from 'react';
import './about.css';

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  const mainStyle = {
    flex: '1 calc(100vh - 110px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundImage: "url('/bowlingBackground.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  React.useEffect(() => {

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

  return (
    <main style={mainStyle}>
      <p>
        Introducing BowlerBlitz—your new go-to for sharing bowling scores and connecting with friends! Track your strikes, compare scores, and celebrate every spare with this website. Elevate your game and keep the fun rolling with BowlerBlitz—where every pin is a win!
      </p>
      <p>
        BowlerBlitz is currently under development. The creator, Carley, expresses gratitude for all the help she gets from class while creating this application.
      </p>
      <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
  );
}