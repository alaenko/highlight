import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';
import Styler from './Styler';


function List(props) {
  const StyledVideo = Styler(Video),
        StyledArticle = Styler(Article);
  return props.list.map((item, index) => {
      switch (item.type) {
          case 'video':
              return (
                  <StyledVideo key={index} {...item} />
              );

          case 'article':
              return (
                <StyledArticle key={index} {...item} />
              );
      }
  });
};

List.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired
  })
}

export default List

