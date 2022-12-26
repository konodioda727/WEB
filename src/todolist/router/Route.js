import React from 'react'
import { useRoutes } from 'react-router-dom'
import List from '../List'

export default function Route() {
    const lazyload =(path)=>  {
        const Comp = React.lazy(() => import (`../${path}`))
        return (
          <React.Suspense fallback = {<>loading</>}>
            <Comp></Comp>
          </React.Suspense>
        )
      }
    const element = useRoutes([
        {
          path:'/',
          element:<List value={2}></List>
        },
        {
          path:'active',
          element:<List value={1}></List>
        },
        {
          path:'completed',
          element:<List value={0}></List>
        },
        
    ])
  return element
}
