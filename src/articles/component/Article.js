import React, { Component } from 'react';

class Article extends Component {
    
    render() { 
        
        return ( 
            
            <div className="article">
                {/* title,content & author */}
                <h3>{this.props.title}</h3>
                <sub>{this.props.author}</sub>
                <p>{this.props.content}</p>
            </div>
         );
    }
}
 
export default Article;