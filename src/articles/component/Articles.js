import React, { Component } from 'react';
import Article from './Article'
class Articles extends Component {
    render() { 
        const allArticles=this.props.articles.map((articles,index)=>{
            return <Article title={articles.title}
                    author={articles.author}
                    content={articles.content}
                    key={index}/>
        })
        return ( 
            <>
                <h3>All Articles</h3>
                {allArticles}
            </>
         );
    }
}
 
export default Articles;