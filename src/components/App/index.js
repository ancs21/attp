import React from 'react'
import Loadable from 'react-loadable'
import { HMR } from '@pwa/preset-react'
import { Route, withRouter } from 'react-router-dom'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import style from './index.sass'
import Nav from '../Nav';

// Route-Split Components
const loading = () => <div>Loading...</div>
const load = loader => Loadable({ loader, loading })

const Home = load(() => import('@pages/Home'))
const About = load(() => import('@pages/About'))
const Article = load(() => import('@pages/Article'))
const Blog = load(() => import('@pages/Blog'))
const NewsDetail = load(() => import('@pages/NewsDetail'))

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      this.props.history.listen(obj => {
        if (window.ga) ga.send('pageview', { dp: obj.pathname })
      })
    }
	  
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Nav />
        <main className="mdl-layout__content">
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/article" component={Article} />
          <Route path="/product/:id" exact component={About} />
          <Route path="/newsDetail" exact component={NewsDetail} />
        </main>

        {/* <Footer /> */}
      </div>
    )
  }
}

export default HMR(withRouter(App), module)
