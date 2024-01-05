// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import CloseButton from './styledComponent'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log(thumbnailUrl)

  return (
    <div>
      <Popup
        model
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <CloseButton
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <div className="movie-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
