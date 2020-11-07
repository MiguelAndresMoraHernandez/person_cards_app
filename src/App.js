import React from 'react';
import UserCard from './components/UserCard';

const users=require('./utils/people.json');

class App extends React.Component{

  constructor(){
    super();

    this.state={
      activeUser: users[0],
      activeUserIndex:0
    }
  }

  render(){
    return (
      <div className="App"
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        height: '100vh',
      }}>
        <UserCard
          color={this.state.activeUser.color}
          name={this.state.activeUser.name}
        />
      </div>
    );
  }

  componentDidMount(){
    setInterval(() => {
      let newIndex = this.state.activeUserIndex+1
      if(newIndex >= users.length){
        newIndex=0
      };

      this.setState({
        activeUser:users[newIndex],
        activeUserIndex:newIndex
      });
    }, 2000);
  }
}
export default App;