import React, { Component } from 'react';

class Article extends Component {
 deleteArticle=(e)=>{
     e.preventDefault();
     console.log('Article ID', this.props.id)
 }   
    render() { 
        
        return ( 
            
            <div className="article">
                {/* title,content & author */}
                <h3>{this.props.title}</h3>
                <sub>{this.props.author}</sub>
                <p>{this.props.content}</p>
                <a href="#" onClick={this.deleteArticle}>Delete</a>
            </div>
         );
    }
}
 
export default Article;