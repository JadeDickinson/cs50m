const slides = [
  {
    title: 'React',
    bullets: [
      'Allows us to write declarative views that "react to changes in data"',
      'Allows us to abstract complex problems into smaller components',
      'Allows us to write simple code that is still performant',
    ],
  },
  {
    title: 'React is Declarative',
    bullets: [
      'Imperative vs Declarative',
      "The browser APIs aren't fun to work with",
      'React allows us to write what we want, and the library will take care of the DOM manipulation',
    ],
  },
  {
    title: 'React is Easily Componentized',
    bullets: [
      'Breaking a complex problem into discrete components',
      'Can reuse these components',
      "React's declarative nature makes it easy to customize components",
    ],
  },
  // TODO implement slideshow
  const slideShow = (
    <div>
      {slides.map(slide => <Slide slide={slide} />)}\
    </div>
  )
  // Takes an object - let's call it 'slide'
  // If we want to create a slide, this is how we do it
  // All that's require by Slide is you pass it a slide in the correct shape
  const Slide = slide => (
    <div>
      <h1>{slide.title}</h1>
      <ul>
        {slide.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </div>
  )
]
// So here, we've used React to generate basically the same HTML as in the original example (not in this repo)
