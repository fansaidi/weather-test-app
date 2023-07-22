'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { persistor, reduxStore } from '@/lib/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>
    <html>
      <body>
        <PersistGate persistor={persistor}>
          {props.children}
        </PersistGate>
      </body>
    </html>
  </Provider>
}
