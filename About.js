import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import imageA from "./assets/about3.png";
import imageB from "./assets/about3.png";
import imageC from "./assets/about3.png";

const blockA = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,`;
const blockB = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex`;

export default function About() {
  return (
      <View style={styles.container}>
          <ScrollView>
              <Image source={imageA} style={{width: '100%', height: 300}} />
              <Text style={styles.heading}>We are different</Text>
              <Text style={styles.text}>{blockA}</Text>
              <Image source={imageB} style={{width: '100%', height: 300}} />
              <Text style={styles.heading}>Leaders in Our Field</Text>
              <Text style={styles.text}>{blockB}</Text>
              <Image source={imageC} style={{width: '100%', height: 300}} />
              <Text style={styles.heading}>We are the experts</Text>
          </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        paddingTop: 5
    }
})