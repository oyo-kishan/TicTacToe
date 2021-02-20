import React, { useEffect, useState } from "react";
import { 
  StyleSheet,
  Button, 
  View,
  ToastAndroid, 
  TouchableOpacity,
  Text } 
  from "react-native";
import Box from "./components/Box";

export default function App() {

  const [gameStart,setGameStart]=useState(false);
  const [currentChance,setCurrentChance]=useState('O');
  const [state, setState] = useState(new Array(9));
  const [player1, setPlayer] = useState(true);
  const [count,setCount]=useState(0);

  const startNewGame=()=>{
    setGameStart(false);
    setCount(0);
    setCurrentChance('O');
    setState(new Array(9));
    setPlayer(true);
  }
  const changeState = (index) => {
    setCount(count=>count+1);
    setGameStart(true);
    let copy = [...state];
    copy[index] = currentChance;
    setState(copy);
  };

  useEffect(()=>{
    if(gameStart){
      handleBoardEntry();
    }
  },[state]);

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const handleBoardEntry = () => {

    let board=[['','',''],['','',''],['','','']];
    let copy=[...state];

    board[0][0]=copy[0];
    board[0][1]=copy[1];
    board[0][2]=copy[2];

    board[1][0]=copy[3];
    board[1][1]=copy[4];
    board[1][2]=copy[5];

    board[2][0]=copy[6];
    board[2][1]=copy[7];
    board[2][2]=copy[8];
    if(checkWin(board)){
      alert(player1?'Player 1 wins':'Player 2 wins')
      return ;
    }
    setCurrentChance(currentChance==='X'?'O':'X');
    setPlayer(!player1);
    if(count==9){
      alert("Match draw (^_^) ");
    }

  };

  const checkWin = (board) => {
    if (checkHorizontally(board) || checkVertically(board) || checkDiagonally(board))
      return true;
    return false;
  };

  const checkHorizontally = (board) => {
    for (let i = 0; i < 3; i++) {
      let valid = true;
      for (let j = 0; j < 3; j++) {
        if (board[i][j] != currentChance) valid = false;
      }
      if (valid) return true;
    }
    return false;
  };
  const checkVertically = (board) => {
    for (let i = 0; i < 3; i++) {
      let valid = true;
      for (let j = 0; j < 3; j++) {
        if (board[j][i] != currentChance) valid = false;
      }
      if (valid) return true;
    }
    return false;
  };

  const checkDiagonally = (board) => {
    if (board[0][0] === currentChance && board[1][1] == currentChance && board[2][2] === currentChance)
      return true;

    if (board[0][2] === currentChance && board[1][1] == currentChance && board[2][0] === currentChance)
       return true;

    return false;
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Tic Tac Toe</Text>

      <View style={{ flexDirection: "row" }}>

        <Box
          onClicked={() => {changeState(0);}}
          currentState={state[0]}
          onAgainClicked={() => {showToast("Can't change the current cell");}}
        />
        <Box
          onClicked={() => {changeState(1);}}
          currentState={state[1]}
          onAgainClicked={() => {showToast("Can't change the current cell");}}
        />

        <Box
          onClicked={() => {changeState(2);}}
          currentState={state[2]}
          onAgainClicked={() => {showToast("Can't change the current cell");}}
        />

      </View>
        
      <View style={{ flexDirection: "row" }}>
            <Box
              onClicked={() => {changeState(3);}}
              currentState={state[3]}
              onAgainClicked={() => {showToast("Can't change the current cell");}}
            />
            <Box
              onClicked={() => {changeState(4);}}
              currentState={state[4]}
              onAgainClicked={() => {showToast("Can't change the current cell");}}
            />

            <Box
              onClicked={() => {changeState(5);}}
              currentState={state[5]}
              onAgainClicked={() => {showToast("Can't change the current cell");}}
            />
            
        </View>

      <View style={{ flexDirection: "row" }}>

          <Box
            onClicked={() => {changeState(6);}}
            currentState={state[6]}
            onAgainClicked={() => {showToast("Can't change the current cell");}}
          />
          <Box
            onClicked={() => {changeState(7);}}
            currentState={state[7]}
            onAgainClicked={() => {showToast("Can't change the current cell");}}
          />

          <Box
            onClicked={() => {changeState(8);}}
            currentState={state[8]}
            onAgainClicked={() => {showToast("Can't change the current cell");}}
          />
      </View>

      <TouchableOpacity 
          onPress={()=>startNewGame()} 
          style={styles.button}
       >
        <Text style={styles.restart}>Restart</Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:50,
    backgroundColor:'black',
    borderRadius:5,
    marginTop:50
  }
  ,restart:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    elevation:2
  }
  ,heading:{
    fontWeight:'bold',
    fontSize:40,
    elevation:2,
    marginBottom:50
  }
});
