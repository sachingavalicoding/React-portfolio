import React from 'react'
import IMG1 from '../../assets/assets/portfolio1.jpg';
import IMG2 from '../../assets/assets/portfolio2.jpg';
import IMG3 from '../../assets/assets/portfolio3.jpg';
import IMG4 from '../../assets/assets/portfolio4.jpg';
import IMG5 from '../../assets/assets/portfolio5.png';
import IMG6 from '../../assets/assets/portfolio6.jpg';
import './portfolio.css'


const data = [


  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization ',
    github: 'https://github.com/sachingavalicoding',
    demo: 'https://github.com/sachingavalicoding'

  },


]












const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        PortFolio
      </h2>
      <div className="container portfolio__container">


        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>
                  This is a portfolio item title

                </h3>
                <div className="portfolio__item-cta">

                  <a href={github} target='_blank' rel="noreferrer" className='btn'>Github</a>
                  <a href={demo} target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
































        {/* <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG1 } alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG6 } alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG2 } alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG3} alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG5 } alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
          </div>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
        <img src={IMG4 } alt="img" />
        </div>
          <h3>
            This is a portfolio item title

          </h3>
          <div className="portfolio__item-cta">

<div className="portfolio__item-cta">

          <a href="https://github.com/sachingavalicoding"  target='_blank' rel="noreferrer"  className='btn'>Github</a>
          <a href="https://github.com/sachingavalicoding" target='_blank' rel="noreferrer" className='btn btn-primary'>Live Demo</a>
</div>
          </div>
      </article> */}
      </div>
    </section>
  )
}

export default Portfolio