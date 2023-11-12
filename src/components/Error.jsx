import PropTypes from 'prop-types'
function Error({ err }) {
  return (
    <div className="col-md-5 mx-auto ">
      <h3 className="text-center">Failed to connect</h3>
      <p className="text-center">{err}</p>
    </div>
  )
}
Error.propTypes = {
  err: PropTypes.string,
}

export default Error
