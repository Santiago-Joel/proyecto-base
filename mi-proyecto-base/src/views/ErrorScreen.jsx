import React from 'react'
import error from '/error404.jpg'
const ErrorScreen = () => {
  return (
    <div className=''>
        <div className="row">
            <div className="col main error d-flex justify-content-center bg-dark align-items-center">
                <img src={error} alt="" className='error-img'/>
            </div>
        </div>
    </div>
  )
}

export default ErrorScreen