import React from 'react'
import App,{Container} from 'next/app'
import Meta from '../components/meta'
import Header from '../components/header'

class MyApp extends App {
          static async getInitialProps({Component,ctx}){
              let pageProps = {}
              if(Component.getInitialProps){
                  pageProps = await Component.getInitialProps(ctx)
              }
              return {pageProps}
          }
          render(){
              const {Component,pageProps} = this.props

              return(
                    <Container>
                        <Meta /> 
                        <Header />
                        <Component {...pageProps}/>
                    </Container>
              )
          }
}

export default MyApp