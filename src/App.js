import './App.css'
import {AiOutlineSearch, AiOutlineDelete} from 'react-icons/ai'
import {Component} from 'react'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

// Replace your code here

class App extends Component {
  state = {tracksList: initialTracksList, searchValue: ''}

  onDeleteTrack = e => {
    const {tracksList} = this.state
    this.setState({
      tracksList: tracksList.filter(
        track => track.id !== e.currentTarget.value,
      ),
    })
  }

  onSearchTrack = e => {
    this.setState({searchValue: e.target.value})
  }

  renderTracksList = () => {
    const {tracksList, searchValue} = this.state
    const Tracks = tracksList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <ul className="tracks_list">
        {Tracks.map(track => (
          <li className="song_container" key={track.id}>
            <div className="img_title_container">
              <img src={track.imageUrl} alt="track" className="track_img" />
              <div className="genre_container">
                <p className="track_name">{track.name}</p>
                <p className="track_genre">{track.genre}</p>
              </div>
            </div>
            <div className="img_title_container">
              <p className="track_name">{track.duration}</p>
              <button
                data-testid="delete"
                className="delete_btn"
                type="button"
                value={track.id}
                onClick={this.onDeleteTrack}
              >
                <AiOutlineDelete size={20} className="del_icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  renderNoVideos = () => (
    <div className="novideos_container">
      <p className="notrack-title">No Songs Found</p>
    </div>
  )

  render() {
    const {searchValue, tracksList} = this.state
    const Tracks = tracksList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    const isTracksAvailable = Tracks.length !== 0
    return (
      <div className="app_container">
        <div className="head_container">
          <h1 className="name">Ed Sheeran</h1>
          <p className="role">Singer</p>
        </div>
        <div className="player_container">
          <div className="search_container">
            <h1 className="name">Songs Playlist</h1>
            <div className="input_container">
              <input
                type="search"
                className="input"
                placeholder="Search"
                onChange={this.onSearchTrack}
                value={searchValue}
              />
              <button className="search_icon_btn" type="button">
                <AiOutlineSearch className="search_icon" size={20} />
              </button>
            </div>
          </div>
          <div className="tracks_container">
            {isTracksAvailable
              ? this.renderTracksList()
              : this.renderNoVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
