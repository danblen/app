// 将按键浮在图片上方
import React, {useState, useEffect} from 'react';
// import Taro from "@tarojs/taro";
// import {AtIcon} from 'taro-ui';
import {View, Image, ScrollView, Text} from 'react-native';
// import {delete_all_images, delete_select_images} from '../../api';

const ImageList = ({images, loadMore}) => {
  const [showImages, setShowImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedMode, setSelectedMode] = useState(false);
  useEffect(() => {
    setShowImages(images);
  }, [images]);

  const toggleSelectImage = index => {
    if (selectedMode) {
      if (selectedImages.includes(index)) {
        setSelectedImages(
          selectedImages.filter(selected => selected !== index),
        );
      } else {
        setSelectedImages([...selectedImages, index]);
      }
    } else {
      const urlsArray = images.map(image => image.url);
      Taro.previewImage({
        current: images[index].url,
        urls: urlsArray,
      });
    }
  };

  // const handleDeleteSelectedImages = async () => {
  //   if (selectedImages.length) {
  //     Taro.showModal({
  //       title: '确认删除',
  //       content: '确定要永久删除选中的作品吗？',
  //       success: async res => {
  //         if (res.confirm) {
  //           try {
  //             const imagesToDelete = selectedImages.map(
  //               index => showImages[index],
  //             );
  //             const response = await delete_select_images(imagesToDelete); // 发送删除所有作品的请求
  //             setSelectedImages([]);
  //             const updatedImages = showImages.filter(
  //               (image, index) => !selectedImages.includes(index),
  //             );
  //             setShowImages(updatedImages);
  //           } catch (error) {
  //             console.error('删除全部作品失败', error);
  //           }
  //         }
  //       },
  //     });
  //   }
  // };
  // const handleDeleteAllImages = async () => {
  //   if (showImages.length) {
  //     Taro.showModal({
  //       title: '确认删除',
  //       content: '确定要永久删除全部作品吗？回收站同时清除~',
  //       success: async res => {
  //         if (res.confirm) {
  //           try {
  //             let userInfo = Taro.getStorageSync('userInfo');
  //             const response = await delete_all_images({
  //               user_id: userInfo.data.user_id,
  //             });
  //             setSelectedImages([]);
  //             setShowImages([]);
  //           } catch (error) {
  //             console.error('删除全部作品失败', error);
  //           }
  //         }
  //       },
  //     });
  //   }
  // };

  const handleToggleMode = () => {
    if (selectedMode) {
      // 如果是从选择模式切换到预览模式，清空已选择的图片数组
      setSelectedImages([]);
    }
    setSelectedMode(!selectedMode); // 切换选择模式
  };

  return (
    <View style={{position: 'relative'}}>
      <ScrollView scrollY style={{height: '100vh'}} onScrollToLower={loadMore}>
        {showImages.length === 0 ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}>
            <Text style={{textAlign: 'center'}}>
              没有作品可显示,快去首页试试吧~
            </Text>
          </View>
        ) : (
          <View className="image-list" style={{position: 'relative'}}>
            {showImages?.map((image, index) => (
              <View
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '10rpx',
                  display: 'inline-block',
                  marginBottom: '20px', // 图片间距
                }}>
                <Image
                  className="image"
                  src={image.url}
                  mode="widthFix"
                  style={{
                    width: '360rpx',
                    borderRadius: '10rpx',
                    border: selectedImages.includes(index)
                      ? '2px solid red'
                      : '', // 根据选中状态添加边框
                  }}
                  lazyLoad={true}
                  onClick={() => toggleSelectImage(index)} // 根据模式执行不同的操作
                />
                {selectedImages.includes(index) && (
                  <View
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      zIndex: '10',
                    }}>
                    <AtIcon
                      value="close-circle"
                      size="20"
                      color="#e80505"
                      onClick={() => null}
                    />
                  </View>
                )}
              </View>
            ))}
            {showImages.length === 0 && (
              <View style={{textAlign: 'center'}}>没有作品可显示</View>
            )}
          </View>
        )}
      </ScrollView>
      <View
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          display: 'flex',
          backgroundColor: 'rgba(255, 255, 255, 0)',
        }}>
        <View style={{textAlign: 'center'}}>
          <AtIcon
            value="list"
            size="24"
            color="#054622"
            onClick={handleToggleMode} // 点击选择按钮时切换模式
          />
          {selectedMode ? '取消' : '选择'}
        </View>
        {selectedMode && (
          <View style={{textAlign: 'center'}}>
            <AtIcon
              value="trash"
              size="24"
              color="#054622"
              onClick={handleDeleteAllImages}
            />
            删除全部
          </View>
        )}
        {selectedMode && (
          <View style={{textAlign: 'center'}}>
            <AtIcon
              value="trash"
              size="24"
              color="#054622"
              onClick={handleDeleteSelectedImages}
            />
            删除选中
          </View>
        )}
      </View>
    </View>
  );
};

export default ImageList;
