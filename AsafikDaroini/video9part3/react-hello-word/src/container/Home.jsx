import React from 'react'
import { Component } from 'react';

// import YouTubeComp from '../components/YoutubeComp/YouTubeComp'
// import Product from './Product/Product';
// import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
import BlogPost from './BlogPost/BlogPost';

class Home extends Component {
    state = {
        showComponent:true 
    }

    componentDidMount() {
    //    setTimeout(() => {
    //     this.setState({
    //         showComponent:false
    //     })
    //    }, 15000)
    }

    render() {
        return (
            <div>
                {/* <p>YouTube Components</p>
                <hr />
                 <YouTubeComp 
                 time='7.12' 
                 title='Video Monyet Pongo'
                 desc='5x ditonton 2 harri yang lalu'/>
                 
                 <YouTubeComp 
                 time ='8.02' 
                 title='Video Monyet Pongo'
                 desc='50x ditonton 10 harri yang lalu'/>
                 <YouTubeComp 
                 time ='5.04' 
                 title='Video Monyet Pongo'
                 desc='500x ditonton 20 harri yang lalu'/>
                 <YouTubeComp 
                 time='4.12' 
                 title='Video Monyet Pongo'
                 desc='700x ditonton 30 harri yang lalu'/>
                 <YouTubeComp/>
                 <p>Couter</p>
                 <hr />
                 <Product/> */}
                 {/* <p>Life Cycle Component</p>
                 <hr />
                 {
                    this.state.showComponent 
                    ?
                    <LifeCycleComp/> 
                    : null
                 } */}

                 <p>Blog Post</p>
                 <hr />
                <BlogPost/>
                
            </div>
            
        )
    }
}

export default Home