import React, { useRef } from "react";

import { SafeAreaView, StatusBar, Animated, Dimensions } from "react-native";
import {
  ViewBlurBackground,
  ImageBlurBackground,
  ViewCard,
  ImageCard,
} from "./styles";

const { width, height } = Dimensions.get("screen");

export function FlatlistBlur() {
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  const scrollX = useRef(new Animated.Value(0)).current;

  const DATA_IMAGES = [
    "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
    "https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",
    "https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",
    "https://cdn.dribbble.com/users/3281732/screenshots/6784133/samji_illustrator_4x.jpeg?compress=1&resize=1200x1200",
    "https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200",
  ];

  return (
    <SafeAreaView>
      <>
        <StatusBar hidden />

        <ViewBlurBackground>
          {DATA_IMAGES.map((image: string, index: number) => {
            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0, 1, 0],
            });

            return (
              <ImageBlurBackground
                testID={`background-card-${index}`}
                key={`${index}`}
                source={{ uri: image }}
                opacity={opacity}
                blurRadius={50}
              />
            );
          })}
        </ViewBlurBackground>

        <Animated.FlatList
          testID="list-card"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA_IMAGES}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ViewCard width={width} height={height}>
                <ImageCard
                  testID={`image-card-${index}`}
                  source={{ uri: item }}
                  width={imageW}
                  height={imageH}
                />
              </ViewCard>
            );
          }}
        />
      </>
    </SafeAreaView>
  );
}
