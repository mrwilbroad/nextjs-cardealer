import React from 'react'
import { Spinner} from "react-bootstrap"

const LoadingUi = () => {
  return (
    <section className="position-fixed  Loading-ui-wrapper d-flex flex-column justify-content-center gap-0 vh-100 vw-100 align-items-center m-auto text-center">
    <section className="Loading-ui  mx-auto text-center">
      <Spinner animation="border" variant="primary  " role="status" />
    </section>
    <p className="bg-light p-2 text-dark">Please wait , its loading ...</p>
  </section>
  )
}

export default LoadingUi