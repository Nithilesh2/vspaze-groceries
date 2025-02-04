import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../assets/images/adaptive-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />
        
        <View style={styles.bottomSection}>
          <Text style={styles.title}>Keep Smiling and meet your needs with quick Loans</Text>
          
          {/* Dots Indicator */}

          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((dot, index) => (
              <View 
                key={index} 
                style={[
                  styles.dot,
                  index === 0 && styles.activeDot
                ]} 
              />
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/onboarding/')}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {
    width: '80%',
    height: '50%',
  },
  bottomSection: {
    width: '100%',
    height: '40%',
    backgroundColor: '#8B00FF', // Purple color
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 32,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 20,
  },
  button: {
    backgroundColor: '#6B00CC', // Darker purple
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
