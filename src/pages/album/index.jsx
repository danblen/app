import {Button, Text, View} from 'react-native';
// import Taro, { useDidHide, useDidShow } from "@tarojs/taro";
import {useState} from 'react';
import FinishedTask from './FinishedTask.jsx';
// import {fetchProcessedImages} from './fetchProcessedImages.js';

export default ({images}) => {
  const [current, setCurrent] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [interval, setIntervalVlu] = useState(false);
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    data: {
      points: 0,
      user_id: '',
      is_check: false,
    },
  });

  const fetchData = async () => {
    const storageUserInfo = Taro.getStorageSync('userInfo');
    setUserInfo(storageUserInfo);
    if (storageUserInfo?.isLogin && storageUserInfo.data?.user_id) {
      const userInfo = {
        user_id: storageUserInfo.data.user_id,
        request_status: 'finishing',
      };

      const processedImages = await fetchProcessedImages(userInfo).catch();
      // if (processedImages?.length > 0) {
      setAllImages(processedImages);
      // }
    } else {
      setAllImages([]);
    }
  };

  // useDidShow(() => {
  //   fetchData();
  //   const interval = setInterval(fetchData, 3000);
  //   setIntervalVlu(interval);
  // });

  // // useDidHide 钩子，在页面隐藏时执行
  // useDidHide(() => {
  //   clearInterval(interval);
  // });
  return (
    <View>
      {userInfo.isLogin ? (
        <View
          style={{
            marginTop: '10rpx',
          }}>
          <FinishedTask images={allImages} />
        </View>
      ) : (
        <View
          style={{
            paddingTop: '20rpx',
          }}>
          <View
            style={{
              textAlign: 'center',
              fontSize: '40rpx',
            }}>
            <Text>您还未登陆，请先登陆</Text>
          </View>
          <Button
            type="primary"
            title="sds"
            style={{
              position: 'relative',
              width: '40%',
              animation: 'swap 1s infinite',
            }}
            onClick={() => {
              Taro.switchTab({
                url: '/pages/user/index',
              });
            }}>
            去登陆
          </Button>
        </View>
      )}
    </View>
  );
};
