import React, {Component} from 'react';
import Modal from '../components/ui/modal/modal';
import AuxWrapper from '../hoc/aux-wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    constructor(props) {
      super(props)
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req;
      })
  
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
        console.log('Reached interceptor')
      })
    }

    state = {
      error: null
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    componentWillUnmount() {
      // axios.interceptors.requests.eject(this.reqInterceptor);
      // axios.interceptors.response.eject(this.resInterceptor);
    }


    render() {
      return (
        <AuxWrapper>
          <Modal 
            show={!!this.state.error}
            modalClosed={this.errorConfirmedHandler}>
              {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props}/>
        </AuxWrapper>
      );
    }
  }
}

export default withErrorHandler;