// App.js
import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

const API_KEY = '41635292-34766f8c1d08968456705ebe5';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    largeImageURL: '',
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [], error: null });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const BASE_URL = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(BASE_URL)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => {
        console.log('Error fetching images:', error);
        this.setState({ error: 'Error fetching images' });
      })
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({ showModal: !showModal, largeImageURL }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <p>{error}</p>}
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onLoadMore={this.fetchImages} />}
        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
