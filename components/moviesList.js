import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';
import MovieItem from './movieItem';

const sorting = {
    "asc": "Descending sort",
    "desc": "Ascending sort"
}

export default class MoviesList extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        sort: "asc",
    }
    this.reverseMoviesArray = this.reverseMoviesArray.bind(this);
  }

  componentDidMount(){
    let url = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          movies: responseJson.movies,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  reverseMoviesArray(){
    this.setState({
        sort: this.state.sort == "asc" ? "desc": "asc",
        movies: this.state.movies.reverse()
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    
    return(
    <View style={{flex: 1}}>
        <FlatList style={{ marginLeft: 10, marginRight: 10}}
          data={this.state.movies}
          renderItem={({ item }) => (
            <MovieItem movie={item}/>
          )}
          keyExtractor={item => {
              return item.episode_number;
          }}
        />

        <TouchableOpacity style={styles.button} onPress={this.reverseMoviesArray}>
            <Text style={styles.buttonText}> {sorting[this.state.sort]} </Text>
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#777',
        padding: 15,    
      },
      buttonText:{
          fontSize:20,
          fontWeight: 'bold',
          color: '#f5da89',
      }
  });
