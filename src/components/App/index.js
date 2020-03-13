// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
// Components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
// Data
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';


class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      currentCategory: 'all',
    };
    console.log(this);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(category) {
    console.log('Je click depuis la méthode de App');
    
    return () => {

      this.setState({
        currentCategory: category,
      });
    };
  }

  render() {

    const { currentCategory } = this.state;
    const filteredPosts = currentCategory === 'all'
      ? postsData
      : postsData.filter((post) => post.category === currentCategory);

    return (
      <div id="blog">
        <Header categories={categoriesData} onCategoryClick={this.handleClick} />
        <Posts posts={filteredPosts} />
        <Footer />
      </div>
    );
  }
}

export default App;