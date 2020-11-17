import React, { Component } from 'react';
import Article from './Article'
import {getAllArticles} from '../api'
class Articles extends Component {
    componentDidMount(){
        getAllArticles()//return Promise and error check
            .then((response)=>{
                console.log('allArticles',response)
                //take api to prop so tit can be update
                this.props.setArticles(response.data.articles);
            })
            .catch((error)=>{
                console.log('check API error',error)
            });
    }
    render() { 
        let allArticles = <h4>No Articles!</h4>
        if(this.props.articles.length >0) {
            allArticles=this.props.articles.map((article,index)=>{
                return <Article title={article.title}
                            author={article.author}
                            content={article.content}
                            id={article._id}
                            key={index}/>
            });
        }
        // const allArticles=this.props.articles.map((article,index)=>{
        //     return <Article title={article.title}
        //             author={article.author}
        //             content={article.content}
        //             key={index}/>
        // })
        return ( 
            <>
                <h3>All Articles</h3>
                {allArticles} 
            </>
         );
    }
}
 
export default Articles;