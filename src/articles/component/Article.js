import React, { Component } from 'react';

class Article extends Component {
    
    render() { 
        return ( 
            
            <div className="article">
                {/* title,content & author */}
                <h4>Title</h4>
                <sub>Author</sub>
                <p>Content</p>
            </div>
         );
    }
}
 
export default Article;