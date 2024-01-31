import React, { useState, useEffect } from 'react';
import axios from 'axios';
import arrow from "../Images/arrow.png";
import "./../CSS/news.css";
import { Col, Row, Container } from 'react-grid-system';

function TopStories() {
  const [topStories, setTopStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 30; // Assuming 10 stories per page

  useEffect(() => {
    axios.get('http://localhost:8000/news')
      .then(response => {
        const stories = response.data; // Assuming the response is an array of stories
        setTopStories(stories);
      })
      .catch(error => console.error('Error fetching top stories:', error));
  },[]);

  const handleDelete = (storyId) => {
    const updatedStories = topStories.filter((story) => story.id !== storyId);
    setTopStories(updatedStories);
  };

   
 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Logic to fetch stories for the new page
  };

  const totalPages = Math.ceil(topStories.length / storiesPerPage);
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = topStories.slice(indexOfFirstStory, indexOfLastStory);

  return (
    <Container className="container">
      <br/>
      {currentStories.map((story, index) => (
        <Row key={index} className='story'>
          <Col sm={1} className="enum">
            {index + 1}. <img src={arrow} alt="vote"/>
          </Col>
          <Col sm={8}>
            <div className="title">
            <p>{story.title.length > 50 ? `${story.title.substring(0, 50)}...` : story.title}</p>
              <p><a href={story.url} target="_blank" className="site" style={{color:"blue"}}>(URL)</a></p>
              <p><a href={story.hacker_url} target="_blank" className="site" style={{color:"blue"}}>(Hacker_URL)</a></p>
              <p><a href='#' onClick={() => handleDelete(story.id) }  className="site" style={{color:"red"}}>(Delete)</a></p>
            </div>
            <p className="info">{story.score} (upvotes) &nbsp;&nbsp;&nbsp;&nbsp;   Posted: {story.age} &nbsp;&nbsp;  Comments: {story.commentsCount}</p>
          </Col>
        </Row>
      ))}
      <div className='pagination'>
        <p>Page {currentPage} of {totalPages}</p>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous Page</button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
        )}
      </div>
      <br/>
    </Container>
  );
}

export default TopStories;
