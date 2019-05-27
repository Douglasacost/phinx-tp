import React, {
    Component,
    createContext
  } from 'react';
  import { firebase, firestore } from '../firebase';
  export const {
    Provider,
    Consumer
  } = createContext();
  
  class AppProvider extends Component {
    state = {
      currentUser: AppProvider.defaultProps.currentUser,
      message: AppProvider.defaultProps.message,
      vehicles: AppProvider.defaultProps.vehicles
    }

    initGetRealtimeData() {
      firestore.getVehicles((querySnapshot) => {
        var vehicles = [];
        querySnapshot.forEach(function(doc) {
            // vehicles[doc.id] = doc.data();
            vehicles.push({...doc.data(), key: doc.id})
        });
        this.setState({
          vehicles: vehicles
        })
    })
    }
  
    componentDidMount() {
      firebase.auth.onAuthStateChanged(user => user && this.setState({
        currentUser: user
      }));
      this.initGetRealtimeData();
    }
  
    render() {
      return (
        <Provider value={{
          state: this.state,
          destroySession: () => this.setState({ 
            currentUser: AppProvider.defaultProps.currentUser 
          }),
          saveVehicle: firestore.addVehicle,
          setMessage: message => this.setState({ message }),
          clearMessage: () => this.setState({ 
            message: AppProvider.defaultProps.message 
          })
        }}>
          {this.props.children}
        </Provider>
      )
    }
  }
  
  AppProvider.defaultProps = {
    currentUser: null,
    message: null,
    vehicles: []
  }
  
  export default AppProvider;