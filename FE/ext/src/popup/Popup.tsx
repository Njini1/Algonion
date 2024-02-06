
import { useEffect, useLayoutEffect, useState } from 'react';
import './Popup.scss';
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import useSWR from 'swr';
import { axiosInstance } from '../util/http-commons';

export const Popup = () => {
  const [isStorageLoading, setIsStorageLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    async function getToken() {
      const res = await chrome.storage.sync.get("access_token");
      const accessToken = res.access_token;
      console.log(accessToken);
      setAccessToken(accessToken);
      setIsStorageLoading(false);
    }
    getToken();
  }, [])

  const fetcher = (url: string) => axiosInstance().get(url, { headers: { "Authorization": `Bearer ${accessToken}` } }).then(res => res.data);
  const { data, error, isLoading } = useSWR('/v1/profile/ext', fetcher);
  if (isLoading || isStorageLoading) return <div></div>
  if (error) return <LoginPage />
  return <UserPage data={data} />
};

export default Popup;
