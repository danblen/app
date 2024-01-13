import {Button, Checkbox, Text, View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, {useState} from 'react';
import {AtModal, AtModalAction, AtModalContent, AtModalHeader} from 'taro-ui';
// 必须要有/开头
const agreementsUrl = '/pages/user/agreements/index';
const privacyUrl = '/pages/user/privacy/index';

export default ({isOpened, onConfirmLogin, onClose}) => {
  const [isCheckPolicy, setIsCheckPolicy] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <AtModal isOpened={isOpened} onClose={onClose}>
      <AtModalHeader>欢迎登录</AtModalHeader>
      <AtModalContent>
        <View style={{marginTop: '40rpx'}}>
          <Button
            type="primary"
            style={{
              position: 'relative',
              animation: 'swap 1s infinite',
              width: '92%',
            }}
            shape="circle"
            className="swap"
            loading={loading}
            onClick={() => {
              if (!isCheckPolicy) {
                Taro.showToast({
                  title: '请勾选我已阅读并同意《服务协议》和《隐私协议》',
                  icon: 'none',
                  duration: 2000,
                });
                return;
              }
              onConfirmLogin();
            }}>
            微信授权登录
          </Button>
          <View style={{fontSize: '24rpx', margin: '40rpx 0'}}>
            <Checkbox
              style={{fontSize: '10rpx'}}
              checked={isCheckPolicy}
              onClick={() => setIsCheckPolicy(!isCheckPolicy)}></Checkbox>
            <Text>我已阅读并同意</Text>
            <Text
              style={{color: 'blue'}}
              onClick={() => {
                Taro.navigateTo({
                  url: agreementsUrl,
                });
              }}>
              《用户协议》
            </Text>
            和
            <Text
              style={{color: 'blue'}}
              onClick={() => {
                Taro.navigateTo({
                  url: privacyUrl,
                });
              }}>
              《隐私协议》
            </Text>
          </View>
        </View>
      </AtModalContent>
      <AtModalAction>
        <Button onClick={onClose}>取消</Button>
      </AtModalAction>
    </AtModal>
  );
};
