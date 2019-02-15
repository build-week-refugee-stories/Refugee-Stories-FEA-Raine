import React from 'react';
import HomeSlide from './HomeSlide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  prevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }


  nextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }


  render() {
    return (
      <div className='div1'>
        <h1 className='homeTitle'>Welcome to Our Stories</h1>

        <div className='slider'>
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {this.props.stories.map((story, i) => (
              <HomeSlide
                key={i}
                story={story}
                url_thumbnail={story.url_thumbnail}
                title={story.title}
                snippet={story.snippet}
                author={story.author}
              />
            ))}
          </div>

        </div>

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
        <p className='homeP'>For more about us, please visit <a href='https://refugee-stories-mbtt.netlify.com/'>https://refugee-stories-mbtt.netlify.com/</a></p>
      </div>
    )
  }
}

export default Home;