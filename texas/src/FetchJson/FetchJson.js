import React, { Component } from 'react';
import './FetchJson.css';

class FetchJson extends Component {
    state = {
        blogs: []
      };
    
      async componentDidMount() {
        try {
          const res = await fetch('http://127.0.0.1:8000/api/blogs/?format=json'); // fetching the data from api, before the page loaded
          const blogs = await res.json();
          this.setState({
            blogs
          });
        } catch (e) {
          console.log(e);
        }
      }

  render() {
    return (
      <div>
        {this.state.blogs.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default FetchJson;