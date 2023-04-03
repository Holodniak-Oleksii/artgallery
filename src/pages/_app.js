import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import '@/components/modals/register';
import Layout from '@/layout';

import '@/assets/scss/index.scss';
import { store } from '@/store';
import { useEffect } from 'react';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const MyApp = ({ Component, pageProps }) => {
  const { route } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }
  }, []);

  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <Provider store={store}>
          <Layout>{page}</Layout>
        </Provider>
      );
    };

  return renderWithLayout(
    <Component
      {...pageProps}
      key={route}
    />
  );
};
export default MyApp;
