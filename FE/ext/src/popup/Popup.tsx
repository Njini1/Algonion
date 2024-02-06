
import { useEffect, useLayoutEffect, useState } from 'react';
import './Popup.scss';
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import useSWR from 'swr';

export const Popup = () => {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    async function getToken() {
      const res = await chrome.storage.sync.get("access_token");
      const accessToken = res.access_token;
      setAccessToken(accessToken);
    }
    getToken();
  }, [])
  const fetcher = (url: string) => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR('https://algonion.store/api/v1/profile/ext', fetcher);
  if (isLoading) return <div></div>
  if (error) return <LoginPage />
  return <UserPage data={data} />
};

export default Popup;
