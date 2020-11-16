import React, { Component } from 'react';
import Article from './Article'
class Articles extends Component {
    render() { 
        const allArticles=this.props.articles.map((article,index)=>{
            return <Article title={article.title}
                    author={article.author}
                    content={article.content}
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