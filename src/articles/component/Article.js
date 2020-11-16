import React, { Component } from 'react';

class Article extends Component {
    
    render() { 
        return ( 
            
            <div className="article">
                {/* title,content & author */}
                <h3>Title</h3>
                <sub>Author</sub>
                <p>Content</p>
            </div>
         );
    }
}
 
export default Article;