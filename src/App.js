import React from 'react'
import './App.css'
import SlideOne from './components/slideOne/slideOne'
import SlideTwo from './components/slideTwo/slideTwo'
import SlideThree from './components/slideThree/slideThree'
import SlidesPagination from './components/slidesPagination/slidesPagination'
import More from './components/more/more'
import {animateScroll as scroll} from 'react-scroll'

class App extends React.Component {
  state = {
    moreIsActive: true,
    slidesCount: [1, 2, 3],
    xDown: null,
    yDown: null
  }

  handleTouchStart = evt => {
    const xDown = evt.touches[0].clientX
    const yDown = evt.touches[0].clientY
    this.setState({
      xDown,
      yDown
    })
  }

  handleTouchMove = evt => {
      if ( ! this.state.xDown || ! this.state.yDown ) {
          return
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = this.state.xDown - xUp;
      var yDiff = this.state.yDown - yUp;
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
          if ( xDiff > 0 ) {
              return
          } else {
              return
          }
      } else {
          if ( yDiff > 0 ) {
            this.scrollNext()
          } else {
            this.scrollPrev()
          }
      }
      const xDown = null
      const yDown = null
      this.setState({
        xDown,
        yDown
      })
  }

  scrollNext = () => {
    let startView = window.innerHeight;
    let endView = startView * 2
    requestAnimationFrame(function scroll() {
      if (startView < endView) {
        window.scrollBy(0, 32)
        startView += 32
      }
      requestAnimationFrame(scroll)
    })
  }

  scrollPrev = () => {
    let startView = window.innerHeight * -1
    let endView = startView * 2
    requestAnimationFrame(function scroll() {
      if (startView > endView) {
        window.scrollBy(0, -32)
        startView -= 32;
      };
      requestAnimationFrame(scroll)
    })
  }

  componentDidMount() {
    document.addEventListener('touchstart', this.handleTouchStart, false)
    document.addEventListener('touchmove', this.handleTouchMove, false)
    document.addEventListener('scroll', function(){
      let scrollPosition = window.pageYOffset;
      document.querySelector('.slide__wrapper--one').style.transform = 'translateY(-'+ scrollPosition +'px)';
      document.querySelector('.slide__wrapper--two').style.transform = 'translateY(-'+ (scrollPosition / 2) +'px)';
    })
    scroll.scrollToTop()
  }

  render() {
    return (
      <main className="container">
        <SlideOne />
        {this.state.moreIsActive ? <More /> : null}
        <SlideTwo />
        <SlideThree />
        <SlidesPagination slidesCount={this.state.slidesCount} setMoreActive={this.setMoreActive} />
      </main>
    )
  }
}

export default App;
